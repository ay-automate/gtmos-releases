#!/usr/bin/env node
/*
 * sync-videos.mjs: bring finished clips into the site. Node 18+, no dependencies.
 *
 * What it does
 *   1. Reads the video engineer's clips.json (id, number, slug, title, durationSeconds, mp4, vtt,
 *      poster, transcript, bytes, sha256).
 *   2. Copies each finished clip's captions, poster and transcript into docs/videos/media/<NN-slug>/.
 *      The MP4 is NOT copied into the repo: it is hosted as an asset of the GitHub release `videos-v1`.
 *   3. Updates docs/videos/videos.json: mp4 (the release asset URL), vtt, poster, transcript (relative
 *      repo paths), status "published", durationSeconds, bytes. Unfinished clips stay "coming soon".
 *   4. Prints the exact `gh release create` and `gh release upload` commands for a DRAFT release.
 *      This tool never runs gh and never publishes anything. The release is always a draft.
 *
 * Usage
 *   node tools/sync-videos.mjs                 sync from ../gtmos-explainer/out/final/clips.json
 *   node tools/sync-videos.mjs --src <dir|clips.json>
 *   node tools/sync-videos.mjs --dry-run       show what would change, write nothing
 *   node tools/sync-videos.mjs --check         verify the repo state and exit non-zero on a problem
 *   node tools/sync-videos.mjs --check --src <dir>   also verify the local MP4 files and their sizes
 *
 * The source directory can also be set with GTMOS_VIDEOS_OUT.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const VIDEOS_DIR = join(REPO, "docs", "videos");
const JSON_PATH = join(VIDEOS_DIR, "videos.json");
const MEDIA_DIR = join(VIDEOS_DIR, "media");
const TAG = "videos-v1";
const SLUG_REPO = "ay-automate/gtmos-releases";
const ASSET_BASE = `https://github.com/${SLUG_REPO}/releases/download/${TAG}/`;

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };

if (flag("--help") || flag("-h")) {
  console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("*/")[0].replace(/^\/\*\s?|^ \* ?/gm, ""));
  process.exit(0);
}

const pad = (n) => String(n).padStart(2, "0");
const srcArg = opt("--src") || process.env.GTMOS_VIDEOS_OUT || join(REPO, "..", "gtmos-explainer", "out", "final");
const srcPath = resolve(srcArg);
const clipsJsonPath = existsSync(srcPath) && statSync(srcPath).isDirectory() ? join(srcPath, "clips.json") : srcPath;
const srcDir = dirname(clipsJsonPath);

