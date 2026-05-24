'use client';

import { Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { DreamAIModal } from '../dream-ai/dream-ai-modal';

export function DreamAIBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#131921] to-[#232f3e] rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#ff9900] flex items-center justify-center shrink-0 dream-ai-glow">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Dream AI — Who do you want to become?</h3>
            <p className="text-gray-400 text-sm">
              Enter your aspiration and get a personalized transformation roadmap with curated products.
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="amazon-btn-orange flex items-center gap-2 whitespace-nowrap px-6 py-3 text-base font-bold"
        >
          <Sparkles className="w-4 h-4" />
          Try Dream AI
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {showModal && <DreamAIModal onClose={() => setShowModal(false)} />}
    </>
  );
}
