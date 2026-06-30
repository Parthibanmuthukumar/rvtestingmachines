import { motion } from 'framer-motion';
import { Sliders, ClipboardCheck, Award, Eye } from 'lucide-react';
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

const highlightIcons = [Sliders, ClipboardCheck, Award, Eye];

export default function Consultation() {
  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Expert Guidance"
        title="Consultation"
        subtitle={consultationIntro}
      />

      <section className="consultation-slider-section">
        <ScrollAnimation>
          <div className="consultation-slider-wrap">
            <ImageSlider slides={consultationSlides} />
          </div>
        </ScrollAnimation>
      </section>

      <div className="consultation-cards-container">
        {consultationHighlights.map((item, idx) => {
          const Icon = highlightIcons[idx] || Sliders;
          return (
            <ScrollAnimation key={item.title}>
              <motion.article
                className="consultation-card-premium"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="card-accent-line" />
                <div className="card-icon-wrapper">
                  <Icon size={24} className="card-icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            </ScrollAnimation>
          );
        })}
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
