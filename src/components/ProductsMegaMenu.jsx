import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TESTING_CATEGORIES } from '../data/productCategoriesData';

export function ProductsMegaMenu({ onClose }) {
  const [activeId, setActiveId] = useState(TESTING_CATEGORIES[0].id);

  const activeCategory =
    TESTING_CATEGORIES.find((cat) => cat.id === activeId) || TESTING_CATEGORIES[0];

  return (
    <div
      className="mega-menu"
      role="region"
      aria-label="Our Products Menu"
    >
      <div className="mega-menu-inner">
        {/* Left Column: Category List */}
        <div className="mega-menu-left">
          <div className="mega-menu-left-header">
            <span className="mega-menu-tag">Our Products</span>
            <span className="mega-menu-count">{TESTING_CATEGORIES.length} Categories</span>
          </div>
          <ul className="mega-category-list" role="tablist">
            {TESTING_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <li key={cat.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`mega-category-item${isActive ? ' is-active' : ''}`}
                    onMouseEnter={() => setActiveId(cat.id)}
                    onClick={() => setActiveId(cat.id)}
                  >
                    <span className="mega-category-name">{cat.name}</span>
                    <svg
                      className="mega-category-arrow"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Preview Panel for Active Category */}
        <div className="mega-menu-right" key={activeCategory.id}>
          <div className="mega-preview-header">
            <h3>{activeCategory.name}</h3>
            <p>{activeCategory.description}</p>
          </div>

          <div className="mega-subcategories-grid">
            {activeCategory.subcategories.map((sub, idx) => (
              <Link
                key={idx}
                to={sub.link}
                className="mega-sub-card"
                onClick={onClose}
              >
                <div className="mega-sub-badge">{sub.material}</div>
                <div className="mega-sub-img-frame">
                  <img src={sub.image} alt={sub.title} loading="lazy" />
                </div>
                <div className="mega-sub-info">
                  <h4>{sub.title}</h4>
                  <p>{sub.text}</p>
                  <span className="mega-sub-link">
                    Explore Solutions →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mega-menu-footer">
            <Link
              to="/products"
              className="mega-footer-link"
              onClick={onClose}
            >
              Browse Full Products Catalog →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
