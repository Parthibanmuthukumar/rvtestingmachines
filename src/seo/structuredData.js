import {
  CONTACT,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from './siteConfig';
import { getTopKeywords, SEO_KEYWORD_COUNT } from './keywords';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_LEGAL_NAME,
    alternateName: ['RVTMPL', 'RVTM', 'RV Testing Machines', 'RV Testing Machines Pvt Ltd'],
    legalName: 'RV Testing Machines Private Limited',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    image: `${SITE_URL}/og-image.jpg`,
    email: CONTACT.email,
    telephone: [CONTACT.phone, CONTACT.phoneLandline],
    faxNumber: CONTACT.phoneLandline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.streetAddress,
      addressLocality: CONTACT.address.addressLocality,
      addressRegion: CONTACT.address.addressRegion,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0139,
      longitude: 80.1686,
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Ramapuram+Chennai',
    sameAs: [
      ...Object.values(SOCIAL),
      'https://www.justdial.com/',
      'https://www.indiamart.com/',
    ],
    description:
      'RV Testing Machines Private Limited — NABL accredited (ISO/IEC 17025) calibration laboratory and material testing equipment sales & service company based in Chennai, India. Founded 2015 by Mr. K. Ravichandran.',
    foundingDate: '2015',
    foundingLocation: {
      '@type': 'Place',
      name: 'Chennai, Tamil Nadu, India',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 10,
    },
    knowsAbout: getTopKeywords(60),
    slogan: `Material testing & calibration — ${SEO_KEYWORD_COUNT}+ industry topics served`,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'NABL Accreditation Certificate CC – 4232',
      credentialCategory: 'ISO/IEC 17025 Accreditation',
      recognizedBy: {
        '@type': 'Organization',
        name: 'National Accreditation Board for Testing and Calibration Laboratories (NABL)',
        url: 'https://nabl-india.org',
      },
    },
    areaServed: [
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Coimbatore' },
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'Country', name: 'India' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.phone,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.phoneLandline,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
      },
      {
        '@type': 'ContactPoint',
        email: CONTACT.email,
        contactType: 'technical support',
        areaServed: 'IN',
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    description:
      'Official website of RV Testing Machines Private Limited — NABL accredited material testing equipment, calibration services, and technical support across India.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'LaboratoryScience'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_LEGAL_NAME,
    alternateName: 'RVTMPL',
    image: [
      `${SITE_URL}/og-image.jpg`,
    ],
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, Cheque, Online Payment',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.streetAddress,
      addressLocality: CONTACT.address.addressLocality,
      addressRegion: CONTACT.address.addressRegion,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0139,
      longitude: 80.1686,
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=RV+Testing+Machines+Private+Limited+Ramapuram+Chennai',
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 20.5937,
        longitude: 78.9629,
      },
      geoRadius: '3000000',
    },
    description:
      'Material testing equipment sales, NABL accredited calibration (ISO/IEC 17025), after-sales service, consultation and annual maintenance contracts for testing laboratories across India.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Material Testing Equipment & Calibration Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Testing Equipment',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Universal Testing Machine (UTM)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'IRHD Hardness Tester' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Digital Durometer' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Rheometer MDR' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Mooney Viscometer' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Calibration Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NABL Accredited Calibration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-site Calibration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Load Cell Calibration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardness Tester Calibration' } },
          ],
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'NABL Accredited Calibration Services',
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Material Testing & Calibration',
    description:
      'ISO/IEC 17025 accredited calibration services for universal testing machines, hardness testers, load cells, and material testing equipment across India.',
    areaServed: { '@type': 'Country', name: 'India' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Calibration & Testing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UTM Calibration (ISO/IEC 17025)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardness Tester Calibration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Load Cell Calibration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-site Calibration Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Maintenance Contract (AMC)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Testing Machine Installation & Commissioning' } },
      ],
    },
  };
}

