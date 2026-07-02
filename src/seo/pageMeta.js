import { DEFAULT_DESCRIPTION, SITE_NAME } from './siteConfig';
import { getMetaKeywordsString } from './keywords';

/** Per-route SEO metadata */
export const PAGE_META = {
  '/': {
    title: `${SITE_NAME} | Material Testing & NABL Calibration Lab India`,
    description:
      'ISO/IEC 17025 accredited laboratory for material testing machines, calibration, rubber & metal testing equipment sales and service across India. 20+ years of expertise.',
    keywords: null,
    path: '/',
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Learn about RV Testing Machines Private Limited — founder-led expertise in RV machine testing, accredited calibration, R&D, and end-to-end support for quality labs and manufacturing.',
    keywords:
      'about RV testing machines, material testing company India, NABL accredited lab, testing machine service',
    path: '/about',
  },
  '/products': {
    title: `Our Products | Rubber & Metal Testing Equipment | ${SITE_NAME}`,
    description:
      'Explore rubber and metal testing products — durometers, IRHD systems, universal testing machines, hardness testers from leading global technology partners.',
    keywords:
      'rubber testing equipment, metal testing machines, durometer, universal testing machine, hardness tester',
    path: '/products',
  },
  '/consultation': {
    title: `Consultation | Testing & Calibration Guidance | ${SITE_NAME}`,
    description:
      'Book expert consultation for material testing setup, equipment selection, calibration planning, and laboratory compliance with ISO/IEC 17025 standards.',
    keywords:
      'testing machine consultation, calibration consultation, material testing advisory, lab setup India',
    path: '/consultation',
  },
  '/services': {
    title: `Product Service & Calibration | ${SITE_NAME}`,
    description:
      'Complete lifecycle support — installation, preventive maintenance, repair, and NABL accredited calibration for universal testing and hardness systems.',
    keywords:
      'testing machine service, equipment calibration, NABL calibration services, UTM maintenance India',
    path: '/services',
  },
  '/contact': {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      'Contact RV Testing Machines Private Limited for quotes, calibration scheduling, technical support, and product enquiries. Chennai, Tamil Nadu, India.',
    keywords:
      'contact RV testing machines, calibration enquiry, material testing quote India',
    path: '/contact',
  },
};

export function getPageMeta(pathname) {
  const base = PAGE_META[pathname] || {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    keywords: null,
    path: pathname,
  };

  return {
    ...base,
    keywords: base.keywords ?? getMetaKeywordsString(pathname, 100),
  };
}
