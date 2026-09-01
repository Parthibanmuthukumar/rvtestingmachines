import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoPdf     from '../assets/images/RVTMPL LOGO_page-0001.jpg';
import heroImg1    from '../assets/images/hero-1.jpg';
import heroImg2    from '../assets/images/hero-2.jpg';
import heroImg3    from '../assets/images/hero-3.jpg';
import nablImg     from '../assets/images/NIC_29221.jpg';
import featCoreImg from '../assets/images/material_testing_core.jpg';
import manWithMachine from '../assets/images/man_with_machine.png';
import ScrollAnimation   from '../components/ScrollAnimation';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import { HOME_EXPERTISE_TAGS } from '../seo/keywords';
import SEO from '../components/SEO/SEO';
import { getPageMeta } from '../seo/pageMeta';
import { productItems } from '../data/productsData';
import { calibrationSection, serviceBlocks } from '../data/servicesData';
import { HOME_FAQS } from '../seo/structuredData';

/* ── Hero slides — text taken directly from original data / siteConfig ── */
const slides = [
  {
    img:    heroImg1,
    eyebrow:'DOLI Digital Closed-Loop Control',
    title:  'Dynamic Fatigue',
    em:     'Testing Systems',
    sub:    'High-cycle & low-cycle dynamic fatigue testing machines with 32-bit DSP real-time digital closed-loop control.',
  },
  {
    img:    heroImg2,
    eyebrow:'FORM+TEST Prüfsysteme Germany',
    title:  'Creep & Stress Rupture',
    em:     'Testing Rigs',
    sub:    'High-temperature furnace-integrated creep testing systems with precision thermal monitoring and ISO accreditation.',
  },
  {
    img:    heroImg3,
    eyebrow:'ISO / IEC 17025 Accredited Calibration',
    title:  'Precision Hardness',
    em:     'Testing Stations',
    sub:    'High-precision digital hardness testers, multi-indenter turrets, and Shore durometer measurement systems.',
  },
];

/*
  Hero stats — verified from original data files:
  consultationData.js → { '10+', '500+', 'ISO', '24/7' }
  siteConfig.js       → "since 2015" (so 10+ is correct)
*/
const heroStats = [
  { num: '10+',  label: 'Years Industry Experience' },
  { num: '500+', label: 'Machines Supported' },
  { num: 'ISO',  label: '17025 Accredited Lab' },
];

/* ── Feature cards ── */
const featureCards = [
  {
    src:   featCoreImg,
    tag:   'Core Capability',
    title: 'Material Testing',
    text:  'Universal testing machines for tensile, compression, hardness and quality validation across industrial applications.',
  },
  {
    src:   manWithMachine,
    tag:   'Accredited Service',
    title: 'Calibration & Support',
    text:  'NABL-accredited calibration laboratory (Cert No: CC – 4232) and expert technical support to keep your lab compliant and production-ready.',
  },
];

/* ── Why Choose Us data ── */
const whyCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'NABL Accredited Lab',
    text:  'ISO/IEC 17025 accredited calibration laboratory (Certificate No: CC – 4232) with direct traceability to national measurement standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '10+ Years Experience',
    text:  'Founded in 2015 by industry expert Mr. K. Ravichandran, bringing over two decades of hands-on material testing expertise.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'End-to-End Support',
    text:  'Complete lifecycle coverage — from machine sales and installation to commissioning, preventive maintenance, and certified calibration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Multi-Material Expertise',
    text:  'Deep domain knowledge across rubber, elastomers, metals, alloys, plastics, composites, wood, ceramic, glass, and textiles.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Global Compliance Standards',
    text:  'High-precision material testing equipment manufactured to conform with international ISO, ASTM, DIN, and JIS standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: '500+ Machines Supported',
    text:  'Nationwide on-site service footprint across India — supporting over 500 testing machines with 24/7 technical assistance.',
  },
];

