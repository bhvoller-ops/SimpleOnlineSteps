import { useState } from 'react';
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  Phone,
  Mail,
  LayoutGrid,
  Target,
  Wrench,
  AlertTriangle,
  ArrowRight,
  Zap,
} from 'lucide-react';

// Set your Calendly event URL here to activate the live embed.
// Example: "https://calendly.com/yourname/strategy-session"
const CALENDLY_URL = '';

const CASSEY_EMAIL = 'cassey@simpleonlinesteps.com';

const whatWellCover = [
  {
    icon: LayoutGrid,
    title: 'Choosing the right AI business',
    desc: 'We match your skills, schedule, and goals to the model most likely to work for you.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Target,
    title: 'Creating your first offer',
    desc: 'Build a clear, named, priced service you can confidently put in front of clients.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Users,
    title: 'Finding your first clients',
    desc: 'Proven outreach approaches to land your first paying client — no cold calling required.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Wrench,
    title: 'Building systems',
    desc: 'The workflows and tools that let you deliver great results without working 24/7.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: AlertTriangle,
    title: 'Avoiding common mistakes',
    desc: 'The pitfalls that slow most people down — and exactly how to sidestep them.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

const callDetails = [
  { icon: Clock, label: '30 Minutes', sub: 'Via Zoom or phone' },
  { icon: Users, label: '1-on-1 Coaching', sub: 'Private, personalized session' },
  { icon: Phone, label: 'No Sales Pressure', sub: 'Zero obligation, ever' },
];

const faqs = [
  {
    q: 'Is the call really free?',
    a: "Yes, 100% free. No credit card, no obligation. We want to make sure you're matched with the right path before you invest in anything.",
  },
  {
    q: 'Who will I be talking to?',
    a: 'You will speak directly with Cassey — a real entrepreneur who has built online income using these systems.',
  },
  {
    q: 'What if I have no business experience?',
    a: 'Perfect — most of our students start with zero experience. The session is designed specifically to help beginners find their starting point.',
  },
  {
    q: 'How long is the session?',
    a: 'We schedule 30 minutes, though many sessions run a bit longer if needed. Come with questions — there are no dumb ones.',
  },
  {
    q: 'Will I be pressured to buy anything?',
    a: "Absolutely not. If there's a system that fits you, we'll tell you about it. If not, we'll still give you a clear next step.",
  },
];

interface BookCallPageProps {
  onNavigate: (page: string) => void;
}

export default function BookCallPage({ onNavigate: _onNavigate }: BookCallPageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-black uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Free — No Obligation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 leading-[1.05] tracking-tight mb-5">
            Free AI Business<br />
            <span className="text-blue-600">Strategy Session</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Get personalized guidance on choosing the right AI business model, creating your offer, finding clients, and launching faster.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">
            {['30 minutes · 1-on-1', 'No sales pressure', 'Personalized action plan'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── LEFT SIDEBAR ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* What We'll Cover */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-black text-gray-900 text-base">What We'll Cover</h3>
              </div>
              <ul className="space-y-4">
                {whatWellCover.map(({ icon: Icon, title, desc, color, bg }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm leading-snug">{title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call details */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <h3 className="font-black text-base mb-4">Session Details</h3>
              <div className="space-y-4">
                {callDetails.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm">{label}</p>
                      <p className="text-blue-200 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                "The call completely changed my direction. I had been spinning my wheels for months.
                In 30 minutes, I had a clear plan."
              </p>
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60"
                  alt="Priya S."
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-xs">Priya S.</p>
                  <p className="text-gray-400 text-xs">Freelance Designer</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT: BOOKING PANEL ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              {/* Card header */}
              <div className="px-7 pt-7 pb-5 border-b border-gray-100">
                <h2 className="text-xl font-black text-gray-950 mb-1">
                  Schedule My Free Strategy Session
                </h2>
                <p className="text-sm text-gray-500">
                  Pick a time that works for you — it only takes 30 seconds.
                </p>
              </div>

              {CALENDLY_URL ? (
                <iframe
                  src={CALENDLY_URL}
                  title="Schedule a strategy session"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  className="block"
                />
              ) : (
                /* Email CTA — shown until Calendly is connected */
                <div className="flex flex-col items-center gap-7 px-8 py-14">

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    <Mail className="w-10 h-10 text-blue-500" />
                  </div>

                  {/* Intro text */}
                  <div className="text-center max-w-sm">
                    <h3 className="font-black text-gray-900 text-lg mb-2">
                      Ready to get started?
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Send us an email and we'll reply with available times to book your free 1-on-1 strategy session.
                    </p>
                  </div>

                  {/* What to include hint */}
                  <div className="w-full max-w-sm bg-gray-50 border border-gray-100 rounded-xl p-5">
                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">Include in your email</p>
                    <ul className="space-y-2">
                      {[
                        'Your name and what you do currently',
                        'Your biggest goal for the next 90 days',
                        'The best time of day to connect',
                      ].map((hint) => (
                        <li key={hint} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary CTA */}
                  <a
                    href={`mailto:${CASSEY_EMAIL}?subject=Free%20Strategy%20Session%20Request&body=Hi%20Cassey%2C%0A%0AI%27d%20love%20to%20book%20a%20free%20strategy%20session.%0A%0AMy%20name%3A%20%0AMy%20goal%3A%20%0ABest%20time%20to%20connect%3A%20`}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-base"
                  >
                    <Mail className="w-5 h-5" />
                    Email Cassey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Trust statement */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    You'll receive a response within 1 business day.
                  </div>

                </div>
              )}

              {/* Setup note for Calendly — only shown in placeholder mode */}
              {!CALENDLY_URL && (
                <div className="px-7 py-4 bg-amber-50 border-t border-amber-100">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <span className="font-black">To enable live scheduling:</span> set the{' '}
                    <code className="bg-amber-100 px-1 rounded font-mono">CALENDLY_URL</code>{' '}
                    constant at the top of{' '}
                    <code className="bg-amber-100 px-1 rounded font-mono">BookCallPage.tsx</code>{' '}
                    to your Calendly event link.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ── FAQs ── */}
        <div className="mt-14 max-w-2xl mx-auto">
          <h3 className="text-2xl font-black text-gray-950 mb-7 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-bold text-gray-900 flex items-center justify-between hover:bg-gray-50 transition-colors text-sm"
                >
                  {faq.q}
                  <span className="text-gray-400 ml-4 flex-shrink-0 font-light text-xl leading-none">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
