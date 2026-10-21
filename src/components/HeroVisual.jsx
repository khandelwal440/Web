import { Play } from 'lucide-react';
import { assets, hero } from '../data/content.js';
import './HeroVisual.css';

/** Finished reel on the left, a mock prompt / steps / pack stack on the right. */
export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__glow" aria-hidden="true" />
      <div className="hero-visual__row">
        <figure className="hero-visual__reel">
          <img src={assets.heroReel} alt="Cover of the Day 2 Stickman episode" width="360" height="640" />
          <span className="hero-visual__shade" aria-hidden="true" />
          <figcaption className="hero-visual__label">
            <Play size={10} fill="currentColor" aria-hidden="true" />
            {hero.reel.label}
          </figcaption>
          <span className="hero-visual__views">{hero.reel.views}</span>
        </figure>

        <div className="hero-visual__stack">
          <div className="hero-visual__panel hero-visual__panel--prompt">
            <p className="hero-visual__kicker">The prompt</p>
            <div className="hero-visual__lines" aria-hidden="true">
              <span style={{ width: '92%', opacity: 0.18 }} />
              <span style={{ width: '74%', opacity: 0.14 }} />
              <span style={{ width: '84%', opacity: 0.12 }} />
              <span style={{ width: '58%', opacity: 0.1 }} />
            </div>
          </div>

          <ol className="hero-visual__panel hero-visual__steps">
            {hero.steps.map((step, i) => (
              <li key={step}>
                <span className="hero-visual__num">{i + 1}</span>
                <span className="hero-visual__step">{step}</span>
              </li>
            ))}
          </ol>

          <div className="hero-visual__panel hero-visual__pack">
            <img src={assets.promptsPack} alt="" width="40" height="40" />
            <p>
              50+ prompts
              <span>Included</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
