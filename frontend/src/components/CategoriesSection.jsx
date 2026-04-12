import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/constants';
import useReveal from '../hooks/useReveal';

function CategoryCard({ cat, delay, onClick }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div
      ref={ref}
      onClick={onClick}
      data-testid={`category-card-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
      className={`cat-card group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] reveal reveal-d${delay} ${visible ? 'visible' : ''}`}
    >
      <img
        src={cat.image}
        alt={cat.name}
        className="img-zoom absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div
        className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: cat.accentColor }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div
          className="inline-block text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2"
          style={{ backgroundColor: `${cat.accentColor}80` }}
        >
          {cat.name}
        </div>
        <h3
          className="text-white text-xl font-black leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {cat.name}
        </h3>
        <p className="text-white/70 text-sm mt-1">{cat.desc}</p>
        <div className="flex items-center gap-1.5 mt-3 text-white/60 group-hover:text-white transition-colors text-xs font-semibold">
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

export default function CategoriesSection() {
  const [titleRef, titleVisible] = useReveal(0.2);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="cycles" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e]">
            What are you looking for?
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Find Your Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.name}
              cat={cat}
              delay={i + 1}
              onClick={() => scrollTo('showcase')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
