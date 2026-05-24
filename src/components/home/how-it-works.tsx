import { Sparkles, Route, ShoppingBag, Rocket } from 'lucide-react';

const STEPS = [
  { icon: Sparkles, title: 'Dream It', desc: 'Tell us who you want to become.', color: 'brand' },
  { icon: Route, title: 'AI Builds It', desc: 'We generate a 3-stage transformation roadmap.', color: 'purple' },
  { icon: ShoppingBag, title: 'Shop It', desc: 'Curated products for each stage of your journey.', color: 'emerald' },
  { icon: Rocket, title: 'Become It', desc: 'Transform from beginner to professional.', color: 'amber' },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            How DreamCart Works
          </h2>
          <p className="text-slate-500">Four steps from aspiration to action.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative text-center p-6">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800" />
              )}

              {/* Icon */}
              <div className="relative inline-flex mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-${step.color}-50 dark:bg-${step.color}-950 flex items-center justify-center`}>
                  <step.icon className={`w-6 h-6 text-${step.color}-500`} />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
