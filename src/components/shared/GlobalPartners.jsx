import { motion } from 'framer-motion';
import ScrollAnimation from '../ScrollAnimation';
import { PARTNER_LOGOS } from '../../data/partnerLogos';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const defaultSubtitle =
  'Representing leading international brands in material testing, calibration, and industrial quality assurance.';

export function GlobalPartners({
  title = 'Our Global Technology Partners',
  subtitle = defaultSubtitle,
}) {
  return (
    <section className="global-partners section-pad" aria-labelledby="global-partners-heading">
      <div className="global-partners__bg" aria-hidden />
      <div className="page-container global-partners__inner">
        <ScrollAnimation>
          <header className="global-partners__header">
            <p className="eyebrow">Trusted Worldwide</p>
            <h2 id="global-partners-heading">{title}</h2>
            {subtitle ? <p className="global-partners__subtitle">{subtitle}</p> : null}
          </header>
        </ScrollAnimation>

        <ul className="global-partners__grid" role="list">
          {PARTNER_LOGOS.map((partner, index) => (
            <li key={partner.id} role="listitem">
              <motion.article
                className="global-partners__card"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <img
                  src={partner.src}
                  alt={`${partner.alt} logo`}
                  className="global-partners__logo"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">{partner.name}</span>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
