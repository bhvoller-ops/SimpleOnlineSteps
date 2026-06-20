import {
  CheckCircle,
  Mail,
  Clock,
  ArrowRight,
  Zap,
  Star,
  Shield,
} from 'lucide-react';

interface AcceleratorBookingPageProps {
  onNavigate: (page: string) => void;
}

const MAILTO =
  'mailto:cassey@simpleonlinesteps.com' +
  '?subject=Accelerator%20Session%20Booking' +
  '&body=Name%3A%20%0AEmail%3A%20%0ABusiness%20Interest%3A%20%0AGoals%3A%20';

export default function AcceleratorBookingPage({ onNavigate }: AcceleratorBookingPageProps) {
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
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Purchase Confirmed
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Congratulations!<br />
            <span className="text-emerald-400">Your Accelerator Session<br className="hidden sm:block" /> Has Been Purchased.</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto mb-4">
            One step left — send us your details so we can schedule your 60-minute session.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-10">
            Sessions are typically scheduled within 3–5 business days. We'll confirm your slot by email.
          </p>

          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-gray-500">Rated 5 stars by every session participant</p>
        </div>
      </section>

      {/* ── CONFIRMATION STRIP ── */}
      <div className="bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-center">
          {[
            { icon: CheckCircle, label: 'Payment received' },
            { icon: Clock,       label: '60-minute private session' },
            { icon: Shield,      label: '7-day money-back guarantee active' },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-sm font-semibold text-emerald-50">
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ══ SCHEDULING INSTRUCTIONS ══════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">

          {/* Step card */}
          <div className="bg-white border-2 border-gray-900 rounded-3xl overflow-hidden shadow-xl">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />

            <div className="px-8 py-10 sm:px-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-0.5">Next Step</p>
                  <h2 className="text-lg font-black text-gray-950 leading-tight">Send Your Booking Details</h2>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Email us using the button below. Include the following so we can match your session to your specific goals and prepare properly:
              </p>

              {/* Required fields */}
              <div className="space-y-3 mb-8">
                {[
                  { label: 'Name',              desc: 'Your full name' },
                  { label: 'Email',             desc: 'The email address to send your confirmation and written summary to' },
                  { label: 'Business Interest', desc: 'What type of AI business you\'re exploring (agency, consulting, productized service, etc.)' },
                  { label: 'Goals',             desc: 'What you want to walk away with from the session' },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-snug">{label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email details */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-7">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Send To</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">Email address</p>
                    <a
                      href="mailto:cassey@simpleonlinesteps.com"
                      className="text-sm font-bold text-blue-700 hover:text-blue-600 transition-colors"
                    >
                      cassey@simpleonlinesteps.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">Subject line</p>
                    <p className="text-sm font-bold text-gray-800">Accelerator Session Booking</p>
                  </div>
                </div>
              </div>

              <a
                href={MAILTO}
                className="group w-full flex items-center justify-center gap-2.5 py-4 bg-gray-950 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-base"
              >
                <Mail className="w-5 h-5" />
                Open Email to Schedule
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <p className="text-center text-xs text-gray-400 mt-4">
                Prefer to write manually? Email{' '}
                <a href="mailto:cassey@simpleonlinesteps.com" className="text-blue-600 font-semibold hover:text-blue-500 transition-colors">
                  cassey@simpleonlinesteps.com
                </a>{' '}
                with subject: <span className="font-semibold text-gray-600">Accelerator Session Booking</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT TO EXPECT ═══════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 border border-gray-300 text-gray-700 text-xs font-black uppercase tracking-widest mb-4">
              <Zap className="w-3 h-3" />
              What Happens Next
            </div>
            <h2 className="text-2xl font-black text-gray-950 leading-tight">
              After You Send the Email
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                n: '01',
                title: 'We Confirm Your Slot',
                desc: 'Within 1 business day we\'ll reply with available times. Pick the one that works and you\'re confirmed.',
                color: 'bg-blue-600',
              },
              {
                n: '02',
                title: 'Short Intake Form',
                desc: 'A quick 5-minute form so we can prepare for your specific situation before the call.',
                color: 'bg-violet-600',
              },
              {
                n: '03',
                title: '60-Minute Session',
                desc: 'Private video call. We work through your business model, offer, pricing, and acquisition strategy together.',
                color: 'bg-emerald-600',
              },
              {
                n: '04',
                title: 'Written Summary',
                desc: 'Within 24 hours you\'ll receive your full plan in writing — ready to execute.',
                color: 'bg-orange-600',
              },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-5 shadow-sm">
                <div className={`w-9 h-9 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-xs font-black text-white tabular-nums">{step.n}</span>
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm mb-1 leading-snug">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SUPPORT ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-8 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 mb-4">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-black text-gray-900 text-lg mb-2">Questions?</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-1">
              Email any time — we typically respond within one business day.
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
