import { brand } from '../../data/content.js';
import './Brand.css';

export default function Brand({ href = '#top', className = '' }) {
  return (
    <a href={href} className={`brand ${className}`.trim()} aria-label={`${brand.primary}${brand.accent} home`}>
      {brand.primary}
      <span className="text-primary">{brand.accent}</span>
    </a>
  );
}
