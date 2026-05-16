import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoPdf from '../assets/images/RVTMPL LOGO_page-0001.jpg';
import heroImg1 from '../assets/images/slider-1.jpg';
import heroImg2 from '../assets/images/slider-2.jpg';
import heroImg3 from '../assets/images/slider-3.jpg';
import featureImg1 from '../assets/images/slider-1.jpg';
import featureImg2 from '../assets/images/technical-support.jpg';
import ScrollAnimation from '../components/ScrollAnimation';
import { HomeBrandLogo } from '../components/shared/HomeBrandLogo';
import { HOME_EXPERTISE_TAGS } from '../seo/keywords';
import { GlobalPartners } from '../components/shared/GlobalPartners';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [heroImg1, heroImg2, heroImg3];
const heroTitles = ['RV Testing\nMachines', 'Precision\nCalibration', 'Advanced\nMaterial Testing'];
const heroSubs = [
  'ISO/IEC 17025 Accredited Laboratory',
  'Traceable to National Standards',
  'Serving Industry Since 2004',
];

const featureCards = [
  {
    src: featureImg1,
    alt: 'Material testing equipment',
    title: 'Material Testing',
    text: 'Universal testing systems for tensile, compression, and quality validation across industrial applications.',
  },
  {
    src: featureImg2,
    alt: 'Calibration and technical support',
    title: 'Calibration & Support',
    text: 'NABL-accredited calibration and expert technical assistance to keep your lab compliant and productive.',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const heroSectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImgRef = useRef(null);
  const arrowBtnRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: '40% top',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        heroImgRef.current,
        { scale: 1, y: 0 },
        {
          scale: 1.08,
          y: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.to(arrowBtnRef.current, {
        y: 10,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.fromTo(
        arrowBtnRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: '25% top',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const goTo = (idx) => {
    clearInterval(intervalRef.current);
    setCurrent(idx);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  return (
    <main id="main-content" className="home-page">
      <section ref={heroSectionRef} id="home" className="prem-hero">
        <div ref={heroTextRef} className="prem-hero-text">
          <span className="prem-hero-eyebrow">ISO / IEC 17025 Accredited</span>
          <h1 className="prem-hero-title">
            {heroTitles[current].split('\n').map((line, i) => (
              <span key={i} className="prem-hero-title-line">{line}</span>
            ))}
          </h1>
          <p className="prem-hero-sub">{heroSubs[current]}</p>
          <div className="prem-hero-ctas">
            <Link to="/contact" className="prem-btn-primary">Request a Quote</Link>
            <Link to="/products" className="prem-btn-secondary">Our Products ↓</Link>
          </div>
        </div>

        <div className="prem-slider-wrap">
          <div ref={heroImgRef} className="prem-slider-inner">
            {heroImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Slide ${i + 1}`}
                className={`prem-slide-img${i === current ? ' active' : ''}`}
              />
            ))}
            <div className="prem-slider-overlay" />
          </div>

          <button
            ref={arrowBtnRef}
            className="prem-arrow-btn"
            aria-label="Scroll down"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            type="button"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div className="prem-dots">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`prem-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section section-pad surface-white" aria-labelledby="home-brand-heading">
        <div className="page-container brand-section__inner">
          <ScrollAnimation>
            <HomeBrandLogo
              logoSrc={logoPdf}
              title="RV TESTING MACHINES"
              subtitle="ISO/IEC 17025 Accredited Calibration Laboratory"
            />
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="description-box">
              <h2 id="home-brand-heading" className="sr-only">
                About RV Testing Machines
              </h2>
              <p>
                With over 20 years of expertise in the sales, service, and calibration of material
                testing machines in India, <strong>RV Testing Machines</strong> is a trusted partner for
                universal testing machines (UTM), rubber and metal testing equipment, hardness testers,
                durometers, and ISO/IEC 17025 accredited calibration. We serve automotive, aerospace,
                construction, polymer, and quality laboratories with precision instruments, installation,
                preventive maintenance, and traceable calibration across India.
              </p>
              <p>
                Partnering with leading global brands from the UK, Europe, and worldwide markets, we deliver
                cutting-edge testing solutions, technical consultation, and comprehensive after-sales support
                so your laboratory stays compliant, accurate, and production-ready.
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="home-expertise">
          <p className="home-expertise__label">Areas of expertise</p>
          <ul className="home-expertise__tags" aria-label="Material testing and calibration services">
            {HOME_EXPERTISE_TAGS.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="features-section section-pad">
        <div className="page-container">
          {featureCards.map((card, index) => (
            <ScrollAnimation key={card.title} direction={index === 0 ? 'left' : 'right'}>
              <article className="feature-card media-card">
                <img src={card.src} alt={card.alt} className="media-card__img" loading="lazy" />
                <div className="feature-card-caption">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <GlobalPartners />
    </main>
  );
}
