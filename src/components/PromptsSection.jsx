import Reveal from './common/Reveal.jsx';
import { assets, links, prompts } from '../data/content.js';
import './PromptsSection.css';

export default function PromptsSection() {
  return (
    <section className="section ambient-red prompts" aria-labelledby="prompts-title">
      <div className="container prompts__grid">
        <Reveal className="prompts__art">
          <img src={assets.promptsPack} alt="50+ AI Video Prompts pack artwork" width="512" height="512" loading="lazy" />
        </Reveal>

        <Reveal delay={100} className="prompts__copy">
          <h2 id="prompts-title" className="section-title">
            {prompts.title}
            <br />
            <span className="accent">{prompts.accent}</span>
          </h2>
          <p className="section-subtitle">{prompts.text}</p>
          <ul className="prompts__tags" aria-label="Prompt categories">
            {prompts.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--lg prompts__cta" href={links.checkout}>
            {prompts.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
