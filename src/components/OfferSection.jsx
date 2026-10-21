import { Check } from 'lucide-react';
import Reveal from './common/Reveal.jsx';
import PriceTag from './common/PriceTag.jsx';
import ProductThumbs from './common/ProductThumbs.jsx';
import { links, offer } from '../data/content.js';
import './OfferSection.css';

/** The glowing "full system" offer card. */
export default function OfferSection() {
  return (
    <section className="section offer" aria-labelledby="offer-title">
      <div className="container">
        <Reveal className="offer__card">
          <p className="eyebrow offer__eyebrow">{offer.eyebrow}</p>
          <h2 id="offer-title" className="section-title offer__title">
            {offer.title}
            <br />
            {offer.titleLine2}
          </h2>

          <ProductThumbs />

          <p className="offer__label">You get:</p>
          <ul className="check-list offer__list">
            {offer.youGet.map((item) => (
              <li key={item}>
                <Check strokeWidth={3} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="offer__price">
            <PriceTag size="lg" align="center" />
          </div>

          <a className="btn btn--primary btn--lg btn--block offer__cta" href={links.checkout}>
            {offer.cta}
          </a>
          <p className="fine-print">{offer.finePrint}</p>
        </Reveal>
      </div>
    </section>
  );
}
