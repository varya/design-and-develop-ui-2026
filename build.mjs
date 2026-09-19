#!/usr/bin/env node
// Compile slides.md + index.html into a static deck under output/.
// Reveal then loads HTML sections. No runtime fetch of Markdown.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_MD = path.join(__dirname, 'slides.md');
const SRC_HTML = path.join(__dirname, 'index.html');
const SRC_CSS = path.join(__dirname, 'theme.css');
const OUT_DIR = path.join(__dirname, 'output');

const HORIZ = /^\r?\n---\r?\n$/m;
const VERT = /^\r?\n>>>\r?\n$/m;
const NOTES = /^Note:\s*$/m;
const SLIDE_ATTRS = /<!--\s*\.slide:\s*(.+?)\s*-->/;

marked.setOptions({ gfm: true, breaks: false });

function parseSlide(raw) {
  let body = raw.trim();
  let attrs = '';
  const attrMatch = body.match(SLIDE_ATTRS);
  if (attrMatch) {
    attrs = attrMatch[1].trim();
    body = body.replace(attrMatch[0], '').trim();
  }

  let notes = '';
  const noteParts = body.split(NOTES);
  if (noteParts.length > 1) {
    notes = noteParts.slice(1).join('\n').trim();
    body = noteParts[0].trim();
  }

  return { attrs, body, notes };
}

function renderSlide(raw) {
  const { attrs, body, notes } = parseSlide(raw);
  if (!body && !notes) return '';

  const html = marked.parse(body).trim();
  const notesHtml = notes
    ? `\n<aside class="notes">${marked.parse(notes).trim()}</aside>`
    : '';
  const attrStr = attrs ? ` ${attrs}` : '';
  return `<section${attrStr}>\n${html}${notesHtml}\n</section>`;
}

function renderDeck(markdown) {
  const groups = markdown.split(HORIZ);
  return groups
    .map((group) => {
      const verts = group.split(VERT).map((chunk) => chunk.trim()).filter(Boolean);
      if (!verts.length) return '';
      if (verts.length === 1) return renderSlide(verts[0]);
      const nested = verts.map(renderSlide).filter(Boolean).join('\n');
      return nested ? `<section>\n${nested}\n</section>` : '';
    })
    .filter(Boolean)
    .join('\n\n');
}

function buildIndex(sourceHtml, slidesHtml) {
  return sourceHtml
    .replace(/href="\.\/theme\.css[^"]*"/, 'href="./theme.css"')
    .replace(
      /<div class="slides">[\s\S]*?<\/div>\s*<\/div>/,
      `<div class="slides">\n${slidesHtml}\n    </div>\n</div>`
    )
    .replace(
      /<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/reveal\.js@5\.1\.0\/plugin\/markdown\/markdown\.js"><\/script>\s*/,
      ''
    )
    .replace(/\s*plugins:\s*\[\s*RevealMarkdown\s*\]/, '');
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.cpSync(from, to, { recursive: true });
}

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const slidesHtml = renderDeck(fs.readFileSync(SRC_MD, 'utf8'));
const outHtml = buildIndex(fs.readFileSync(SRC_HTML, 'utf8'), slidesHtml);

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), outHtml);
fs.copyFileSync(SRC_CSS, path.join(OUT_DIR, 'theme.css'));
copyDir(path.join(__dirname, 'pictures'), path.join(OUT_DIR, 'pictures'));
copyDir(path.join(__dirname, 'icons'), path.join(OUT_DIR, 'icons'));

if (outHtml.includes('data-markdown') || outHtml.includes('RevealMarkdown')) {
  console.error('Build left Markdown loading in place. Check index.html template.');
  process.exit(1);
}

console.log(`✓ Built static deck → ${path.relative(process.cwd(), OUT_DIR)}/`);
