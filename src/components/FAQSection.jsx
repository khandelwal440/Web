import Reveal from './common/Reveal.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import { faqs } from '../data/content.js';
import './FAQSection.css';

/** Native <details> accordions: keyboard and screen-reader friendly with no extra JS. */
export default function FAQSection() {
  return (
    <section id="faq" className="section section--surface" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading id="faq-title" title="Before you buy" />

        <div className="faq__grid">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={(i % 2) * 60}>
              <details className="faq__item">
                <summary className="faq__question">
                  {item.q}
                  <span className="faq__icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq__answer">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
