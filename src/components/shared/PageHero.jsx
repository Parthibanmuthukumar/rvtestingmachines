import { motion } from 'framer-motion';

export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="page-hero" aria-label={title}>
      <div className="page-hero-bg" aria-hidden />
      <motion.div
        className="page-hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        {children}
      </motion.div>
    </section>
  );
}
