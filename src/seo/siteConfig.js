/** Site-wide SEO constants — set VITE_SITE_URL in .env for production domain */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://www.rvtestingmachines.com'
).replace(/\/$/, '');

export const SITE_NAME = 'RV Testing Machines';
export const SITE_LEGAL_NAME = 'RV Testing Machines Pvt. Ltd.';
export const SITE_TAGLINE = 'ISO/IEC 17025 Accredited Material Testing & Calibration Laboratory';
export const DEFAULT_DESCRIPTION =
  'RV Testing Machines — NABL accredited material testing, universal testing machines, rubber & metal testing equipment, calibration and technical support across India since 2004.';
/** Fallback; per-page keywords come from src/seo/keywords.js (800+ terms) */
export const DEFAULT_KEYWORDS =
  'RV testing machines, material testing machines India, NABL calibration, universal testing machine, rubber testing equipment';

export const CONTACT = {
  phone: '+91-98765-43210',
  email: 'info@rvtestingmachines.com',
  address: {
    streetAddress: 'Chennai',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '',
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
