import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ImageSlider({ slides, intervalMs = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  return (
    <div className="image-slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current].src}
          src={slides[current].src}
          alt={slides[current].alt}
          className="image-slider-img"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </AnimatePresence>
      <div className="image-slider-overlay" aria-hidden />
      {slides.length > 1 ? (
        <div className="image-slider-dots">
          {slides.map((slide, idx) => (
            <button
              key={slide.src}
              type="button"
              className={`image-slider-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
