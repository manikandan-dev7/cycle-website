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

export default function TrustBar() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c554 = useCountUp(554, 1800, started);
  const c100 = useCountUp(100, 1400, started);

  const stats = [
    { icon: Star, value: '4.9★', label: 'Google Rating', color: '#f59e0b' },
    { icon: Users, value: `${c554}+`, label: 'Happy Customers', color: '#22c55e' },
    { icon: Package, value: `${c100}+`, label: 'Cycles in Stock', color: '#3b82f6' },
    { icon: ShieldCheck, value: 'Since 2018', label: 'Trusted Shop', color: '#a855f7' },
  ];

  return (
    <section id="trust-bar" ref={ref} className="bg-[#111111] py-12 sm:py-16" data-testid="trust-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} data-testid={`trust-stat-${i}`} className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div>
                  <div
                    className="text-white text-2xl sm:text-3xl font-black tracking-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#64748b] text-sm font-medium mt-1">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
