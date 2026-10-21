import Brand from './common/Brand.jsx';
import { brand, footer } from '../data/content.js';
import './Footer.css';

function LinkRow({ items, label, external = false }) {
  return (
    <nav aria-label={label}>
      <ul className="footer__row">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Brand />
        <p className="footer__tagline">{brand.tagline}</p>
        <LinkRow items={footer.links} label="Footer" />
        <LinkRow items={footer.social} label="Social" external />
        <div className="footer__legal">
          <span>
            © {year} {brand.primary}
            {brand.accent}
          </span>
          {footer.legal.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
