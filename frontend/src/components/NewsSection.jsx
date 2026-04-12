import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { WA_GENERAL } from '../data/constants';
import useReveal from '../hooks/useReveal';

export default function NewsSection() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section className="carbon-bg py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">What's New</span>
          <h2 className="chrome-text text-3xl font-black tracking-tight mt-2 mb-8"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
            Latest Updates
          </h2>

          <div className="embossed-card rounded-2xl overflow-hidden relative max-w-2xl"
            style={{ borderLeft: '3px solid #f97316' }}
          >
            {/* Orange left glow */}
            <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(249,115,22,0.07), transparent)' }} />

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 relative">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="metal-badge flex items-center gap-1.5 px-2.5 py-1 rounded-full">
                    <Zap className="w-3 h-3 text-[#f97316]" />
                    <span className="text-[#f97316] text-xs font-bold uppercase tracking-wider">New Arrival</span>
                  </div>
                  <span className="text-[#444] text-xs">2025</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  New Stock Just In
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Latest cycles now available in showroom. Visit us or contact to check availability and pricing.
                </p>
              </div>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
                data-testid="news-enquire-btn"
                className="sku-btn-orange flex-shrink-0 inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-lg whitespace-nowrap"
              >
                Check Availability
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
