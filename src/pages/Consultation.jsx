import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import TiltCard from '../components/TiltCard';
import SEO from '../components/SEO/SEO';
import { getPageMeta } from '../seo/pageMeta';
import {
  consultationIntro,
  consultationFeatureData,
  consultationServices,
  consultationProcessSteps,
  consultationSectors,
  consultationStats,
} from '../data/consultationData';
import '../styles/pages.css';

// SVG Icon Helper
function getServiceIcon(type) {
  switch (type) {
    case 'document':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case 'settings':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'search':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'award':
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
  }
}

export default function Consultation() {
  const pageMeta = getPageMeta('/consultation');

  return (
    <main id="main-content" className="inner-page">
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        path="/consultation"
      />
      {/* 1. Page Hero Header */}
      <PageHero
        eyebrow="Expert Advisory & Method Development"
        title="Technical Consultation"
        subtitle={consultationIntro}
      />

      <div className="consultation-page-container">
        
        {/* 2. Main Feature Overview (Text + Banner Image) */}
        <section className="consultation-feature-section">
          <ScrollAnimation direction="up">
            <div className="consultation-feature-grid">
              <div className="consultation-feature-card">
                <img
                  src={consultationFeatureData.image}
                  alt={consultationFeatureData.title}
                  className="consultation-feature-img"
                />
                <div className="consultation-feature-overlay">
                  <span className="consultation-feature-badge">
                    {consultationFeatureData.badge}
                  </span>
                </div>
              </div>

              <div className="consultation-feature-text">
                <h2>{consultationFeatureData.title}</h2>
                <p>{consultationFeatureData.description}</p>
                <ul className="consultation-bullet-list">
                  {consultationFeatureData.bulletPoints.map((pt, idx) => (
                    <li key={idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* 3. Key Consultation Service Pillars Grid */}
        <section className="consultation-services-section">
          <ScrollAnimation direction="up">
            <div className="section-header-center">
              <span className="section-eyebrow-badge">Core Advisory Capabilities</span>
              <h2 className="section-main-title">Our Technical Consultation Services</h2>
              <p className="section-sub-desc">
                From method setup to international standard validation, our engineers support your quality lab at every step.
              </p>
            </div>
          </ScrollAnimation>

          <div className="consultation-cards-container">
            {consultationServices.map((item) => (
              <ScrollAnimation key={item.id}>
                <TiltCard intensity={6}>
                  <article className="consultation-card-premium">
                    <div className="card-accent-line" />
                    <div className="card-icon-wrapper">
                      {getServiceIcon(item.icon)}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="consultation-standards-tag">
                      <strong>Standards:</strong> {item.standards}
                    </div>
                  </article>
                </TiltCard>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* 4. Step-by-Step Consultation Process */}
        <section className="consultation-process-section">
          <ScrollAnimation direction="up">
            <div className="section-header-center">
              <span className="section-eyebrow-badge">Structured Approach</span>
              <h2 className="section-main-title">How Our Consultation Process Works</h2>
            </div>
          </ScrollAnimation>

          <div className="consultation-process-grid">
            {consultationProcessSteps.map((stepItem) => (
              <ScrollAnimation key={stepItem.step}>
                <div className="process-step-card">
                  <div className="step-number-badge">{stepItem.step}</div>
                  <h4>{stepItem.title}</h4>
                  <p>{stepItem.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* 5. Key Industry Sectors Served */}
        <section className="consultation-sectors-section">
          <ScrollAnimation direction="up">
            <div className="section-header-center">
              <span className="section-eyebrow-badge">Domain Expertise</span>
              <h2 className="section-main-title">Sectors & Industries We Support</h2>
            </div>
            <div className="sectors-badge-grid">
              {consultationSectors.map((sector, idx) => (
                <div key={idx} className="sector-pill-tag">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </section>

        {/* 6. Redesigned Company Statistics Bar */}
        <ScrollAnimation direction="up">
          <section className="consultation-stats" aria-label="Consultation stats">
            {consultationStats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </section>
        </ScrollAnimation>

        {/* 7. Call To Action Section */}
        <section className="consultation-cta-section">
          <ScrollAnimation direction="up">
            <h2>Ready to Upgrade Your Testing &amp; Calibration Capabilities?</h2>
            <p>
              Speak with our specialist consultation team to validate methods, select equipment,
              or arrange an expert technical evaluation tailored to your industry requirements.
            </p>
            <Link to="/contact" className="consultation-cta-btn">
              Contact Our Consultation Experts &rarr;
            </Link>
          </ScrollAnimation>
        </section>

      </div>

      <GlobalPartners />
    </main>
  );
}
