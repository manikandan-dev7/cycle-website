import React from 'react';
import { MessageCircle, Instagram, Facebook, Phone, MapPin, Star } from 'lucide-react';
import { SHOP, WA_GENERAL, PHONE_LINK, IMAGES } from '../data/constants';

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#111111] text-white">
      {/* Social Strip */}
      <div className="border-b border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-sm">Follow our journey</p>
          <div className="flex items-center gap-4">
            <a
              href={SHOP.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-instagram"
              className="flex items-center gap-2 text-[#64748b] hover:text-[#22c55e] transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              @justridecycles
            </a>
            <div className="w-px h-4 bg-white/10" />
            <a
              href={SHOP.facebook}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-facebook"
              className="flex items-center gap-2 text-[#64748b] hover:text-[#22c55e] transition-colors text-sm"
            >
              <Facebook className="w-4 h-4" />
              Just Ride Cycles
            </a>
            <div className="w-px h-4 bg-white/10" />
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-whatsapp"
              className="flex items-center gap-2 text-[#64748b] hover:text-[#22c55e] transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={IMAGES.logo} alt="Just Ride Cycles" className="w-9 h-9 object-contain rounded-lg border border-white/10" />
                <span className="font-black text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Just Ride Cycles
                </span>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                Kumbakonam's #1 cycle shop.<br />
                Trusted since 2018.
              </p>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold text-sm">4.9</span>
                <span className="text-[#64748b] text-sm">· 554 Reviews</span>
              </div>
            </div>

            {/* Cycles */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Cycles</h4>
              <ul className="space-y-2.5">
                {['Mountain Bikes', 'Road Bikes', 'Kids Cycles', 'Gear Cycles'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo('cycles')}
                      className="text-[#64748b] hover:text-[#22c55e] transition-colors text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Rentals', id: 'rentals' },
                  { label: 'Gallery', id: 'gallery' },
                  { label: 'Contact Us', id: 'contact' },
                  { label: 'Buyer\'s Guide', id: 'guide' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-[#64748b] hover:text-[#22c55e] transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={PHONE_LINK}
                    className="flex items-center gap-2 text-[#64748b] hover:text-[#22c55e] transition-colors text-sm"
                  >
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    {SHOP.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-[#64748b] text-sm">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  Kumbakonam, Tamil Nadu
                </li>
                <li className="text-[#64748b] text-sm">9 AM – 9 PM daily</li>
                <li>
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-whatsapp-btn"
                    className="inline-flex items-center gap-1.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition-colors mt-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#475569] text-xs">
            © 2025 Just Ride Cycles · In association with Delta Cycle
          </p>
          <p className="text-[#475569] text-xs">{SHOP.address}</p>
        </div>
      </div>
    </footer>
  );
}
