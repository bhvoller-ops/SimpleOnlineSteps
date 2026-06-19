import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Shield,
  Zap,
  Target,
  Users,
  TrendingUp,
  Briefcase,
  Brain,
  Map,
  DollarSign,
  Wrench,
  Award,
  MessageSquare,
  Laptop,
  UserCheck,
  Phone,
} from 'lucide-react';

interface AIAgencyAcceleratorPageProps {
  onNavigate: (page: string) => void;
}

const BOOKING_URL = 'mailto:cassey@simpleonlinesteps.com?subject=AI%20Agency%20Accelerator%20Session';

const coverItems = [
  {
    icon: Brain,
    title: 'Business Assessment',
    desc: 'We start by understanding your current situation — skills, background, time available, and income goals — so every recommendation is specific to you.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Target,
    title: 'AI Business Model Selection',
    desc: 'We\'ll evaluate the AI agency, productized service, consulting, and SaaS models against your goals and identify the one with the highest probability of success for you.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Award,
    title: 'Offer Creation',
    desc: 'Walk away with a clearly named, positioned service offer — including who it\'s for, what problem it solves, the deliverable, and a price anchor.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: DollarSign,
    title: 'Pricing Strategy',
    desc: 'Stop undercharging. We\'ll anchor your pricing against market rates, scope, and the value you deliver so you can quote confidently from the first conversation.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: Map,
    title: 'Client Acquisition Plan',
    desc: 'A practical outreach strategy tailored to your niche and schedule — covering where to find clients, how to approach them, and what to say.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: Wrench,
    title: 'Tool Recommendations',
    desc: 'Get a curated, lean tool stack based on your specific service offer — nothing unnecessary, nothing you don\'t need for months.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
];

const audiences = [
  {
    icon: Brain,
    title: 'Beginners',
    desc: 'No experience with AI services, business models, or client work. You know AI is an opportunity but have no idea where to start.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Laptop,
    title: 'IT Professionals',
    desc: 'Technical background but no business experience. You understand the tools but need a path to finding clients and charging what you\'re worth.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: TrendingUp,
    title: 'Career Changers',
    desc: 'Looking to transition out of your current role or industry. AI services represent a faster path to independence than traditional career moves.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Clock,
    title: 'Side Hustlers',
    desc: 'Building alongside a full-time job. You need an efficient approach that works within limited hours and produces real income quickly.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Briefcase,
    title: 'Consultants',
    desc: 'Existing consultants who want to add AI services to their current practice and increase their rates and client value.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

const outcomes = [
  { icon: Target,      title: 'Clear Business Direction',  desc: 'No more second-guessing your model or niche. You\'ll leave knowing exactly what you\'re building.' },
  { icon: UserCheck,   title: 'Recommended Niche',         desc: 'A specific client type identified based on your skills, market demand, and competitive positioning.' },
  { icon: Award,       title: 'Offer Framework',           desc: 'A draft offer — named, scoped, and positioned — ready to present to potential clients.' },
  { icon: DollarSign,  title: 'Pricing Guidance',          desc: 'Specific pricing recommendations for your service type, including tiered options to maximize close rate.' },
  { icon: Map,         title: '30-Day Action Plan',        desc: 'A week-by-week roadmap for your first 30 days: what to set up, who to contact, and in what order.' },
];

const faqs = [
  {
    q: 'What exactly happens during the 60 minutes?',
    a: 'We start with a 10-minute assessment of your current situation, skills, and goals. Then we spend 40 minutes working through your business model selection, offer structure, and client acquisition strategy. The final 10 minutes is for your 30-day action plan and any remaining questions. You\'ll receive a written summary within 24 hours.',
  },
  {
    q: 'Do I need any prior experience with AI or running a business?',
    a: 'No. The session is designed to work regardless of your starting point. Whether you\'re completely new to AI services or have some background but no clear direction, the session is structured around your specific situation.',
  },
  {
    q: 'How is this different from the free strategy session on the Launch Kit page?',
    a: 'The free strategy session is a 30-minute orientation for Launch Kit customers — focused on getting started with the resources. The Accelerator is a 60-minute deep-dive into your specific business: custom model selection, offer design, pricing, and a tailored acquisition plan. It\'s a working session, not a consultation.',
  },
  {
    q: 'Will this session work if I haven\'t chosen a niche yet?',
    a: 'Yes — choosing your niche is one of the primary outputs of the session. We\'ll evaluate several candidate niches against your skills, interests, competitive landscape, and income goals and identify the strongest option for you.',
  },
  {
    q: 'What if I\'m not satisfied with the session?',
    a: 'If you don\'t feel the session was worth your investment, email within 7 days and we\'ll issue a full refund. No questions asked. The guarantee exists because we\'re confident in the value — not as fine print.',
  },
  {
    q: 'How soon can I book?',
    a: 'Sessions are typically available within 3–5 business days. Exact availability is shown during booking. If you have an urgent timeline, note that in the booking form and we\'ll do our best to accommodate.',
  },
  {
    q: 'Do I need to prepare anything before the session?',
    a: 'After booking you\'ll receive a short intake form (5–7 minutes) covering your background, goals, and any specific questions. Completing it before the session means we use your 60 minutes on strategy, not logistics.',
  },
  {
    q: 'Will I leave with something I can actually use?',
    a: 'Yes. The session is structured around deliverables: a business model recommendation, an offer framework, a pricing structure, and a 30-day action plan. These are sent to you in writing within 24 hours of the call.',
  },
  {
    q: 'Is this a sales call for another program?',
    a: 'No. The session stands alone — it is the product. We may mention other resources if they\'re directly relevant to your plan, but there\'s no upsell pitch and no pressure to buy anything else.',
  },
  {
    q: 'What AI business models do you cover?',
    a: 'We cover AI agency services (automation, chatbots, content, SEO, operations), productized AI consulting, done-for-you AI implementation, SaaS-adjacent tools, and hybrid models. We\'ll identify which is best suited to your goals and constraints.',
  },
];

export default function AIAgencyAcceleratorPage({ onNavigate }: AIAgencyAcceleratorPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,_#1d4ed828,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_90%_80%,_#06b6d410,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff04_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff04_1px,_transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

            {/* Left — copy */}
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-black uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Private 1-on-1 · 60 Minutes · $197
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-black text-white leading-[1.05] tracking-tight mb-6">
                Get Personalized Help<br />
                <span className="text-blue-400">Launching Your<br className="hidden sm:block" /> AI Business</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 max-w-xl lg:max-w-none">
                A private 60-minute strategy session designed to help you choose the right AI business model, create your offer, and develop a practical client acquisition plan.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 mb-8">
                <a
                  href={BOOKING_URL}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/35 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-base"
                >
                  Book My Accelerator Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-gray-500 font-medium">
                {['60-Minute Private Session', 'Written Summary Included', '7-Day Money-Back Guarantee'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — price card */}
            <div className="flex-shrink-0 lg:w-80 w-full max-w-sm mx-auto lg:mx-0">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* Card top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />

                <div className="px-8 py-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">AI Agency Accelerator</span>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-5xl font-black text-white">$197</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">One-time · 60-minute private session</p>
                  </div>

                  <div className="space-y-3 mb-7">
                    {[
                      'Business model selection',
                      'Custom offer creation',
                      'Pricing strategy',
                      'Client acquisition plan',
                      'Tool recommendations',
                      'Written summary within 24h',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={BOOKING_URL}
                    className="group w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-sm mb-4"
                  >
                    Book My Session
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600">
                    <Shield className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                    7-day money-back guarantee
                  </div>
                </div>
              </div>

              {/* Social proof below card */}
              <div className="mt-5 flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 text-center leading-relaxed max-w-xs">
                  "The most valuable 60 minutes I've invested in my business this year."
                </p>
                <p className="text-xs text-gray-700 font-semibold">— Launch Kit Member</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SESSION DETAILS STRIP ── */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock,       stat: '60 min',     label: 'Private Session' },
              { icon: Users,       stat: '1-on-1',     label: 'Direct Access' },
              { icon: MessageSquare, stat: '24h',      label: 'Written Summary' },
              { icon: Shield,      stat: '7-Day',      label: 'Money-Back Guarantee' },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-black text-white">{stat}</span>
                <span className="text-xs text-gray-500 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ 2. WHAT WE'LL COVER ══════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-5">
              <Zap className="w-3 h-3" />
              Session Agenda
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              What We'll Cover
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Every minute of the session is structured around your specific situation — not a generic script.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverItems.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div
                key={title}
                className={`bg-white border ${border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-black text-gray-900 text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. WHO THIS IS FOR ═══════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 border border-gray-300 text-gray-700 text-xs font-black uppercase tracking-widest mb-5">
              <Users className="w-3 h-3" />
              Fit
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              Who This Is For
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              The session works for a wide range of starting points. The common thread is wanting a clear, personalized plan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-black text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Not a fit card */}
            <div className="bg-gray-950 rounded-2xl border border-gray-800 p-6">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-black text-white text-sm mb-2">Not a fit if...</h3>
              <ul className="space-y-1.5">
                {[
                  'You\'re looking for done-for-you services',
                  'You want theoretical AI education',
                  'You have no intention of taking action',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. WHAT YOU'LL LEAVE WITH ════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest mb-5">
              Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              What You'll Leave With
            </h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              Not vague next steps — specific, documented deliverables sent to you in writing within 24 hours.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200"
              >
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-black text-gray-300 tabular-nums">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-sm mb-1.5 leading-snug">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. PROCESS ═══════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-xs font-black uppercase tracking-widest mb-5">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Simple Process
            </h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              From booking to your written plan — here's exactly what happens.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[22px] top-10 bottom-10 w-px bg-gray-800 hidden sm:block" />

            <div className="space-y-6">
              {[
                {
                  n: '01',
                  title: 'Book & Pay',
                  desc: 'Select a time slot that works for you and complete your payment. You\'ll receive a confirmation with the meeting link.',
                  color: 'text-blue-400',
                  bg: 'bg-blue-600',
                },
                {
                  n: '02',
                  title: 'Complete Intake Form',
                  desc: 'A 5–7 minute form covering your background, goals, current situation, and any specific questions. This lets us skip logistics on the call.',
                  color: 'text-violet-400',
                  bg: 'bg-violet-600',
                },
                {
                  n: '03',
                  title: '60-Minute Strategy Session',
                  desc: 'A focused, private video call. We work through your business model, offer, pricing, and acquisition strategy together.',
                  color: 'text-emerald-400',
                  bg: 'bg-emerald-600',
                },
                {
                  n: '04',
                  title: 'Receive Written Summary',
                  desc: 'Within 24 hours you\'ll receive a written summary of your plan: business model recommendation, offer framework, pricing, and your 30-day action steps.',
                  color: 'text-orange-400',
                  bg: 'bg-orange-600',
                },
              ].map((step) => (
                <div key={step.n} className="relative flex items-start gap-5 sm:gap-7">
                  <div className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0 z-10 shadow-lg`}>
                    <span className="text-xs font-black text-white tabular-nums">{step.n}</span>
                  </div>
                  <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl px-6 py-5 hover:border-gray-700 transition-colors">
                    <h3 className="font-black text-white text-sm mb-1.5 leading-snug">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. PRICING ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest mb-5">
              Investment
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
              One session. One price. A clear plan on the other side.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />

            <div className="px-8 py-10 sm:px-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">AI Agency Accelerator</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gray-950">$197</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5 font-medium">One-time · 60-minute private session</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Included items */}
              <div className="space-y-3 mb-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Everything included</p>
                {[
                  { label: '60-minute private 1-on-1 strategy session', highlight: false },
                  { label: 'Business model selection and recommendation', highlight: false },
                  { label: 'Custom offer framework and positioning', highlight: false },
                  { label: 'Pricing strategy for your specific service', highlight: false },
                  { label: 'Client acquisition plan tailored to your niche', highlight: false },
                  { label: 'AI tool stack recommendations', highlight: false },
                  { label: 'Written summary delivered within 24 hours', highlight: true },
                  { label: '7-day money-back guarantee', highlight: true },
                ].map(({ label, highlight }) => (
                  <div key={label} className="flex items-center gap-3">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${highlight ? 'text-emerald-500' : 'text-blue-500'}`} />
                    <span className={`text-sm font-medium ${highlight ? 'text-gray-900 font-bold' : 'text-gray-700'}`}>{label}</span>
                  </div>
                ))}
              </div>

              <a
                href={BOOKING_URL}
                className="group w-full flex items-center justify-center gap-2.5 py-4 bg-gray-950 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-base mb-4"
              >
                Book My Accelerator Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <Shield className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                7-day money-back guarantee · No questions asked
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7. TESTIMONIALS ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Results</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight">
              What Members Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                quote: 'I went into the session with three different business ideas and left with one clear direction, a named offer, and a pricing structure I felt good about. That clarity alone was worth more than the price.',
                name: 'Marcus T.',
                role: 'Former IT Manager',
                avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
              },
              {
                quote: 'The written summary I received after the call was exactly what I needed. I printed it, put it on my desk, and followed it step by step for the next 30 days. I signed my first client in week three.',
                name: 'Priya S.',
                role: 'Career Changer',
                avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
              },
              {
                quote: 'I\'d spent months watching YouTube videos and reading about AI business models. One hour in this session did more than all of that. The difference was having someone react to my specific situation.',
                name: 'David R.',
                role: 'Side Hustler → Full-Time',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
              },
            ].map(({ quote, name, role, avatar }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-5">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. GUARANTEE ═════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="bg-gray-950 rounded-3xl overflow-hidden">
            <div className="relative px-8 py-12 sm:px-14 flex flex-col sm:flex-row items-center gap-10 text-center sm:text-left">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_50%,_#1d4ed812,_transparent)] pointer-events-none" />

              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto sm:mx-0">
                  <Shield className="w-10 h-10 text-emerald-400" />
                </div>
              </div>

              <div className="relative flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-4">
                  7-Day Money-Back Guarantee
                </div>
                <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                  If It's Not Worth It, You Pay Nothing
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If within 7 days of your session you feel you didn't get the clarity and direction you came for, email us and we'll refund every dollar. No forms, no justification required. The guarantee exists because we're confident in the outcome — not to create friction if you're not satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. FAQ ═══════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-t border-gray-100 py-24">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 border border-gray-300 text-gray-700 text-xs font-black uppercase tracking-widest mb-5">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-blue-200 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold text-gray-900 text-sm leading-snug">{item.q}</span>
                    {open
                      ? <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                  </button>
                  {open && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                      <p className="text-sm text-gray-500 leading-relaxed pt-4">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 10. FINAL CTA ════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_#1d4ed820,_transparent)] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Limited Availability
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Stop Guessing.<br />
            <span className="text-blue-400">Get a Plan That's Built For You.</span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
            One 60-minute session. A clear business direction, a defined offer, a pricing structure, and a 30-day action plan — all in writing. Book your session and start with clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={BOOKING_URL}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 text-base"
            >
              Book My Accelerator Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => navigate('book-call')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-gray-700 hover:border-gray-400 text-gray-400 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              Have a question first?
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600 font-medium">
            {['$197 · One-Time', '60-Minute Private Session', '7-Day Money-Back Guarantee', 'Written Summary Included'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>

          {/* Support */}
          <div className="mt-10 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-600 font-medium mb-2">Questions before booking?</p>
            <a
              href="mailto:cassey@simpleonlinesteps.com"
              className="text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              cassey@simpleonlinesteps.com
            </a>
            <p className="text-xs text-gray-700 mt-1">Typically responds within 1 business day</p>
          </div>
        </div>
      </section>

    </div>
  );
}
