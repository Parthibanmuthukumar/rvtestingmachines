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
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT.address.addressLocality,
      addressRegion: CONTACT.address.addressRegion,
      addressCountry: CONTACT.address.addressCountry,
    },
    sameAs: Object.values(SOCIAL),
    description:
      'NABL accredited material testing machines, calibration and technical support across India.',
    knowsAbout: getTopKeywords(60),
    slogan: `Material testing & calibration — ${SEO_KEYWORD_COUNT}+ industry topics served`,
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
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT.address.addressLocality,
      addressRegion: CONTACT.address.addressRegion,
      addressCountry: CONTACT.address.addressCountry,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    priceRange: '$$',
    description:
      'Material testing equipment, NABL accredited calibration, consultation and after-sales service.',
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

export function getDefaultStructuredData(pathname) {
  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
  ];

  const pageNames = {
    '/about': 'About Us',
    '/products': 'Our Products',
    '/consultation': 'Consultation',
    '/services': 'Product & Calibration',
    '/contact': 'Contact',
  };

  if (pathname !== '/' && pageNames[pathname]) {
    breadcrumbs.push({
      name: pageNames[pathname],
      url: `${SITE_URL}${pathname}`,
    });
  }

  return [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getLocalBusinessSchema(),
    getBreadcrumbSchema(breadcrumbs),
  ];
}
