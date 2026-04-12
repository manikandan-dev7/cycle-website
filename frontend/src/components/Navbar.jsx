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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-[#e2e8f0]/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button
              data-testid="navbar-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={IMAGES.logo}
                alt="Just Ride Cycles"
                className="w-9 h-9 object-contain rounded-lg border border-[#e2e8f0]"
              />
              <span
                className={`font-black text-base sm:text-lg tracking-tight transition-colors ${
                  scrolled ? 'text-[#111111]' : 'text-white'
                }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Just Ride Cycles
              </span>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#f97316] ${
                    scrolled ? 'text-[#64748b]' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="navbar-whatsapp-btn"
                className="flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            <button
              data-testid="navbar-hamburger"
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-[#111111]' : 'text-white'
              }`}
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
        className={`fixed inset-0 z-40 bg-[#111111] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <img src={IMAGES.logo} alt="Logo" className="w-10 h-10 object-contain rounded-lg" />
          <span className="text-white font-black text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Just Ride Cycles
          </span>
        </div>
        {navLinks.map((link) => (
          <button
            key={link.label}
            data-testid={`mobile-nav-${link.label.toLowerCase()}`}
            onClick={() => scrollTo(link.id)}
            className="text-white text-3xl font-bold hover:text-[#f97316] transition-colors"
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
          className="flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white text-lg font-bold px-10 py-4 rounded-xl transition-colors mt-4"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Us
        </a>
        <p className="text-[#64748b] text-sm mt-2">{SHOP.hours}</p>
      </div>
    </>
  );
}
