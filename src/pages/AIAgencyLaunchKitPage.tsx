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
  Laptop,
  Briefcase,
  Award,
  Clock,
  AlertTriangle,
  MessageSquare,
  Settings,
  BarChart2,
} from 'lucide-react';

interface AIAgencyLaunchKitPageProps {
  onNavigate: (page: string) => void;
}

const problems = [
  'Too many AI tools — no idea which ones actually matter',
  'Too many business models — agency, SaaS, content, freelance — which one?',
  'No clear roadmap — just a pile of bookmarked YouTube videos',
  'No clients — because learning never turns into outreach',
  'No implementation plan — so nothing actually gets built',
];

const kitItems = [
  {
    icon: Brain,
    title: 'AI Business Opportunity Guide',
    value: '$47',
    desc: 'Learn which AI services businesses are actively buying right now — not hypothetical future demand.',
    detail: 'This 24-page guide breaks down the highest-demand AI service categories for small and mid-size businesses. You\'ll learn how to read a market for AI readiness, which niches are underserved, how to position yourself as a specialist rather than a generalist, and what income is realistic at each stage. This is the foundation everything else is built on.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Target,
    title: 'Offer Creation Blueprint',
    value: '$47',
    desc: 'Stop guessing what to sell. Build a clearly defined offer that businesses understand and will pay for.',
    detail: "Most beginners fail because they can't explain what they do in simple terms. This blueprint walks you through a 4-step framework for packaging your AI capabilities into a named, priced service. You\'ll define your target client, the problem you solve, the outcome you deliver, and how to price it confidently — without undercharging.",
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: ClipboardList,
    title: 'AI Audit Framework',
    value: '$97',
    desc: 'Walk into any business and identify automation opportunities that open real sales conversations.',
    detail: "The AI audit is one of the most effective ways to open a relationship with a prospect. This framework gives you a structured process for evaluating a business's workflows, identifying where AI can save time or money, and presenting findings in a way that naturally leads to a paid engagement. Includes the exact questions to ask and how to frame your recommendations.",
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: Phone,
    title: 'Discovery Call Script',
    value: '$47',
    desc: 'Know exactly what to say. Move conversations forward with confidence and handle objections naturally.',
    detail: "This isn't a rigid script — it's a structured conversation framework. You'll learn how to open the call, ask the right questions to uncover pain, present your offer in response to what they said (not a generic pitch), handle the most common objections, and close for a clear next step. Includes a pre-call prep checklist and post-call follow-up template.",
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: FileText,
    title: 'Proposal Template',
    value: '$47',
    desc: 'Send a polished, professional proposal that looks like it came from an established agency — not a beginner.',
    detail: "A poorly formatted proposal loses deals before the conversation even ends. This ready-to-customize template covers the problem summary, proposed solution, deliverables, timeline, pricing options, and a section for social proof or case studies. Built in a format that feels premium without requiring a designer. Works for retainers, one-time projects, and audits.",
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: UserPlus,
    title: 'Client Onboarding Checklist',
    value: '$47',
    desc: 'Get new clients started right — set expectations, protect your time, and build trust from day one.',
    detail: 'The first 7 days with a new client define the entire relationship. This checklist walks you through every step from signed agreement to first deliverable — including a welcome email sequence, intake questionnaire, kickoff call agenda, and a shared expectations document. Included is a template for scoping work so you never get stuck in scope creep.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: TrendingUp,
    title: 'First Client Acquisition Roadmap',
    value: '$97',
    desc: 'A 30-day action plan with day-by-day tasks to land your first paying AI client.',
    detail: "This is the roadmap that ties everything together. Broken into 4 weekly phases: setup, outreach, follow-up, and close. Each day has a specific, actionable task — no vague instructions like 'do outreach.' You'll know exactly who to contact, what to say, and what to do when they respond. Designed for people working around a full-time schedule.",
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Wrench,
    title: 'AI Tool Stack Guide',
    value: '$47',
    desc: 'The exact tools to use from day one — with use cases, cost breakdowns, and setup notes.',
    detail: "Stop wasting hours evaluating tools. This guide covers the tools that actually matter for running a lean AI agency: automation platforms, content generation, client communication, project management, and outreach. Includes a free-tier starter stack for under $0/month and a professional stack for under $50/month, with notes on when to upgrade.",
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
];

const outcomes = [
  {
    icon: Target,
    title: 'Clear Direction',
    desc: 'Know exactly what service to offer, who to target, and how to price it — before you talk to a single prospect.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Faster Implementation',
    desc: 'Done-for-you templates mean you spend your time doing client work, not designing forms and writing scripts from scratch.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: MessageSquare,
    title: 'Better Client Conversations',
    desc: "Walk into every discovery call prepared. Know what to ask, how to handle objections, and how to close — naturally.",
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Settings,
    title: 'Professional Systems',
    desc: 'Look and operate like an established agency from day one — with proposals, onboarding, and client communication that builds confidence.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: BarChart2,
    title: 'Reduced Trial and Error',
    desc: "Skip the months of guessing. You're following a tested path — not experimenting alone and hoping something works.",
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
];

const audiences = [
  {
    icon: Brain,
    title: 'Beginners',
    desc: 'No portfolio, no network, no experience. This system assumes you\'re starting from zero.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Laptop,
    title: 'IT Professionals',
    desc: 'You already understand technology. Learn to package that knowledge into services clients will pay for.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: ArrowRight,
    title: 'Career Changers',
    desc: 'Step into a concrete business model with a clear path instead of wandering through options.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Briefcase,
    title: 'Freelancers',
    desc: 'Add AI services to what you already do. Charge premium rates for work that takes a fraction of the time.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Award,
    title: 'Consultants',
    desc: 'Differentiate from every competitor by adding an AI layer to your existing practice and client relationships.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: Zap,
    title: 'Side Hustlers',
    desc: 'The roadmap is designed to fit around a full-time job. A few hours a week is enough to make real progress.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

const valueStack = [
  { title: 'AI Business Opportunity Guide', value: '$47' },
  { title: 'Offer Creation Blueprint', value: '$47' },
  { title: 'AI Audit Framework', value: '$97' },
  { title: 'Discovery Call Script', value: '$47' },
  { title: 'Proposal Template', value: '$47' },
  { title: 'Client Onboarding System', value: '$47' },
  { title: 'First Client Acquisition Roadmap', value: '$97' },
  { title: 'AI Tool Stack Guide', value: '$47' },
];

const faqs = [
  {
    q: 'Do I need prior AI or business experience?',
    a: "No — this is specifically built for people starting from zero. The kit walks you through business fundamentals first before introducing any tools or tactics. No technical background required.",
  },
  {
    q: 'How quickly could I land my first client?',
    a: "The First Client Acquisition Roadmap is structured around consistent daily action over 30 days. Many people book their first discovery call within the first two weeks of following the outreach plan. Results depend entirely on implementation — this is a doing kit, not a watching kit.",
  },
  {
    q: 'Is this a course or a resource kit?',
    a: "It's a resource kit — not a course. There are no video modules to sit through. You get 8 practical, action-ready documents you can open and start using immediately. Most people work through the core materials in a single weekend.",
  },
  {
    q: 'What kind of AI services would I actually sell?',
    a: "Services like AI chatbot setup for local businesses, automation workflow builds, content generation systems, social media AI pipelines, and AI process audits. The kit focuses on services that are in high demand, beginner-accessible, and don't require coding.",
  },
  {
    q: 'Do I need to know how to use AI tools before I start?',
    a: "Not at all. The AI Tool Stack Guide introduces the most relevant tools, explains what each one does, and shows how to use them for client work. The learning curve is shorter than most people expect — especially with a clear use case in mind.",
  },
  {
    q: 'How much time per week does this require?',
    a: "The materials take a weekend to work through. The First Client Acquisition Roadmap is designed for people working around a full-time job — a focused 1-2 hours per day is enough to make consistent progress through the outreach and follow-up phases.",
  },
  {
    q: 'How much will I need to spend on tools each month?',
    a: "The AI Tool Stack Guide covers a free starter stack that costs $0/month and a professional stack for under $50/month. You can start delivering real services to clients before spending anything significant on tools.",
  },
  {
    q: 'Is there a refund policy?',
    a: "Yes — a 14-day, no-questions-asked money-back guarantee. If you go through the materials and feel it wasn't worth the investment, email us within 14 days for a full refund. No hoops to jump through.",
  },
  {
    q: 'Is there support if I get stuck?',
    a: "Yes. You can book a free strategy session at any point to get direct answers to your questions. You're not left on your own after purchase.",
  },
  {
    q: 'How is this different from watching YouTube videos?',
    a: "YouTube gives you scattered, generic information from dozens of different creators with conflicting advice. This kit gives you one focused, structured system built specifically for AI agency sales — with done-for-you templates you can use the same day. No assembly required.",
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
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const STRIPE_URL = 'https://buy.stripe.com/bJe6oI8CUeKP4lWaozcZa00';

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalValue = valueStack.reduce((sum, item) => sum + parseInt(item.value.replace('$', '')), 0);

  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,_#1d4ed832,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff04_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff04_1px,_transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-black uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI Agency Launch Kit — Launch Special $97
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Get Your First AI Client<br />
            <span className="text-blue-400">Without Starting From Scratch</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Stop watching endless AI videos and start building a real business with proven templates, scripts, systems, and roadmaps — designed for beginners who are ready to take action.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/35 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-base"
            >
              Get The Launch Kit — $97
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => navigate('book-call')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Book A Free Strategy Session
            </button>
          </div>

          {/* Secure checkout badge */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium mb-6">
            {['Secure Stripe Checkout', 'Instant Access After Purchase', 'One-Time Payment'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-gray-500 font-medium">
            {['Instant Digital Download', '14-Day Money-Back Guarantee', 'No Experience Required'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
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

      {/* ══ 2. PROBLEM ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-black uppercase tracking-widest mb-5">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-5">
              Most People Never Get Past<br className="hidden sm:block" /> The Learning Stage
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
              The information to build an AI business is everywhere. But having information is not the same as having a system. Here's where most beginners get stuck:
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl px-5 py-4">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-700">{p}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-2xl px-8 py-9 text-center">
            <p className="text-white text-xl font-black leading-snug mb-3">
              The AI Agency Launch Kit solves all five.
            </p>
            <p className="text-blue-100 text-sm leading-relaxed max-w-lg mx-auto">
              Instead of information, you get a complete system — templates, scripts, and a step-by-step roadmap designed to move you from stuck to your first client.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 3. SOLUTION — WHAT'S INCLUDED ════════════════════════════════ */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-5">
              What's Included
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
              Everything You Need To Launch Faster
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              8 ready-to-use resources — one complete system for going from overwhelmed to client-ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {kitItems.map((item, i) => {
              const Icon = item.icon;
              const open = expandedItem === i;
              return (
                <div
                  key={item.title}
                  className={`bg-gray-900 border rounded-2xl overflow-hidden transition-colors duration-200 ${open ? 'border-blue-500/50' : 'border-gray-800 hover:border-gray-700'}`}
                >
                  <button
                    onClick={() => setExpandedItem(open ? null : i)}
                    className="w-full text-left p-6 flex items-start gap-4"
                  >
                    <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div>
                          <span className="text-xs font-black text-gray-600 uppercase tracking-widest tabular-nums mr-2">0{i + 1}</span>
                          <span className="font-black text-white text-sm leading-snug">{item.title}</span>
                        </div>
                        <span className="text-xs font-black text-emerald-400 whitespace-nowrap">{item.value} value</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex-shrink-0 mt-1 ml-1">
                      {open
                        ? <ChevronUp className="w-4 h-4 text-blue-400" />
                        : <ChevronDown className="w-4 h-4 text-gray-600" />}
                    </div>
                  </button>
                  {open && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-800">
                      <p className="text-sm text-gray-400 leading-relaxed pt-4">{item.detail}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 text-base"
            >
              Get The Launch Kit — $97
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-gray-600 font-medium mt-3">
              {['Secure Stripe Checkout', 'Instant Access After Purchase', 'One-Time Payment'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. OUTCOMES ══════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest mb-5">
              Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              What You Can Expect
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Not vague promises — specific, practical outcomes after working through the kit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-black text-gray-900 mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. WHO THIS IS FOR ═══════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-5">
              Who This Is For
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              This Kit Was Built For You If...
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {audiences.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <h3 className="font-black text-gray-900 text-sm">{title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl px-7 py-6 max-w-2xl mx-auto">
            <p className="text-sm font-black text-gray-700 mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              This is NOT for you if:
            </p>
            <ul className="space-y-2.5">
              {[
                "You're looking for a get-rich-quick scheme with no real effort",
                "You're not willing to do outreach and talk to potential clients",
                "You want someone to build the business entirely for you",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                  <XCircle className="w-4 h-4 text-red-300 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 6. DETAILED BREAKDOWN ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest mb-5">
              Inside The Kit
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-4">
              Launch Kit Breakdown
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
              Every resource explained in full — what it is, what it does, and how it moves you forward.
            </p>
          </div>

          <div className="space-y-6">
            {kitItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`rounded-2xl border ${item.border} overflow-hidden`}>
                  {/* Header */}
                  <div className={`flex items-center gap-4 px-6 py-5 ${item.bg}`}>
                    <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-black uppercase tracking-widest ${item.color} opacity-60 tabular-nums`}>Resource 0{i + 1}</span>
                        <span className={`text-xs font-black px-2 py-0.5 rounded-full bg-white/60 ${item.color}`}>{item.value} value</span>
                      </div>
                      <h3 className="font-black text-gray-900 text-base leading-snug mt-0.5">{item.title}</h3>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="px-6 py-5 bg-white">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.detail}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs font-semibold text-gray-500">Included in the AI Agency Launch Kit</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 7. PRICING ═══════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Launch Special — Price Increases to $197
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 mb-10">One payment. Lifetime access. No subscriptions. No upsells.</p>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/10">
            {/* Banner */}
            <div className="bg-blue-600 py-3 px-6 text-center">
              <span className="text-xs font-black text-white/90 uppercase tracking-widest">Launch Special — Save $100 · Price Goes Up to $197</span>
            </div>

            <div className="px-8 py-10">
              {/* Value stack */}
              <div className="space-y-2.5 mb-7 text-left">
                {valueStack.map((item) => (
                  <div key={item.title} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {item.title}
                    </span>
                    <span className="text-gray-400 font-semibold tabular-nums flex-shrink-0">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-5 mb-8">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-black text-gray-500 uppercase tracking-widest">Total Value</span>
                  <span className="text-gray-400 line-through font-semibold">${totalValue}</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-black text-gray-500 uppercase tracking-widest">Future Price</span>
                  <span className="text-gray-400 line-through font-semibold">$197</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-base font-black text-gray-900 uppercase tracking-wider">Launch Special</span>
                  <span className="text-4xl font-black text-gray-950">$97</span>
                </div>
                <p className="text-right text-xs text-gray-400 mt-1">One-time payment — no recurring fees</p>
              </div>

              {/* Urgency */}
              <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-7 text-left">
                <Zap className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" />
                <p className="text-xs text-amber-800 font-semibold leading-relaxed">
                  This launch pricing is temporary and will increase as additional resources are added.
                </p>
              </div>

              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-base"
              >
                Get The AI Agency Launch Kit — $97
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secure checkout badges */}
              <div className="flex flex-col gap-1.5 mt-5">
                {['Secure Stripe Checkout', 'Instant Access After Purchase', 'One-Time Payment'].map((t) => (
                  <span key={t} className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Have questions first?{' '}
            <button
              onClick={() => navigate('book-call')}
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 transition-colors"
            >
              Book a free strategy call
            </button>{' '}
            — we'll answer everything.
          </p>
        </div>
      </section>

      {/* ══ 8. FAQ ═══════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-black uppercase tracking-widest mb-5">
              FAQ
            </div>
            <h2 className="text-3xl font-black text-gray-950 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Everything you need to know before you buy.</p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm leading-snug">{faq.q}</span>
                  {expandedFaq === i
                    ? <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />}
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. FINAL CTA ═════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/30 mb-8">
            <Zap className="w-7 h-7 text-white" fill="currentColor" />
          </div>

          <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">Make The Move</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Ready To Stop Learning<br className="hidden sm:block" /> And Start Building?
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
            The AI opportunity is real — but it won't wait forever. Get the system, follow the roadmap, and land your first AI client.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 text-base"
            >
              Get The AI Agency Launch Kit — $97
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => navigate('book-call')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Book A Free Strategy Session
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium mb-4">
            {['Secure Stripe Checkout', 'Instant Access After Purchase', 'One-Time Payment'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-600">
            14-Day Money-Back Guarantee &nbsp;·&nbsp; This launch pricing is temporary and will increase as additional resources are added.
          </p>
        </div>
      </section>

    </div>
  );
}
