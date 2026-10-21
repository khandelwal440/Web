import { forwardRef } from 'react';
import Reveal from './common/Reveal.jsx';
import PriceTag from './common/PriceTag.jsx';
import ProductThumbs from './common/ProductThumbs.jsx';
import { finalCta, hero, links, price } from '../data/content.js';
import './CTASection.css';

/** Closing call to action. Forwarded ref lets the page hide the sticky bar here. */
const CTASection = forwardRef(function CTASection(_props, ref) {
  return (
    <section id="final-cta" ref={ref} className="section final-cta" aria-labelledby="final-cta-title">
      <Reveal className="container final-cta__inner">
        <h2 id="final-cta-title" className="section-title">
          {finalCta.title}
          <br />
          {finalCta.titleLine2}
        </h2>
        <ProductThumbs />
        <PriceTag size="md" align="center" />
        <a className="btn btn--primary btn--lg btn--block final-cta__btn" href={links.checkout}>
          Get instant access — {price.current}
        </a>
        <p className="fine-print">{hero.finePrint}</p>
      </Reveal>
    </section>
  );
});

export default CTASection;