function readJson(p) { return JSON.parse(readFileSync(p, "utf8").replace(/^\uFEFF/, "")); }
function rel(p) { return p.split("\\").join("/"); }
function fromSrc(p) { return isAbsolute(p) ? p : join(srcDir, p); }
function slugOf(c) {
  const raw = c.slug || String(c.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return raw.replace(/^\d+-/, "");
}
function stem(c) { return `${pad(c.number)}-${slugOf(c)}`; }
function readClipsFile() {
  const j = readJson(clipsJsonPath);
  return (Array.isArray(j) ? j : j.clips || []).map((c) => ({ ...c, number: parseInt(c.number, 10) }));
}

let problems = 0;
const bad = (m) => { problems++; console.error("PROBLEM  " + m); };
const note = (m) => console.log(m);

/* ------------------------------------------------------------------ check */
function check() {
  const data = readJson(JSON_PATH);
  const seen = new Set();
  let published = 0;
  for (const c of data.clips) {
    if (seen.has(c.number)) bad(`clip number ${c.number} appears twice in videos.json`);
    seen.add(c.number);
    const published_ = !!c.mp4;
    const label = `clip ${pad(c.number)} "${c.title}"`;
    if (!published_) {
      if (c.vtt || c.poster || c.transcript) bad(`${label} is coming soon but has caption, poster or transcript paths set`);
      continue;
    }
    published++;
    if ((c.status || "published") !== "published") bad(`${label} has an mp4 but status is "${c.status}"`);
    if (!c.slug) bad(`${label} has no slug`);
    const expected = `${pad(c.number)}-${c.slug}.mp4`;
    if (!c.mp4.startsWith("http")) {
      // A relative path is allowed (small clips committed to the repo); only its existence is checked.
      if (!existsSync(join(VIDEOS_DIR, c.mp4))) bad(`${label}: mp4 file not found: ${c.mp4}`);
    } else {
      if (!c.mp4.startsWith(ASSET_BASE)) bad(`${label}: mp4 URL is not a ${TAG} release asset: ${c.mp4}`);
      if (basename(c.mp4) !== expected) bad(`${label}: mp4 name is ${basename(c.mp4)}, expected ${expected}`);
    }
    if (!c.vtt) bad(`${label}: captions (vtt) are required for every published clip`);
    for (const k of ["vtt", "poster", "transcript"]) {
      if (!c[k]) continue;
      if (!existsSync(join(VIDEOS_DIR, c[k]))) bad(`${label}: ${k} file not found: ${c[k]}`);
      else if (k !== "vtt" && statSync(join(VIDEOS_DIR, c[k])).size === 0) bad(`${label}: ${k} file is empty`);
      if (c[k] && !c[k].startsWith(`media/${expected.replace(/\.mp4$/, "")}/`)) bad(`${label}: ${k} is not under media/${expected.replace(/\.mp4$/, "")}/: ${c[k]}`);
    }
    if (!c.poster) bad(`${label}: no poster`);
    if (!(c.bytes > 0)) bad(`${label}: bytes is missing`);
    if (!(c.durationSeconds > 0)) bad(`${label}: durationSeconds is missing`);
  }
  // Optional source verification: the local MP4 must exist and match its recorded size.
  if (existsSync(clipsJsonPath)) {
    for (const s of readClipsFile()) {
      const entry = data.clips.find((x) => x.number === s.number);
      if (!entry || !entry.mp4) continue;
      const file = s.mp4 ? fromSrc(s.mp4) : null;
      if (!file || !existsSync(file)) { bad(`clip ${pad(s.number)}: local mp4 not found at the source (${file || "no path"}), cannot upload it`); continue; }
      if (statSync(file).size !== entry.bytes) bad(`clip ${pad(s.number)}: local mp4 is ${statSync(file).size} bytes, videos.json says ${entry.bytes}; run the sync again`);
      if (basename(file) !== `${stem(s)}.mp4`) note(`note     clip ${pad(s.number)}: the source file is named ${basename(file)}; it will be uploaded as ${stem(s)}.mp4`);
    }
  } else {
    note(`note     no clips.json at ${rel(clipsJsonPath)}; local MP4 files were not verified`);
  }
  note(`${published} of ${data.clips.length} clips published, ${data.clips.length - published} coming soon.`);
  if (problems) { console.error(`\n${problems} problem(s).`); process.exit(1); }
  note("OK: every referenced file exists and every mp4 name matches.");
}

/* ------------------------------------------------------------------- sync */
function sync() {
  const dry = flag("--dry-run");
  const data = readJson(JSON_PATH);
  if (!existsSync(clipsJsonPath)) {
    note(`No clips.json at ${rel(clipsJsonPath)}. No finished clips yet, nothing to sync.`);
    note("Run this again when the video engineer has written clips to the source folder (or pass --src).");
    return;
  }
  const finished = readClipsFile();
  if (!finished.length) { note("clips.json lists no clips yet. Nothing to sync."); return; }

  const uploads = [];
  const skipped = [];
  let changed = 0;
  for (const s of finished) {
    const entry = data.clips.find((c) => c.number === s.number);
    if (!entry) { skipped.push(`clip ${s.number}: not in videos.json (the series has no such number)`); continue; }
    const mp4Src = s.mp4 ? fromSrc(s.mp4) : "";
    const vttSrc = s.vtt ? fromSrc(s.vtt) : "";
    const missing = [];
    if (!mp4Src || !existsSync(mp4Src)) missing.push("mp4");
    if (!vttSrc || !existsSync(vttSrc)) missing.push("vtt");
    if (missing.length) { skipped.push(`clip ${pad(s.number)} "${entry.title}": kept as coming soon (missing ${missing.join(", ")} at the source)`); continue; }

    const name = stem({ number: s.number, slug: s.slug || entry.slug || s.title || entry.title });
    const dir = join(MEDIA_DIR, name);
    const copies = [["vtt", vttSrc, "captions.vtt"]];
    if (s.poster && existsSync(fromSrc(s.poster))) copies.push(["poster", fromSrc(s.poster), "poster" + (extname(s.poster) || ".jpg").toLowerCase()]);
    else skipped.push(`clip ${pad(s.number)}: no poster found at the source (the page shows its number instead)`);
    if (s.transcript && existsSync(fromSrc(s.transcript))) copies.push(["transcript", fromSrc(s.transcript), "transcript" + (extname(s.transcript) || ".txt").toLowerCase()]);

    const next = { ...entry };
    next.slug = name.slice(3);
    next.status = "published";
    next.mp4 = ASSET_BASE + name + ".mp4";
    next.durationSeconds = Math.round(s.durationSeconds || entry.durationSeconds);
    next.bytes = s.bytes || statSync(mp4Src).size;
    if (s.sha256) next.sha256 = s.sha256;
    if (!dry) mkdirSync(dir, { recursive: true });
    for (const [key, from, to] of copies) {
      next[key] = `media/${name}/${to}`;
      if (!dry) copyFileSync(from, join(dir, to));
    }
    if (!s.poster || !existsSync(fromSrc(s.poster))) next.poster = "";
    if (!copies.some((c) => c[0] === "transcript")) next.transcript = "";

    // Keep the key order stable and put the new fields next to mp4.
    const out = {};
    for (const k of Object.keys(entry)) { out[k] = next[k] !== undefined ? next[k] : entry[k]; }
    for (const k of ["slug", "status", "bytes", "sha256"]) if (!(k in out) && next[k] !== undefined) out[k] = next[k];
    if (JSON.stringify(out) !== JSON.stringify(entry)) changed++;
    data.clips[data.clips.indexOf(entry)] = out;
    uploads.push({ number: s.number, name, file: mp4Src, bytes: next.bytes });
  }

  if (!dry) writeFileSync(JSON_PATH, JSON.stringify(data, null, 2) + "\n");
  note(`${dry ? "[dry run] " : ""}${uploads.length} clip(s) synced, ${changed} videos.json entr${changed === 1 ? "y" : "ies"} changed.`);
  for (const s of skipped) note("  skipped  " + s);
  const published = data.clips.filter((c) => c.mp4).length;
  note(`${published} of ${data.clips.length} clips are published in videos.json, ${data.clips.length - published} coming soon.`);

  if (!uploads.length) return;
  uploads.sort((a, b) => a.number - b.number);
  const q = (p) => `"${p.split("\\").join("/")}"`;
  const total = uploads.reduce((a, u) => a + u.bytes, 0);
  console.log(`
=====================================================================
DRAFT release ${TAG}: ${uploads.length} MP4 file(s), ${(total / 1048576).toFixed(1)} MB
Nothing below has been run. Run it yourself. The release stays a DRAFT
until you click Publish on GitHub, and the clips only play once it is
published.
=====================================================================

# 1. create the draft release (once)
gh release create ${TAG} --repo ${SLUG_REPO} --draft --title "GTM OS video series" --notes "MP4 files for the GTM OS video series. Captions, transcripts and posters live in the repository."

# 2. upload (or re-upload) the MP4 files; --clobber replaces a file of the same name
gh release upload ${TAG} --repo ${SLUG_REPO} --clobber \\
${uploads.map((u) => "  " + q(u.file)).join(" \\\n")}
`);
  const renamed = uploads.filter((u) => basename(u.file) !== `${u.name}.mp4`);
  if (renamed.length) {
    console.log(`WARNING: these source files are not named like their release asset. The page expects ${ASSET_BASE}<NN-slug>.mp4,
so copy or rename each file before you upload it (the asset name on GitHub is the file name):`);
    for (const u of renamed) console.log(`  ${basename(u.file)}  ->  ${u.name}.mp4`);
    console.log("");
  }
  console.log(`# 3. check the draft: gh release view ${TAG} --repo ${SLUG_REPO}
# 4. when you are ready, publish it in the GitHub UI (Releases > the draft > Publish release),
#    or with: gh release edit ${TAG} --repo ${SLUG_REPO} --draft=false
#    (publishing is deliberately not part of this tool)
`);
}

if (flag("--check")) check(); else sync();
