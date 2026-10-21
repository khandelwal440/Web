import { links, price } from '../data/content.js';
import './StickyBuyBar.css';

/** Mobile/tablet-only bottom bar; the page decides when it is visible. */
export default function StickyBuyBar({ visible }) {
  return (
    <div className={`sticky-bar${visible ? ' sticky-bar--visible' : ''}`} aria-hidden={!visible}>
      <div className="container sticky-bar__inner">
        <p className="sticky-bar__price">
          {price.current}
          <span>{price.shortLabel}</span>
        </p>
        <a className="btn btn--primary sticky-bar__btn" href={links.checkout} tabIndex={visible ? 0 : -1}>
          Get access →
        </a>
      </div>
    </div>
  );
}
