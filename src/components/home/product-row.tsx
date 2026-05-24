'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useRef } from 'react';

const PRODUCTS = [
  { name: 'Rode VideoMicro II', price: '₹5,990', rating: 4.8, reviews: '5.1K', img: '🎤', badge: 'Best Seller' },
  { name: 'Joby GorillaPod', price: '₹3,990', rating: 4.6, reviews: '3.8K', img: '📱', badge: null },
  { name: 'Apple Watch S10', price: '₹39,900', rating: 4.8, reviews: '18K', img: '⌚', badge: 'Choice' },
  { name: 'DJI OM 6 Gimbal', price: '₹12,990', rating: 4.7, reviews: '1.9K', img: '🎬', badge: null },
  { name: 'Anker Power Bank', price: '₹7,490', rating: 4.7, reviews: '22K', img: '🔋', badge: 'Best Seller' },
  { name: 'Logitech MX Keys', price: '₹10,900', rating: 4.8, reviews: '7.8K', img: '⌨️', badge: null },
  { name: 'Dell 4K Monitor', price: '₹44,990', rating: 4.6, reviews: '5.4K', img: '🖥️', badge: 'Choice' },
  { name: 'Theragun Pro', price: '₹29,900', rating: 4.6, reviews: '4.5K', img: '💆', badge: null },
];

export function ProductRow({ title }: { title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return;
    const amount = dir === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  }

  return (
    <div className="amazon-card relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <a href="#" className="amazon-link text-sm">See more</a>
      </div>

      {/* Arrow left */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-24 bg-white border border-gray-300 rounded-r-sm flex items-center justify-center shadow-md hover:bg-gray-50"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Products scroll */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide px-8">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="min-w-[160px] max-w-[160px] shrink-0 cursor-pointer group">
            <div className="w-full aspect-square bg-gray-50 rounded-sm flex items-center justify-center text-4xl mb-2 relative group-hover:scale-105 transition-transform">
              {p.img}
              {p.badge && (
                <span className="absolute top-1 left-1 bg-[#232f3e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-[#007185] hover:text-[#c7511f] hover:underline line-clamp-2 mb-1">{p.name}</p>
            <div className="flex items-center gap-1 mb-0.5">
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < Math.floor(p.rating) ? 'fill-[#de7921] text-[#de7921]' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-xs text-[#007185]">{p.reviews}</span>
            </div>
            <span className="text-sm font-bold text-gray-900">{p.price}</span>
          </div>
        ))}
      </div>

      {/* Arrow right */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-24 bg-white border border-gray-300 rounded-l-sm flex items-center justify-center shadow-md hover:bg-gray-50"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
