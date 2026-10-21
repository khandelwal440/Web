import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Brand from './common/Brand.jsx';
import { links, navLinks } from '../data/content.js';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header className={`navbar${solid ? ' navbar--solid' : ''}`}>
      <nav aria-label="Main" className={`container navbar__bar${scrolled ? ' navbar__bar--compact' : ''}`}>
        <Brand />
        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="site-menu" className={`navbar__menu${open ? ' navbar__menu--open' : ''}`} hidden={!open}>
        <ul className="container navbar__list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="navbar__link" href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="btn btn--primary btn--block navbar__cta" href={links.premium} onClick={close}>
              Join premium →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
