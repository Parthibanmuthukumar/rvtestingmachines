import { Link } from 'react-router-dom';
import { TESTING_CATEGORIES } from '../data/productCategoriesData';

export function ProductsMegaMenu({ onClose }) {
  return (
    <div
      className="mega-menu mega-menu--categories-only"
      role="region"
      aria-label="Our Products Categories"
    >
      <div className="mega-menu-categories-header">
        <div className="header-title-wrap">
          <span className="mega-menu-tag">Our Products</span>
          <h3 className="mega-menu-heading">Testing Categories</h3>
        </div>
        <span className="mega-menu-count-chip">{TESTING_CATEGORIES.length} Categories</span>
      </div>

      <div className="mega-categories-grid">
        {TESTING_CATEGORIES.map((cat, index) => (
          <Link
            key={cat.id}
            to={`/products#${cat.id}`}
            className="mega-category-grid-item"
            onClick={onClose}
          >
            <span className="cat-num">{String(index + 1).padStart(2, '0')}</span>
            <span className="cat-name">{cat.name}</span>
            <svg
              className="cat-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ))}
      </div>

      <div className="mega-menu-categories-footer">
        <Link to="/products" className="btn-view-all-products" onClick={onClose}>
          View All Testing Equipment &rarr;
        </Link>
      </div>
    </div>
  );
}

