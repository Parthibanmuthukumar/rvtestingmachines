/** Site-wide SEO constants — set VITE_SITE_URL in .env for production domain */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://www.rvtestingmachines.com'
).replace(/\/$/, '');

export const SITE_NAME = 'RV Testing Machines Private Limited';
export const SITE_LEGAL_NAME = 'RV Testing Machines Private Limited';
export const SITE_TAGLINE = 'ISO/IEC 17025 Accredited Material Testing & Calibration Laboratory';
export const DEFAULT_DESCRIPTION =
  'RV Testing Machines Private Limited — NABL accredited material testing, universal testing machines, rubber & metal testing equipment, calibration and technical support across India since 2004.';
/** Fallback; per-page keywords come from src/seo/keywords.js (800+ terms) */
export const DEFAULT_KEYWORDS =
  'RV testing machines, material testing machines India, NABL calibration, universal testing machine, rubber testing equipment';

export const CONTACT = {
  phone: '+91 94444 90691',
  phoneLandline: '+91 44 2249 0691',
  email: 'sales@rvtestingmachines.com',
  address: {
    streetAddress: 'Plot No 89, Door No 5/49 A, Natesan Nagar, Ramapuram',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600089',
    addressCountry: 'IN',
  },
};

export const SOCIAL = {
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
};

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
