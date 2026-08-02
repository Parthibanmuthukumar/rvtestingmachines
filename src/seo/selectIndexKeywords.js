/** Select 500–800 priority keywords for index.html SEO injection */

export function scoreKeyword(kw) {
  const k = kw.toLowerCase();
  let score = 0;
  // Brand terms — highest priority
  if (k.includes('rv testing machines private limited')) score += 20;
  if (k.includes('rvtmpl') || k.includes('rvtm')) score += 15;
  if (k.includes('rv testing') || k.includes('r v testing')) score += 12;
  // Core SEO signals
  if (k.includes('nabl') || k.includes('iso 17025') || k.includes('iso/iec')) score += 10;
  if (k.includes('calibration')) score += 8;
  if (k.includes('universal testing') || k === 'utm' || k.includes(' utm ')) score += 7;
  if (k.includes('rubber') || k.includes('durometer') || k.includes('irhd')) score += 7;
  if (k.includes('hardness') || k.includes('tensile') || k.includes('compression')) score += 6;
  // Local geo signals
  if (k.includes('chennai') || k.includes('tamil nadu')) score += 6;
  if (k.includes('india')) score += 5;
  if (k.includes('material testing') || k.includes('testing machine')) score += 5;
  // Partner brands
  if (k.includes('prescott') || k.includes('fischer') || k.includes('kobelco') || k.includes('form+test') || k.includes('hildebrand')) score += 4;
  // Intent modifiers (high commercial intent)
  if (k.includes('price') || k.includes('quote') || k.includes('for sale') || k.includes('supplier') || k.includes('buy')) score += 3;
  if (k.includes('near me') || k.includes('manufacturer') || k.includes('dealer')) score += 3;
  // Prefer shorter, cleaner keywords
  if (k.length < 60) score += 3;
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
        name: 'RV Testing Machines Private Limited',
        alternateName: ['RVTMPL', 'RVTM', 'RV Testing Machines'],
        legalName: 'RV Testing Machines Private Limited',
        url: 'https://www.rvtestingmachines.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.rvtestingmachines.com/og-image.jpg',
          width: 1200,
          height: 630,
        },
        telephone: '+91 94444 90691',
        email: 'sales@rvtestingmachines.com',
        foundingDate: '2015',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No 89, Door No 5/49 A, Vanavil Flats - A2, Natesan Nagar, Ramapuram',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          postalCode: '600 089',
          addressCountry: 'IN',
        },
        description:
          'RV Testing Machines Private Limited — NABL accredited (ISO/IEC 17025, Cert No: CC – 4232) calibration laboratory and material testing equipment sales & service. Founded 2015 by Mr. K. Ravichandran. Based in Chennai, India.',
        knowsAbout: keywords,
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          name: 'NABL Accreditation CC – 4232',
          credentialCategory: 'ISO/IEC 17025 Accreditation',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.rvtestingmachines.com/#website',
        name: 'RV Testing Machines Private Limited',
        url: 'https://www.rvtestingmachines.com/',
        inLanguage: 'en-IN',
        description: 'Official website of RV Testing Machines Private Limited — NABL accredited material testing & calibration laboratory, Chennai, India.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.rvtestingmachines.com/products?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return `    <!-- SEO: ${keywords.length} researched keywords — RV Testing Machines Private Limited -->
    <meta name="keywords" content="${escapedMeta}" />
    <meta name="keywords-total" content="${keywords.length}" />
    <script type="application/ld+json" id="index-seo-keywords">
${JSON.stringify(jsonLd, null, 2)}
    </script>`;
}
