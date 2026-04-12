import React, { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { CYCLES, WA_BASE } from '../data/constants';
import useReveal from '../hooks/useReveal';

function CycleCard({ cycle, delay }) {
  const cardRef = useRef(null);
  const [revealRef, visible] = useReveal(0.1);

  const waLink = `${WA_BASE}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(cycle.name)}.%20Can%20you%20share%20more%20details%3F`;

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -5;
    const ry = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };

  return (
    <div
      ref={revealRef}
      className={`reveal reveal-d${delay} ${visible ? 'visible' : ''}`}
    >
      <div
        ref={cardRef}
        data-testid={`cycle-card-${cycle.id}`}
        className="cycle-card bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col h-full"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] bg-[#f8fafc]">
          <img
            src={cycle.image}
            alt={cycle.name}
            className="img-zoom w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute top-3 left-3 text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ backgroundColor: cycle.badgeColor }}
          >
            {cycle.badge}
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#111111] text-xs font-semibold px-2.5 py-1 rounded-full">
            {cycle.brand}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col flex-1">
          <h3
            className="text-[#111111] text-lg font-bold mb-1"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {cycle.name}
          </h3>
          <p className="text-[#64748b] text-sm mb-3">{cycle.type}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {cycle.specs.map((spec) => (
              <span key={spec} className="bg-[#f1f5f9] text-[#475569] text-xs font-medium px-2.5 py-1 rounded-md">
                {spec}
              </span>
            ))}
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`enquire-btn-${cycle.id}`}
            className="mt-auto w-full flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-sm py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CycleShowcase() {
  const [titleRef, titleVisible] = useReveal(0.2);

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e]">
            Our Collection
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Top Picks in Showroom
          </h2>
          <p className="text-[#64748b] text-base mt-3 max-w-xl mx-auto">
            Explore our handpicked selection. Every cycle is in-stock and ready for a test ride.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CYCLES.map((cycle, i) => (
            <CycleCard key={cycle.id} cycle={cycle} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
