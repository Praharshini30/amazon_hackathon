import { Suspense } from 'react';
import { JourneyView } from '@/components/journey/journey-view';

export default function JourneyPage() {
  return (
    <Suspense fallback={<JourneyLoading />}>
      <JourneyView />
    </Suspense>
  );
}

function JourneyLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-center">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-5 h-5 border-2 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
        <span className="text-sm font-medium text-slate-500">Generating your transformation roadmap...</span>
      </div>
      <div className="space-y-4 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}
