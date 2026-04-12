import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_EXPERT } from '../data/constants';
import useReveal from '../hooks/useReveal';

const steps = [
  {
    number: '01',
    title: 'Choose by Height',
    body: 'Cycle frame size should match your height. We\'ll help you size it perfectly in-store.',
    color: '#f97316',
  },
  {
    number: '02',
    title: 'City vs Off-Road',
    body: 'City riding? Road bike. Rough trails? Mountain bike. Mixed use? Hybrid is your best bet.',
    color: '#0284c7',
  },
  {
    number: '03',
    title: 'Gear vs Non-Gear',
    body: 'Flat terrain — single speed is fine. Hills and long rides — go multi-gear for comfort.',
    color: '#f59e0b',
  },
  {
    number: '04',
    title: 'Kids vs Adult',
    body: 'Kids cycles are grouped by age. Adult cycles are categorized by purpose and budget.',
    color: '#a855f7',
  },
];

function StepCard({ step, idx }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div
      ref={ref}
      data-testid={`guide-step-${idx + 1}`}
      className={`reveal reveal-d${idx + 1} ${visible ? 'visible' : ''} bg-white border border-[#e2e8f0] rounded-2xl p-6 sm:p-8 flex flex-col gap-4`}
    >
      <div
        className="text-4xl font-black opacity-15 leading-none"
        style={{ color: step.color, fontFamily: 'Outfit, sans-serif' }}
      >
        {step.number}
      </div>
      <div
        className="w-1 h-6 rounded-full"
        style={{ backgroundColor: step.color }}
      />
      <h3
        className="text-[#111111] text-xl font-bold"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        {step.title}
      </h3>
      <p className="text-[#64748b] text-sm leading-relaxed">{step.body}</p>
    </div>
  );
}

export default function BuyersGuide() {
  const [titleRef, titleVisible] = useReveal(0.2);

  return (
    <section id="guide" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">
            Buyer's Guide
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mt-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Not Sure Which Cycle?
          </h2>
          <p className="text-[#64748b] text-base mt-3 max-w-xl mx-auto">
            Our experts help you pick the right one. Here's a quick guide:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} idx={i} />
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_EXPERT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="guide-whatsapp-btn"
            className="inline-flex items-center gap-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Ask Our Experts on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
