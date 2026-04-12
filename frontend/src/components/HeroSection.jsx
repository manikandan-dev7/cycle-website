import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronDown, Star, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { IMAGES, WA_GENERAL, PHONE_LINK } from '../data/constants';

const WORDS = ['Mountain Bike', 'Road Bike', 'Kids Cycle', 'Perfect Ride'];

function BicycleWheel({ className }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="8 5" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="3.5" fill="currentColor" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line
            key={a}
            x1={100 + 11 * Math.cos(rad)} y1={100 + 11 * Math.sin(rad)}
            x2={100 + 62 * Math.cos(rad)} y2={100 + 62 * Math.sin(rad)}
            stroke="currentColor" strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

const heroStats = [
  { value: '4.9★', label: 'Google Rating' },
  { value: '554+', label: 'Happy Customers' },
  { value: '100+', label: 'Cycles in Stock' },
  { value: '7 Days', label: 'Open Every Day' },
];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(3);
  const [exiting, setExiting] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setExiting(false);
      }, 280);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 16;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    setParallax({ x, y });
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with mouse parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(1.1) translate(${parallax.x}px, ${parallax.y}px)`,
          willChange: 'transform',
          transition: 'transform 0.12s ease-out',
        }}
      >
        <img
          src={IMAGES.heroExterior}
          alt="Just Ride Cycles Showroom"
          className="hero-kenburns w-full h-full object-cover object-center"
        />
      </div>

      {/* Multi-layer cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/55 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Decorative spinning wheel — large, right background */}
      <div
        className="absolute right-8 xl:right-20 top-1/2 -translate-y-1/2 pointer-events-none text-white opacity-[0.07] hidden lg:block"
        style={{ width: 520, height: 520 }}
      >
        <BicycleWheel className="spin-slow w-full h-full" />
      </div>
      {/* Second smaller wheel, top-right */}
      <div
        className="absolute right-0 -top-20 pointer-events-none text-[#22c55e] opacity-[0.06] hidden xl:block"
        style={{ width: 280, height: 280 }}
      >
        <BicycleWheel className="spin-slow-rev w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 w-full">
        <div className="max-w-2xl">

          {/* Animated badge */}
          <div className="fade-up mb-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full hero-badge relative overflow-hidden">
              <div className="badge-shimmer absolute inset-0 rounded-full" />
              <Star className="w-3.5 h-3.5 text-[#22c55e] fill-[#22c55e] relative z-10" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.18em] relative z-10">
                Kumbakonam's #1 Cycle Shop
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="mb-4">
            <h1
              className="fade-up fade-up-d1 text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[0.95] mb-1"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Find Your
            </h1>
            {/* Cycling word with gradient */}
            <div className="relative h-[5.5rem] sm:h-[6.5rem] lg:h-[7rem] overflow-hidden">
              <h1
                className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] hero-gradient-text"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  opacity: exiting ? 0 : 1,
                  transform: exiting ? 'translateY(-24px)' : 'translateY(0)',
                  transition: 'opacity 0.28s ease, transform 0.28s ease',
                }}
              >
                {WORDS[wordIdx]}
              </h1>
            </div>
            {/* Animated green accent line */}
            <div className="fade-up-d2 accent-line mt-1 h-[3px] w-20 rounded-full" />
          </div>

          {/* Subtext */}
          <p className="fade-up fade-up-d2 text-white/70 text-lg sm:text-xl max-w-lg mb-6 leading-relaxed">
            Buy, rent, or explore — 100+ cycles on display in our showroom
          </p>

          {/* Stars */}
          <div className="fade-up fade-up-d2 flex items-center gap-2.5 mb-10">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <span className="text-white/85 font-semibold text-sm">4.9★ · 554 Google Reviews</span>
          </div>

          {/* CTA Buttons */}
          <div className="fade-up fade-up-d3 flex flex-col sm:flex-row gap-4 mb-12">
            <button
              data-testid="hero-view-cycles-btn"
              onClick={() => scrollTo('cycles')}
              className="btn-glow group flex items-center justify-center gap-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
            >
              View Cycles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              data-testid="hero-rent-btn"
              onClick={() => scrollTo('rentals')}
              className="glass-btn flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-xl"
            >
              Rent Now
            </button>
          </div>

          {/* Quick links */}
          <div className="fade-up fade-up-d4 flex flex-wrap items-center gap-6">
            <a
              href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="flex items-center gap-2 text-white/55 hover:text-[#22c55e] text-sm transition-colors group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </a>
            <a
              href={PHONE_LINK}
              data-testid="hero-call-btn"
              className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <span className="text-white/30 text-sm hidden sm:block">9 AM – 9 PM · 7 days</span>
          </div>
        </div>
      </div>

      {/* Glassmorphism bottom stats bar */}
      <div className="absolute bottom-5 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4"
            style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.13)',
            }}
          >
            {heroStats.map((s, i) => (
              <div key={i} className={`text-center ${i > 0 ? 'border-l border-white/10' : ''}`}>
                <div className="text-white text-xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {s.value}
                </div>
                <div className="text-white/45 text-xs font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        data-testid="hero-scroll-hint"
        onClick={() => scrollTo('trust-bar')}
        className="absolute bottom-[115px] sm:bottom-28 left-1/2 z-10 flex flex-col items-center gap-1 text-white/35 hover:text-white/60 transition-colors"
        style={{ transform: 'translateX(-50%)' }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
