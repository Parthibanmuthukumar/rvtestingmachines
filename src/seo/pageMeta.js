import { DEFAULT_DESCRIPTION, SITE_NAME } from './siteConfig';
import { getMetaKeywordsString } from './keywords';

/** Per-route SEO metadata — optimized for "RV Testing Machines" branded + product searches */
export const PAGE_META = {
  '/': {
    title: `RV Testing Machines Private Limited | NABL Accredited Material Testing & Calibration Lab Chennai`,
    description:
      'RV Testing Machines Private Limited (RVTMPL) — NABL accredited ISO/IEC 17025 calibration laboratory in Chennai. Material testing machines, universal testing machines, rubber & metal testing equipment, hardness testers, and calibration services across India. NABL Cert No: CC – 4232.',
    keywords: null,
    path: '/',
  },
  '/about': {
    title: `About RV Testing Machines Private Limited | RVTMPL | Chennai Material Testing Company`,
    description:
      'Learn about RV Testing Machines Private Limited (RVTMPL) — Founded 2015 by Mr. K. Ravichandran in Chennai. NABL accredited calibration laboratory (Cert No: CC – 4232), material testing equipment sales, service & calibration across India. ISO/IEC 17025.',
    keywords:
      'about RV testing machines private limited, RVTMPL Chennai, material testing company Chennai India, NABL accredited lab Chennai, K Ravichandran material testing, RV testing machines founded, testing machine service company India',
    path: '/about',
  },
  '/products': {
    title: `Material Testing Equipment | Universal Testing Machines | Rubber Hardness Testers | RV Testing Machines`,
    description:
      'Explore RV Testing Machines comprehensive product range — Universal Testing Machines (UTM), IRHD Micro Hardness Testers, Digital Durometers, Rheometers, Mooney Viscometers, Brinell/Rockwell/Vickers Hardness Testers. Rubber, metal & polymer testing equipment from global brands.',
    keywords:
      'universal testing machine India, IRHD hardness tester, rubber durometer, UTM testing machine, material testing equipment, rubber testing machine, Shore hardness tester, compression testing machine, tensile testing machine, hardness tester India',
    path: '/products',
  },
  '/consultation': {
    title: `Material Testing Consultation & Lab Setup | ISO 17025 Guidance | RV Testing Machines`,
    description:
      'Expert material testing consultation services — equipment selection, test method validation, ISO/IEC 17025 compliance planning, calibration interval guidance, and laboratory setup advisory from RV Testing Machines. Serving industries across India.',
    keywords:
      'material testing consultation India, testing machine advisory Chennai, ISO 17025 compliance guidance, lab setup consultation, equipment selection material testing, calibration planning India, testing laboratory advisory',
    path: '/consultation',
  },
  '/services': {
    title: `NABL Calibration Services | Testing Machine Service & Repair | RV Testing Machines India`,
    description:
      'RV Testing Machines NABL accredited calibration services (ISO/IEC 17025, Cert: CC – 4232). UTM calibration, hardness tester calibration, load cell calibration, on-site & in-lab calibration, AMC, installation, repair and preventive maintenance for testing machines across India.',
    keywords:
      'NABL calibration services India, ISO 17025 calibration laboratory Chennai, UTM calibration service, hardness tester calibration India, load cell calibration, on-site calibration India, testing machine repair Chennai, AMC testing machines, universal testing machine calibration',
    path: '/services',
  },
  '/contact': {
    title: `Contact RV Testing Machines Private Limited | Chennai | Calibration Quote & Enquiry`,
    description:
      'Contact RV Testing Machines Private Limited for calibration quotes, material testing equipment enquiries, technical support, and AMC service. Chennai, Tamil Nadu — +91 94444 90691 | sales@rvtestingmachines.com. On-site calibration across India.',
    keywords:
      'contact RV testing machines Chennai, RV testing machines phone number, RVTMPL enquiry, calibration quote India, testing machine enquiry Chennai, RV testing machines email, material testing sales Chennai',
    path: '/contact',
  },
};

export function getPageMeta(pathname) {
  const base = PAGE_META[pathname] || {
    title: `${SITE_NAME} | Material Testing & NABL Calibration Lab India`,
    description: DEFAULT_DESCRIPTION,
    keywords: null,
    path: pathname,
  };

  return {
    ...base,
    keywords: base.keywords ?? getMetaKeywordsString(pathname, 150),
  };
}