/* ── Split Hero Component ── */
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setCurrent(i);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const s = slides[current];

  return (
    <section className="hero" aria-label="Hero banner">

      {/* ── Left: dark text panel ── */}
      <div className="hero-left">
        <div className="hero-text-content">
          <p className="hero-eyebrow" key={`ey-${current}`}>{s.eyebrow}</p>

          <h1 className="hero-title" key={`ti-${current}`}>
            {s.title}
            <em>{s.em}</em>
          </h1>

          <p className="hero-sub" key={`su-${current}`}>{s.sub}</p>
        </div>

        <div className="hero-ctas">
          <Link to="/contact" className="btn btn-gold">Request a Quote</Link>
          <Link to="/products" className="btn btn-outline-white">Our Products →</Link>
        </div>

        {/* Stats from original consultationData.js */}
        <div className="hero-stats">
          {heroStats.map(st => (
            <div className="hero-stat" key={st.num}>
              <span className="hero-stat-num">{st.num}</span>
              <span className="hero-stat-label">{st.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-dots" role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              className={`hero-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Right: 4K image panel ── */}
      <div className="hero-right">
        {slides.map((sl, i) => (
          <div key={i} className={`hero-slide-img${i === current ? ' active' : ''}`}>
            <img src={sl.img} alt="" aria-hidden="true" />
          </div>
        ))}
      </div>

    </section>
  );
};

/* ── Home Page ── */
export default function Home() {
  const half = Math.ceil(HOME_EXPERTISE_TAGS.length / 2);
  const row1 = HOME_EXPERTISE_TAGS.slice(0, half);
  const row2 = HOME_EXPERTISE_TAGS.slice(half);

  const productCategoryLinkMap = {
    'rubber-durometer-hdd2': '/products#hardness-testing',
    'rubber-irhd-micro': '/products#coating-thickness-measurement',
    'rheometer-mdr': '/products#rheology-testing',
    'mooney-viscometer': '/products#viscosity-testing',
    'metal-hardness-system': '/products#hardness-testing',
    'fischer-nano-indentation': '/products#nano-indentation-hardness-testing',
    'utm-type-em': '/products#tensile-compression-testing',
    'spares-accessories': '/products#spares',
  };

  const pageMeta = getPageMeta('/');

  return (
    <main id="main-content">
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        path="/"
      />
      <Hero />

      {/* ── Brand / About Section ── */}
      <section className="brand-section" aria-labelledby="brand-h">
        <div className="brand-section__inner">
          <ScrollAnimation direction="up">
            <div className="brand-content-center">
              <span className="home-label">About Us</span>
              <h2 id="brand-h">
                RV Testing Machines{' '}
                <span className="brand-accent">Private Limited</span>
              </h2>

              <div className="brand-logo-col">
                <div className="brand-logo-frame">
                  <img
                    src={logoPdf}
                    alt="RV Testing Machines Private Limited logo"
                    className="brand-logo-img"
                  />
                </div>
                <span className="brand-cert-text">ISO / IEC 17025 Accredited</span>
              </div>

              <p className="brand-text-p">
                NABL accredited material testing, universal testing machines, rubber &amp; metal
                testing equipment, calibration and technical support across India since 2015.
              </p>
              <p className="brand-text-p">
                From installation and commissioning to preventive maintenance and performance
                validation, RVTM provides complete product service support for material testing
                machines across India.
              </p>

              <div className="brand-cta-wrap">
                <Link to="/about" className="btn-brand-about">
                  Learn More About Us &rarr;
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="home-products" aria-labelledby="products-h">
        <div className="home-products-inner">
          <div className="home-products-header">
            <ScrollAnimation direction="up">
              <span className="home-label">Our Equipment</span>
              <h2 id="products-h">Featured Products</h2>
              <p>
                Precision material testing machines for rubber, elastomers, metals, and
                engineering materials — built for accuracy, compliance, and production reliability.
              </p>
            </ScrollAnimation>
          </div>
          <div className="product-grid">
            {productItems.slice(0, 8).map((product, idx) => (
              <ScrollAnimation key={product.id} direction="up" delay={idx * 100}>
                <article className="product-card">
                  <div className="product-card-img">
                    <img src={product.image} alt={product.title} loading="lazy" />
                  </div>
                  <div className="product-card-body">
                    <span className="product-card-cat">{product.category}</span>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <Link
                      to={productCategoryLinkMap[product.id] || '/products'}
                      className="product-card-link"
                    >
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation direction="up">
            <div className="home-products-cta">
              <Link to="/products" className="btn btn-outline">View All Products →</Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── Expertise Marquee ── */}
      <section className="marquee-section" aria-label="Areas of expertise">
        <p className="marquee-label-row">Areas of Expertise</p>
        <div className="marquee-track-wrap">
          <div className="marquee-track marquee-track--l">
            {[...row1, ...row1].map((t, i) => (
              <span key={`r1-${i}`} className="marquee-pill">
                <span className="marquee-pill-dot" />{t}
              </span>
            ))}
          </div>
          <div className="marquee-track marquee-track--r">
            {[...row2, ...row2].map((t, i) => (
              <span key={`r2-${i}`} className="marquee-pill">
                <span className="marquee-pill-dot" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Cards (original 2 only) ── */}
      <section className="home-services" aria-labelledby="feat-h">
        <div className="home-services-inner">
          <div className="home-services-header">
            <span className="home-label">Our Services</span>
            <h2 id="feat-h">What We Deliver</h2>
            {/* From servicesIntro */}
            <p>
              Complete product service support — from installation and commissioning to
              preventive maintenance, performance validation, and NABL accredited calibration.
            </p>
          </div>
          <div className="feat-cards-grid">
            {featureCards.map((card, idx) => (
              <ScrollAnimation key={card.title} direction={idx === 0 ? 'left' : 'right'}>
                <article className="feat-card">
                  <div className="feat-card-img">
                    <img src={card.src} alt={card.title} loading="lazy" />
                  </div>
                  <div className="feat-card-body">
                    <span className="feat-card-tag">{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <div style={{ marginTop: '1.25rem' }}>
                      <Link
                        to={idx === 0 ? '/products' : '/services'}
                        className="feat-card-cta-btn"
                      >
                        {idx === 0 ? 'Explore Testing Equipment' : 'Explore Calibration Services'} &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service & Calibration ── */}
      <section className="home-calibration" aria-labelledby="calib-h">
        <div className="home-calibration-inner">
          <div className="calibration-showcase">
            <ScrollAnimation direction="left">
              <div className="calibration-text">
                <span className="home-label">Service &amp; Calibration</span>
                <h2 id="calib-h" className="calibration-heading">{calibrationSection.title}</h2>
                {calibrationSection.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <div style={{ marginTop: '0.5rem' }}>
                  <Link to="/contact" className="btn btn-gold calibration-cta">
                    Schedule Calibration
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="calibration-img-wrap">
                <img src={nablImg} alt="NABL accredited calibration laboratory" loading="lazy" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Service highlight cards */}
          <div className="service-highlights">
            {serviceBlocks.map((block, idx) => (
              <ScrollAnimation key={block.id} direction="up" delay={idx * 100}>
                <article className="service-highlight-card">
                  <span className="service-highlight-num">0{idx + 1}</span>
                  <h3>{block.title}</h3>
                  <p>{block.description}</p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="home-why" aria-labelledby="why-h">
        <div className="home-why-inner">
          <div className="home-why-header">
            <ScrollAnimation direction="up">
              <span className="home-label">Why Choose Us</span>
              <h2 id="why-h">The RVTMPL Advantage</h2>
              <p>
                Trusted by laboratories, manufacturers, and R&amp;D facilities across India for
                precision testing equipment, accredited calibration, and reliable technical support.
              </p>
            </ScrollAnimation>
          </div>
          <div className="why-grid">
            {whyCards.map((card, idx) => (
              <ScrollAnimation key={card.title} direction="up" delay={idx * 80}>
                <article className="why-card">
                  <div className="why-card-icon">
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section — powers Google FAQ rich results ── */}
      <section className="home-faq" aria-labelledby="faq-h">
        <div className="home-faq-inner">
          <div className="home-faq-header">
            <ScrollAnimation direction="up">
              <span className="home-label">Common Questions</span>
              <h2 id="faq-h">Frequently Asked Questions</h2>
              <p>
                Get quick answers about RV Testing Machines Private Limited, our NABL accreditation,
                calibration services, and material testing equipment.
              </p>
            </ScrollAnimation>
          </div>
          <div className="home-faq-list">
            {HOME_FAQS.map((faq, idx) => (
              <ScrollAnimation key={idx} direction="up" delay={idx * 50}>
                <details className="faq-item">
                  <summary className="faq-question">
                    <span>{faq.question}</span>
                    <svg
                      className="faq-chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="faq-answer">{faq.answer}</p>
                </details>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <GlobalPartners />
    </main>
  );
}
