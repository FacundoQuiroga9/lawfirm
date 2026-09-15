import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

// React's server renderer checks markup/data contracts only. This is not a
// substitute for layout, gestures, Web Animations, or browser accessibility QA.
const result = await build({
  stdin: {
    contents: `import { createElement } from 'react';
      import { renderToStaticMarkup } from 'react-dom/server.browser';
      import Reviews from './src/components/Reviews/Reviews.jsx';
      import { reviewContent } from './src/data/siteContent.js';
      export function render(overrides = {}) {
        return renderToStaticMarkup(createElement(Reviews, { content: { ...reviewContent, ...overrides } }));
      }`,
    resolveDir: process.cwd(),
  },
  bundle: true, write: false, platform: 'node', format: 'esm',
  jsx: 'automatic', loader: { '.css': 'empty' },
  define: { 'process.env.NODE_ENV': '"production"' },
});
const temp = mkdtempSync(join(tmpdir(), 'fratter-render-'));
const bundle = join(temp, 'render.mjs');
writeFileSync(bundle, result.outputFiles[0].text);
const { render } = await import(pathToFileURL(bundle));
rmSync(temp, { recursive: true });
globalThis.window = { matchMedia: () => ({ matches: false }) };
globalThis.document = { hidden: false };
const fixture = { id: 'TEST-ONLY', author: '[Test fixture]', rating: 5, text: '', source: 'Google Maps', retrievedAt: '2026-09-14', verified: true };

test('zero reviews retains panel/title/Google link without inventing a testimonial or stars', () => {
  const html = render({ reviews: [] });
  assert.match(html, /reviews-panel/);
  assert.match(html, /Trusted counsel when it matters most/);
  assert.match(html, /https:\/\/www.google.com\/maps\/place\/Law\+Office\+of\+Marc\+J\.\+Fratter,\+PLLC\/data=!4m2!3m1!1s0x0:0x3d1063f6fa34ed64/);
  assert.doesNotMatch(html, /Chris V\.|review-stars|Next review|blockquote/);
});

test('a single rating-only review exposes author and stars without invented text or date', () => {
  const html = render({ reviews: [fixture] });
  assert.match(html, /5 out of 5 stars/);
  assert.match(html, /\[Test fixture\]/);
  assert.doesNotMatch(html, /<blockquote|Next review|Previous review|review-controls/);
});

test('multiple reviews render one active testimony, labelled controls and quiet autoplay', () => {
  const html = render({ reviews: [{ ...fixture, text: 'A & B\nExact  original <text>.' }, { ...fixture, id: 'TEST-B', author: '[Hidden test fixture]' }] });
  assert.match(html, /A &amp; B\nExact  original &lt;text&gt;\./);
  assert.match(html, /aria-roledescription="carousel"/);
  for (const label of ['Pause automatic reviews', 'Previous review', 'Next review']) assert.ok(html.includes(`aria-label="${label}"`));
  assert.doesNotMatch(html, /\[Hidden test fixture\]/);
  assert.match(html, /aria-live="polite" aria-atomic="true"><\/span>/);
});

test('long originals render only their selected excerpt, with a full-review link and no expansion', () => {
  const text = 'TEST ONLY — a long paragraph. '.repeat(100);
  const excerpt = 'TEST ONLY — a long paragraph.';
  const html = render({ reviews: [{ ...fixture, text, excerpt, url: 'https://example.com/original-review' }] });
  assert.ok(html.includes(`“${excerpt}”`));
  assert.ok(!html.includes(text));
  assert.match(html, /Full review on Google/);
  assert.match(html, /https:\/\/example.com\/original-review/);
  assert.doesNotMatch(html, /Read more|Read less|aria-expanded/);
});

test('reduced motion disables automatic playback while keeping manual controls', () => {
  globalThis.window.matchMedia = () => ({ matches: true });
  const html = render({ reviews: [fixture, { ...fixture, id: 'TEST-B' }] });
  assert.match(html, /disabled="" aria-describedby="review-motion-note"/);
  assert.match(html, /Next review/);
  assert.match(html, /Automatic rotation is off/);
});
