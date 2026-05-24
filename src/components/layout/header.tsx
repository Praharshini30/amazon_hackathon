'use client';

import { Search, ShoppingCart, Heart, User, Sparkles, Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
              DreamCart AI
            </span>
          </div>

          {/* Search */}
          <div className={cn(
            'flex-1 max-w-xl mx-4 sm:mx-8 transition-all duration-300',
            searchFocused && 'max-w-2xl'
          )}>
            <div className={cn(
              'relative flex items-center rounded-full border transition-all duration-300',
              searchFocused
                ? 'border-brand-400 ring-4 ring-brand-100 dark:ring-brand-900/30 shadow-lg'
                : 'border-slate-200 dark:border-slate-700 hover:border-brand-300'
            )}>
              <Search className="absolute left-4 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Who do you want to become?"
                className="w-full py-2.5 pl-11 pr-4 bg-transparent text-sm rounded-full outline-none placeholder:text-slate-400"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <div className="absolute right-2">
                <button className="px-3 py-1.5 text-xs font-medium text-white rounded-full gradient-brand hover:opacity-90 transition">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  AI
                </button>
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition hidden sm:flex">
              <Heart className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>
            <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition relative">
              <ShoppingCart className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold text-white bg-brand-500 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition hidden sm:flex">
              <User className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>
            <button className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition sm:hidden">
              <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
