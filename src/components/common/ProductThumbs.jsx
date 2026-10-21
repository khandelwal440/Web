import { Fragment } from 'react';
import { productThumbs } from '../../data/content.js';
import './ProductThumbs.css';

/** Every product cover side by side, joined by red "+" signs. */
export default function ProductThumbs() {
  return (
    <div className="product-thumbs">
      {productThumbs.map((product, i) => (
        <Fragment key={product.image}>
          {i > 0 && (
            <span className="product-thumbs__plus" aria-hidden="true">
              +
            </span>
          )}
          <img src={product.image} alt={product.alt} width="128" height="128" loading="lazy" />
        </Fragment>
      ))}
    </div>
  );
}
