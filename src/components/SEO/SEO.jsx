import { Helmet } from 'react-helmet-async';
import {
  DEFAULT_DESCRIPTION,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  CONTACT,
} from '../../seo/siteConfig';
import { getDefaultStructuredData } from '../../seo/structuredData';
import { getMetaKeywordsString } from '../../seo/keywords';

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  path = '/',
  ogImage = OG_IMAGE,
  ogType = 'website',
  schema,
  articlePublished,
  articleModified,
}) {
  const fullTitle = title
    ? title
    : `${SITE_NAME} | Material Testing & NABL Calibration Lab India`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const keywordsString = keywords || getMetaKeywordsString(path, 150);
  const structuredData = schema || getDefaultStructuredData(path);

  return (
    <Helmet>
      {/* ─── Core HTML ─── */}
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />

      {/* ─── Authorship & Coverage ─── */}
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${SITE_NAME}`} />
      <meta name="coverage" content="India" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta
        name="subject"
        content="Material testing machines, NABL calibration, RV Testing Machines Private Limited"
      />
      <meta
        name="classification"
        content="Material Testing Equipment, Calibration Services, Industrial Testing"
      />
      <meta name="category" content="Material Testing & Calibration" />

      {/* ─── Robots & Google Verification ─── */}
      <meta name="google-site-verification" content="google72a1f1a19579ab8f" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="bingbot" content="index, follow" />

      {/* ─── Geo / Local ─── */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
      <meta name="geo.position" content="13.0139;80.1686" />
      <meta name="ICBM" content="13.0139, 80.1686" />

      {/* ─── Theme ─── */}
      <meta name="theme-color" content="#1a3c6b" />
      <meta name="msapplication-TileColor" content="#1a3c6b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RVTM" />

      {/* ─── Canonical ─── */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ─── Open Graph ─── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${SITE_NAME} — NABL accredited material testing and calibration`}
      />
      <meta property="og:locale" content="en_IN" />
      {articlePublished && (
        <meta property="article:published_time" content={articlePublished} />
      )}
      {articleModified && (
        <meta property="article:modified_time" content={articleModified} />
      )}

      {/* ─── Twitter Card ─── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RVTestingMachines" />
      <meta name="twitter:creator" content="@RVTestingMachines" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — material testing`} />

      {/* ─── Contact / Business Meta ─── */}
      <meta name="contact" content={CONTACT.email} />
      <meta name="reply-to" content={CONTACT.email} />

      {/* ─── Performance / Preconnects ─── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      <link rel="dns-prefetch" href="//maps.gstatic.com" />

      {/* ─── Structured Data (JSON-LD) ─── */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': Array.isArray(structuredData)
              ? structuredData
              : [structuredData],
          })}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
