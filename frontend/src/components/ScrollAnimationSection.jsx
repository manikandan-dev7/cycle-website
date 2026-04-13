import React, { useRef, useState, useEffect } from 'react';
import { IMAGES, WA_GENERAL } from '../data/constants';

export default function ScrollAnimationSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tx = `${(progress * 200) - 90}vw`;

  return (
    <section ref={sectionRef} style={{ height: '280vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f8fafc] flex items-center justify-center">
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#22c55e]">
            Performance
          </span>
          <h2
            className="text-5xl sm:text-7xl font-black tracking-tighter text-[#111111] mt-3 text-center"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Built to Ride
          </h2>
          <p className="text-[#64748b] text-base mt-4 text-center px-4">
            Every cycle in our showroom is handpicked for quality
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="scroll-anim-enquire-btn"
            className="mt-8 inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-6 py-3 rounded-lg transition-colors pointer-events-auto"
          >
            Explore Our Collection
          </a>
        </div>

        {/* Moving cycle image */}
        <div
          className="absolute"
          style={{
            transform: `translateX(${tx})`,
            willChange: 'transform',
            bottom: '10%',
            zIndex: 0,
          }}
        >
          <img
            src={IMAGES.mtbStudio}
            alt="Premium Mountain Bike"
            className="h-[45vh] w-auto object-contain drop-shadow-2xl opacity-40"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
