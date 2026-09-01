import fischerLogo from '../../assets/images/logos/fischer.png';
import formTestLogo from '../../assets/images/logos/form_test.png';
import hildebrandLogo from '../../assets/images/logos/hildebrand.png';
import unconventionalLogo from '../../assets/images/logos/unconventional_testing.png';
import prescottLogo from '../../assets/images/logos/prescott_logo.png';
import utmTestingLogo from '../../assets/images/logos/utm_testing.png';
import doliLogo from '../../assets/images/logos/doli_logo.svg';
import doliPdf from '../../assets/260806DirectAccesstoDOLIElektronik.pdf';

const PARTNERS = [
  {
    name: 'DOLI Elektronik',
    src: doliLogo,
    tag: 'Digital Controllers & Testing Machine Electronics',
    pdfLink: doliPdf,
  },
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
              {partner.pdfLink ? (
                <a
                  href={partner.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', width: '100%', height: '100%' }}
                  title={`Open ${partner.name} Direct Access PDF`}
                >
                  <img
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalPartners;
