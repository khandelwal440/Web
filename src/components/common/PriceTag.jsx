import useInView from '../../hooks/useInView.js';
import { price } from '../../data/content.js';
import './PriceTag.css';

/** Big price, struck-through original price and a glowing "one-time payment" badge. */
export default function PriceTag({ size = 'lg', align = 'start' }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`price-tag price-tag--${size} price-tag--${align}`} data-animate={inView}>
      <span className="price-tag__current">{price.current}</span>
      <span className="price-tag__meta">
        <s className="price-tag__original">
          <span className="sr-only">Was </span>
          {price.original}
        </s>
        <span className="price-tag__badge">{price.label}</span>
      </span>
    </div>
  );
}
