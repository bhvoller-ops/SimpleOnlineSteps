import { useState } from 'react';
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  Phone,
  Calendar,
  Sparkles,
  LayoutGrid,
  Target,
  ArrowRight,
} from 'lucide-react';

// Set your Calendly event URL here to activate the live embed.
// Example: "https://calendly.com/yourname/strategy-session"
const CALENDLY_URL = '';

const benefits = [
  {
    icon: Sparkles,
    title: 'Beginner-Friendly Guidance',
    desc: 'No experience needed — we meet you exactly where you are.',
  },
  {
    icon: Phone,
    title: 'No Pressure',
    desc: 'Zero sales tactics, zero obligation. Just honest conversation.',
  },
  {
    icon: Target,
    title: 'Personalized Roadmap',
    desc: 'Leave with a clear, custom action plan built for your goals.',
  },
  {
    icon: LayoutGrid,
    title: 'Business-in-a-Box Recommendations',
    desc: 'Discover which done-for-you system is the right fit for you.',
  },
];

const whatYouGet = [
  'Identify the best business model for your situation',
  'Get a custom 30-day action plan, step by step',
  'Learn which AI tools to use and how',
  'Ask any questions — nothing is too basic',
  'Walk away with complete clarity and confidence',
];

const faqs = [
  {
    q: 'Is the call really free?',
    a: "Yes, 100% free. No credit card, no obligation. We want to make sure you're matched with the right path before you invest in anything.",
  },
  {
    q: 'Who will I be talking to?',
    a: 'You will speak directly with one of our business coaches — a real entrepreneur who has built online income using these systems.',
  },
  {
    q: 'What if I have no business experience?',
    a: 'Perfect — most of our students start with zero experience. The call is designed specifically to help beginners find their starting point.',
  },
  {
    q: 'How long is the call?',
    a: 'We schedule 30 minutes, though many calls run a bit longer if needed. Come with questions — there are no dumb ones.',
  },
  {
    q: 'Will I be pressured to buy anything?',
    a: "Absolutely not. We hate pushy sales tactics. If there's a system that fits you, we'll tell you about it. If not, we'll still give you a clear next step.",
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
            Schedule Your Free<br />
            <span className="text-blue-600">Strategy Session</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Get personalized guidance on choosing and launching the right AI-powered business path.
          </p>
        </div>
      </section>

      {/* ── BENEFITS STRIP ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALENDLY + SIDEBAR ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── LEFT SIDEBAR ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* What you'll get */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-black text-gray-900 text-base mb-4">What You'll Get</h3>
              <ul className="space-y-3">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call details */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <h3 className="font-black text-base mb-4">Call Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm">30 Minutes</p>
                    <p className="text-blue-200 text-xs">Via Zoom or phone</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm">1-on-1 Coaching</p>
                    <p className="text-blue-200 text-xs">Private, personalized session</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm">No Sales Pressure</p>
                    <p className="text-blue-200 text-xs">Zero obligation, ever</p>
                  </div>
                </div>
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

          {/* ── CALENDLY EMBED / PLACEHOLDER ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              {/* Card header */}
              <div className="px-7 pt-7 pb-5 border-b border-gray-100">
                <h2 className="text-xl font-black text-gray-950 mb-1">
                  Book My Free Strategy Call
                </h2>
                <p className="text-sm text-gray-500">
                  Pick a time that works for you — it only takes 30 seconds.
                </p>
              </div>

              {CALENDLY_URL ? (
                /* Live embed once CALENDLY_URL is set */
                <iframe
                  src={CALENDLY_URL}
                  title="Schedule a strategy session"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  className="block"
                />
              ) : (
                /* Placeholder */
                <div className="flex flex-col items-center justify-center gap-6 px-8 py-14 bg-gray-50">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    <Calendar className="w-10 h-10 text-blue-400" />
                  </div>

                  {/* Text */}
                  <div className="text-center max-w-sm">
                    <p className="font-black text-gray-800 text-lg mb-2">
                      Calendly scheduling calendar will be embedded here.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Once configured, visitors can pick a date and time directly
                      on this page — no redirects.
                    </p>
                  </div>

                  {/* Mock calendar */}
                  <div className="w-full max-w-xs bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm select-none pointer-events-none">
                    <div className="bg-blue-600 px-5 py-3 flex items-center justify-between">
                      <span className="text-white font-bold text-sm">June 2026</span>
                      <div className="flex gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">‹</span>
                        <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">›</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-7 text-center mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                          <span key={i} className="text-[10px] font-bold text-gray-400">{d}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 text-center gap-y-1">
                        {[...Array(30)].map((_, i) => {
                          const day = i + 1;
                          const available = [3, 5, 6, 10, 12, 13, 17, 19, 20, 24, 26, 27].includes(day);
                          const selected  = day === 17;
                          return (
                            <span
                              key={i}
                              className={`text-xs py-1 rounded-full mx-auto w-6 h-6 flex items-center justify-center font-medium
                                ${selected  ? 'bg-blue-600 text-white'              : ''}
                                ${available && !selected ? 'text-blue-600 font-bold' : ''}
                                ${!available && !selected ? 'text-gray-300'          : ''}
                              `}
                            >
                              {day}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="px-4 pb-4 space-y-2">
                      {['9:00 AM', '10:30 AM', '2:00 PM'].map((t) => (
                        <div
                          key={t}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold text-center ${
                            t === '10:30 AM'
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'border-gray-200 text-gray-500'
                          }`}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    disabled
                    className="flex items-center gap-2.5 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl opacity-50 cursor-not-allowed text-sm"
                  >
                    Book My Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Setup note — only shown in placeholder mode */}
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
