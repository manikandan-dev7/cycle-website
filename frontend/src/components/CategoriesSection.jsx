import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/constants';
import useReveal from '../hooks/useReveal';

function CategoryCard({ cat, delay }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div
      ref={ref}
      data-testid={`category-card-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
      className={`cat-card group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] reveal reveal-d${delay} ${visible ? 'visible' : ''}`}
      style={{
        boxShadow: '0 8px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <img src={cat.image} alt={cat.name} className="img-zoom absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />
      {/* Metallic left accent line on hover */}
      <div className="absolute top-0 left-0 w-[3px] h-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to bottom, transparent, ${cat.accentColor}, transparent)` }} />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="inline-block text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2"
          style={{ background: `${cat.accentColor}55`, border: `1px solid ${cat.accentColor}44` }}>
          {cat.name}
        </div>
        <h3 className="text-white text-xl font-black leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {cat.name}
        </h3>
        <p className="text-white/50 text-sm mt-1">{cat.desc}</p>
        <div className="flex items-center gap-1.5 mt-3 text-white/40 group-hover:text-[#f97316] transition-colors text-xs font-semibold">
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

export default function CategoriesSection() {
  const [titleRef, titleVisible] = useReveal(0.2);

  return (
    <section id="cycles" className="carbon-bg py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">What are you looking for?</span>
          <h2 className="chrome-text text-4xl sm:text-5xl font-black tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
            Find Your Category
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
