import { writeKeywordsToIndexHtml } from '../vite-plugin-index-seo.js';

const count = writeKeywordsToIndexHtml('index.html');
console.log(`index.html updated with ${count} SEO keywords.`);
