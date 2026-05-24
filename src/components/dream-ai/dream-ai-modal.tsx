'use client';

import { useState } from 'react';
import { X, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { detectCategory, CATEGORIES } from '@/lib/categories';
import { buildJourney } from '@/lib/products';

const SUGGESTIONS = [
  '✈️ Travel Vlogger',
  '💪 Fitness Journey',
  '🤖 AI Engineer',
  '🎮 Pro Gamer',
  '👨‍🍳 Chef',
  '📸 Photographer',
];

interface Props {
  onClose: () => void;
}

export function DreamAIModal({ onClose }: Props) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  function handleGenerate() {
    if (!input.trim()) return;
    setLoading(true);
    // Navigate to journey page
    setTimeout(() => {
      window.location.href = `/journey?q=${encodeURIComponent(input)}`;
    }, 500);
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#131921] rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm">Dream AI</h2>
              <p className="text-gray-400 text-[11px]">Who do you want to become?</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-sm text-gray-600 mb-4">
            Tell us your aspiration and we'll build a complete transformation roadmap with curated products for each stage.
          </p>

          {/* Input */}
          <div className="relative mb-4">
            <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ff9900]" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="I want to become a travel vlogger..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-md text-sm focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 outline-none transition"
              autoFocus
            />
          </div>

          {/* Quick suggestions */}
          <div className="flex flex-wrap gap-2 mb-5">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setInput(`I want to become a ${s.slice(3).toLowerCase()}`)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                  input.includes(s.slice(3).toLowerCase())
                    ? 'border-[#ff9900] bg-[#fff8e7] text-[#c7511f] font-semibold'
                    : 'border-gray-300 text-gray-600 hover:border-[#ff9900] hover:bg-[#fff8e7]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={!input.trim() || loading}
            className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              input.trim()
                ? 'amazon-btn-orange shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating Your Journey...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate My Transformation Roadmap
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Footer note */}
          <p className="text-[11px] text-gray-400 text-center mt-3">
            Powered by DreamCart AI · Valkey-cached for instant results
          </p>
        </div>
      </div>
    </div>
  );
}
