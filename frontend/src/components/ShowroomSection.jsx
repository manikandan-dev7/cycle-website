import React, { useRef, useEffect } from 'react';
import { Clock, UserCheck, Bike, CreditCard, ArrowRight } from 'lucide-react';
import { IMAGES, SHOP } from '../data/constants';
import useReveal from '../hooks/useReveal';

const details = [
  { icon: Clock,      text: 'Open 9 AM – 9 PM daily' },
  { icon: UserCheck,  text: 'Expert staff to guide you' },
  { icon: Bike,       text: 'Test rides available' },
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
      img.style.transform = `scale(1.25) translateY(${(progress - 0.5) * 70}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="carbon-bg py-20 sm:py-28 overflow-hidden relative">
      {/* Top metallic edge */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image with parallax + metal frame */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5]"
            style={{
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            <img
              ref={imageRef}
              src={IMAGES.interiorWide}
              alt="Just Ride Cycles Showroom Interior"
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ transform: 'scale(1.25) translateY(0)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
            {/* Floating badge */}
            <div className="embossed-card absolute bottom-6 left-6 rounded-xl px-4 py-3">
              <div className="chrome-text font-black text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>100+</div>
              <div className="text-[#555] text-xs font-medium">Cycles on Display</div>
            </div>
          </div>

          {/* Text content */}
          <div ref={textRef} className={`reveal ${textVisible ? 'visible' : ''}`}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Our Showroom</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 mb-6 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="chrome-text">Step Inside<br /></span>
              <span className="glossy-orange-text">Just Ride</span>
            </h2>
            <p className="text-[#777] text-base leading-relaxed mb-8">
              Over 100 cycles on display across every category — from kids' first bikes to
              high-performance road cycles. Walk in or call us to explore.
            </p>

            <ul className="space-y-4 mb-10">
              {details.map((d, i) => {
                const Icon = d.icon;
                return (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
                        border: '1px solid rgba(249,115,22,0.2)',
                        boxShadow: 'inset 0 1px 0 rgba(249,115,22,0.15)',
                      }}
                    >
                      <Icon className="w-4 h-4 text-[#f97316]" />
                    </div>
                    <span className="text-[#999] font-medium text-sm">{d.text}</span>
                  </li>
                );
              })}
            </ul>

            <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer"
              data-testid="showroom-directions-btn"
              className="sku-btn-dark inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
