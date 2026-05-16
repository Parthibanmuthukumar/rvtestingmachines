import { motion, useReducedMotion } from 'framer-motion';

export function FadeUp({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <motion.div className={className}>{children}</motion.div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
