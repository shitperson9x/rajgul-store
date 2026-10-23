'use client';

import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

function Counter({ end, duration = 2000, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * end);
            
            setCount(current);
            
            if (progress === 1) {
              clearInterval(timer);
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 text-center">
      <div className="text-3xl font-bold text-purple-400">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      <Counter end={1000} suffix="+" label="Orders" />
      <Counter end={95} suffix="%" label="Win Rate" />
      <Counter end={24} suffix="/7" label="Support" duration={1500} />
    </div>
  );
}
