'use client';

import { Timer, Star } from 'lucide-react';

const DEALS = [
  { name: 'Sony ZV-E10 Camera', price: '₹55,990', original: '₹74,990', discount: '25% off', rating: 4.7, reviews: '2.3K', img: '📸' },
  { name: 'Bowflex Dumbbells', price: '₹28,999', original: '₹42,990', discount: '33% off', rating: 4.6, reviews: '1.8K', img: '🏋️' },
  { name: 'MacBook Pro M4', price: '₹1,49,900', original: '₹1,99,900', discount: '25% off', rating: 4.9, reviews: '5.2K', img: '💻' },
  { name: 'GoPro Hero 13', price: '₹33,990', original: '₹44,990', discount: '24% off', rating: 4.5, reviews: '980', img: '🎥' },
  { name: 'RTX 4070 GPU', price: '₹49,990', original: '₹59,990', discount: '17% off', rating: 4.8, reviews: '3.1K', img: '🖥️' },
];

export function DealOfDay() {
  return (
    <div className="amazon-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Today&apos;s Deals</h2>
        <a href="#" className="amazon-link text-sm">See all deals</a>
      </div>

      {/* Timer */}
      <div className="flex items-center gap-2 mb-4 text-red-700">
        <Timer className="w-4 h-4" />
        <span className="text-sm font-medium">Ends in 08:42:15</span>
      </div>

      {/* Scrollable deals row */}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
        {DEALS.map((deal) => (
          <div key={deal.name} className="min-w-[180px] max-w-[180px] shrink-0 cursor-pointer group">
            {/* Product image placeholder */}
            <div className="w-full aspect-square bg-gray-50 rounded-sm flex items-center justify-center text-5xl mb-2 group-hover:scale-105 transition-transform">
              {deal.img}
            </div>

            {/* Discount badge */}
            <span className="inline-block bg-red-700 text-white text-xs font-bold px-2 py-0.5 rounded-sm mb-1">
              {deal.discount}
            </span>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-lg font-bold text-gray-900">{deal.price}</span>
              <span className="text-xs text-gray-500 line-through">{deal.original}</span>
            </div>

            {/* Name */}
            <p className="text-sm text-gray-800 line-clamp-2 mb-1">{deal.name}</p>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < Math.floor(deal.rating) ? 'fill-[#de7921] text-[#de7921]' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-xs text-[#007185]">{deal.reviews}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
