import React, { useState, useEffect, useRef } from 'react';
import { Star, Users, Package, ShieldCheck } from 'lucide-react';

function useCountUp(end, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, start]);
  return count;
}

const statDefs = [
  { icon: Star,        label: 'Google Rating',    color: '#f59e0b', isStatic: true, staticVal: '4.9★' },
  { icon: Users,       label: 'Happy Customers',  color: '#f97316', end: 554, suffix: '+' },
  { icon: Package,     label: 'Cycles in Stock',  color: '#3b82f6', end: 100, suffix: '+' },
  { icon: ShieldCheck, label: 'Trusted Shop',     color: '#a855f7', isStatic: true, staticVal: 'Since 2018' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const c554 = useCountUp(554, 1800, started);
  const c100 = useCountUp(100, 1400, started);
  const counts = [null, c554, c100, null];

  return (
    <section id="trust-bar" ref={ref} data-testid="trust-bar"
      className="carbon-bg py-14 sm:py-16 relative overflow-hidden"
    >
      {/* Top metallic edge */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {statDefs.map((stat, i) => {
            const Icon = stat.icon;
            const displayVal = stat.isStatic ? stat.staticVal : `${counts[i]}${stat.suffix}`;
            return (
              <div
                key={i}
                data-testid={`trust-stat-${i}`}
                className="group embossed-card relative flex flex-col items-center text-center gap-4 p-7 rounded-2xl overflow-hidden cursor-default"
              >
                {/* Inner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at center, ${stat.color}10 0%, transparent 70%)` }}
                />

                {/* Skeuomorphic icon box */}
                <div
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(145deg, ${stat.color}18 0%, ${stat.color}08 100%)`,
                    border: `1px solid ${stat.color}22`,
                    boxShadow: `inset 0 1px 0 ${stat.color}20, 0 4px 10px rgba(0,0,0,0.4)`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                {/* Chrome value */}
                <div>
                  <div
                    className="chrome-text text-3xl font-black tracking-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {displayVal}
                  </div>
                  <div className="text-[#505050] text-sm font-medium mt-1.5">{stat.label}</div>
                </div>

                {/* Bottom accent glow line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-14 rounded-full transition-all duration-500"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom metallic edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />
    </section>
  );
}
