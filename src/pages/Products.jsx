import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { ProductShowcase } from '../components/shared/ProductShowcase';
import { GlobalPartners } from '../components/shared/GlobalPartners';
import ScrollAnimation from '../components/ScrollAnimation';
import { productItems, productsIntro } from '../data/productsData';

export default function Products() {
  const rubberProducts = productItems.filter((p) => p.category === 'Rubber Testing');
  const metalProducts = productItems.filter((p) => p.category === 'Metal Testing');

  return (
    <main id="main-content" className="inner-page">
      <PageHero
        eyebrow="Our Product Range"
        title="Our Products"
        subtitle={productsIntro}
      >
        <Link to="/contact" className="about-cta-btn" style={{ marginTop: 20 }}>
          Request a Quote
        </Link>
      </PageHero>

      <section className="page-intro">
        <ScrollAnimation>
          <div className="page-intro-inner">
            <p>
              Explore our precision testing solutions for rubber, elastomers, and metals — engineered
              to support laboratories, manufacturing units, and quality teams that demand accredited performance.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      <section className="page-category-band">
        <ScrollAnimation>
          <h2>Rubber Testing</h2>
          <p>Hardness, IRHD, and elastomer evaluation systems</p>
        </ScrollAnimation>
      </section>

      {rubberProducts.map((product, index) => (
        <ProductShowcase key={product.id} product={product} reverse={index % 2 === 1} />
      ))}

      <section className="page-category-band">
        <ScrollAnimation>
          <h2>Metal Testing</h2>
          <p>Universal testing machines and precision hardness testing systems</p>
        </ScrollAnimation>
      </section>

      {metalProducts.map((product, index) => (
        <ProductShowcase
          key={product.id}
          product={product}
          reverse={index % 2 === 1}
        />
      ))}

      <GlobalPartners
        title="Principles & Technology Partners"
        subtitle="Representing leading global brands in material testing and calibration."
      />
    </main>
  );
}
