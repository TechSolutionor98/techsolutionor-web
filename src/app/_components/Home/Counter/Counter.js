"use client"
import React, { useEffect, useState, useRef } from 'react'

const counters = [
  { value: 100, suffix: '+', label: 'Satisfied Clients' },
  { value: 150, suffix: '+', label: 'Completed Projects' },
  { value: 90, suffix: '%', label: 'Success Rate' }
];

const Counter = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const durations = [1200, 1200, 1200];
    counters.forEach((counter, idx) => {
      let start = 0;
      const end = counter.value;
      const increment = Math.ceil(end / (durations[idx] / 20));
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[idx] = start;
          return updated;
        });
      }, 20);
      return () => clearInterval(timer);
    });
  }, [inView]);

  return (
    <div ref={ref} className='w-full h-[148px] bg-[#41b349] flex items-center justify-center mt-40'>
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
        {counters.map((counter, idx) => (
          <div key={counter.label} className="flex flex-col items-center justify-center">
            <span className="text-white text-[60px] md:text-[48px] font-[700] leading-none">
              {counts[idx]}
              {counter.suffix}
            </span>
            <span className="text-white text-[20px]  mt-4">{counter.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Counter
