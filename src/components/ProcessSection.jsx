import Reveal from './common/Reveal.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import { process } from '../data/content.js';
import './ProcessSection.css';

export default function ProcessSection() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading id="process-title" title={process.title} subtitle={process.subtitle} />

        <ol className="rail process__rail">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 60} className="process__item">
              <article className="process__card">
                <div className="process__media">
                  <img src={step.image} alt="" width="400" height="520" loading="lazy" />
                  <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__text">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </ol>
        <p className="swipe-hint" aria-hidden="true">
          Swipe →
        </p>
      </div>
    </section>
  );
}
