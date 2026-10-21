import Reveal from './Reveal.jsx';

/** Two-tone uppercase heading (white line + optional red line) with an optional subtitle. */
export default function SectionHeading({ id, title, accent, subtitle, center = false }) {
  return (
    <Reveal className={center ? 'section-heading section-heading--center' : 'section-heading'}>
      <h2 id={id} className="section-title">
        {title}
        {accent && (
          <>
            <br />
            <span className="accent">{accent}</span>
          </>
        )}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
