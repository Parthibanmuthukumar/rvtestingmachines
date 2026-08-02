import prescottLogo from '../../assets/images/logos/Prescott.png';

const PARTNERS = [
  {
    name: 'Fischer',
    src: '/images/Fisher.png',
    tag: 'Nano Indentation & Coating Measurement',
  },
  {
    name: 'Form + Test',
    src: '/images/Form+Test.png',
    tag: 'Materials & Compression Systems',
  },
  {
    name: 'Hildebrand',
    src: '/images/Hilde Brand.png',
    tag: 'Hardness & Durometer Systems',
  },
  {
    name: 'UTM Unconventional Testing Machines',
    src: '/images/Unconventional Testing.png',
    tag: 'Unconventional Testing Machines Research & Development',
  },
  {
    name: 'Prescott Instruments',
    src: '/images/Prescott.png',
    fallbackSrc: prescottLogo,
    tag: 'Rheology & Polymer Testing',
  },
  {
    name: 'UTM Testing',
    src: '/images/UTM Testing.png',
    tag: 'Unconventional Testing Machine',
  },
];

export function GlobalPartners({
  title = 'Principles & Technology Partners',
  subtitle = 'Representing leading global brands in material testing, rheology, hardness, and precision measurement.',
}) {
  return (
    <section className="global-partners" aria-label="Technology partners">
      <div className="wrap">
        <h2 className="global-partners-title">{title}</h2>
        {subtitle && <p className="global-partners-sub">{subtitle}</p>}

        <div className="global-partners-grid">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="partner-logo-card" title={partner.name}>
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                loading="lazy"
                onError={(e) => {
                  if (partner.fallbackSrc && e.currentTarget.src !== partner.fallbackSrc) {
                    e.currentTarget.src = partner.fallbackSrc;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalPartners;
