import React from 'react';
import { ArrowRight, Star, Phone } from 'lucide-react';
import { IMAGES, WA_BASE, PHONE_LINK, SHOP } from '../data/constants';

/* Decorative metal cross-spark */
const Spark = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="none" style={style} className="absolute pointer-events-none" aria-hidden="true">
    <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M2 12L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const featuredWA = `${WA_BASE}?text=Hi!%20I'm%20interested%20in%20a%20Hercules%20Roadeo.%20Can%20you%20share%20details%3F`;

const stats = [
  { val: '4.9★', label: 'Google Rating' },
  { val: '554+', label: 'Happy Customers' },
  { val: '100+', label: 'In Stock' },
];

export default function HeroSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="carbon-bg relative min-h-screen overflow-hidden" data-testid="hero-section">

      {/* Metallic orange left-edge stripe */}
      <div
        className="absolute top-0 left-0 w-[5px] h-full z-10"
        style={{ background: 'linear-gradient(to bottom, #fb923c, #f97316, #c04400, #f97316, #fb923c)' }}
      />

      {/* Orange ambient glow — left */}
      <div
        className="absolute top-0 left-0 w-48 h-full pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(249,115,22,0.06), transparent)' }}
      />

      {/* Subtle highlight stripe — top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }}
      />

      {/* Metal cross sparks */}
      <Spark style={{ top: '23%', left: '39%', width: 22, height: 22, color: '#f97316', opacity: 0.7 }} />
      <Spark style={{ top: '37%', right: '31%', width: 14, height: 14, color: '#888888', opacity: 0.5 }} />
      <Spark style={{ bottom: '34%', left: '45%', width: 11, height: 11, color: '#f97316', opacity: 0.35 }} />
      <Spark style={{ top: '56%', right: '19%', width: 18, height: 18, color: '#f97316', opacity: 0.3 }} />
      <Spark style={{ top: '15%', right: '13%', width: 12, height: 12, color: '#555555', opacity: 0.35 }} />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full pt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-screen items-center">

        {/* ─── LEFT: Content ─── */}
        <div className="flex flex-col justify-center py-16 lg:py-0">

          {/* Metal badge */}
          <div className="fade-up mb-8">
            <div className="metal-badge inline-flex items-center gap-2.5 rounded-full px-5 py-2.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #fb923c 0%, #f97316 60%)',
                  boxShadow: '0 0 8px rgba(249,115,22,0.9), 0 0 16px rgba(249,115,22,0.4)',
                }}
              />
              <span className="text-[#b0b0b0] text-xs font-bold tracking-widest uppercase">
                Kumbakonam's #1 Cycle Shop
              </span>
            </div>
          </div>

          {/* MASSIVE skeuomorphic headline */}
          <div className="fade-up fade-up-d1 mb-5 leading-none">
            {/* Chrome metallic "JUST RIDE" */}
            <h1
              className="chrome-text font-black leading-none tracking-tighter uppercase"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(3rem, 8.5vw, 7.8rem)',
              }}
              data-testid="hero-headline"
            >
              JUST RIDE
            </h1>

            {/* Glossy orange "CYCLES" */}
            <h1
              className="glossy-orange-text font-black leading-none tracking-tighter uppercase"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(3.5rem, 10vw, 9.2rem)',
              }}
            >
              CYCLES
            </h1>
          </div>

          {/* Metal divider accent */}
          <div
            className="fade-up fade-up-d1 mb-6 h-[2px] w-20 rounded-full"
            style={{ background: 'linear-gradient(to right, #f97316, rgba(249,115,22,0.3), transparent)' }}
          />

          {/* Subtext */}
          <p className="fade-up fade-up-d2 text-[#707070] text-sm sm:text-base max-w-xs leading-relaxed mb-8">
            Experience the perfect blend of quality, durability and expert guidance — cycles built for every rider.
          </p>

          {/* Skeuomorphic Buttons */}
          <div className="fade-up fade-up-d3 flex flex-wrap gap-3 mb-12">
            <button
              data-testid="hero-view-cycles-btn"
              onClick={() => scrollTo('cycles')}
              className="sku-btn-dark group inline-flex items-center gap-2.5 text-white font-bold text-sm px-8 py-4 rounded-full"
            >
              SEE ALL CYCLES
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              data-testid="hero-rent-btn"
              onClick={() => scrollTo('rentals')}
              className="sku-btn-orange inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full"
            >
              RENT A BIKE
            </button>
          </div>

          {/* Stats — chrome numbers */}
          <div className="fade-up fade-up-d4 flex items-center gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div
                    className="w-px h-10"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)' }}
                  />
                )}
                <div>
                  <div
                    className="chrome-text text-xl font-black leading-none"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[#555] text-xs mt-1">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: Bike Image ─── */}
        <div className="relative flex items-center justify-center min-h-[420px] lg:min-h-screen py-8 lg:py-0">

          {/* Orange halo behind bike */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '75%',
              height: '65%',
              background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 68%)',
            }}
          />

          {/* Main cycle image */}
          <img
            src={IMAGES.mtbStudio}
            alt="Premium Cycle — Just Ride Cycles"
            data-testid="hero-bike-img"
            className="relative z-10 w-full max-w-md lg:max-w-2xl object-contain select-none"
            style={{
              filter:
                'drop-shadow(0 30px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(249,115,22,0.12))',
            }}
          />

          {/* Embossed floating product card */}
          <div
            data-testid="hero-float-card"
            className="embossed-card absolute bottom-10 lg:bottom-16 right-0 sm:right-2 rounded-2xl p-5 z-20"
            style={{ minWidth: 200 }}
          >
            <p
              className="chrome-text font-bold text-sm mb-1 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Hercules Roadeo A50
            </p>
            <p className="text-[#555] text-xs mb-2">Mountain Bike</p>
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-[#555] text-xs ml-1">554 reviews</span>
            </div>
            <div className="metal-divider mb-4" />
            <a
              href={featuredWA}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-enquire-btn"
              className="sku-btn-orange w-full flex items-center justify-between text-white text-xs font-bold px-4 py-2.5 rounded-xl"
            >
              Enquire Now
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embossed phone panel — top right */}
          <div
            className="embossed-card absolute top-12 lg:top-24 right-0 sm:right-2 rounded-xl px-4 py-3 flex items-center gap-3 z-20"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(145deg, #2a1200, #1a0c00)',
                boxShadow: 'inset 0 1px 0 rgba(249,115,22,0.25), 0 0 8px rgba(249,115,22,0.2)',
                border: '1px solid rgba(249,115,22,0.2)',
              }}
            >
              <Phone className="w-4 h-4 text-[#f97316]" />
            </div>
            <div>
              <div className="text-[#777] text-[10px] font-semibold uppercase tracking-wider">Call Us Now</div>
              <a
                href={PHONE_LINK}
                data-testid="hero-call-card-btn"
                className="text-[#f97316] text-xs font-bold hover:text-[#fb923c] transition-colors"
              >
                {SHOP.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)' }}
        />
        <span className="text-[#444] text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
      </div>
    </section>
  );
}
