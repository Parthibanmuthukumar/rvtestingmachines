import fischerLogo from '../../assets/images/logos/fischer.png';
import formTestLogo from '../../assets/images/logos/form_test.png';
import hildebrandLogo from '../../assets/images/logos/hildebrand.png';
import unconventionalLogo from '../../assets/images/logos/unconventional_testing.png';
import prescottLogo from '../../assets/images/logos/prescott_logo.png';
import utmTestingLogo from '../../assets/images/logos/utm_testing.png';

const PARTNERS = [
  {
    name: 'Fischer',
    src: fischerLogo,
    tag: 'Nano Indentation & Coating Measurement',
  },
  {
    name: 'Form + Test',
    src: formTestLogo,
    tag: 'Materials & Compression Systems',
  },
  {
    name: 'Hildebrand',
    src: hildebrandLogo,
    tag: 'Hardness & Durometer Systems',
  },
  {
    name: 'UTM Unconventional Testing Machines',
    src: unconventionalLogo,
    tag: 'Unconventional Testing Machines Research & Development',
  },
  {
    name: 'Prescott Instruments',
    src: prescottLogo,
    tag: 'Rheology & Polymer Testing',
  },
  {
    name: 'UTM Testing',
    src: utmTestingLogo,
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalPartners;
