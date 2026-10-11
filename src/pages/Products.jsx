import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import { TESTING_CATEGORIES, INTRO_HIGHLIGHTS } from '../data/productCategoriesData';
import SEO from '../components/SEO/SEO';
import { getPageMeta } from '../seo/pageMeta';
import doliPdf from '../assets/DOLI Catalog2026_EN_V1.pdf';
import doliDirectAccessPdf from '../assets/260806DirectAccesstoDOLIElektronik.pdf';
import '../styles/products-page.css';

const QUICK_FILTERS = [
  { label: 'All', query: '' },
  { label: 'Hardness', query: 'Hardness' },
  { label: 'Tensile & UTM', query: 'UTM' },
  { label: 'Fatigue & Creep', query: 'Fatigue' },
  { label: 'Rheology & MFR', query: 'Rheometer' },
  { label: 'Rubber & Polymers', query: 'Rubber' },
  { label: 'DOLI Electronics', query: 'DOLI' },
];

export default function Products() {
  const location = useLocation();
  const pageMeta = getPageMeta('/products');
  const [activeId, setActiveId] = useState(TESTING_CATEGORIES[0].id);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChip, setActiveChip] = useState('All');
  const [fullscreenProduct, setFullscreenProduct] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Detect mobile screen width for responsive input placeholder
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position to convert search bar to compact sticky mode
  useEffect(() => {
    const handleStickyScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleStickyScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleStickyScroll);
  }, []);

  // Close full screen modal on ESC key and prevent body background scrolling
  useEffect(() => {
    if (fullscreenProduct) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setFullscreenProduct(null);
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [fullscreenProduct]);

  // Filter categories and models in real-time
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const searchTerms = useMemo(() => {
    return trimmedQuery ? trimmedQuery.split(/\s+/).filter(Boolean) : [];
  }, [trimmedQuery]);

  const filteredCategories = useMemo(() => {
    if (searchTerms.length === 0) {
      return TESTING_CATEGORIES.map((cat) => ({
        ...cat,
        matchingSubcategories: cat.subcategories || [],
        matchCount: cat.subcategories ? cat.subcategories.length : 0,
      }));
    }

    return TESTING_CATEGORIES.map((cat) => {
      const catName = cat.name.toLowerCase();
      const catDesc = (cat.description || '').toLowerCase();
      const catMatchesQuery = searchTerms.every(term => catName.includes(term) || catDesc.includes(term));

      const matchingSubs = (cat.subcategories || []).filter((sub) => {
        const title = (sub.title || '').toLowerCase();
        const text = (sub.text || '').toLowerCase();
        const material = (sub.material || '').toLowerCase();
        const tags = (sub.tags || []).map((t) => t.toLowerCase()).join(' ');

        return searchTerms.every((term) =>
          title.includes(term) ||
          text.includes(term) ||
          material.includes(term) ||
          tags.includes(term) ||
          catName.includes(term) ||
          catDesc.includes(term)
        );
      });

      const finalSubs = matchingSubs.length > 0 ? matchingSubs : (catMatchesQuery ? (cat.subcategories || []) : []);

      if (finalSubs.length > 0 || catMatchesQuery) {
        return {
          ...cat,
          matchingSubcategories: finalSubs,
          matchCount: finalSubs.length,
        };
      }
      return null;
    }).filter(Boolean);
  }, [searchTerms]);

  const totalMatches = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + (cat.matchingSubcategories ? cat.matchingSubcategories.length : 0), 0);
  }, [filteredCategories]);

  // Derive effective active category ID based on current filtered categories
  const effectiveActiveId = filteredCategories.some((c) => c.id === activeId)
    ? activeId
    : (filteredCategories[0]?.id || '');

  // Smooth scroll to a category section by ID and update URL hash
  const scrollToCategory = (id, pushToHistory = true) => {
    setActiveId(id);
    setIsMobileOpen(false);
    document.body.classList.remove('nav-menu-open');
    document.documentElement.classList.remove('nav-menu-open');

    if (pushToHistory && window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `/products#${id}`);
    }

    requestAnimationFrame(() => {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -135;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 60);
    });
  };

  // Lock body scroll when mobile categories drawer is open
  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', isMobileOpen);
    document.documentElement.classList.toggle('nav-menu-open', isMobileOpen);
    return () => {
      document.body.classList.remove('nav-menu-open');
      document.documentElement.classList.remove('nav-menu-open');
    };
  }, [isMobileOpen]);

  // Sync active category with URL hash if provided
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const match = TESTING_CATEGORIES.find((cat) => cat.id === hashId);
      if (match) {
        document.body.classList.remove('nav-menu-open');
        document.documentElement.classList.remove('nav-menu-open');
        setTimeout(() => {
          scrollToCategory(match.id, false);
        }, 150);
      }
    }
  }, [location.hash]);

  // Observer to update active sidebar link and URL hash on scroll
  useEffect(() => {
    let currentActive = activeId;
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const cat of filteredCategories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (currentActive !== cat.id) {
              currentActive = cat.id;
              setActiveId(cat.id);
              if (window.location.hash !== `#${cat.id}`) {
                window.history.replaceState(null, '', `/products#${cat.id}`);
              }
            }
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredCategories, activeId]);

  return (
    <main id="main-content" className="inner-page">
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        path="/products"
      />
      <PageHero
        eyebrow="Precision Material Testing"
        title="Our Products & Test Solutions"
        subtitle="Explore our comprehensive range of material testing equipment, hardness testers, universal testing machines, and polymer characterization systems."
      />

      <section className="products-page-wrapper">
        <div className="products-container">

          {/* ── SEARCH & FILTER HERO BAR ── */}
          <section className={`products-search-section${isScrolled ? ' is-sticky' : ''}`} aria-label="Search and filter testing products">
            <div className="products-search-container">
              <div className="products-search-box">
              <div className="products-search-input-group">
                <svg
                  className="products-search-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  className="products-search-input"
                  placeholder={isMobileScreen ? "Search equipment, standards, or brands..." : "Search equipment, models, testing standards, or materials (e.g., UTM, Shore A, Vickers, DOLI)..."}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveChip('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setSearchQuery('');
                      setActiveChip('All');
                    }
                  }}
                  aria-label="Search material testing equipment"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="products-search-clear-btn"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveChip('All');
                    }}
                    aria-label="Clear search"
                    title="Clear search"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Quick filter tags/chips */}
              <div className="products-search-chips">
                <span className="products-chip-label">Quick Filters:</span>
                <div className="products-chips-track">
                  {QUICK_FILTERS.map((chip) => {
                    const isSelected = activeChip === chip.label || (chip.label === 'All' && !trimmedQuery);
                    return (
                      <button
                        key={chip.label}
                        type="button"
                        className={`products-chip-btn${isSelected ? ' is-selected' : ''}`}
                        onClick={() => {
                          if (chip.label === 'All') {
                            setSearchQuery('');
                            setActiveChip('All');
                          } else if (activeChip === chip.label) {
                            setSearchQuery('');
                            setActiveChip('All');
                          } else {
                            setSearchQuery(chip.query);
                            setActiveChip(chip.label);
                          }
                        }}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status information */}
              <div className="products-search-status">
                {trimmedQuery ? (
                  <div className="search-status-active">
                    <span>
                      Found <strong>{totalMatches}</strong> matching product{totalMatches === 1 ? '' : 's'} across{' '}
                      <strong>{filteredCategories.length}</strong> categor{filteredCategories.length === 1 ? 'y' : 'ies'} for "{searchQuery}"
                    </span>
                    <button
                      type="button"
                      className="search-status-reset"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveChip('All');
                      }}
                    >
                      Clear Search
                    </button>
                  </div>
                ) : (
                  <div className="search-status-default">
                    <span>Showing all <strong>{TESTING_CATEGORIES.length}</strong> categories and <strong>{totalMatches}</strong> test models</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

          <div className="products-layout">
            
            {/* ── LEFT SIDEBAR NAVIGATION ── */}
            <aside className="products-sidebar" aria-label="Testing Property Categories">
              <div className="sidebar-header">
                <h3>Testing Categories</h3>
              </div>
              <ul className="sidebar-menu-list" role="tablist">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((cat, idx) => {
                    const isActive = cat.id === effectiveActiveId;
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
                          {trimmedQuery && (
                            <span className="sidebar-match-badge" title={`${cat.matchCount} matching model(s)`}>
                              {cat.matchCount}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <li className="sidebar-no-matches">
                    <span>No matching categories</span>
                    <button
                      type="button"
                      className="sidebar-reset-link"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveChip('All');
                      }}
                    >
                      Reset filter
                    </button>
                  </li>
                )}
              </ul>
            </aside>

            {/* ── RIGHT MAIN CONTENT PANEL (ALL CATEGORIES DISPLAYED) ── */}
            <div className="products-main-panel">
              
              {/* Top Overview Bullet Highlights (hidden during active search) */}
              {!trimmedQuery && (
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
              )}

              {/* Render Filtered Categories or Empty State */}
              {filteredCategories.length === 0 ? (
                <div className="products-empty-state">
                  <div className="empty-state-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  <h3>No testing equipment found</h3>
                  <p>
                    We couldn't find any test machines or equipment matching <strong>"{searchQuery}"</strong>. Try broader keywords or explore all categories.
                  </p>
                  <button
                    type="button"
                    className="empty-clear-btn"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveChip('All');
                    }}
                  >
                    Clear Search &amp; Show All Products
                  </button>
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <section
                    key={category.id}
                    id={category.id}
                    className="product-category-section"
                    style={{ marginBottom: category.id === 'spares' ? '0.5rem' : '4rem', scrollMarginTop: '135px' }}
                  >
                    <ScrollAnimation>
                      <div className="active-category-header">
                        <h2 className="category-title">{category.name}</h2>
                        <p className="category-desc">{category.description}</p>
                      </div>

                      {category.matchingSubcategories && category.matchingSubcategories.length > 0 && (
                        <div>
                          <div className="category-products-grid">
                            {category.matchingSubcategories.map((sub, idx) => (
                              <div key={idx} className="product-item-card">
                                {sub.image && (
                                  <div
                                    className="product-card-media"
                                    onClick={() => setFullscreenProduct(sub)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View ${sub.title} image full screen`}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setFullscreenProduct(sub);
                                      }
                                    }}
                                  >
                                    {sub.material && <span className="product-material-tag">{sub.material}</span>}
                                    <img src={sub.image} alt={sub.title} loading="lazy" />
                                    <button
                                      type="button"
                                      className="product-card-fullscreen-btn"
                                      aria-label={`View ${sub.title} full screen`}
                                      title="View full screen"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setFullscreenProduct(sub);
                                      }}
                                    >
                                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                                      </svg>
                                      <span>Full Screen</span>
                                    </button>
                                  </div>
                                )}
                                <div className="product-card-content">
                                  {sub.material && !sub.image && (
                                    <span
                                      className="product-material-tag-inline"
                                      style={{
                                        display: 'inline-block',
                                        alignSelf: 'flex-start',
                                        background: '#0f172a',
                                        color: '#ffffff',
                                        fontSize: '0.7rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        padding: '4px 10px',
                                        borderRadius: '4px',
                                        marginBottom: '0.65rem',
                                        width: 'fit-content',
                                      }}
                                    >
                                      {sub.material}
                                    </span>
                                  )}
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

                      {category.id === 'spares' && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '0.25rem' }}>
                          <a
                            href={doliPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="doli-brochure-btn"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14 2 14 8 20 8"/>
                              <line x1="16" y1="13" x2="8" y2="13"/>
                              <line x1="16" y1="17" x2="8" y2="17"/>
                              <polyline points="10 9 9 9 8 9"/>
                            </svg>
                            <span>View DOLI Catalog (2026)</span>
                          </a>
                          <a
                            href={doliDirectAccessPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="doli-brochure-btn"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14 2 14 8 20 8"/>
                              <line x1="16" y1="13" x2="8" y2="13"/>
                              <line x1="16" y1="17" x2="8" y2="17"/>
                              <polyline points="10 9 9 9 8 9"/>
                            </svg>
                            <span>The Brochure</span>
                          </a>
                        </div>
                      )}
                    </ScrollAnimation>
                  </section>
                ))
              )}

            </div>

          </div>
        </div>
      </section>

      <GlobalPartners
        title="Principles &amp; Technology Partners"
        subtitle="Representing leading global brands in material testing and calibration."
      />

      {/* ── MOBILE FLOATING ACTION BUTTON (FAB) ── */}
      <button
        type="button"
        className="mobile-categories-fab"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open Testing Categories Menu"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
        <span>Categories</span>
      </button>

      {/* ── MOBILE CATEGORIES DRAWER / MODAL ── */}
      {isMobileOpen && (
        <div className="mobile-categories-modal-root">
          <div
            className="mobile-categories-backdrop"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-categories-drawer">
            <div className="mobile-drawer-header">
              <h3>Testing Categories</h3>
              <button
                type="button"
                className="mobile-drawer-close-btn"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close categories menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="mobile-drawer-body">
              <ul className="mobile-drawer-list">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((cat, idx) => {
                    const isActive = cat.id === effectiveActiveId;
                    const numStr = String(idx + 1).padStart(2, '0');
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          className={`mobile-drawer-btn${isActive ? ' is-active' : ''}`}
                          onClick={() => scrollToCategory(cat.id)}
                        >
                          <span className="drawer-num">{numStr}</span>
                          <span className="drawer-text">{cat.name}</span>
                          {trimmedQuery && (
                            <span className="sidebar-match-badge">{cat.matchCount}</span>
                          )}
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <li className="sidebar-no-matches">
                    <span>No matching categories</span>
                    <button
                      type="button"
                      className="sidebar-reset-link"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveChip('All');
                        setIsMobileOpen(false);
                      }}
                    >
                      Reset filter
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── FULL SCREEN PRODUCT LIGHTBOX MODAL ── */}
      {fullscreenProduct && (
        <div
          className="product-modal-backdrop"
          onClick={() => setFullscreenProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          <div
            className="product-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="product-modal-header">
              <div className="product-modal-header-info">
                {fullscreenProduct.material && (
                  <span className="product-modal-badge">{fullscreenProduct.material}</span>
                )}
                <h3 id="modal-product-title" className="product-modal-title">
                  {fullscreenProduct.title}
                </h3>
              </div>
              <button
                type="button"
                className="product-modal-close-btn"
                aria-label="Close full screen view"
                onClick={() => setFullscreenProduct(null)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {fullscreenProduct.image && (
              <div className="product-modal-body">
                <div className="product-modal-image-wrapper">
                  <img
                    src={fullscreenProduct.image}
                    alt={fullscreenProduct.title}
                    className="product-modal-image"
                  />
                </div>
              </div>
            )}

            <div className="product-modal-footer">
              <p className="product-modal-description">{fullscreenProduct.text}</p>
              {fullscreenProduct.tags && fullscreenProduct.tags.length > 0 && (
                <div className="product-modal-tags">
                  {fullscreenProduct.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="product-modal-tag">
                      <span className="product-modal-tag-dot" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="product-modal-actions">
                <a
                  href="/contact"
                  className="product-modal-enquire-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Enquire About This Machine
                </a>
                <button
                  type="button"
                  className="product-modal-dismiss-btn"
                  onClick={() => setFullscreenProduct(null)}
                >
                  Close Full Screen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