export function getProductListSchema() {
  const products = [
    {
      name: 'Universal Testing Machine (UTM)',
      description: 'High-precision universal testing machine for tensile, compression, and flexural testing of metals, rubber, plastics, and composites.',
      category: 'Material Testing Equipment',
    },
    {
      name: 'IRHD Micro Hardness Tester',
      description: 'International Rubber Hardness Degree (IRHD) tester for precise rubber and elastomer hardness measurement per ISO 48 and ASTM D1415.',
      category: 'Hardness Testing Equipment',
    },
    {
      name: 'Digital Durometer (Shore Hardness Tester)',
      description: 'Digital Shore A and Shore D durometer for rubber, foam, and plastic hardness testing with digital display and data output.',
      category: 'Hardness Testing Equipment',
    },
    {
      name: 'Rheometer MDR (Moving Die Rheometer)',
      description: 'Moving Die Rheometer for rubber cure characteristics measurement as per ASTM D5289 and ISO 6502 standards.',
      category: 'Polymer Testing Equipment',
    },
    {
      name: 'Mooney Viscometer',
      description: 'Mooney viscometer for measuring the Mooney viscosity and scorch properties of rubber compounds per ASTM D1646 and ISO 289.',
      category: 'Polymer Testing Equipment',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Material Testing Equipment by RV Testing Machines',
    description: 'Comprehensive range of material testing machines including UTM, hardness testers, rheometers, and calibration equipment for rubber, metal, and polymer testing.',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: 'RV Testing Machines Private Limited',
        },
        offers: {
          '@type': 'Offer',
          seller: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'Country', name: 'India' },
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };
}

export const HOME_FAQS = [
  {
    question: 'What is RV Testing Machines Private Limited (RVTMPL)?',
    answer:
      'RV Testing Machines Private Limited (RVTMPL / RVTM) is a Chennai-based company founded in 2015 by Mr. K. Ravichandran. We are an NABL accredited (ISO/IEC 17025, Cert CC-4232) calibration laboratory and material testing equipment sales and service provider serving clients across India.',
  },
  {
    question: 'Is RV Testing Machines NABL accredited?',
    answer:
      'Yes. RV Testing Machines Private Limited operates an NABL accredited calibration laboratory with Certificate Number CC-4232. Our calibration services comply with ISO/IEC 17025 standards and are traceable to national measurement standards.',
  },
  {
    question: 'What types of material testing equipment does RVTM provide?',
    answer:
      'RVTM provides Universal Testing Machines (UTM), IRHD Micro Hardness Testers, Digital Durometers, Rheometers (MDR), Mooney Viscometers, Rockwell/Brinell/Vickers Hardness Testers, Impact Testers, and Fatigue Testing Machines for rubber, polymers, metals, and composites.',
  },
  {
    question: 'Does RVTM offer NABL calibration and AMC services across India?',
    answer:
      'Yes. We offer both on-site and laboratory NABL accredited calibration services (Cert CC-4232), preventive maintenance, and Annual Maintenance Contracts (AMC) across India, including Chennai, Mumbai, Delhi, Bangalore, Hyderabad, Pune, Coimbatore, Ahmedabad, and Kolkata.',
  },
  {
    question: 'Which global technology partners and brands does RVTM represent?',
    answer:
      'RVTM is an authorized sales and service representative for leading global testing equipment manufacturers including Prescott (Germany), Fischer (Germany), Form+Test (Germany), Hildebrand (Germany), and UTM Unconventional Testing Machines.',
  },
];

export function getDefaultStructuredData(pathname) {
  const breadcrumbs = [{ name: 'Home', url: SITE_URL }];

  const pageNames = {
    '/about': 'About Us',
    '/products': 'Our Products',
    '/consultation': 'Consultation',
    '/services': 'Product & Calibration Services',
    '/contact': 'Contact Us',
  };

  if (pathname !== '/' && pageNames[pathname]) {
    breadcrumbs.push({
      name: pageNames[pathname],
      url: `${SITE_URL}${pathname}`,
    });
  }

  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getLocalBusinessSchema(),
    getBreadcrumbSchema(breadcrumbs),
  ];

  if (pathname === '/') {
    schemas.push(getFAQSchema(HOME_FAQS));
  }

  if (pathname === '/products') {
    schemas.push(getProductListSchema());
  }

  if (pathname === '/services') {
    schemas.push(getServiceSchema());
  }

  return schemas;
}
