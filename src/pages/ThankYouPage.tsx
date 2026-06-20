import {
  ArrowRight,
  CheckCircle,
  Download,
  Phone,
  Package,
  Map,
  Mail,
  Star,
  Zap,
  PartyPopper,
} from 'lucide-react';
import { GA } from '../lib/analytics';

interface ThankYouPageProps {
  onNavigate: (page: string) => void;
}

const nextSteps = [
  {
    n: '01',
    icon: Download,
    title: 'Download Your Resources',
    desc: 'All 8 resources in your AI Agency Launch Kit are ready to access now. Save them somewhere you can easily find them — a Google Drive folder or your desktop both work well.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    ringColor: 'ring-blue-100',
    action: 'download' as const,
    actionLabel: 'Download Resources',
    actionColor: 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/25',
  },
  {
    n: '02',
    icon: Map,
    title: 'Review the First Client Acquisition Roadmap',
    desc: 'Start here before anything else. The 30-day roadmap tells you exactly what to do each day — from setting up your offer to booking your first discovery call. This is your primary action plan.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    ringColor: 'ring-emerald-100',
    action: 'download' as const,
    actionLabel: 'Download Resources',
    actionColor: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25',
  },
  {
    n: '03',
    icon: Phone,
    title: 'Book Your Free Strategy Session',
    desc: 'Get a personalized 1-on-1 call with our team. We\'ll help you identify your ideal client, set up your offer, and map your specific path to your first paying client. Spots are limited.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    ringColor: 'ring-orange-100',
    action: 'book-call' as const,
    actionLabel: 'Book Strategy Session',
    actionColor: 'bg-orange-500 hover:bg-orange-400 shadow-orange-500/25',
  },
];

export default function ThankYouPage({ onNavigate }: ThankYouPageProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ══ HERO ═════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_#05966930,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,_#1d4ed818,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff03_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff03_1px,_transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 pt-20 pb-24 text-center">
          {/* Success icon */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-emerald-400" />
              </div>
            </div>
            {/* Orbiting dot */}
            <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center">
              <PartyPopper className="w-2.5 h-2.5 text-emerald-400" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Payment Confirmed — Order Complete
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Congratulations!<br />
            <span className="text-emerald-400">Welcome To The<br className="hidden sm:block" /> AI Agency Launch Kit.</span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-5 max-w-xl mx-auto">
            Your payment was successful and your resources are ready.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto mb-10">
            You've just made the most important move — from research to action. Everything you need to land your first AI client is now in your hands.
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-gray-500">Joined by 1,400+ students already implementing the kit</p>
        </div>
      </section>

      {/* ── CONFIRMATION STRIP ── */}
      <section className="bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-center sm:text-left">
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
      </section>

      {/* ══ NEXT STEPS ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest mb-5">
              <Zap className="w-3 h-3" />
              Action Plan
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              Your Next Steps
            </h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              Follow these three steps in order. Each one builds directly on the last.
            </p>
          </div>

          <div className="space-y-5">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className={`bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden ring-1 ${step.ringColor} hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="flex items-start gap-5 p-7">
                    {/* Icon + number */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className={`w-13 h-13 w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <span className={`text-xs font-black ${step.color} opacity-60 tabular-nums`}>{step.n}</span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-gray-900 text-base mb-2 leading-snug">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">{step.desc}</p>
                      <button
                        onClick={() => navigate(step.action === 'download' ? 'downloads' : 'book-call')}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 ${step.actionColor} text-white text-xs font-bold rounded-lg transition-all duration-200 shadow-md hover:-translate-y-0.5`}
                      >
                        {step.actionLabel}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PRIMARY ACTION BUTTONS ═══════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-950 mb-2">Ready to start?</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">Jump straight into your resources or explore what else is available.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate('downloads')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-sm"
            >
              <Download className="w-4 h-4" />
              Download Resources
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => { GA.bookStrategySession(); navigate('book-call'); }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4" />
              Book Strategy Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => navigate('business-box')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <Package className="w-4 h-4 text-gray-400" />
              Explore Business-in-a-Box Systems
            </button>
          </div>
        </div>
      </section>

      {/* ══ STRATEGY CALL PROMO ══════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
        <div className="relative overflow-hidden bg-gray-950 rounded-3xl px-8 py-10 sm:px-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,_#ea580c18,_transparent)] pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Free — Limited Spots Available
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
              Book Your Free Strategy Session
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-lg mx-auto mb-8">
              Get a 1-on-1 session with our team. We'll answer your questions, help you identify your first target clients, and make sure you walk away with a clear action plan.
            </p>
            <button
              onClick={() => { GA.bookStrategySession(); navigate('book-call'); }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 text-base"
            >
              <Phone className="w-5 h-5" />
              Book A Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-gray-600 mt-4">Free · No obligation · 30 minutes</p>
          </div>
        </div>
      </section>

      {/* ══ FOOTER CTA ═══════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-4">You're all set</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
            Your AI agency journey starts now.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
            Stop watching. Start doing. Open your kit, follow the roadmap, and land your first client.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate('downloads')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-sm"
            >
              <Download className="w-4 h-4" />
              Download Resources
            </button>
            <button
              onClick={() => { GA.bookStrategySession(); navigate('book-call'); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              Book Strategy Session
            </button>
          </div>
          <div className="mt-8 flex flex-col items-center gap-1.5">
            <p className="text-xs font-semibold text-gray-500">Questions?</p>
            <a
              href="mailto:cassey@simpleonlinesteps.com"
              className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              cassey@simpleonlinesteps.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
