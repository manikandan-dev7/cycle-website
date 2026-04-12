import React from 'react';
import { ChevronDown, Star, MessageCircle, Phone } from 'lucide-react';
import { IMAGES, WA_GENERAL, PHONE_LINK } from '../data/constants';

export default function HeroSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroExterior}
          alt="Just Ride Cycles Showroom"
          className="hero-kenburns w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        {/* Badge */}
        <div className="fade-up flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
            <Star className="w-3.5 h-3.5 text-[#22c55e] fill-[#22c55e]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Kumbakonam's #1 Cycle Shop
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="fade-up fade-up-d1 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-6"
          data-testid="hero-headline"
        >
          Find Your<br />
          <span className="text-[#22c55e]">Perfect Ride</span>
        </h1>

        {/* Subtext */}
        <p className="fade-up fade-up-d2 text-white/80 text-lg sm:text-xl max-w-lg mb-5 leading-relaxed">
          Buy, rent, or explore — 100+ cycles on display in our showroom
        </p>

        {/* Stars */}
        <div className="fade-up fade-up-d2 flex items-center gap-2.5 mb-10">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-semibold">4.9★ · 554 Google Reviews</span>
        </div>

        {/* CTAs */}
        <div className="fade-up fade-up-d3 flex flex-col sm:flex-row gap-4 mb-12">
          <button
            data-testid="hero-view-cycles-btn"
            onClick={() => scrollTo('cycles')}
            className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base px-8 py-4 rounded-lg transition-colors shadow-lg shadow-green-500/25"
          >
            View Cycles
          </button>
          <button
            data-testid="hero-rent-btn"
            onClick={() => scrollTo('rentals')}
            className="flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-bold text-base px-8 py-4 rounded-lg transition-colors hover:bg-white/10"
          >
            Rent Now
          </button>
        </div>

        {/* Quick links */}
        <div className="fade-up fade-up-d4 flex flex-wrap items-center gap-6">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="flex items-center gap-2 text-white/75 hover:text-[#22c55e] text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a
            href={PHONE_LINK}
            data-testid="hero-call-btn"
            className="flex items-center gap-2 text-white/75 hover:text-white text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <span className="text-white/45 text-sm hidden sm:block">9 AM – 9 PM · Open 7 days</span>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        data-testid="hero-scroll-hint"
        onClick={() => scrollTo('trust-bar')}
        className="scroll-hint absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
