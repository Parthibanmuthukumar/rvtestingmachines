import { PageHero } from '../components/shared/PageHero';
import { ProductShowcase } from '../components/shared/ProductShowcase';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import { productItems, productsIntro } from '../data/productsData';

export default function Products() {
  const rubberProducts = productItems.filter(p => p.category === 'Rubber Testing');
  const metalProducts  = productItems.filter(p => p.category === 'Metal Testing');

  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Our Product Range"
        title="Our Products"
        subtitle={productsIntro}
      />

      {/* Rubber Testing Category */}
      <section className="cat-band">
        <ScrollAnimation>
          <span className="label" style={{ justifyContent: 'center' }}>Rubber &amp; Elastomers</span>
          <h2>Rubber Testing</h2>
          <p>Hardness, IRHD, and elastomer evaluation systems</p>
        </ScrollAnimation>
      </section>

      {rubberProducts.map((product, index) => (
        <ProductShowcase key={product.id} product={product} reverse={index % 2 === 1} />
      ))}

      {/* Metal Testing Category */}
      <section className="cat-band cat-band--dark">
        <ScrollAnimation>
          <span className="label label--gold" style={{ justifyContent: 'center' }}>Metals &amp; Alloys</span>
          <h2>Metal Testing</h2>
          <p>Universal testing machines and precision hardness testing systems</p>
        </ScrollAnimation>
      </section>

      {metalProducts.map((product, index) => (
        <ProductShowcase key={product.id} product={product} reverse={index % 2 === 1} />
      ))}

      <GlobalPartners
        title="Principles & Technology Partners"
        subtitle="Representing leading global brands in material testing and calibration."
      />
    </main>
  );
}
