import React from 'react';
import { MessageCircle, CheckCircle, Clock, Calendar, CalendarDays } from 'lucide-react';
import { WA_RENTAL, IMAGES } from '../data/constants';
import useReveal from '../hooks/useReveal';

const rentalTypes = [
  { icon: Clock, type: 'Hourly', note: 'Short city rides', color: '#f97316' },
  { icon: Calendar, type: 'Daily', note: 'Full day adventures', color: '#3b82f6' },
  { icon: CalendarDays, type: 'Weekly', note: 'Extended trips', color: '#a855f7' },
];

const steps = [
  'Choose your cycle',
  'Pick your duration',
  'Pay and ride',
  'Return hassle-free',
];

export default function RentalsSection() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="rentals" className="relative py-20 sm:py-28 bg-[#111111] overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={IMAGES.rentalsBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}`}
        >
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">
              Flexible Rentals
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mt-3 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Rent. Ride.<br />Return.
            </h2>
            <p className="text-[#94a3b8] text-base mt-4 leading-relaxed">
              Hourly and daily rentals available. No commitment — just the road.
            </p>
          </div>

          {/* Rental types */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {rentalTypes.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={i}
                  data-testid={`rental-type-${r.type.toLowerCase()}`}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f97316]/50 transition-colors group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${r.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <h3
                    className="text-white text-xl font-bold mb-1"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {r.type}
                  </h3>
                  <p className="text-[#94a3b8] text-sm">{r.note}</p>
                </div>
              );
            })}
          </div>

          {/* Steps */}
          <div className="mb-12">
            <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">How it works</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#f97316] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                  <span className="text-white/80 text-sm font-medium leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={WA_RENTAL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="rental-whatsapp-btn"
            className="inline-flex items-center gap-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Book a Rental on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
