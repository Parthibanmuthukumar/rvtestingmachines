import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import { serviceBlocks, servicesIntro, calibrationSection } from '../data/servicesData';

export default function Services() {
  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Complete Lifecycle Support"
        title="Product & Calibration"
        subtitle={servicesIntro}
      >
        <Link to="/contact" className="about-cta-btn" style={{ marginTop: 20 }}>
          Get Service Support
        </Link>
      </PageHero>

      {serviceBlocks.map((block, index) => (
        <section
          key={block.id}
          className={`service-block${index % 2 === 1 ? ' service-block--alt' : ''}`}
        >
          <div className="service-block-container">
            <ScrollAnimation direction="up">
              <span className="label">0{index + 1}</span>
              <h2 className="service-block-main-title">{block.title}</h2>
            </ScrollAnimation>
            <div className="service-block-inner">
              <ScrollAnimation direction="left">
                <div className="service-block-text">
                  <p>{block.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right">
                <div className="service-images-grid">
                  {block.images.map((img, i) => (
                    <div key={i} className="media-card">
                      <img src={img} alt={`${block.title} ${i + 1}`} className="media-card__img" loading="lazy" />
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      ))}

      {/* Calibration Section — data from servicesData.js only */}
      <section className="calibration-section" id="calibration">
        <div className="calibration-inner">
          <ScrollAnimation direction="up">
            <span className="label label--gold">NABL Accredited</span>
            <h2 className="calibration-main-title">{calibrationSection.title}</h2>
          </ScrollAnimation>
          <div className="calibration-grid-container">
            <ScrollAnimation direction="left">
              <div className="calibration-images">
                {calibrationSection.images.map((img, i) => (
                  <div key={i} className="media-card media-card--contain">
                    <img src={img} alt={`Calibration ${i + 1}`} className="media-card__img" loading="lazy" />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="calibration-content">
                {calibrationSection.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
                <Link to="/contact" className="about-cta-btn" style={{ marginTop: '8px' }}>
                  Schedule Calibration
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <GlobalPartners />
    </main>
  );
}
