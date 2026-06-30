import { buildAllKeywords } from './generateKeywords';

/** 800+ researched keywords for RV Private Limited & material testing industry */
export const SEO_KEYWORDS = buildAllKeywords();

export const SEO_KEYWORD_COUNT = SEO_KEYWORDS.length;

const PAGE_PRIORITY = {
  '/': [
    'RV testing machines',
    'material testing machines India',
    'NABL calibration Chennai',
    'universal testing machine India',
    'rubber testing equipment',
    'metal testing machines',
    'ISO 17025 calibration laboratory',
    'hardness tester calibration',
    'testing machine service India',
  ],
  '/about': ['about RV testing machines', 'material testing company India', 'NABL accredited lab', 'founder RVTM'],
  '/products': ['rubber durometer', 'IRHD tester', 'universal testing machine', 'hardness tester', 'Prescott Fischer'],
  '/consultation': ['testing consultation', 'lab setup material testing', 'calibration planning', 'equipment selection'],
  '/services': ['testing machine calibration', 'UTM maintenance', 'NABL calibration services', 'machine repair'],
  '/contact': ['contact RV testing machines', 'calibration quote', 'testing machine enquiry Chennai'],
};

/** Top keywords for meta tag (max ~100 for practical limits) */
export function getMetaKeywordsString(pathname, limit = 100) {
  const priority = PAGE_PRIORITY[pathname] || [];
  const picked = new Set(priority);

  for (const kw of SEO_KEYWORDS) {
    if (picked.size >= limit) break;
    if (pathname === '/' || kw.toLowerCase().includes('rv') || kw.toLowerCase().includes('testing')) {
      picked.add(kw);
    }
  }

  for (const kw of SEO_KEYWORDS) {
    if (picked.size >= limit) break;
    picked.add(kw);
  }

  return Array.from(picked).slice(0, limit).join(', ');
}

export function getTopKeywords(count = 48) {
  return SEO_KEYWORDS.slice(0, count);
}

export const HOME_EXPERTISE_TAGS = [
  'Universal Testing Machines',
  'NABL Calibration',
  'Rubber Durometer',
  'IRHD Hardness',
  'Metal Tensile Testing',
  'Compression Testing',
  'Rockwell Hardness',
  'Brinell Hardness',
  'Material Testing Lab',
  'Force Calibration',
  'Load Cell Calibration',
  'UTM Service & Repair',
  'Prescott',
  'Fischer',
  'KOBELCO',
  'Quality Control Testing',
  'Industrial Laboratories',
  'Chennai',
  'Pan India Support',
];
