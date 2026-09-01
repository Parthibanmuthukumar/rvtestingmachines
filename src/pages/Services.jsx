import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO/SEO';
import { getPageMeta } from '../seo/pageMeta';
import {
  servicesIntro,
  serviceOverview,
  comprehensiveSupport,
  calibrationServicesData,
} from '../data/servicesData';
import serviceBrochurePdf from '../assets/260806DirectAccesstoDOLIElektronik.pdf';
import '../styles/pages.css';

export default function Services() {
  const pageMeta = getPageMeta('/services');

  return (
    <main id="main-content" className="inner-page">
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        path="/services"
      />
      {/* 1. Page Hero Header */}
      <PageHero
        eyebrow="Precision Maintenance & Technical Support"
        title="Service and Calibration"
        subtitle={servicesIntro}
      />

      <div className="consultation-page-container">
        
        {/* 2. Top Overview (Image + Text Side-by-Side) */}
        <section className="consultation-feature-section" style={{ marginBlock: '3rem 2.5rem' }}>
          <ScrollAnimation direction="up">
            <div className="services-hero-grid">
              <div className="services-hero-img-wrap">
                <img
                  src={serviceOverview.image}
                  alt="Service and Calibration"
                  className="services-hero-img"
                />
              </div>

              <div className="consultation-feature-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {serviceOverview.paragraphs.map((para, idx) => (
                  <p key={idx} style={{ fontSize: '0.96rem', lineHeight: '1.75', color: '#475569', margin: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* 3. Framed Section 1: Comprehensive Support */}
        <section className="services-framed-box" style={{ marginBottom: '3rem' }}>
          <ScrollAnimation direction="up">
            <div className="framed-card-content">
              <h2 className="framed-card-title">{comprehensiveSupport.title}</h2>
              <p className="framed-card-subtitle">{comprehensiveSupport.subtitle}</p>

              <ul className="framed-bullet-list">
                {comprehensiveSupport.bulletPoints.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-dot">•</span>
                    <span className="bullet-text">{item}</span>
                  </li>
                ))}
              </ul>


            </div>
          </ScrollAnimation>
        </section>

        {/* 4. Framed Section 2: Calibration Services */}
        <section className="services-framed-box" style={{ marginBottom: '3.5rem' }}>
          <ScrollAnimation direction="up">
            <div className="framed-card-content">
              <div>
                <h2 className="framed-card-title">{calibrationServicesData.title}</h2>
                {calibrationServicesData.paragraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7', marginBottom: '0.85rem' }}>
                    {p}
                  </p>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>
                  {calibrationServicesData.rangesIntro}
                </p>

                <ul className="framed-bullet-list" style={{ marginBottom: '1.25rem' }}>
                  {calibrationServicesData.rangesList.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot">•</span>
                      <span className="bullet-text"><strong>{item}</strong></span>
                    </li>
                  ))}
                </ul>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                  {calibrationServicesData.loadCellInfo}
                </p>
              </div>

            </div>
          </ScrollAnimation>
        </section>

        {/* 5. Call To Action Section */}
        <section className="consultation-cta-section">
          <ScrollAnimation direction="up">
            <h2>Schedule Your Service &amp; Calibration Visit</h2>
            <p>
              Speak with our accredited calibration engineers to schedule an on-site visit, arrange an AMC contract, or request an official calibration quotation.
            </p>
            <div className="consultation-cta-actions">
              <Link to="/contact" className="consultation-cta-btn">
                Book Service &amp; Calibration &rarr;
              </Link>
              <a
                href={serviceBrochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="consultation-cta-btn-outline"
                title="Download / View Service Brochure PDF"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <span>View Brochure</span>
              </a>
            </div>
          </ScrollAnimation>
        </section>

      </div>

      <GlobalPartners />
    </main>
  );
}
