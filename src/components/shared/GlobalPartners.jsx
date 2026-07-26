import { useRef } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import { PARTNER_LOGOS } from '../../data/partnerLogos';

const defaultSubtitle =
  'Representing leading international brands in material testing, calibration, and industrial quality assurance.';

export function GlobalPartners({
  title    = 'Our Global Technology Partners',
  subtitle = defaultSubtitle,
}) {
  const gridRef = useRef(null);

  return (
    <section className="global-partners" aria-labelledby="gp-heading">
      <ScrollAnimation direction="up">
        <p className="section-label" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>
          Trusted Worldwide
        </p>
        <h2 id="gp-heading" className="global-partners-title">{title}</h2>
        {subtitle && <p className="global-partners-sub">{subtitle}</p>}
      </ScrollAnimation>

      {/* Grid renders when in view, then staggered CSS animation fires per card */}
      <ScrollAnimation direction="up">
        <div className="global-partners-grid" ref={gridRef}>
          {PARTNER_LOGOS.map((partner) => (
            <div key={partner.id} className="partner-logo-card">
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  /* fallback: hide broken image, show partner name text */
                  e.target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = partner.name;
                  fallback.style.cssText =
                    'font-size:0.8rem;font-weight:800;color:var(--navy);letter-spacing:0.03em;text-align:center;';
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
