#!/usr/bin/env node
/*
 * render-release.mjs: render releases/<version>.md as a site page, docs/release-<version>.html.
 * Node 18+, no dependencies. It understands only what the release notes use: headings, paragraphs,
 * bullet and numbered lists (with indented paragraphs and code blocks inside an item), code fences,
 * inline code, bold, and links.
 *
 *   node tools/render-release.mjs 0.2.5
 *   node tools/render-release.mjs 0.2.5 --check     exit 1 if the page on disk is out of date
 *
 * The Markdown file is the source. Edit it, then run this and commit both files.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const version = process.argv[2];
if (!version || !/^\d+\.\d+\.\d+$/.test(version)) { console.error("usage: node tools/render-release.mjs <version> [--check]"); process.exit(2); }
const src = join(REPO, "releases", `${version}.md`);
const out = join(REPO, "docs", `release-${version}.html`);
if (!existsSync(src)) { console.error("not found: " + src); process.exit(2); }

const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const BLOB = "https://github.com/ay-automate/gtmos-releases/blob/main/releases/";
function inline(t) {
  const codes = [];
  t = t.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  t = esc(t);
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) => {
    if (/^[\w.-]+\.md(#.*)?$/.test(href)) href = BLOB + href;
    return `<a href="${href}">${text}</a>`;
  });
  return t.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${esc(codes[+i])}</code>`);
}
const slug = (t) => t.toLowerCase().replace(/`/g, "").replace(/[^a-z0-9 -]/g, "").trim().replace(/ /g, "-");

function blocks(lines) {
  // Renders a list of lines (already de-indented) to HTML.
  const html = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    let m;
    if ((m = line.match(/^```(\w*)\s*$/))) {
      const buf = []; i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) buf.push(lines[i++]);
      i++;
      const code = buf.join("\n");
      html.push(`<pre class="codebox"><code>${esc(code)}</code><button class="copy" type="button" data-copy="${esc(code).replace(/"/g, "&quot;").replace(/\n/g, "&#10;")}" aria-label="Copy code">Copy</button></pre>`);
      continue;
    }
    if ((m = line.match(/^(#{1,3}) (.*)$/))) {
      const n = m[1].length;
      html.push(`<h${n} id="${slug(m[2])}">${inline(m[2])}</h${n}>`);
      i++; continue;
    }
    if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items = [];
      const isItem = (l) => (ordered ? /^\d+\. /.test(l) : /^- /.test(l));
      while (i < lines.length) {
        let j = i;
        while (j < lines.length && !lines[j].trim()) j++; // a blank line between items keeps one list
        if (j < lines.length && isItem(lines[j])) i = j;
        if (!isItem(lines[i])) break;
        const item = [lines[i].replace(ordered ? /^\d+\. / : /^- /, "")];
        i++;
        // continuation: indented lines or blank lines followed by indented lines
        while (i < lines.length) {
          if (/^( {2,4}|\t)\S/.test(lines[i]) || (!lines[i].trim() && i + 1 < lines.length && /^( {2,4}|\t)\S/.test(lines[i + 1]))) {
            item.push(lines[i].replace(/^( {2,4}|\t)/, "")); i++;
          } else break;
        }
        items.push(item);
      }
      const tag = ordered ? "ol" : "ul";
      html.push(`<${tag}>` + items.map((it) => {
        const first = it[0];
        const rest = it.slice(1);
        // A plain first line followed by nested content: first line as text, rest as blocks.
        const restHtml = rest.length ? blocks(rest) : "";
        return `<li>${inline(first)}${restHtml}</li>`;
      }).join("") + `</${tag}>`);
      continue;
    }
    // paragraph
    const buf = [line]; i++;
    while (i < lines.length && lines[i].trim() && !/^(```|#{1,3} |- |\d+\. )/.test(lines[i])) buf.push(lines[i++]);
    html.push(`<p>${inline(buf.join(" "))}</p>`);
  }
  return html.join("\n");
}

const md = readFileSync(src, "utf8").replace(/\r/g, "").replace(/<!-- release-status:start -->[\s\S]*?<!-- release-status:end -->\n*/g, "");
const lines = md.split("\n");
const h1 = (lines.find((l) => l.startsWith("# ")) || `# GTM OS ${version}`).slice(2);
const body = blocks(lines.filter((l, idx) => !(idx === lines.indexOf("# " + h1))));

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(h1)} release notes</title>
<meta name="description" content="Release notes for ${esc(h1)}: what is new, how to upgrade, the breaking change for self-hosters, and known limitations.">
<meta name="color-scheme" content="light dark">
<link rel="stylesheet" href="assets/fonts.css">
<link rel="stylesheet" href="assets/site.css">
<script src="assets/site.js"></script>
<script src="assets/release-status.js"></script>
<script src="assets/release-banner.js"></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">G</span>GTM OS</a>
    <nav class="site-nav" aria-label="Primary">
      <a href="index.html">Overview</a>
      <a href="videos/index.html">Videos</a>
      <a href="user-guide.html">User guide</a>
      <a href="product-documentation.html">Product docs</a>
      <a href="https://github.com/ay-automate/gtmos-releases/releases">Releases</a>
    </nav>
    <button class="theme-btn" type="button" aria-label="Switch theme" aria-pressed="false"></button>
  </div>
</header>

<main id="main">
  <div class="wrap page-h">
    <p class="eyebrow">Release notes</p>
    <h1>${esc(h1)}</h1>
  </div>
  <div class="wrap">
    <article class="prose">
${body}
    </article>
  </div>
</main>

<footer class="site-footer">
  <div class="wrap">
    <p>GTM OS by AY Automate. Rendered from <a href="${BLOB}${version}.md">releases/${version}.md</a>.</p>
    <ul>
      <li><a href="index.html">Overview</a></li>
      <li><a href="user-guide.html#upgrade">Upgrade guide</a></li>
      <li><a href="https://github.com/ay-automate/gtmos-releases/issues">Support</a></li>
    </ul>
  </div>
</footer>
</body>
</html>
`;

if (process.argv.includes("--check")) {
  const cur = existsSync(out) ? readFileSync(out, "utf8") : "";
  if (cur !== page) { console.error(`docs/release-${version}.html is out of date. Run: node tools/render-release.mjs ${version}`); process.exit(1); }
  console.log("up to date");
} else {
  writeFileSync(out, page);
  console.log("wrote " + out);
}
