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
    const rx = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -5;
    const ry = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 7;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  };
  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)';
  };

  return (
    <div ref={revealRef} className={`reveal reveal-d${delay} ${visible ? 'visible' : ''}`}>
      <div ref={cardRef} data-testid={`cycle-card-${cycle.id}`}
        className="cycle-card embossed-card rounded-2xl overflow-hidden flex flex-col h-full"
        onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      >
        {/* Image area */}
        <div className="relative overflow-hidden aspect-[4/3]" style={{ backgroundColor: '#111' }}>
          <img src={cycle.image} alt={cycle.name} className="img-zoom w-full h-full object-cover opacity-85" loading="lazy" />
          {/* Badge */}
          <div className="absolute top-3 left-3 text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${cycle.badgeColor}cc, ${cycle.badgeColor}88)`,
              border: `1px solid ${cycle.badgeColor}44`,
              boxShadow: `0 0 10px ${cycle.badgeColor}50`,
            }}
          >
            {cycle.badge}
          </div>
          {/* Brand */}
          <div className="metal-badge absolute top-3 right-3 text-[#aaa] text-xs font-semibold px-2.5 py-1 rounded-full">
            {cycle.brand}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="chrome-text text-lg font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {cycle.name}
          </h3>
          <p className="text-[#555] text-sm mb-3">{cycle.type}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {cycle.specs.map((spec) => (
              <span key={spec} className="metal-badge text-[#888] text-xs font-medium px-2.5 py-1 rounded-md">
                {spec}
              </span>
            ))}
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            data-testid={`enquire-btn-${cycle.id}`}
            className="sku-btn-orange mt-auto w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-3 rounded-xl"
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
    <section id="showcase" className="carbon-bg py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Our Collection</span>
          <h2 className="chrome-text text-4xl sm:text-5xl font-black tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
            Top Picks in Showroom
          </h2>
          <p className="text-[#555] text-base mt-3 max-w-xl mx-auto">
            Handpicked selection — every cycle in stock, ready for a test ride.
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
