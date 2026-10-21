import { Lock } from 'lucide-react';
import Reveal from './common/Reveal.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import { preview } from '../data/content.js';
import './PreviewSection.css';

function FreePreview() {
  return (
    <div className="preview__free">
      <ol className="preview__flow" aria-label="The simple system loop">
        {preview.freeFlow.map((step, i) => (
          <li key={step}>
            <span className="chip">{step}</span>
            {i < preview.freeFlow.length - 1 && (
              <span className="preview__arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="preview__note">{preview.freeNote}</p>
    </div>
  );
}

function LockedPreview() {
  return (
    <div className="preview__locked">
      <div className="preview__blur" aria-hidden="true">
        <span style={{ width: '88%' }} />
        <span style={{ width: '70%' }} />
        <span style={{ width: '80%' }} />
        <span style={{ width: '55%' }} />
      </div>
      <p className="preview__lock">
        <Lock size={12} aria-hidden="true" />
        Unlocks after purchase
      </p>
    </div>
  );
}

/** Five "pages" of the guide — the first is open, the rest are blurred and locked. */
export default function PreviewSection() {
  return (
    <section id="preview" className="section preview" aria-labelledby="preview-title">
      <div className="container">
        <SectionHeading id="preview-title" title={preview.title} accent={preview.accent} subtitle={preview.subtitle} />

        <div className="preview__grid">
          {preview.pages.map((page, i) => (
            <Reveal key={page.title} delay={(i % 3) * 70}>
              <article className={`preview__card${page.free ? ' preview__card--free' : ''}`}>
                <header className="preview__meta">
                  <span className="preview__page">Page {String(i + 1).padStart(2, '0')}</span>
                  {page.free ? (
                    <span className="preview__badge">Free preview</span>
                  ) : (
                    <span className="preview__tag">Blueprint</span>
                  )}
                </header>
                <h3 className="preview__title">{page.title}</h3>
                <p className="preview__text">{page.text}</p>
                {page.free ? <FreePreview /> : <LockedPreview />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
