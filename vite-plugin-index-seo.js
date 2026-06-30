import { readFileSync, writeFileSync } from 'node:fs';
import { buildAllKeywords } from './src/seo/generateKeywords.js';
import { buildIndexSeoHtml, selectIndexKeywords } from './src/seo/selectIndexKeywords.js';

const MARKER = '<!-- SEO_KEYWORDS_INJECT -->';
const TARGET = 650;

function getKeywords() {
  const all = buildAllKeywords();
  const selected = selectIndexKeywords(all, TARGET);
  if (selected.length < 500) {
    throw new Error(`Expected 500+ keywords, got ${selected.length}`);
  }
  return selected;
}

/** Inject 500–800 keywords into index.html at dev/build time */
export function indexSeoPlugin() {
  return {
    name: 'index-seo-keywords',
    transformIndexHtml(html) {
      const keywords = getKeywords();
      const block = buildIndexSeoHtml(keywords);
      if (!html.includes(MARKER)) {
        return html;
      }
      return html.replace(MARKER, block);
    },
    closeBundle() {
      try {
        const keywords = getKeywords();
        writeFileSync(
          'public/seo-keywords.json',
          JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'RV Private Limited',
              keywordCount: keywords.length,
              knowsAbout: keywords,
            },
            null,
            2,
          ),
          'utf8',
        );
      } catch {
        /* optional export */
      }
    },
  };
}

/** Run directly: node vite-plugin-index-seo.js (via scripts/update-index-seo.mjs) */
export function writeKeywordsToIndexHtml(indexPath = 'index.html') {
  const keywords = getKeywords();
  let html = readFileSync(indexPath, 'utf8');
  const block = buildIndexSeoHtml(keywords);
  if (html.includes(MARKER)) {
    html = html.replace(MARKER, block);
  } else {
    html = html.replace(
      /<meta\s+name="keywords"[\s\S]*?\/>/,
      block,
    );
  }
  writeFileSync(indexPath, html, 'utf8');
  return keywords.length;
}
