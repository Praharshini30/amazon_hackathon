'use client';

import { Flame, TrendingUp } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';

const TRENDING = [
  { categoryId: 'travel-vlogger', count: 1420 },
  { categoryId: 'ai-engineer', count: 1180 },
  { categoryId: 'fitness', count: 980 },
  { categoryId: 'gamer', count: 850 },
  { categoryId: 'content-creator', count: 720 },
  { categoryId: 'chef', count: 640 },
];

export function TrendingAspirations() {
  const maxCount = TRENDING[0]?.count || 1;

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trending Dreams</h2>
            </div>
            <p className="text-sm text-slate-500">What people are transforming into right now — powered by Valkey</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-600">Live</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRENDING.map((item, idx) => {
            const cat = CATEGORIES.find((c) => c.id === item.categoryId);
            if (!cat) return null;
            const pct = Math.round((item.count / maxCount) * 100);

            return (
              <div
                key={cat.id}
                className="group relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 card-hover cursor-pointer"
              >
                {/* Rank badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r ${cat.gradient} text-white`}>
                    #{idx + 1}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{cat.name}</h3>
                    <p className="text-xs text-slate-500">{item.count.toLocaleString()} journeys started</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-4">{cat.description}</p>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-slate-400">Popularity</span>
                    <span className="font-semibold text-slate-600 dark:text-slate-300">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${cat.gradient} transition-all duration-1000`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                {/* Valkey badge */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-brand-500" />
                    Tracked via Valkey Sorted Sets
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
