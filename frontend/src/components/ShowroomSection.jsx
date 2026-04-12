import React, { useRef, useEffect } from 'react';
import { Clock, UserCheck, Bike, CreditCard, ArrowRight } from 'lucide-react';
import { IMAGES, SHOP } from '../data/constants';
import useReveal from '../hooks/useReveal';

const details = [
  { icon: Clock, text: 'Open 9 AM – 9 PM daily' },
  { icon: UserCheck, text: 'Expert staff to guide you' },
  { icon: Bike, text: 'Test rides available' },
  { icon: CreditCard, text: 'EMI options available' },
];

export default function ShowroomSection() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [textRef, textVisible] = useReveal(0.2);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const img = imageRef.current;
      if (!section || !img) return;
      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const y = (progress - 0.5) * 70;
      img.style.transform = `scale(1.25) translateY(${y}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Parallax */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
            <img
              ref={imageRef}
              src={IMAGES.interiorWide}
              alt="Just Ride Cycles Showroom Interior"
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ transform: 'scale(1.25) translateY(0)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <div className="text-[#111111] font-black text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>100+</div>
              <div className="text-[#64748b] text-xs font-medium">Cycles on Display</div>
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`reveal ${textVisible ? 'visible' : ''}`}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Our Showroom</span>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mt-3 mb-6 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Step Inside<br />
              <span className="text-[#f97316]">Just Ride</span>
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              Over 100 cycles on display across every category — from kids' first bikes to
              high-performance road cycles. Walk in or call us to explore.
            </p>

            <ul className="space-y-4 mb-10">
              {details.map((d, i) => {
                const Icon = d.icon;
                return (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#f97316]" />
                    </div>
                    <span className="text-[#374151] font-medium text-sm">{d.text}</span>
                  </li>
                );
              })}
            </ul>

            <a
              href={SHOP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="showroom-directions-btn"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#222] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
