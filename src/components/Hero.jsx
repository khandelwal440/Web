import { forwardRef } from 'react';
import { ArrowDown, Check } from 'lucide-react';
import Reveal from './common/Reveal.jsx';
import PriceTag from './common/PriceTag.jsx';
import HeroVisual from './HeroVisual.jsx';
import { hero, links } from '../data/content.js';
import './Hero.css';

/** The price card is forwarded so the page can hide the mobile sticky bar while it is on screen. */
const Hero = forwardRef(function Hero(_props, priceCardRef) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__intro">
          <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.titleTop}
            <br />
            <span className="text-primary">{hero.titleAccent}</span>
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
        </div>

        <Reveal className="hero__visual">
          <HeroVisual />
        </Reveal>

        <div className="hero__rest">
          <ul className="check-list hero__bullets">
            {hero.bullets.map((item) => (
              <li key={item}>
                <Check strokeWidth={3} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div ref={priceCardRef} className="hero__card">
            <PriceTag size="lg" />
            <a className="btn btn--primary btn--lg btn--block hero__cta" href={links.checkout}>
              {hero.primaryCta}
            </a>
            <a className="btn btn--ghost btn--block hero__secondary" href="#everything-included">
              {hero.secondaryCta}
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p className="fine-print">{hero.finePrint}</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
