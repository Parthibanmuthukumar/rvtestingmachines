import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on every route change so new pages don't open at footer scroll position.
 * Robustly handles global 'scroll-behavior: smooth' styles that can break page resets.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Disable browser automatic scroll restoration on SPA navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Force instant scroll by temporarily disabling smooth scrolling
    const htmlEl = document.documentElement;
    const originalScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Restore original scroll behavior in the next frame
    const rafId = requestAnimationFrame(() => {
      htmlEl.style.scrollBehavior = originalScrollBehavior || '';
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);

  return null;
}
