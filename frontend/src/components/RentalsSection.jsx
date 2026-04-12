import React from 'react';
import { MessageCircle, Clock, Calendar, CalendarDays } from 'lucide-react';
import { WA_RENTAL, IMAGES } from '../data/constants';
import useReveal from '../hooks/useReveal';

const rentalTypes = [
  { icon: Clock,       type: 'Hourly', note: 'Short city rides',    color: '#f97316' },
  { icon: Calendar,    type: 'Daily',  note: 'Full day adventures',  color: '#3b82f6' },
  { icon: CalendarDays,type: 'Weekly', note: 'Extended trips',       color: '#a855f7' },
];

const steps = ['Choose your cycle', 'Pick your duration', 'Pay and ride', 'Return hassle-free'];

export default function RentalsSection() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="rentals" className="carbon-bg py-20 sm:py-28 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img src={IMAGES.rentalsBg} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      {/* Orange glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Flexible Rentals</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mt-3 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="chrome-text">Rent. Ride.</span><br />
              <span className="glossy-orange-text">Return.</span>
            </h2>
            <p className="text-[#666] text-base mt-4">Hourly and daily rentals available. No commitment — just the road.</p>
          </div>

          {/* Rental type cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {rentalTypes.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} data-testid={`rental-type-${r.type.toLowerCase()}`}
                  className="embossed-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(145deg, ${r.color}18, ${r.color}08)`,
                      border: `1px solid ${r.color}22`,
                      boxShadow: `inset 0 1px 0 ${r.color}20, 0 0 12px ${r.color}15`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <h3 className="chrome-text text-xl font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {r.type}
                  </h3>
                  <p className="text-[#555] text-sm">{r.note}</p>
                </div>
              );
            })}
          </div>

          {/* Steps */}
          <div className="mb-12">
            <h3 className="text-[#444] text-xs font-bold uppercase tracking-widest mb-5">How it works</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="sku-btn-orange w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-black">
                    {i + 1}
                  </div>
                  <span className="text-[#888] text-sm font-medium leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href={WA_RENTAL} target="_blank" rel="noopener noreferrer"
            data-testid="rental-whatsapp-btn"
            className="sku-btn-orange inline-flex items-center gap-2.5 text-white font-bold text-base px-8 py-4 rounded-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Book a Rental on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
