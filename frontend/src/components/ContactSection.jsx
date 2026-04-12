import React from 'react';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { SHOP, WA_GENERAL, PHONE_LINK } from '../data/constants';
import useReveal from '../hooks/useReveal';

export default function ContactSection() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="contact" className="carbon-bg py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Visit Us</span>
          <h2 className="chrome-text text-4xl sm:text-5xl font-black tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
            Come See Us in Kumbakonam
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map — embossed metal frame */}
          <div className="embossed-card rounded-2xl overflow-hidden h-80 sm:h-96 p-[3px]">
            <div className="rounded-xl overflow-hidden h-full">
              <iframe
                src={SHOP.mapsEmbed}
                title="Just Ride Cycles Location"
                width="100%" height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) brightness(0.85) contrast(1.1)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map"
              />
            </div>
          </div>

          {/* Contact card — embossed */}
          <div className="embossed-card rounded-2xl p-7 sm:p-9">
            <h3 className="chrome-text text-2xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {SHOP.name}
            </h3>

            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: 'Address', value: SHOP.address },
                { icon: Phone,  label: 'Phone',   value: SHOP.phone,   href: PHONE_LINK },
                { icon: Clock,  label: 'Hours',   value: SHOP.hours },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: 'linear-gradient(145deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
                      border: '1px solid rgba(249,115,22,0.2)',
                      boxShadow: 'inset 0 1px 0 rgba(249,115,22,0.15)',
                    }}
                  >
                    <Icon className="w-4 h-4 text-[#f97316]" />
                  </div>
                  <div>
                    <div className="text-[#666] font-semibold text-xs mb-0.5 uppercase tracking-wider">{label}</div>
                    {href
                      ? <a href={href} className="text-[#999] text-sm hover:text-[#f97316] transition-colors">{value}</a>
                      : <p className="text-[#999] text-sm leading-relaxed">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Metal divider */}
            <div className="metal-divider mb-6" />

            <div className="flex flex-col gap-3">
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="sku-btn-orange w-full flex items-center justify-center gap-2.5 text-white font-bold py-3.5 rounded-xl"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={PHONE_LINK} data-testid="contact-call-btn"
                  className="sku-btn-dark flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl text-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer"
                  data-testid="contact-directions-btn"
                  className="sku-btn-dark flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl text-sm"
                >
                  <MapPin className="w-4 h-4" /> Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
