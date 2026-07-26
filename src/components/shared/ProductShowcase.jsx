import { Link } from 'react-router-dom';
import ScrollAnimation from '../ScrollAnimation';
import TiltCard from '../TiltCard';

export function ProductShowcase({ product, reverse = false }) {
  return (
    <section className={`product-showcase${reverse ? ' product-showcase--alt' : ''}`}>
      <div className="product-showcase-container">
        <div className={`product-showcase-inner${reverse ? ' product-showcase-inner--reverse' : ''}`}>

          {/* Image */}
          <ScrollAnimation direction={reverse ? 'right' : 'left'}>
            <TiltCard className="product-showcase-media" intensity={10}>
              <div className="product-showcase-media-inner">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
            </TiltCard>
          </ScrollAnimation>

          {/* Content — no scroll animation so feature list points appear instantly */}
          <div className="product-showcase-content">
            {product.category && <span className="product-category-tag">{product.category}</span>}
            <h2 className="product-showcase-main-title">{product.title}</h2>
            <p className="product-showcase-desc">{product.description}</p>
            {product.features?.length > 0 && (
              <ul className="product-feature-list">
                {product.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            )}
            <Link to="/contact" className="about-cta-btn">Enquire Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
