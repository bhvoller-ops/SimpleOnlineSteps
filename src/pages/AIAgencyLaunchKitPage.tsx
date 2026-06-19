import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Brain,
  FileText,
  Users,
  Phone,
  ClipboardList,
  UserPlus,
  Wrench,
  TrendingUp,
  Target,
  Zap,
  Star,
  Shield,
  ChevronDown,
  ChevronUp,
  Building2,
  Laptop,
  Briefcase,
  Award,
  MapPin,
  Clock,
} from 'lucide-react';

interface AIAgencyLaunchKitPageProps {
  onNavigate: (page: string) => void;
}

const kitItems = [
  {
    icon: Brain,
    title: 'AI Business Opportunity Guide',
    desc: 'Learn which AI services businesses are actually buying right now — so you focus on real demand, not hype.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Target,
    title: 'Offer Creation Blueprint',
    desc: 'Create a service businesses understand and will pay for. No jargon, no guesswork — just a clear, priced offer.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: ClipboardList,
    title: 'AI Audit Framework',
    desc: 'The same style of audit used to open sales conversations — show prospects exactly where AI saves them time and money.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Phone,
    title: 'Discovery Call Script',
    desc: 'Know exactly what to say on prospect calls. Handle objections confidently and move conversations toward yes.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: FileText,
    title: 'Proposal Template',
    desc: 'Present your services professionally with a polished, ready-to-customize proposal built to convert prospects into clients.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: UserPlus,
    title: 'Client Onboarding System',
    desc: 'Get new clients started quickly with a checklist that sets clear expectations, builds trust, and protects your time.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: TrendingUp,
    title: 'First Client Acquisition Roadmap',
    desc: 'A step-by-step action plan to land your first paying client — even without a portfolio or existing network.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Wrench,
    title: 'AI Tool Stack Guide',
    desc: 'The tools we recommend and why — with use cases and cost breakdowns so you know exactly what to use from day one.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

const audiences = [
  { icon: Laptop,    title: 'IT Professionals',     desc: 'Package your technical knowledge into high-paying client services.' },
  { icon: Briefcase, title: 'Corporate Employees',   desc: 'Build an AI services business on the side and take control of your income.' },
  { icon: MapPin,    title: 'Career Changers',        desc: 'Step into a concrete business model instead of wandering.' },
  { icon: Award,     title: 'Consultants',            desc: 'Add AI to your practice and differentiate from every competitor.' },
  { icon: Users,     title: 'Freelancers',            desc: 'Charge premium rates for AI work that takes a fraction of the time.' },
  { icon: Zap,       title: 'Side Hustlers',          desc: 'Start small and scale a real income stream on your own timeline.' },
  { icon: Building2, title: 'Small Business Owners',  desc: 'Use AI in your own business and help other local businesses do the same.' },
  { icon: Brain,     title: 'Complete Beginners',     desc: 'No experience, no portfolio, no network required. Zero to first client.' },
];

const results = [
  {
    icon: Target,
    title: 'Clear Business Direction',
    desc: 'Know exactly what service to offer, who to sell it to, and how much to charge.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Less Confusion',
    desc: 'Replace endless YouTube rabbit holes with a single, structured system that tells you what to do next.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Clock,
    title: 'Faster Implementation',
    desc: 'Done-for-you templates mean you spend time doing, not designing, drafting, or researching.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Phone,
    title: 'Better Client Conversations',
    desc: 'Walk into every call with a proven script and leave with a clear next step.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: TrendingUp,
    title: 'A Practical Path to Your First Paying Client',
    desc: 'A step-by-step roadmap so you always know what to do next — no guessing.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
];

const faqs = [
  {
    q: 'Do I need prior AI or business experience?',
    a: "No — that's exactly who this is built for. The kit assumes you're starting from zero and walks you through business fundamentals before any technical details.",
  },
  {
    q: 'How much time do I need to commit?',
    a: 'Most people work through the core materials in a weekend. Implementing the First Client Acquisition Roadmap is designed to fit around a full-time job — a few hours a week is enough to make real progress.',
  },
  {
    q: 'Do I need to know how to use AI tools?',
    a: "Not before you start. The AI Tool Stack Guide introduces the most important tools, shows how to use them for client work, and the learning curve is shorter than most people expect.",
  },
  {
    q: 'How quickly could I get my first client?',
    a: "The First Client Acquisition Roadmap is built around actionable steps, not a fixed timeline. Many people book their first discovery call within the first two weeks of consistent outreach. Results depend on implementation.",
  },
  {
    q: 'What kind of AI services would I sell?',
    a: 'Services like chatbot setup, automation workflows, content generation systems, and AI process audits for local businesses. The kit focuses on the most in-demand, beginner-accessible service types.',
  },
  {
    q: 'Is there any support if I get stuck?',
    a: "Yes. You can book a free strategy session at any point and we'll answer your questions directly. You're not on your own.",
  },
  {
    q: 'Is there a refund policy?',
    a: "Yes — a 14-day, no-questions-asked money-back guarantee. If you go through the materials and feel it wasn't worth it, reach out within 14 days for a full refund.",
  },
  {
    q: 'How much will I need to spend on AI tools?',
    a: "The AI Tool Stack Guide covers free and low-cost options. You can start delivering services for under $50/month in tool costs. Many tools have free tiers that are more than enough for your first few clients.",
  },
  {
    q: 'Is this a course or a resource kit?',
    a: "It's a resource kit — not a course. No video modules to sit through. You get practical, action-ready documents you can open and use immediately.",
  },
  {
    q: 'How is this different from free YouTube content?',
    a: "YouTube gives you scattered, generic information. This kit gives you a focused, structured system with done-for-you templates tailored to AI agency sales — no assembly required.",
  },
];

const socialProof = [
  {
    name: 'Marcus T.',
    role: 'Former IT Support Tech',
    quote: 'I used the discovery call script on my first real prospect. They signed a $1,500/mo contract two weeks later.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    name: 'Daniela R.',
    role: 'Career Changer',
    quote: "The offer creation framework alone was worth 10x the price. I finally understood what I was actually selling.",
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    name: 'Kevin L.',
    role: 'Freelance Web Designer',
    quote: 'I added an AI audit service using the template. First audit client paid $500 for a 45-minute Zoom call.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
];

export default function AIAgencyLaunchKitPage({ onNavigate }: AIAgencyLaunchKitPageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const STRIPE_URL = 'https://buy.stripe.com/9B6aEX8Er9WNfRxeTXgjC03';

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buyNow = () => {
    window.open(STRIPE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_#1d4ed830,_transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff04_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff04_1px,_transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-black uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            From Zero To First Client
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white leading-[1.04] tracking-tight mb-6">
            Get Your First AI Client<br />
            <span className="text-blue-400">Without Starting From Scratch</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            The AI Agency Launch Kit gives you the roadmap, templates, scripts, and systems needed to launch an AI services business and start finding clients — even if you're overwhelmed by all the AI tools and opportunities online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={buyNow}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/35 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-base"
            >
              Get The Launch Kit — Launch Special $97
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('book-call')}
              className="w-full sm:w-auto px-8 py-4 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Book A Free Strategy Session
            </button>
          </div>

          {/* Trust badge */}
          <p className="text-sm text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Designed for beginners, career changers, IT professionals, consultants, freelancers, and aspiring entrepreneurs.
          </p>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-xs text-gray-500 font-medium">
            {['Instant Digital Download', '14-Day Money-Back Guarantee', 'No Experience Required', 'One-Time Payment'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
          <p className="text-center text-xs font-black uppercase tracking-widest text-gray-400 mb-8">
            Real results from real students
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {socialProof.map((sp) => (
              <div key={sp.name} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-5">"{sp.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={sp.avatar} alt={sp.name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs">{sp.name}</p>
                    <p className="text-gray-400 text-xs">{sp.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-black uppercase tracking-widest mb-5">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
            Why Most Beginners Never Get Clients
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            They spend months:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Watching YouTube videos', 'Buying courses', 'Testing tools', 'Taking notes'].map((item) => (
            <div key={item} className="flex items-center gap-2.5 bg-red-50 border border-red-100 rounded-xl px-5 py-3">
              <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-base font-semibold mb-12">
          But never speaking to potential customers.
        </p>

        <div className="bg-blue-600 rounded-2xl px-8 py-9 text-center">
          <p className="text-white text-xl font-black leading-snug mb-3">
            The AI Agency Launch Kit is designed to move you<br className="hidden sm:block" /> from learning to implementation.
          </p>
          <p className="text-blue-200 text-sm leading-relaxed max-w-xl mx-auto">
            Done-for-you templates, scripts, and systems so you can stop studying and start getting clients.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-5">
              What's Included
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
              8 Resources. One Complete System.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything you need to go from "I want to start an AI agency" to landing your first paying client.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {kitItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-black text-gray-600 uppercase tracking-widest tabular-nums">0{i + 1}</span>
                        <h3 className="font-black text-white text-sm leading-snug">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value stack */}
          <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-7">
              {[
                { label: 'Total Value', value: '$794+', note: 'If purchased separately' },
                { label: 'Future Price', value: '$197', note: 'After launch period' },
                { label: 'Launch Special', value: '$97', note: 'Limited time' },
              ].map(({ label, value, note }) => (
                <div key={label}>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-4xl font-black text-white">{value}</p>
                  <p className="text-xs text-gray-500 mt-1">{note}</p>
                </div>
              ))}
            </div>
            <button
              onClick={buyNow}
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 text-base"
            >
              Get The AI Agency Launch Kit — $97
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest mb-5">
            Who This Is For
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-3">
            Who This Is Perfect For
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            If you want a real, practical system for landing AI clients — this is for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto flex-shrink-0" />
              </div>
              <h3 className="font-black text-gray-900 text-sm mb-1.5">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-7 py-6">
          <p className="text-sm font-black text-gray-700 mb-3">This is NOT for you if:</p>
          <ul className="space-y-2">
            {[
              'You are looking for a get-rich-quick scheme with no effort',
              'You are unwilling to reach out to real businesses',
              'You want someone to do all the work for you',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-5">
              Results You Can Expect
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-3">
              What Changes When You Have<br className="hidden sm:block" /> the Right System
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Not vague promises — specific, practical outcomes after going through the kit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <div
                key={title}
                className={`bg-white rounded-2xl border border-gray-100 p-6 shadow-sm ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
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

      {/* ── PRICING ── */}
      <section className="max-w-2xl mx-auto px-6 sm:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-black uppercase tracking-widest mb-7">
          Pricing
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-10">One payment. Lifetime access. No subscriptions.</p>

        <div className="bg-white border-2 border-blue-500 rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/10">
          <div className="bg-blue-600 py-3 px-6 text-center">
            <span className="text-xs font-black text-white/90 uppercase tracking-widest">Launch Special — Price Goes Up to $197</span>
          </div>

          <div className="px-8 py-10">
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-3 mb-1">
                <span className="text-gray-400 line-through text-xl font-medium">$197</span>
                <span className="text-6xl font-black text-gray-950">$97</span>
              </div>
              <p className="text-gray-400 text-sm">One-time payment — no recurring fees</p>
            </div>

            {/* Includes */}
            <ul className="space-y-3 mb-8 text-left">
              {kitItems.map((item) => (
                <li key={item.title} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item.title}
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-gray-700 pt-1 border-t border-gray-100 mt-1">
                <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                14-Day Money-Back Guarantee
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                Instant Digital Access
              </li>
            </ul>

            <button
              onClick={buyNow}
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 text-base"
            >
              Get The AI Agency Launch Kit
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Secure checkout · Instant access · 14-day refund policy
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Not sure yet?{' '}
          <button
            onClick={() => navigate('book-call')}
            className="text-blue-600 hover:underline font-semibold"
          >
            Book a free strategy call
          </button>{' '}
          and we'll answer all your questions.
        </p>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest mb-5">
              FAQ
            </div>
            <h2 className="text-3xl font-black text-gray-950">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm pr-4 leading-snug">{faq.q}</span>
                  {expandedFaq === i
                    ? <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  }
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4 text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">Ready to Launch?</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Get The AI Agency Launch Kit Today.
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
            Stop watching. Start doing. Get the system, follow the roadmap, and land your first AI client.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={buyNow}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 text-base"
            >
              Get The AI Agency Launch Kit — $97
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('book-call')}
              className="w-full sm:w-auto px-8 py-4 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Book A Free Strategy Session
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            14-Day Money-Back Guarantee &nbsp;·&nbsp; Instant Access &nbsp;·&nbsp; No Subscriptions
          </p>
        </div>
      </section>

    </div>
  );
}
