'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  { bg: 'from-blue-600 to-blue-800', text: 'Great Indian Festival | Up to 70% off', sub: 'Electronics, Fashion, Home & more' },
  { bg: 'from-emerald-600 to-teal-700', text: 'New Year, New You | Fitness Deals', sub: 'Starting ₹299 on gym & sports gear' },
  { bg: 'from-purple-700 to-indigo-800', text: 'AI & Tech Essentials | Up to 40% off', sub: 'GPUs, Monitors, Keyboards & more' },
  { bg: 'from-orange-500 to-red-600', text: 'Creator Starter Kits | Save 30%', sub: 'Cameras, Mics, Tripods bundled together' },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banner = BANNERS[current];

  return (
    <div className="relative">
      {/* Banner */}
      <div className={`h-[300px] sm:h-[400px] bg-gradient-to-r ${banner.bg} flex items-center justify-center text-center px-4 transition-all duration-700`}>
        <div>
          <h2 className="text-white text-2xl sm:text-4xl font-bold mb-2">{banner.text}</h2>
          <p className="text-white/80 text-sm sm:text-base">{banner.sub}</p>
        </div>
      </div>

      {/* Fade to white at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#e3e6e6] to-transparent" />

      {/* Arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + BANNERS.length) % BANNERS.length)}
        className="absolute left-2 top-1/3 -translate-y-1/2 p-2 bg-white/80 rounded-sm border border-gray-300 hover:border-gray-500"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % BANNERS.length)}
        className="absolute right-2 top-1/3 -translate-y-1/2 p-2 bg-white/80 rounded-sm border border-gray-300 hover:border-gray-500"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
