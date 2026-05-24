'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { detectCategory, CATEGORIES } from '@/lib/categories';
import { buildJourney, type JourneyStage } from '@/lib/products';
import { ChevronDown, ChevronUp, Bot, Package, DollarSign, ArrowLeft, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function JourneyView() {
  const params = useSearchParams();
  const query = params.get('q') || 'I want to become a travel vlogger';

  const category = useMemo(() => detectCategory(query), [query]);
  const journey = useMemo(() => buildJourney(category.id, query), [category.id, query]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Back */}
      <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </a>

      {/* Header */}
      <div className="text-center mb-12">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white text-xs font-semibold mb-4`}>
          <span>{category.emoji}</span>
          {category.name}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Your Transformation Roadmap
        </h1>

        <p className="text-slate-500 italic text-lg max-w-lg mx-auto">"{query}"</p>
        <p className="text-sm text-slate-400 mt-2">{category.description}</p>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-0 mt-8 max-w-md mx-auto">
          {journey.stages.map((st, i) => (
            <div key={st.key} className="flex items-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">{st.emoji}</span>
                <span className="text-[10px] font-semibold text-slate-500">{st.label}</span>
              </div>
              {i < journey.stages.length - 1 && (
                <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-brand-400 to-purple-500 mx-2 mb-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stage Cards */}
      <div className="space-y-4">
        {journey.stages.map((stage, idx) => (
          <StageCard key={stage.key} stage={stage} index={idx} />
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 text-white shadow-xl shadow-brand-500/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="font-bold text-lg">Complete Transformation</h3>
            <p className="text-white/70 text-sm">All 3 stages · Beginner → Growth → Professional</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">${(journey.totalInvestment / 100).toLocaleString()}</div>
            <span className="text-xs text-white/60">Estimated total</span>
          </div>
        </div>
      </div>

      {/* Reset */}
      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-500 text-brand-600 font-semibold text-sm hover:bg-brand-50 transition"
        >
          <Sparkles className="w-4 h-4" /> Start a New Dream
        </a>
        <p className="text-xs text-slate-400 mt-3">Powered by Valkey · AI-native commerce</p>
      </div>
    </div>
  );
}

function StageCard({ stage, index }: { stage: JourneyStage; index: number }) {
  const [open, setOpen] = useState(index === 0);

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800', text: 'text-emerald-700 dark:text-emerald-400', badge: 'bg-emerald-500' },
    amber: { bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-800', text: 'text-amber-700 dark:text-amber-400', badge: 'bg-amber-500' },
    indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/30', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-700 dark:text-indigo-400', badge: 'bg-indigo-500' },
  };
  const c = colorMap[stage.color] || colorMap.emerald;

  return (
    <div className={cn('rounded-2xl border overflow-hidden transition-all', open ? `${c.border} shadow-lg` : 'border-slate-200 dark:border-slate-700')}>
      <button
        onClick={() => setOpen(!open)}
        className={cn('w-full flex items-center justify-between p-5 text-left transition', open ? c.bg : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750')}
      >
        <div className="flex items-center gap-3">
          <span className={cn('w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center', c.badge)}>
            {index + 1}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">{stage.emoji}</span>
              <span className={cn('font-bold', c.text)}>Stage {index + 1}: {stage.label}</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{stage.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={cn('text-sm font-bold hidden sm:block', c.text)}>
            ${(stage.estimatedTotal / 100).toLocaleString()}
          </span>
          {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </button>

      {open && (
        <div className="p-5 pt-0 bg-white dark:bg-slate-800">
          {/* AI Insight */}
          <div className={cn('rounded-xl p-4 mb-5 border-l-4', c.bg, c.border)}>
            <div className="flex items-center gap-2 mb-2">
              <Bot className={cn('w-4 h-4', c.text)} />
              <span className={cn('text-xs font-semibold', c.text)}>AI Insight</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{stage.aiInsight}</p>
          </div>

          {/* Products */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stage.products.map((product) => (
              <div key={product.id} className="group relative border border-slate-100 dark:border-slate-700 rounded-xl p-3 hover:border-brand-300 transition">
                {product.badge && (
                  <span className={cn('absolute top-0 left-0 px-2 py-0.5 text-[9px] font-bold text-white rounded-tl-xl rounded-br-lg', c.badge)}>
                    {product.badge}
                  </span>
                )}
                <div className={cn('h-16 rounded-lg flex items-center justify-center mb-3', c.bg)}>
                  <Package className={cn('w-6 h-6', c.text)} />
                </div>
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1 line-clamp-2">{product.name}</h4>
                <p className="text-[10px] text-slate-500 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className={cn('text-sm font-bold', c.text)}>${(product.price / 100).toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-[10px] text-slate-400 line-through">${(product.originalPrice / 100).toLocaleString()}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stage total */}
          <div className={cn('flex items-center justify-between mt-4 p-3 rounded-lg', c.bg)}>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
              <DollarSign className={cn('w-3 h-3', c.text)} /> Estimated Stage Investment
            </span>
            <span className={cn('font-bold', c.text)}>${(stage.estimatedTotal / 100).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
