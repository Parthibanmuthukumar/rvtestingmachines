import { motion } from 'framer-motion';

export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden />
      <motion.div
        className="page-hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero-sub">{subtitle}</p> : null}
        {children}
      </motion.div>
    </section>
  );
}
