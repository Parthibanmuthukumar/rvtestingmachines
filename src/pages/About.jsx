import { Link } from 'react-router-dom';
import logoPdf from '../assets/images/RVTMPL LOGO_page-0001.jpg';
import ceoImg from '../assets/images/CEO IMAGE.jpg';
import durometerImg from '../assets/images/products/Digital-Durometer_HDD-2.jpg';
import megaImg from '../assets/images/MEGA-11-350-SD.png';
import up50Img from '../assets/images/UP-50-HK-2-DH.png';
import technicalImg from '../assets/images/technical-support.jpg';
import { GlobalPartners } from '../components/shared/GlobalPartners';

function About() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden />
        <div className="about-hero-content">
          <p className="eyebrow">RV Machine Testing</p>
          <h1>Research‑Driven Testing for Reliable Material Performance</h1>
          <p className="about-hero-sub">
            We combine deep industry experience, R&D in testing methodology, and accredited calibration to
            deliver high-value RV machine testing solutions for manufacturing, construction, and quality labs.
          </p>
          <Link to="/contact" className="about-cta-btn">Discuss Your Testing Needs</Link>
        </div>
      </section>

      <section className="about-ceo">
        <div className="about-ceo-inner">
          <div className="about-ceo-img">
            <div className="media-card">
              <img src={ceoImg} alt="CEO K. Ravichandran" className="media-card__img" />
            </div>
          </div>
          <div className="about-ceo-text">
            <h2>Meet Our Founder</h2>
            <p>
              R V Testing Machines (RVTM), founded in 2015 by K. Ravichandran, blends technical leadership with
              practical field experience. Our founder has led the company through breakthrough service, calibration,
              and R&D work focused on RV machine testing principles for universal testing machines.
            </p>
            <p>
              RVTM delivers specialized support for tensile, compression, hardness, and impact testing systems,
              helping clients maintain accuracy, meet compliance, and improve test repeatability across all material classes.
            </p>
            <p>
              Our team of expert technocrats serves customers across India, offering proven calibration procedures,
              preventive maintenance, and data-driven machine validation as part of a full-service testing lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="about-overview">
        <div className="about-overview-inner">
          <div className="about-overview-text">
            <h2>About RV Testing Machines</h2>
            <p>
              RVTM is a trusted provider of high-performance material testing machines, accredited calibration,
              and expert technical support. We focus on RV machine testing excellence by combining global
              equipment sourcing with research-led calibration and inspection services.
            </p>
            <ul className="overview-list">
              <li>Authorized sales and service for universal testing machines, hardness testers, and calibration benches.</li>
              <li>Hands-on R&D in RV machine testing methodology, precision, and repeatability.</li>
              <li>NABL accredited calibration aligned to ISO/IEC 17025 requirements.</li>
              <li>Customized testing solutions for metals, polymers, composites, rubber, and more.</li>
            </ul>
            <Link to="/contact" className="about-cta-btn">Schedule a Visit</Link>
          </div>
          <div className="about-company-logo">
            <div className="about-company-logo__frame">
              <img src={logoPdf} alt="RV Testing Machines" />
            </div>
            <p className="about-company-logo__title">RV TESTING MACHINES</p>
            <p className="about-company-logo__tagline">Trusted RV Testing Partner</p>
          </div>
        </div>
      </section>

      <section className="about-highlights">
        <div className="highlight-card">
          <h3>Reliable Test Outcomes</h3>
          <p>We ensure each RV machine test delivers accurate, repeatable results that help you make confident quality decisions.</p>
        </div>
        <div className="highlight-card">
          <h3>Expert Calibration</h3>
          <p>NABL accredited calibration and performance validation keep your equipment compliant, safe, and ready for production.</p>
        </div>
        <div className="highlight-card">
          <h3>End-to-End Support</h3>
          <p>From commissioning and training to maintenance and upgrades, RVTM supports your entire testing lifecycle.</p>
        </div>
      </section>

      <section className="about-research">
        <div className="research-header">
          <h2>RV Machine Testing Principles</h2>
          <p>
            Our R&D focus is on the core principles that make testing machines accurate and reliable: stable loading, precise measurement,
            correct fixturing, and consistent calibration.
          </p>
        </div>
        <div className="research-grid">
          <article className="principle-card">
            <div className="media-card">
              <img src={durometerImg} alt="Tensile testing principle" className="media-card__img" />
            </div>
            <div className="principle-content">
              <h3>Tensile Testing</h3>
              <p>Tracking elongation and force under controlled load to determine material strength and ductility.</p>
            </div>
          </article>
          <article className="principle-card">
            <div className="media-card">
              <img src={megaImg} alt="Compression testing principle" className="media-card__img" />
            </div>
            <div className="principle-content">
              <h3>Compression Testing</h3>
              <p>Measuring how materials respond under crushing loads to validate structure, form, and performance.</p>
            </div>
          </article>
          <article className="principle-card">
            <div className="media-card">
              <img src={up50Img} alt="Hardness testing principle" className="media-card__img" />
            </div>
            <div className="principle-content">
              <h3>Hardness Testing</h3>
              <p>Assessing surface resistance with standardized indenters for quality control and material selection.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-why">
        <div className="about-why-inner">
          <div className="about-why-text">
            <h2>Why RVTM Is Different</h2>
            <p className="why-intro">We combine practical testing experience with engineering-grade calibration and machine-level research.</p>
            <ul className="why-list">
              <li>
                <span className="why-number">01</span>
                <div>
                  <strong>Certified Calibration</strong>
                  <p>NABL & ISO/IEC 17025 calibration ensures traceable and industry-accepted test performance.</p>
                </div>
              </li>
              <li>
                <span className="why-number">02</span>
                <div>
                  <strong>Quality Machine Service</strong>
                  <p>Preventive maintenance and repairs from technicians trained on RV machine systems.</p>
                </div>
              </li>
              <li>
                <span className="why-number">03</span>
                <div>
                  <strong>Smart Testing Workflows</strong>
                  <p>Standardized setup, sample handling, and reporting for repeatable laboratory output.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-why-img feature-panel media-card">
            <div className="feature-tag">RV Testing Expertise</div>
            <img src={technicalImg} alt="Testing Equipment" className="media-card__img" />
            <div className="feature-footer">
              <strong>Precision systems</strong>
              <span>Configured for industrial and lab-grade quality evaluation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-partners section-pad-tight">
        <h2 className="section-heading">Trusted by Quality Teams</h2>
        <p className="section-subheading">Our clients choose us for accurate testing, careful calibration, and practical service delivery.</p>
        <div className="partner-grid">
          <div className="partner-tag">Manufacturing</div>
          <div className="partner-tag">Automotive</div>
          <div className="partner-tag">Construction</div>
          <div className="partner-tag">Aerospace</div>
          <div className="partner-tag">Metals & Alloys</div>
          <div className="partner-tag">Research Labs</div>
        </div>
      </section>

      <GlobalPartners subtitle="Authorized representation for leading global testing technology brands." />
    </main>
  );
}

export default About;
