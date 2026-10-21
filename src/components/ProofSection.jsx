import { ArrowUpRight, Instagram } from 'lucide-react';
import Reveal from './common/Reveal.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import ReelCard from './ReelCard.jsx';
import { brand, proof } from '../data/content.js';
import './ProofSection.css';

export default function ProofSection() {
  return (
    <section className="section section--surface" aria-labelledby="proof-title">
      <div className="container">
        <SectionHeading id="proof-title" title={proof.title} accent={proof.accent} subtitle={proof.subtitle} />

        <ul className="rail proof__rail">
          {proof.reels.map((reel, i) => (
            <Reveal as="li" key={reel.href} delay={i * 80} className="proof__item">
              <ReelCard reel={reel} />
            </Reveal>
          ))}
        </ul>
        <p className="swipe-hint" aria-hidden="true">
          Swipe →
        </p>
        <a className="proof__profile" href={brand.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram size={16} aria-hidden="true" />
          {proof.profileCta}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
