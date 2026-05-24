'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';
import { cn } from '@/lib/utils';

const QUICK_PICKS = [
  '✈️ Travel Vlogger',
  '🎮 Gamer',
  '💪 Fitness Journey',
  '🤖 AI Engineer',
  '👨‍🍳 Chef',
  '📸 Photographer',
  '🎵 Music Producer',
  '🚀 Entrepreneur',
];

export function Hero() {
  const [input, setInput] = useState('');
  const [budget, setBudget] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleGenerate() {
    if (!input.trim()) return;
    setIsGenerating(true);
    // Navigate to journey page
    window.location.href = `/journey?q=${encodeURIComponent(input)}&budget=${budget}`;
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200/30 dark:bg-brand-800/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              <span className="text-xs font-semibold text-brand-700 dark:text-brand-300">AI-Powered Commerce</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Who do you want to{' '}
              <span className="gradient-text">become?</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Dreams become roadmaps. AI transforms your aspirations into curated product journeys — from beginner to professional.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950">
                  <TrendingUp className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">30+</div>
                  <div className="text-xs text-slate-500">Aspirations</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950">
                  <Zap className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">3</div>
                  <div className="text-xs text-slate-500">Stages</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">12k+</div>
                  <div className="text-xs text-slate-500">Journeys</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Input Card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand-400 to-purple-500 opacity-20 blur-xl" />
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-brand-500/10 border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  Your transformation starts here.
                </h2>
                <p className="text-sm text-slate-500">From aspiration to action — in seconds.</p>
              </div>

              {/* Aspiration input */}
              <div className="space-y-4">
                <div className="relative">
                  <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="I want to become a travel vlogger..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:focus:ring-brand-900/30 bg-slate-50 dark:bg-slate-800 text-sm transition-all outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  />
                </div>

                {/* Budget */}
                <div className="flex items-center gap-3">
                  <label className="text-xs font-medium text-slate-500 whitespace-nowrap">Budget (optional)</label>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">$</span>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="5,000"
                      className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:border-brand-400 transition"
                    />
                  </div>
                </div>

                {/* Quick picks */}
                <div className="flex flex-wrap gap-2">
                  {QUICK_PICKS.map((pick) => (
                    <button
                      key={pick}
                      onClick={() => setInput(`I want to become a ${pick.slice(3).toLowerCase()}`)}
                      className={cn(
                        'px-3 py-1.5 text-xs font-medium rounded-full border transition-all',
                        input.includes(pick.slice(3).toLowerCase())
                          ? 'border-brand-400 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300'
                          : 'border-slate-200 dark:border-slate-700 hover:border-brand-300 text-slate-600 dark:text-slate-400'
                      )}
                    >
                      {pick}
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={handleGenerate}
                  disabled={!input.trim() || isGenerating}
                  className={cn(
                    'w-full py-4 px-6 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2',
                    input.trim()
                      ? 'gradient-brand hover:opacity-90 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  )}
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate My Journey
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
