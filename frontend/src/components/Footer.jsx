import React from 'react';
import { MessageCircle, Instagram, Facebook, Phone, MapPin, Star } from 'lucide-react';
import { SHOP, WA_GENERAL, PHONE_LINK, IMAGES } from '../data/constants';

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative text-white carbon-bg">
      {/* Top metallic edge */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />

      {/* Social Strip */}
      <div className="py-7" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex flex-col items-center justify-between gap-4 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:flex-row">
          <p className="text-[#3a3a3a] text-sm font-medium tracking-wide">Follow our journey</p>
          <div className="flex items-center gap-5">
            {[
              { href: SHOP.instagram, icon: Instagram, label: '@justridecycles', testId: 'social-instagram' },
              { href: SHOP.facebook,  icon: Facebook,  label: 'Just Ride Cycles', testId: 'social-facebook' },
              { href: WA_GENERAL,    icon: MessageCircle, label: 'WhatsApp', testId: 'social-whatsapp' },
            ].map(({ href, icon: Icon, label, testId }) => (
              <a key={testId} href={href} target="_blank" rel="noopener noreferrer"
                data-testid={testId}
                className="flex items-center gap-2 text-[#3a3a3a] hover:text-[#f97316] transition-colors text-sm"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="py-14 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-14">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="overflow-hidden rounded-lg w-9 h-9"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 6px rgba(0,0,0,0.5)',
                  }}
                >
                  <img src={IMAGES.logo} alt="Just Ride Cycles" className="object-contain w-full h-full" />
                </div>
                <span className="text-base font-black chrome-text" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Just Ride Cycles
                </span>
              </div>
              <p className="text-[#3a3a3a] text-sm leading-relaxed mb-4">
                Kumbakonam's #1 cycle shop.<br />Trusted since 2018.
              </p>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-bold chrome-text">4.9</span>
                <span className="text-[#3a3a3a] text-sm">· 554 Reviews</span>
              </div>
            </div>

            {/* Cycles */}
            <div>
              <h4 className="text-[#444] font-bold text-xs uppercase tracking-widest mb-5">Cycles</h4>
              <ul className="space-y-2.5">
                {['Mountain Bike', 'Road Bikes', 'Kids Cycles', 'Gear Cycles'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollTo('cycles')}
                      className="text-[#3a3a3a] hover:text-[#f97316] transition-colors text-sm">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#444] font-bold text-xs uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Rentals', id: 'rentals' },
                  { label: 'Gallery', id: 'gallery' },
                  { label: 'Contact Us', id: 'contact' },
                  { label: "Buyer's Guide", id: 'guide' },
                ].map((item) => (
                  <li key={item.label}>
                    <button onClick={() => scrollTo(item.id)}
                      className="text-[#3a3a3a] hover:text-[#f97316] transition-colors text-sm">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#444] font-bold text-xs uppercase tracking-widest mb-5">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href={PHONE_LINK} className="flex items-center gap-2 text-[#3a3a3a] hover:text-[#f97316] transition-colors text-sm">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    {SHOP.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-[#3a3a3a] text-sm">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  Kumbakonam, Tamil Nadu
                </li>
                <li className="text-[#3a3a3a] text-sm">9 AM – 9 PM daily</li>
                <li>
                  <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
                    data-testid="footer-whatsapp-btn"
                    className="sku-btn-orange inline-flex items-center gap-1.5 text-white font-semibold text-xs px-3 py-1.5 rounded-lg mt-1"
                  >
                    <MessageCircle className="w-3 h-3" /> WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:flex-row">
          <p className="text-[#2a2a2a] text-xs">© 2025 Just Ride Cycles · In association with Delta Cycle</p>
          <p className="text-[#2a2a2a] text-xs hidden sm:block">{SHOP.address}</p>
        </div>
      </div>
    </footer>
  );
}
