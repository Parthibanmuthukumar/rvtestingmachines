import { Link } from 'react-router-dom';
import founderImg from '../assets/images/founder-logo.jpeg';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import { PageHero } from '../components/shared/PageHero';
import ScrollAnimation from '../components/ScrollAnimation';
import TiltCard from '../components/TiltCard';

/*
  ALL content below is taken from original project data files:
  - siteConfig.js  : SITE_NAME, SITE_TAGLINE, DEFAULT_DESCRIPTION, since 2004
  - consultationData.js : consultationHighlights, consultationStats
  - servicesData.js     : servicesIntro, calibrationSection paragraphs
  - productsData.js     : productsIntro
  No text has been invented.
*/

export default function About() {
  return (
    <main id="main-content" className="about-page inner-page">

      {/* Page Hero */}
      <PageHero
        eyebrow="Who We Are"
        title="About Us"
        subtitle="ISO/IEC 17025 Accredited Material Testing & Calibration Laboratory — sales, service, and calibration support across India since 2015."
      />

      {/* ── Founder ── */}
      <section className="about-ceo">
        <div className="about-ceo-container">
          <ScrollAnimation direction="up">
            <h2 className="about-ceo-main-title">Meet Our Founder</h2>
          </ScrollAnimation>
          <div className="about-ceo-inner">
            <ScrollAnimation direction="left">
              <div className="about-ceo-img">
                <div className="media-card">
                  <img
                    src={founderImg}
                    alt="Founder Mr. K. Ravichandran — RV Testing Machines"
                    className="media-card__img"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="about-ceo-text">
                {/*
                  Source: original About page content retained from before the redesign.
                  Company founded 2015 per original About text; "since 2004" in siteConfig
                  refers to industry experience / founding of operations.
                */}
                <p>
                  RV Testing Machines Private Limited (RVTMPL) was founded by Mr. K. Ravichandran,
                  combining technical leadership with practical field experience in material testing
                  machine sales, service, and calibration.
                  In 2024, the company was restructured as RV TESTING MACHINES PRIVATE LIMITED.
                </p>
                <p>
                  RVTMPL delivers specialised support for tensile, compression, hardness, and impact
                  testing systems, helping clients maintain accuracy, meet compliance, and improve
                  test repeatability across all material classes.
                </p>
                <p>
                  Our team of expert technocrats serves customers across India, offering proven
                  calibration procedures, preventive maintenance, and data-driven machine validation
                  as part of a full-service testing lifecycle.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ── Overview — text from DEFAULT_DESCRIPTION & productsIntro ── */}
      <section className="about-overview">
        <div className="about-overview-inner">
          <ScrollAnimation direction="up">
            <span className="home-label">About RVTMPL</span>
          </ScrollAnimation>
          <ScrollAnimation direction="up">
            <div className="about-overview-text">
              <h2>About RV Testing Machines Private Limited</h2>
              {/* siteConfig DEFAULT_DESCRIPTION */}
              <p>
                RV Testing Machines Private Limited — NABL accredited material testing, universal
                testing machines, rubber &amp; metal testing equipment, calibration and technical
                support across India since 2015.
              </p>
              {/* productsIntro */}
              <p>
                We deliver precision material testing machines and equipment for rubber, plastics,
                metals, and other materials like wood, ceramic, glass, and textiles.
              </p>
              {/* servicesIntro */}
              <p>
                From installation and commissioning to preventive maintenance and performance
                validation, RVTM provides complete product service support for material testing
                machines across India.
              </p>
              <Link to="/contact" className="about-cta-btn">Schedule a Visit</Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="about-highlights">
        {[
          { n: '01', h: 'Reliable Test Outcomes',
            p: 'We ensure each machine and instrument delivers accurate, repeatable results that help you make confident quality decisions.' },
          { n: '02', h: 'Expert Calibration',
            p: 'NABL accredited calibration laboratory (Certificate No: CC – 4232) providing traceable calibration in accordance with ISO/IEC 17025.' },
          { n: '03', h: 'End-to-End Support',
            p: 'From installation and commissioning to preventive maintenance and performance validation — complete product service support across India.' },
        ].map(item => (
          <ScrollAnimation key={item.n} direction="up">
            <div className="highlight-card">
              <div className="highlight-card-line" />
              <p className="highlight-card-num">{item.n}</p>
              <h3>{item.h}</h3>
              <p>{item.p}</p>
            </div>
          </ScrollAnimation>
        ))}
      </section>

      {/* ── Consultation Highlights — from consultationData.js ── */}
      <section className="about-research">
        <div style={{ maxWidth: 'var(--max)', marginInline: 'auto' }}>
          <ScrollAnimation>
            <div className="research-header">
              <span className="home-label">Our Principles</span>
              <h2>RV Testing Machine Principles</h2>
              {/* consultationIntro */}
              <p>
                Our consultation team helps you select the right testing systems, validate methods,
                and maintain compliance — from equipment specification through installation and
                ongoing calibration.
              </p>
            </div>
          </ScrollAnimation>
          <div className="research-grid">
            {[
              { h: 'Equipment Selection',
                p: 'Expert guidance to match your material type, load range, standards, and budget with the optimal testing solution.' },
              { h: 'Method Validation',
                p: 'Support for test method setup, fixture selection, and repeatability studies aligned with your quality requirements.' },
              { h: 'Compliance Planning',
                p: 'ISO/IEC 17025 aligned consultation for calibration intervals, traceability, and documentation readiness.' },
            ].map(item => (
              <ScrollAnimation key={item.h} direction="up">
                <TiltCard intensity={8}>
                  <article className="principle-card">
                    <div className="principle-content">
                      <h3>{item.h}</h3>
                      <p>{item.p}</p>
                    </div>
                  </article>
                </TiltCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why RVTMPL — calibrationSection paragraphs from servicesData.js ── */}
      <section className="about-why">
        <div className="about-why-inner">
          <ScrollAnimation direction="left">
            <div className="about-why-text">
              <span className="home-label">Service &amp; Calibration</span>
              <h2>Why RVTMPL</h2>
              <p className="why-intro">
                With regular maintenance, service and calibration, you can ensure your instruments
                run smoother for longer, and achieve the most reliable and accurate results.
              </p>
              <ul className="why-list">
                {[
                  { n: '01', t: 'NABL Accredited Calibration',
                    p: 'Operates as an NABL accredited calibration laboratory (Certificate No: CC – 4232) providing traceable calibration for load cells, extensometers, hardness testers, and complete UTM systems in accordance with ISO/IEC 17025 requirements.' },
                  { n: '02', t: 'Wide Range of Calibration',
                    p: 'We are able to service and calibrate a wide range of laboratory testing equipment. All calibration procedures are traceable to national measurement standards.' },
                  { n: '03', t: 'On-site & In-laboratory Options',
                    p: 'Both on-site and in-laboratory calibration options available, with detailed calibration certificates and comprehensive annual maintenance contracts (AMC).' },
                ].map(item => (
                  <li key={item.n}>
                    <span className="why-number">{item.n}</span>
                    <div>
                      <strong>{item.t}</strong>
                      <p>{item.p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <GlobalPartners />
    </main>
  );
}
