/** RV Testing Machines — Index SEO Plugin */
import { readFileSync, writeFileSync } from 'node:fs';
import { buildAllKeywords } from './src/seo/generateKeywords.js';
import { buildIndexSeoHtml, selectIndexKeywords } from './src/seo/selectIndexKeywords.js';

const MARKER = '<!-- SEO_KEYWORDS_INJECT -->';
const START_MARKER = '<!-- SEO_KEYWORDS_INJECT_START -->';
const END_MARKER = '<!-- SEO_KEYWORDS_INJECT_END -->';
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
      
      const injectBlock = `${START_MARKER}\n${block}\n    ${END_MARKER}`;
      const existingRegex = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`);
      
      if (html.includes(START_MARKER) && html.includes(END_MARKER)) {
        return html.replace(existingRegex, injectBlock);
      }
      if (html.includes(MARKER)) {
        return html.replace(MARKER, injectBlock);
      }
      return html;
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
              name: 'RV Testing Machines Private Limited',
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
  
  const injectBlock = `${START_MARKER}\n${block}\n    ${END_MARKER}`;
  const existingRegex = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`);
  
  if (html.includes(START_MARKER) && html.includes(END_MARKER)) {
    html = html.replace(existingRegex, injectBlock);
  } else if (html.includes(MARKER)) {
    html = html.replace(MARKER, injectBlock);
  } else {
    // fallback
    html = html.replace(
      /<meta\s+name="keywords"[\s\S]*?\/>/,
      injectBlock,
    );
  }
  
  writeFileSync(indexPath, html, 'utf8');
  return keywords.length;
}
