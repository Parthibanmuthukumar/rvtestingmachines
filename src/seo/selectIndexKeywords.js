/** Select 500–800 priority keywords for index.html SEO injection */

export function scoreKeyword(kw) {
  const k = kw.toLowerCase();
  let score = 0;
  if (k.includes('rv testing') || k.includes('rvtm') || k.includes('r v testing')) score += 12;
  if (k.includes('nabl') || k.includes('iso 17025') || k.includes('iso/iec')) score += 10;
  if (k.includes('calibration')) score += 8;
  if (k.includes('universal testing') || k === 'utm' || k.includes(' utm ')) score += 7;
  if (k.includes('rubber') || k.includes('durometer') || k.includes('irhd')) score += 7;
  if (k.includes('hardness') || k.includes('tensile') || k.includes('compression')) score += 6;
  if (k.includes('india') || k.includes('chennai') || k.includes('tamil nadu')) score += 5;
  if (k.includes('material testing') || k.includes('testing machine')) score += 5;
  if (k.includes('prescott') || k.includes('fischer') || k.includes('kobelco')) score += 4;
  if (k.length < 80) score += 2;
  if (k.length > 100) score -= 5;
  return score;
}

export function selectIndexKeywords(allKeywords, targetCount = 650) {
  const ranked = [...allKeywords].sort((a, b) => scoreKeyword(b) - scoreKeyword(a));
  const picked = [];
  const seen = new Set();

  for (const kw of ranked) {
    if (picked.length >= targetCount) break;
    const key = kw.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      picked.push(kw);
    }
  }

  return picked;
}

export function buildIndexSeoHtml(keywords) {
  const metaKeywords = keywords.slice(0, 200).join(', ');
  const escapedMeta = metaKeywords
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.rvtestingmachines.com/#organization',
        name: 'RV Private Limited',
        alternateName: 'RV Private Limited',
        url: 'https://www.rvtestingmachines.com/',
        description:
          'NABL-oriented material testing machines, universal testing systems, rubber and metal testing equipment, calibration and technical support across India.',
        knowsAbout: keywords,
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.rvtestingmachines.com/#website',
        name: 'RV Private Limited',
        url: 'https://www.rvtestingmachines.com/',
        inLanguage: 'en-IN',
      },
    ],
  };

  return `    <!-- SEO: ${keywords.length} researched keywords — RV Private Limited -->
    <meta name="keywords" content="${escapedMeta}" />
    <meta name="keywords-total" content="${keywords.length}" />
    <script type="application/ld+json" id="index-seo-keywords">
${JSON.stringify(jsonLd, null, 2)}
    </script>`;
}
