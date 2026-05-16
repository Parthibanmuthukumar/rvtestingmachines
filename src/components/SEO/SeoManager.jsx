import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMeta } from '../../seo/pageMeta';
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '../../seo/siteConfig';
import { getDefaultStructuredData } from '../../seo/structuredData';

const JSON_LD_ID = 'rvtm-structured-data';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(data) {
  let el = document.getElementById(JSON_LD_ID);
  if (!el) {
    el = document.createElement('script');
    el.id = JSON_LD_ID;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const canonical = `${SITE_URL}${meta.path}`;
    const title = meta.title;
    const description = meta.description || DEFAULT_DESCRIPTION;
    const keywords = meta.keywords || '';

    document.title = title;
    document.documentElement.lang = 'en';

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'coverage', 'India');
    upsertMeta('name', 'subject', 'Material testing machines, calibration, RV Testing Machines');
    upsertMeta('name', 'author', SITE_NAME);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('name', 'googlebot', 'index, follow');
    upsertMeta('name', 'theme-color', '#1a3c6b');

    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:image:alt', `${SITE_NAME} — material testing and calibration`);
    upsertMeta('property', 'og:locale', 'en_IN');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);

    const schemas = getDefaultStructuredData(pathname);
    upsertJsonLd({ '@context': 'https://schema.org', '@graph': schemas });
  }, [pathname]);

  return null;
}
