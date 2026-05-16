import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { ImageSlider } from '../components/shared/ImageSlider';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import {
  consultationIntro,
  consultationSlides,
  consultationHighlights,
  consultationStats,
  consultationGallery,
} from '../data/consultationData';

export default function Consultation() {
  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Expert Guidance"
        title="Consultation"
        subtitle={consultationIntro}
      >
        <Link to="/contact" className="about-cta-btn" style={{ marginTop: 20 }}>
          Book a Consultation
        </Link>
      </PageHero>

      <section className="consultation-slider-section">
        <ScrollAnimation>
          <div className="consultation-slider-wrap">
            <ImageSlider slides={consultationSlides} />
          </div>
        </ScrollAnimation>
      </section>

      <div className="consultation-cards">
        {consultationHighlights.map((item) => (
          <ScrollAnimation key={item.title}>
            <article className="consultation-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </ScrollAnimation>
        ))}
      </div>

      <section className="consultation-stats" aria-label="Company highlights">
        {consultationStats.map((stat) => (
          <ScrollAnimation key={stat.label}>
            <div className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </ScrollAnimation>
        ))}
      </section>

      <section className="consultation-gallery">
        {consultationGallery.map((item) => (
          <ScrollAnimation key={item.src}>
            <div className="media-card">
              <img src={item.src} alt={item.alt} className="media-card__img" loading="lazy" />
            </div>
          </ScrollAnimation>
        ))}
      </section>

      <GlobalPartners />
    </main>
  );
}
