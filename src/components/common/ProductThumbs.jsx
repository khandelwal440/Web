import { assets } from '../../data/content.js';
import './ProductThumbs.css';

/** The two product covers side by side, joined by a red "+". */
export default function ProductThumbs() {
  return (
    <div className="product-thumbs">
      <img src={assets.blueprint} alt="AI Video Blueprint cover" width="128" height="128" loading="lazy" />
      <span className="product-thumbs__plus" aria-hidden="true">
        +
      </span>
      <img src={assets.promptsPack} alt="50+ AI Video Prompts cover" width="128" height="128" loading="lazy" />
    </div>
  );
}
