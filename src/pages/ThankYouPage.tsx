import {
  ArrowRight,
  CheckCircle,
  Download,
  Phone,
  Users,
  BookOpen,
  Mail,
  Star,
  Zap,
  ChevronRight,
} from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (page: string) => void;
}

const nextSteps = [
  {
    n: '01',
    icon: Download,
    title: 'Download Your Kit',
    desc: 'Click the button below to access all 8 resources in your AI Agency Launch Kit. Save them somewhere easy to find.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    action: 'download',
  },
  {
    n: '02',
    icon: BookOpen,
    title: 'Start With the Opportunity Guide',
    desc: 'Open the AI Business Opportunity Guide first. It sets the foundation for everything else in the kit.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    action: null,
  },
  {
    n: '03',
    icon: Phone,
    title: 'Book Your Strategy Session',
    desc: 'Schedule a free 1-on-1 call to map out your specific path to your first client. Limited spots available.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    action: 'book-call',
  },
  {
    n: '04',
    icon: Users,
    title: 'Join the Community',
    desc: 'Connect with other students, share wins, ask questions, and stay accountable as you implement the kit.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    action: 'community',
  },
];

export default function ThankYouPage({ onNavigate }: ThankYouPageProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_#1d4ed828,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff04_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff04_1px,_transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 pt-20 pb-24 text-center">
          {/* Animated check */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" />
            AI Agency Launch Kit — Order Confirmed
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Congratulations!<br />
            <span className="text-emerald-400">You're In.</span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Your AI Agency Launch Kit is ready.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto mb-10">
            Thank you for your purchase. You've just taken the most important step — moving from research to action. Everything you need to land your first AI client is now in your hands.
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-gray-500">Joined by 1,400+ students already implementing the kit</p>
        </div>
      </section>

      {/* ── CONFIRMATION STRIP ── */}
      <section className="bg-emerald-600">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-center sm:text-left">
          {[
            { icon: Mail,     label: 'Confirmation email sent to your inbox' },
            { icon: Download, label: 'Instant access to all 8 resources' },
            { icon: CheckCircle, label: '14-day money-back guarantee active' },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-sm font-semibold text-emerald-50">
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 py-16 text-center">
        <div className="bg-white border-2 border-blue-500 rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/10">
          <div className="bg-blue-600 py-3 px-6">
            <span className="text-xs font-black text-white/90 uppercase tracking-widest">Step 1 — Get Your Kit</span>
          </div>
          <div className="px-8 py-10">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
              <Download className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-950 mb-3">Download Your AI Agency Launch Kit</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              All 8 resources are packaged and ready. Click below to access your kit instantly.
            </p>
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-base"
              onClick={() => navigate('downloads')}
            >
              <Download className="w-5 h-5" />
              Access Your Kit Now
            </button>
            <p className="text-xs text-gray-400 mt-4">
              Also sent to your email — check your inbox if you can't find the link.
            </p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest mb-5">
              What To Do Next
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-3">
              Your Next 4 Steps
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Follow these in order and you'll have everything set up to start landing clients.
            </p>
          </div>

          <div className="space-y-4">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.n} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{step.n}</span>
                      <h3 className="font-black text-gray-900 text-sm leading-snug">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{step.desc}</p>
                    {step.action === 'download' && (
                      <button
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                        onClick={() => navigate('downloads')}
                      >
                        Access Kit <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {step.action === 'book-call' && (
                      <button
                        onClick={() => navigate('book-call')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        Book Your Free Call <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {step.action === 'community' && (
                      <button
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors"
                        onClick={() => {}}
                      >
                        Join the Community <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOOK STRATEGY CALL ── */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
        <div className="relative overflow-hidden bg-gray-950 rounded-3xl px-8 py-10 sm:px-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,_#1d4ed825,_transparent)] pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Free — Limited Spots
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
              Book Your Free Strategy Session
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-lg mx-auto mb-8">
              Get a 1-on-1 session with our team to map out your specific path, answer your questions, and make sure you get results with the kit.
            </p>
            <button
              onClick={() => navigate('book-call')}
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

      {/* ── JOIN COMMUNITY ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm text-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-5">
              <Users className="w-8 h-8 text-violet-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-950 mb-3">Join the Community</h2>
            <p className="text-gray-500 leading-relaxed max-w-md mx-auto mb-8">
              Connect with other AI agency builders. Share wins, ask questions, get accountability, and stay motivated on the path to your first client.
            </p>
            <button
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-violet-600/20 hover:-translate-y-0.5 text-sm"
              onClick={() => {}}
            >
              <Users className="w-4 h-4" />
              Join the Community
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-gray-400 mt-3">Community link coming soon — check your email for access details.</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-4">You're all set</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
            Your AI agency journey starts now.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
            Stop watching. Start doing. Open your kit, follow the roadmap, and land your first client.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-sm"
              onClick={() => navigate('downloads')}
            >
              <Download className="w-4 h-4" />
              Access Your Kit
            </button>
            <button
              onClick={() => navigate('book-call')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              Book Strategy Call
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            Questions? Email us — we reply within 24 hours.
          </p>
        </div>
      </section>

    </div>
  );
}
