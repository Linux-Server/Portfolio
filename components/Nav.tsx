'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="anim-nav"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(6,6,11,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" aria-label="Sachin Murali — home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div aria-hidden="true" style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--card)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.75rem', fontWeight: 700 }}>SM</span>
            </div>
            <span style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              sachin.murali
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '4px' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{
                  padding: '8px 16px',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta"
              style={{
                marginLeft: '8px',
                padding: '8px 20px',
                fontSize: '0.85rem',
                fontWeight: 700,
                background: 'var(--accent)',
                color: '#06060b',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '40px', height: '40px',
              display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              borderRadius: '10px', border: '1px solid var(--card-border)',
              background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer',
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden" style={{ position: 'fixed', top: '72px', left: '16px', right: '16px', zIndex: 40, background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '12px' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 16px', fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
