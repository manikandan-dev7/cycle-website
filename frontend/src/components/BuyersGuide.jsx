import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_EXPERT } from '../data/constants';
import useReveal from '../hooks/useReveal';

const steps = [
  { number: '01', title: 'Choose by Height', body: 'Cycle frame size should match your height. We\'ll help you size it perfectly in-store.', color: '#f97316' },
  { number: '02', title: 'City vs Off-Road',  body: 'City riding? Road bike. Rough trails? Mountain bike. Mixed use? Hybrid is your bet.', color: '#3b82f6' },
  { number: '03', title: 'Gear vs Non-Gear', body: 'Flat terrain — single speed is fine. Hills and long rides — go multi-gear for comfort.', color: '#f59e0b' },
  { number: '04', title: 'Kids vs Adult',    body: 'Kids cycles grouped by age. Adult cycles categorized by purpose and budget.',         color: '#a855f7' },
];

function StepCard({ step, idx }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div ref={ref} data-testid={`guide-step-${idx + 1}`}
      className={`reveal reveal-d${idx + 1} ${visible ? 'visible' : ''} embossed-card rounded-2xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden group`}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 30% 30%, ${step.color}08, transparent 70%)` }} />

      {/* Large faded number */}
      <div className="font-black leading-none" style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: '4rem',
        color: step.color,
        opacity: 0.1,
        filter: `drop-shadow(0 0 12px ${step.color})`,
      }}>
        {step.number}
      </div>

      {/* Accent line */}
      <div className="h-[2px] w-8 rounded-full"
        style={{ background: `linear-gradient(to right, ${step.color}, transparent)`, boxShadow: `0 0 6px ${step.color}80` }} />

      <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {step.title}
      </h3>
      <p className="text-[#666] text-sm leading-relaxed">{step.body}</p>

      {/* Bottom color dot */}
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full"
        style={{ backgroundColor: step.color, boxShadow: `0 0 8px ${step.color}` }} />
    </div>
  );
}

export default function BuyersGuide() {
  const [titleRef, titleVisible] = useReveal(0.2);

  return (
    <section id="guide" className="carbon-bg py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Buyer's Guide</span>
          <h2 className="chrome-text text-4xl sm:text-5xl font-black tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
            Not Sure Which Cycle?
          </h2>
          <p className="text-[#555] text-base mt-3 max-w-xl mx-auto">
            Our experts help you pick the right one. Here's a quick guide:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step, i) => <StepCard key={i} step={step} idx={i} />)}
        </div>

        <div className="text-center">
          <a href={WA_EXPERT} target="_blank" rel="noopener noreferrer"
            data-testid="guide-whatsapp-btn"
            className="sku-btn-orange inline-flex items-center gap-2.5 text-white font-bold text-base px-8 py-4 rounded-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Ask Our Experts on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
