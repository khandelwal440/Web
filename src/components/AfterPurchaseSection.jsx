import { CreditCard, Lock, Zap } from 'lucide-react';
import Reveal from './common/Reveal.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import { afterPurchase } from '../data/content.js';
import './AfterPurchaseSection.css';

const ICONS = { zap: Zap, card: CreditCard, lock: Lock };

export default function AfterPurchaseSection() {
  return (
    <section className="section section--surface" aria-labelledby="after-title">
      <div className="container">
        <SectionHeading id="after-title" title={afterPurchase.title} />

        <ol className="after__grid">
          {afterPurchase.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 70}>
              <article className="after__card">
                <span className="after__num">{i + 1}</span>
                <h3 className="after__title">{step.title}</h3>
                <p className="after__text">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal as="ul" className="after__assurances">
          {afterPurchase.assurances.map(({ icon, label }) => {
            const Icon = ICONS[icon];
            return (
              <li key={label}>
                <Icon size={14} aria-hidden="true" />
                {label}
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
