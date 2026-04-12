import React from 'react';

const brands = ['HERCULES', 'HERO CYCLES', 'FIREFOX', 'MACH CITY', 'BSA', 'GEAR CYCLES', 'KIDS BIKES', 'MOUNTAIN BIKES'];
const doubled = [...brands, ...brands];

export default function BrandsMarquee() {
  return (
    <div className="carbon-bg py-5 overflow-hidden relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="flex">
        <div className="marquee-track flex items-center gap-10 whitespace-nowrap min-w-max">
          {doubled.map((brand, i) => (
            <React.Fragment key={i}>
              <span className="text-[#2e2e2e] text-xs font-black uppercase tracking-[0.3em] hover:text-[#f97316] transition-colors cursor-default"
                style={{ textShadow: 'none' }}>
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#f97316', boxShadow: '0 0 6px rgba(249,115,22,0.6)' }} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
