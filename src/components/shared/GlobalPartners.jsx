import ScrollAnimation from '../ScrollAnimation';
import { PARTNER_LOGOS } from '../../data/partnerLogos';

const defaultSubtitle =
  'Representing leading international brands in material testing, calibration, and industrial quality assurance.';

export function GlobalPartners({
  title = 'Our Global Technology Partners',
  subtitle = defaultSubtitle,
}) {
  return (
    <section className="global-partners section-pad" aria-labelledby="global-partners-heading">
      <div className="global-partners__bg" aria-hidden />
      <div className="page-container global-partners__inner">
        <ScrollAnimation>
          <header className="global-partners__header">
            <p className="eyebrow">Trusted Worldwide</p>
            <h2 id="global-partners-heading">{title}</h2>
            {subtitle ? <p className="global-partners__subtitle">{subtitle}</p> : null}
          </header>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="global-partners__marquee-container">
            <div className="global-partners__marquee-track" role="list">
              {[0, 1, 2, 3].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="global-partners__marquee-group"
                  aria-hidden={groupIndex > 0 ? 'true' : undefined}
                >
                  {PARTNER_LOGOS.map((partner) => (
                    <article
                      key={`${partner.id}-${groupIndex}`}
                      className="global-partners__card"
                      role="listitem"
                    >
                      <img
                        src={partner.src}
                        alt={`${partner.alt} logo`}
                        className="global-partners__logo"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="sr-only">{partner.name}</span>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
