import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { SHOP, WA_GENERAL, PHONE_LINK } from '../data/constants';
import useReveal from '../hooks/useReveal';

export default function ContactSection() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">
            Visit Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Come See Us in Kumbakonam
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0] h-80 sm:h-96">
            <iframe
              src={SHOP.mapsEmbed}
              title="Just Ride Cycles Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="contact-map"
            />
          </div>

          {/* Contact card */}
          <div className="bg-white/70 backdrop-blur-sm border border-[#e2e8f0] rounded-2xl p-7 sm:p-9 shadow-sm">
            <h3
              className="text-[#111111] text-2xl font-bold mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {SHOP.name}
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#f97316]" />
                </div>
                <div>
                  <div className="text-[#111111] font-semibold text-sm mb-0.5">Address</div>
                  <p className="text-[#64748b] text-sm leading-relaxed">{SHOP.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#f97316]" />
                </div>
                <div>
                  <div className="text-[#111111] font-semibold text-sm mb-0.5">Phone</div>
                  <a href={PHONE_LINK} className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors">
                    {SHOP.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#f97316]" />
                </div>
                <div>
                  <div className="text-[#111111] font-semibold text-sm mb-0.5">Hours</div>
                  <p className="text-[#64748b] text-sm">{SHOP.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PHONE_LINK}
                  data-testid="contact-call-btn"
                  className="flex items-center justify-center gap-2 border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={SHOP.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-directions-btn"
                  className="flex items-center justify-center gap-2 border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
