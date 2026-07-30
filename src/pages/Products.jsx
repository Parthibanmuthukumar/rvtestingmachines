import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import { TESTING_CATEGORIES, INTRO_HIGHLIGHTS } from '../data/productCategoriesData';
import '../styles/products-page.css';

export default function Products() {
  const location = useLocation();
  const [activeId, setActiveId] = useState(TESTING_CATEGORIES[0].id);

  // Smooth scroll to a category section by ID
  const scrollToCategory = (id) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Sync active category with URL hash if provided
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const match = TESTING_CATEGORIES.find((cat) => cat.id === hashId);
      if (match) {
        setTimeout(() => {
          scrollToCategory(match.id);
        }, 150);
      }
    }
  }, [location.hash]);

  // Observer to update active sidebar link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const cat of TESTING_CATEGORIES) {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Precision Material Testing"
        title="Our Products & Test Solutions"
        subtitle="Explore our comprehensive range of material testing equipment, hardness testers, universal testing machines, and polymer characterization systems."
      />

      <section className="products-page-wrapper">
        <div className="products-container">
          <div className="products-layout">
            
            {/* ── LEFT SIDEBAR NAVIGATION ── */}
            <aside className="products-sidebar" aria-label="Testing Property Categories">
              <div className="sidebar-header">
                <h3>Testing Categories</h3>
                <span className="count-badge">{TESTING_CATEGORIES.length} Items</span>
              </div>
              <ul className="sidebar-menu-list" role="tablist">
                {TESTING_CATEGORIES.map((cat, idx) => {
                  const isActive = cat.id === activeId;
                  const numStr = String(idx + 1).padStart(2, '0');
                  return (
                    <li key={cat.id} className="sidebar-item" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`sidebar-btn${isActive ? ' is-active' : ''}`}
                        onClick={() => scrollToCategory(cat.id)}
                      >
                        <span className="sidebar-btn-num">{numStr}</span>
                        <span className="sidebar-btn-text">{cat.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* ── RIGHT MAIN CONTENT PANEL (ALL CATEGORIES DISPLAYED) ── */}
            <div className="products-main-panel">
              
              {/* Top Overview Bullet Highlights */}
              <div className="product-intro-highlights">
                <div className="highlight-list">
                  {INTRO_HIGHLIGHTS.map((item) => (
                    <div key={item.id} className="highlight-item">
                      <svg
                        className="highlight-icon-pin"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2z" />
                      </svg>
                      <p className="highlight-text">
                        <strong>{item.boldText}</strong> {item.normalText}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Render ALL 16 Categories sequentially */}
              {TESTING_CATEGORIES.map((category) => (
                <section
                  key={category.id}
                  id={category.id}
                  className="product-category-section"
                  style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}
                >
                  <ScrollAnimation>
                    <div className="active-category-header">
                      <h2 className="category-title">{category.name}</h2>
                      <p className="category-desc">{category.description}</p>
                    </div>

                    {category.subcategories && category.subcategories.length > 0 && (
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1.5rem' }}>
                          Available Equipment &amp; Test Models
                        </h3>
                        <div className="category-products-grid">
                          {category.subcategories.map((sub, idx) => (
                            <div key={idx} className="product-item-card">
                              <div className="product-card-media">
                                <span className="product-material-tag">{sub.material}</span>
                                <img src={sub.image} alt={sub.title} loading="lazy" />
                              </div>
                              <div className="product-card-content">
                                <h3>{sub.title}</h3>
                                <p>{sub.text}</p>
                                {sub.tags && sub.tags.length > 0 && (
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '0.85rem' }}>
                                    {sub.tags.map((tag, tIdx) => (
                                      <span
                                        key={tIdx}
                                        style={{
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: '6px',
                                          padding: '5px 12px',
                                          background: '#f1f5f9',
                                          color: '#0f172a',
                                          fontSize: '0.82rem',
                                          fontWeight: '700',
                                          borderRadius: '6px',
                                          border: '1px solid #cbd5e1',
                                          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
                                        }}
                                      >
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1d4ed8' }} />
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </ScrollAnimation>
                </section>
              ))}

            </div>

          </div>
        </div>
      </section>

      <GlobalPartners
        title="Principles &amp; Technology Partners"
        subtitle="Representing leading global brands in material testing and calibration."
      />
    </main>
  );
}
