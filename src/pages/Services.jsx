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
        title="Product Service"
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
          <div className="service-block-inner">
            <ScrollAnimation direction="left">
              <div className="service-block-text">
                <h2>{block.title}</h2>
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
        </section>
      ))}

      <section className="calibration-section" id="calibration">
        <div className="calibration-inner">
          <ScrollAnimation direction="left">
            <div className="calibration-images">
              {calibrationSection.images.map((img, i) => (
                <div key={i} className="media-card media-card--contain">
                  <img
                    src={img}
                    alt={`Calibration ${i + 1}`}
                    className="media-card__img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <div className="calibration-content">
              <h2>{calibrationSection.title}</h2>
              <p>{calibrationSection.description}</p>
              <ul className="calibration-list">
                {calibrationSection.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="about-cta-btn">
                Schedule Calibration
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <GlobalPartners />
    </main>
  );
}
