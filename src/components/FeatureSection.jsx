import { Check } from 'lucide-react';
import Reveal from './common/Reveal.jsx';
import { links, price, products } from '../data/content.js';
import './FeatureSection.css';

/** "Everything included" — the two products side by side with their checklists. */
export default function FeatureSection() {
  return (
    <section id="everything-included" className="section section--surface" aria-labelledby="included-title">
      <div className="container">
        <Reveal>
          <h2 id="included-title" className="section-title">
            Everything included
            <br />
            <span className="accent">for {price.current}</span>
          </h2>
        </Reveal>

        <div className="included__grid">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={i * 90}>
              <article className={`included__card${product.highlight ? ' included__card--highlight' : ''}`}>
                <header className="included__head">
                  <img src={product.image} alt={product.imageAlt} width="96" height="96" loading="lazy" />
                  <div>
                    <p className="eyebrow included__kicker">{product.kicker}</p>
                    <h3 className="included__title">{product.title}</h3>
                  </div>
                </header>
                <ul className="check-list included__list">
                  {product.items.map((item) => (
                    <li key={item}>
                      <Check strokeWidth={3} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="included__footer">
          <p className="included__both">You get both for {price.current}</p>
          <a className="btn btn--primary btn--lg included__cta" href={links.checkout}>
            Get instant access — {price.current}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
