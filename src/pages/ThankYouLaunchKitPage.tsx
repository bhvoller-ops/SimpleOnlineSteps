import {
  ArrowRight,
  CheckCircle,
  Download,
  Map,
  Zap,
  Mail,
  Star,
  PartyPopper,
  BookOpen,
} from 'lucide-react';

interface ThankYouLaunchKitPageProps {
  onNavigate: (page: string) => void;
}

const steps = [
  {
    n: '01',
    icon: Download,
    title: 'Access Your Downloads',
    desc: 'All 8 resources from your AI Agency Launch Kit are ready. Open the download center, save everything to a folder, and you\'re ready to start.',
    color: 'text-blue-600',
    iconBg: 'bg-blue-50',
    barColor: 'bg-blue-600',
    ringColor: 'ring-blue-100',
  },
  {
    n: '02',
    icon: Map,
    title: 'Review The First Client Acquisition Roadmap',
    desc: 'Start here before opening anything else. The 30-day roadmap gives you a day-by-day action plan — from setting up your offer to booking your first discovery call.',
    color: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    barColor: 'bg-emerald-600',
    ringColor: 'ring-emerald-100',
  },
  {
    n: '03',
    icon: BookOpen,
    title: 'Start Building Your AI Business',
    desc: 'Follow the roadmap one day at a time. Use the templates and scripts when you need them. The only way this works is by taking action consistently.',
    color: 'text-orange-600',
    iconBg: 'bg-orange-50',
    barColor: 'bg-orange-600',
    ringColor: 'ring-orange-100',
  },
];

export default function ThankYouLaunchKitPage({ onNavigate }: ThankYouLaunchKitPageProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ══ HERO ═════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,_#05966930,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff03_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff03_1px,_transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 pt-20 pb-24 text-center">
          {/* Success icon */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-emerald-400" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center">
              <PartyPopper className="w-3 h-3 text-emerald-400" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Purchase Confirmed
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Congratulations! Welcome To The<br />
            <span className="text-emerald-400">AI Agency Launch Kit.</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-4 max-w-xl mx-auto">
            Your purchase was successful and your resources are ready.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto mb-10">
            You've made the most important move — from learning to action. Everything you need to land your first AI client is now in your hands.
          </p>

          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-gray-500">Joined by 1,400+ students already implementing the kit</p>
        </div>
      </section>

      {/* ── CONFIRMATION STRIP ── */}
      <div className="bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-center">
          {[
            { icon: Mail,        label: 'Confirmation email sent to your inbox' },
            { icon: Download,    label: 'Instant access to all 8 resources' },
            { icon: CheckCircle, label: '14-day money-back guarantee active' },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-sm font-semibold text-emerald-50">
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ══ NEXT STEPS ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest mb-5">
              <Zap className="w-3 h-3" />
              Your Action Plan
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              Your Next Three Steps
            </h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              Follow these in order. Each one builds directly on the last.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className={`bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm ring-1 ${step.ringColor} hover:shadow-md transition-shadow duration-200`}
                >
                  {/* Accent bar */}
                  <div className={`h-0.5 ${step.barColor} opacity-70`} />
                  <div className="flex items-start gap-5 p-7">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <span className={`text-xs font-black ${step.color} opacity-60 tabular-nums`}>{step.n}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-gray-900 text-base mb-2 leading-snug">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PRIMARY ACTION ═══════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-lg mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-950 mb-2">Ready to start?</h2>
          <p className="text-gray-500 text-sm mb-8">Your resources are waiting. Open the download center and get everything saved.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/launch-kit-downloads"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-sm"
            >
              <Download className="w-4 h-4" />
              Access My Downloads
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:cassey@simpleonlinesteps.com"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <Mail className="w-4 h-4 text-gray-400" />
              Email Cassey
            </a>
          </div>
        </div>
      </section>

      {/* ══ SUPPORT ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-8 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 mb-4">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-black text-gray-900 text-lg mb-2">Questions?</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-1">
              Email us any time — we typically respond within one business day.
            </p>
            <a
              href="mailto:cassey@simpleonlinesteps.com"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-500 font-semibold transition-colors mt-2"
            >
              cassey@simpleonlinesteps.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
