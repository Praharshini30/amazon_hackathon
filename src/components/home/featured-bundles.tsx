'use client';

import { Package, Star, ArrowRight } from 'lucide-react';

const BUNDLES = [
  { name: 'Travel Creator Kit', emoji: '✈️', items: 4, price: '$878', savings: '22%', rating: 4.8, gradient: 'from-blue-500 to-cyan-400' },
  { name: 'Home Gym Starter', emoji: '💪', items: 4, price: '$371', savings: '18%', rating: 4.7, gradient: 'from-green-500 to-emerald-400' },
  { name: 'AI Dev Workspace', emoji: '🤖', items: 4, price: '$992', savings: '15%', rating: 4.9, gradient: 'from-indigo-500 to-blue-600' },
  { name: 'Pro Gaming Setup', emoji: '🎮', items: 5, price: '$1,450', savings: '20%', rating: 4.8, gradient: 'from-purple-500 to-pink-500' },
];

export function FeaturedBundles() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-brand-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Creator Bundles</h2>
            </div>
            <p className="text-sm text-slate-500">Curated starter kits — save more when you buy the bundle.</p>
          </div>
          <button className="text-sm font-medium text-brand-600 flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BUNDLES.map((bundle) => (
            <div
              key={bundle.name}
              className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden card-hover cursor-pointer"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${bundle.gradient}`} />

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{bundle.emoji}</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full">
                    Save {bundle.savings}
                  </span>
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{bundle.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{bundle.items} essential products included</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">{bundle.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{bundle.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
