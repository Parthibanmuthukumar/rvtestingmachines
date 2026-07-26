import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { ImageSlider } from '../components/shared/ImageSlider';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import TiltCard from '../components/TiltCard';
import {
  consultationIntro,
  consultationSlides,
  consultationHighlights,
  consultationStats,
  consultationGallery,
} from '../data/consultationData';

/*
  ALL content from consultationData.js — nothing invented.
  consultationStats: { '10+', '500+', 'ISO', '24/7' }
*/

export default function Consultation() {
  return (
    <main id="main-content" className="inner-page">

      <PageHero
        eyebrow="Expert Guidance"
        title="Consultation"
        subtitle={consultationIntro}
      />

      {/* Image Slider */}
      <section className="consultation-slider-section">
        <ScrollAnimation>
          <div className="consultation-slider-wrap">
            <ImageSlider slides={consultationSlides} />
          </div>
        </ScrollAnimation>
      </section>

      {/* Highlight Cards — directly from consultationData.consultationHighlights */}
      <div className="consultation-cards-container">
        {consultationHighlights.map((item) => (
          <ScrollAnimation key={item.title}>
            <TiltCard intensity={8}>
              <article className="consultation-card-premium">
                <div className="card-accent-line" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </TiltCard>
          </ScrollAnimation>
        ))}
      </div>

      {/* Stats — directly from consultationData.consultationStats */}
      <section className="consultation-stats" aria-label="Company statistics">
        {consultationStats.map(stat => (
          <ScrollAnimation key={stat.label}>
            <div className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </ScrollAnimation>
        ))}
      </section>

      {/* Gallery — directly from consultationData.consultationGallery */}
      <div className="consultation-gallery" style={{ maxWidth: 'var(--max)', marginInline: 'auto' }}>
        {consultationGallery.map(item => (
          <ScrollAnimation key={item.alt}>
            <div className="media-card">
              <img src={item.src} alt={item.alt} className="media-card__img" loading="lazy" />
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <GlobalPartners />
    </main>
  );
}
