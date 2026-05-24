'use client';

import { CATEGORIES } from '@/lib/categories';
import { ArrowRight } from 'lucide-react';

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            30+ Aspiration Paths
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From creative careers to fitness transformations — pick your dream and we build the roadmap.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {CATEGORIES.slice(0, 18).map((cat) => (
            <a
              key={cat.id}
              href={`/journey?q=I+want+to+become+a+${encodeURIComponent(cat.name.toLowerCase())}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 card-hover text-center"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight">{cat.name}</span>
            </a>
          ))}
        </div>

        {/* Show more */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition">
            View all 30+ categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
