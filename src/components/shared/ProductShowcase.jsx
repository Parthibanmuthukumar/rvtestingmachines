import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollAnimation from '../ScrollAnimation';

export function ProductShowcase({ product, reverse = false }) {
  return (
    <section className={`product-showcase ${reverse ? 'product-showcase--alt' : ''}`}>
      <motion.div
        className="product-showcase-glow"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      <div className="product-showcase-inner">
        <ScrollAnimation direction={reverse ? 'right' : 'left'}>
          <motion.div
            className="product-showcase-media"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="product-showcase-media-inner">
              <img src={product.image} alt={product.title} loading="lazy" />
            </div>
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation direction={reverse ? 'left' : 'right'}>
          <div className="product-showcase-content">
            {product.category ? <span className="product-category-tag">{product.category}</span> : null}
            <h2>{product.title}</h2>
            <p className="product-showcase-desc">{product.description}</p>
            {product.features?.length ? (
              <ul className="product-feature-list">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
