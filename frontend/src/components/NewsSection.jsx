import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { WA_GENERAL } from '../data/constants';
import useReveal from '../hooks/useReveal';

export default function NewsSection() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e]">
            What's New
          </span>
          <h2
            className="text-3xl font-black text-[#111111] tracking-tight mt-2 mb-8"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Latest Updates
          </h2>

          <div className="border-l-4 border-[#22c55e] bg-white rounded-r-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 max-w-2xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1.5 bg-[#22c55e]/10 px-2.5 py-1 rounded-full">
                  <Zap className="w-3 h-3 text-[#22c55e]" />
                  <span className="text-[#16a34a] text-xs font-bold uppercase tracking-wider">New Arrival</span>
                </div>
                <span className="text-[#94a3b8] text-xs">2025</span>
              </div>
              <h3
                className="text-[#111111] text-xl font-bold mb-2"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                New Stock Just In
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Latest cycles now available in showroom. Visit us or contact to check availability and pricing.
              </p>
            </div>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="news-enquire-btn"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Check Availability
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
