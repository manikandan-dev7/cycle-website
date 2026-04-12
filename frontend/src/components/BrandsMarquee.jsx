import React from 'react';

const brands = ['HERCULES', 'HERO CYCLES', 'FIREFOX', 'MACH CITY', 'BSA', 'GEAR CYCLES', 'KIDS BIKES', 'MOUNTAIN BIKES'];
const doubled = [...brands, ...brands];

export default function BrandsMarquee() {
  return (
    <div className="bg-[#111111] py-5 overflow-hidden border-y border-white/5">
      <div className="flex">
        <div className="marquee-track flex items-center gap-10 whitespace-nowrap min-w-max">
          {doubled.map((brand, i) => (
            <React.Fragment key={i}>
              <span className="text-white/20 text-xs font-black uppercase tracking-[0.3em] hover:text-white/50 transition-colors cursor-default">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] opacity-60 flex-shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
