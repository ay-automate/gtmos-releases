#!/usr/bin/env node
/*
 * set-release-published.mjs: run this when @gtmos/cli <version> is on npm and the images are on the
 * registry. It flips docs/assets/release-status.js to published: true (the rollout banner and the
 * "Release x (rolling out)" lines disappear) and removes the <!-- release-status:start --> ...
 * <!-- release-status:end --> blocks from README.md and releases/<version>.md. Node 18+, no dependencies.
 *
 *   node tools/set-release-published.mjs            apply, then print the git commands
 *   node tools/set-release-published.mjs --dry-run  show what would change
 *   node tools/set-release-published.mjs --root <dir>   operate on another copy of the repo (testing)
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const ri = args.indexOf("--root");
const ROOT = ri >= 0 ? resolve(args[ri + 1]) : resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dry = args.includes("--dry-run");

const statusFile = join(ROOT, "docs", "assets", "release-status.js");
const status = readFileSync(statusFile, "utf8");
const version = (status.match(/version:\s*"([^"]+)"/) || [])[1];
if (!version) { console.error("cannot read the version from " + statusFile); process.exit(1); }

const BLOCK = /<!-- release-status:start -->[\s\S]*?<!-- release-status:end -->\r?\n*/g;
const changes = [];
if (/published:\s*false/.test(status)) changes.push([statusFile, status.replace(/published:\s*false/, "published: true")]);
else console.log("release-status.js already says published: true");
for (const rel of ["README.md", join("releases", `${version}.md`)]) {
  const f = join(ROOT, rel);
  if (!existsSync(f)) continue;
  const t = readFileSync(f, "utf8");
  if (BLOCK.test(t)) { BLOCK.lastIndex = 0; changes.push([f, t.replace(BLOCK, "")]); }
  BLOCK.lastIndex = 0;
}
for (const [f, text] of changes) {
  console.log((dry ? "[dry run] would change " : "changed ") + f.slice(ROOT.length + 1));
  if (!dry) writeFileSync(f, text);
}
if (!changes.length) console.log("nothing to change");
console.log(`
Next (the release page HTML needs no change, the notice is not in it):
  git add docs/assets/release-status.js README.md releases/${version}.md
  git commit -m "site: release ${version} is published, remove the rollout notice"
  git push origin main
`);
