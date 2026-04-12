import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { SHOP, WA_GENERAL, IMAGES } from '../data/constants';

const navLinks = [
  { label: 'Cycles', id: 'cycles' },
  { label: 'Rentals', id: 'rentals' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: 'linear-gradient(to bottom, #161616, #111111)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
              }
            : {
                background: 'linear-gradient(to bottom, rgba(10,10,10,0.92), rgba(10,10,10,0.7))',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
              }
        }
      >
        {/* Top metallic highlight line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-7">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <button
              data-testid="navbar-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div
                className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 6px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img src={IMAGES.logo} alt="Just Ride Cycles" className="w-full h-full object-contain" />
              </div>
              <span
                className="chrome-text font-black text-base sm:text-lg tracking-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Just Ride Cycles
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium text-[#888] hover:text-[#f97316] transition-colors"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="navbar-whatsapp-btn"
                className="sku-btn-orange flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Hamburger */}
            <button
              data-testid="navbar-hamburger"
              className="md:hidden p-2 rounded-lg text-[#888] hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        data-testid="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 carbon-bg ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <img src={IMAGES.logo} alt="Logo" className="w-10 h-10 object-contain rounded-lg" />
          <span className="chrome-text font-black text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Just Ride Cycles
          </span>
        </div>
        {navLinks.map((link) => (
          <button
            key={link.label}
            data-testid={`mobile-nav-${link.label.toLowerCase()}`}
            onClick={() => scrollTo(link.id)}
            className="text-[#999] text-3xl font-bold hover:text-[#f97316] transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {link.label}
          </button>
        ))}
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="mobile-whatsapp-btn"
          onClick={() => setMenuOpen(false)}
          className="sku-btn-orange flex items-center gap-2 text-white text-lg font-bold px-10 py-4 rounded-xl mt-4"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Us
        </a>
        <p className="text-[#444] text-sm mt-2">{SHOP.hours}</p>
      </div>
    </>
  );
}
