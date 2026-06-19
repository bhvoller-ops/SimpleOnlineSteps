import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  AlertCircle,
  Layers,
  Map,
  ClipboardList,
  Rocket,
  Users,
  Briefcase,
  Code2,
  Zap,
  BookOpen,
  Globe,
  ShoppingBag,
  Share2,
  Package,
  Mail,
  Loader2,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const problems = [
  {
    icon: Layers,
    title: 'Too Many Tools',
    desc: 'New AI tools launch every week. You spend hours researching and testing instead of building and earning.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: AlertCircle,
    title: 'Too Many Business Ideas',
    desc: 'Dropshipping. Freelancing. AI agencies. Content creation. Everyone claims theirs is the best model — and you have no idea which is right for you.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Map,
    title: 'No Clear Roadmap',
    desc: "You know you want to build something, but there's no clear starting point. You watch more videos, take more notes, and still don't take action.",
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
];

const steps = [
  {
    n: '01',
    title: 'Take the Quiz',
    desc: 'Answer 5 simple questions about your goals, time, budget, and interests.',
    icon: ClipboardList,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    n: '02',
    title: 'Choose Your Path',
    desc: 'Get a personalized business path recommendation matched to your situation.',
    icon: Map,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    n: '03',
    title: 'Follow the Roadmap',
    desc: 'Work through a step-by-step system. Nothing skipped, nothing assumed.',
    icon: Rocket,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    n: '04',
    title: 'Launch Your Business',
    desc: 'Go live with a real offer, real systems, and a clear path to your first client or sale.',
    icon: TrendingUp,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
];

const audiences = [
  {
    icon: BookOpen,
    title: 'Complete Beginners',
    desc: 'No experience? No problem. Every system starts from zero with no jargon and no coding.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Briefcase,
    title: 'Career Changers',
    desc: "Tired of your 9-to-5? We'll help you find an AI business path that fits your skills and timeline.",
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Code2,
    title: 'IT Professionals',
    desc: 'You already understand technology — now leverage that edge to offer AI services businesses will pay for.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Zap,
    title: 'Side Hustlers',
    desc: 'Limited hours? Our systems are built for people working around full-time jobs and family commitments.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Users,
    title: 'Aspiring AI Entrepreneurs',
    desc: "You see the AI wave coming. We'll show you exactly how to position yourself and profit from it.",
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
];

const businessPaths = [
  {
    icon: Users,
    title: 'AI Agency',
    desc: 'Offer AI automation, content, and workflow services to small businesses. High income, low overhead.',
    income: '$3K–$12K/mo',
    tag: 'Most Popular',
    tagStyle: 'bg-blue-600 text-white',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-300',
  },
  {
    icon: Globe,
    title: 'AI Website Business',
    desc: 'Build and manage AI-enhanced websites for local businesses and niche markets.',
    income: '$2K–$8K/mo',
    tag: 'Beginner Friendly',
    tagStyle: 'bg-emerald-600 text-white',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-300',
  },
  {
    icon: Package,
    title: 'Contractor Business-in-a-Box',
    desc: 'Done-for-you business system for trades and service contractors ready to go digital.',
    income: '$2K–$10K/mo',
    tag: 'High Demand',
    tagStyle: 'bg-orange-500 text-white',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'hover:border-orange-300',
  },
  {
    icon: ShoppingBag,
    title: 'Digital Product Business',
    desc: 'Create and sell ebooks, templates, courses, and AI-powered tools once — earn repeatedly.',
    income: '$1.5K–$8K/mo',
    tag: 'Passive Income',
    tagStyle: 'bg-sky-500 text-white',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'hover:border-sky-300',
  },
  {
    icon: Share2,
    title: 'Affiliate & Content Business',
    desc: 'Build an audience around AI topics and earn through affiliate commissions and sponsorships.',
    income: '$1K–$6K/mo',
    tag: 'Low Risk Start',
    tagStyle: 'bg-violet-500 text-white',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'hover:border-violet-300',
  },
];

const testimonials = [
  {
    name: 'Marcus T.',
    role: 'Former Teacher',
    quote: 'I had zero business experience and launched my AI agency in 3 weeks. Made my first $1,200 in the first month.',
    stars: 5,
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'Priya S.',
    role: 'Freelance Designer',
    quote: "Simple Online Steps cut through the noise. The step-by-step format meant I never got stuck wondering what to do next.",
    stars: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'Jake R.',
    role: 'Stay-at-Home Dad',
    quote: 'I work 2 hours a day on my ebook business and brought in $3,400 last month. The system literally does the heavy lifting.',
    stars: 5,
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
];

const stats = [
  { value: '3,200+', label: 'Active Students' },
  { value: '$2,800', label: 'Avg. Monthly Income' },
  { value: '5', label: 'Business Paths' },
  { value: '42', label: 'Countries' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [subState, setSubState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subError, setSubError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subName.trim() || !subEmail.trim()) return;
    setSubState('loading');
    setSubError('');
    const { error } = await supabase
      .from('email_subscribers')
      .insert({ name: subName.trim(), email: subEmail.trim().toLowerCase(), source: 'homepage' });
    if (error) {
      if (error.code === '23505') {
        setSubState('success');
      } else {
        setSubError('Something went wrong. Please try again.');
        setSubState('error');
      }
    } else {
      setSubState('success');
    }
  };

  return (
    <div className="pt-16 overflow-x-hidden">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 65%)' }}
        />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Practical AI Business Systems — No Hype
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-950 leading-[1.06] tracking-tight mb-7">
            Build Your First AI-Powered<br className="hidden sm:block" />
            Online Business{' '}
            <span className="text-blue-600">Without<br className="hidden sm:block" /> the Confusion</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Simple Online Steps helps beginners cut through the noise, choose the right AI business path, and start building with practical step-by-step systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <button
              onClick={() => navigate('quiz')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-blue-600 text-white text-base font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              Take the Free Business Launch Quiz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => navigate('business-box')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white text-gray-700 text-base font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore Business-in-a-Box Systems
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 font-medium">
            {['Beginner-friendly', 'No hype', 'No coding required'].map((t, i) => (
              <span key={t} className="flex items-center gap-1.5">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />}
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                {t}
              </span>
            ))}
          </p>
        </div>

        {/* Hero image */}
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 pb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 ring-1 ring-gray-900/5">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Entrepreneurs collaborating"
              className="w-full h-64 sm:h-96 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Avg. monthly income</p>
                  <p className="text-base font-black text-gray-900">$2,800</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-white/50">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-900">4.9 / 5.0</p>
              <p className="text-xs text-gray-400">1,200+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-gray-100 bg-gray-50/80">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-black text-gray-950 tabular-nums">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MOST POPULAR STARTING POINT ════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Image */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/60">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Agency Launch Kit"
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-xs font-black rounded-full shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 animate-pulse" />
                    Most Popular Starting Point
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                    ))}
                    <span className="text-white text-xs font-semibold ml-1">4.9</span>
                  </div>
                  <p className="text-white/80 text-xs">Joined by 1,400+ students</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xs font-black tracking-widest text-blue-600 uppercase mb-3">Most Popular Starting Point</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight tracking-tight mb-4">
                AI Agency Launch Kit
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-lg">
                The fastest path from learning AI to landing your first client.
              </p>

              <ul className="space-y-2.5 mb-8 inline-flex flex-col items-start text-left">
                {[
                  '8 ready-to-use templates and scripts',
                  '30-day first client acquisition roadmap',
                  'Step-by-step — no experience needed',
                  '14-day money-back guarantee',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                <a
                  href="https://buy.stripe.com/bJe6oI8CUeKP4lWaozcZa00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-base"
                >
                  Get The Launch Kit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-sm text-gray-400 self-center">$97 · One-time · Instant access</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 2. PROBLEM ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-widest text-rose-600 uppercase mb-4">The Problem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-tight tracking-tight max-w-2xl mx-auto mb-5">
              Too Much AI Advice.<br className="hidden sm:block" /> Not Enough Clear Direction.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Every day, new AI tools, side hustles, and business models are promoted online. The problem is not lack of information. <span className="font-semibold text-gray-700">The problem is knowing what to do next.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`rounded-2xl border ${p.border} p-7 bg-white shadow-sm hover:shadow-md transition-shadow duration-200`}>
                  <div className={`w-11 h-11 rounded-xl ${p.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 3. SOLUTION — HOW IT WORKS ═══════════════════════════════════ */}
      <section className="bg-gray-950 py-24 sm:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)' }} />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-widest text-blue-400 uppercase mb-4">The Solution</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Simple Steps From<br className="hidden sm:block" /> Confused To Launched
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
              Four clear steps that take you from overwhelmed to operating a real online business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className="relative p-7 rounded-2xl bg-gray-900 border border-gray-800 group hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300"
                >
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-gray-700 z-10" />
                  )}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-gray-700 group-hover:text-gray-600 leading-none transition-colors">
                      {step.n}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                  </div>
                  <h3 className="text-base font-black text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('quiz')}
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/25 hover:-translate-y-0.5 text-base"
            >
              Take the Free Business Launch Quiz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-sm text-gray-600 mt-3">Free · Takes under 2 minutes</p>
          </div>
        </div>
      </section>

      {/* ══ 4. WHO THIS IS FOR ════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-widest text-blue-600 uppercase mb-4">Audience</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-tight tracking-tight">
              Who This Is For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-11 h-11 rounded-xl ${a.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-5 h-5 ${a.color}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 mb-1.5 leading-snug">{a.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Quiz CTA card */}
            <div
              onClick={() => navigate('quiz')}
              className="group cursor-pointer flex items-center justify-between gap-4 p-6 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
            >
              <div>
                <p className="font-black text-blue-700 mb-1 leading-snug">Not sure which one you are?</p>
                <p className="text-sm text-blue-600/80">Take the free quiz to find your best path.</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. BUSINESS PATHS ════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-100 py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-widest text-blue-600 uppercase mb-4">Business Models</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-tight tracking-tight mb-5">
              Choose A Business Path<br className="hidden sm:block" /> That Fits You
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
              Five proven AI business models. Each one comes with a step-by-step system, templates, and roadmap.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {businessPaths.map((path) => {
              const Icon = path.icon;
              return (
                <div
                  key={path.title}
                  onClick={() => navigate('business-box')}
                  className={`group cursor-pointer bg-white rounded-2xl border border-gray-200 ${path.border} p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${path.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`w-5 h-5 ${path.color}`} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${path.tagStyle}`}>{path.tag}</span>
                  </div>
                  <h3 className="font-black text-gray-900 mb-1.5 leading-snug">{path.title}</h3>
                  <p className="text-xs text-emerald-600 font-bold mb-2">{path.income}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{path.desc}</p>
                  <span className={`inline-flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity ${path.color}`}>
                    Explore this path <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('business-box')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              View All Business Systems
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ══ 6. FEATURED OFFER ════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden bg-gray-950 rounded-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_0%_50%,_#1d4ed82a,_transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_100%_50%,_#05966920,_transparent)] pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center gap-8 px-8 py-12 sm:px-12 sm:py-14">
              {/* Left */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Featured Offer — $97
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                  Start With The<br className="hidden sm:block" /> AI Agency Launch Kit
                </h2>
                <p className="text-gray-400 leading-relaxed max-w-lg mb-6">
                  A beginner-friendly toolkit designed to help you move from watching AI videos to building your first client-ready offer. Includes templates, scripts, frameworks, and a 30-day roadmap.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2">
                  {['8 ready-to-use resources', 'Step-by-step roadmap', '14-day money-back guarantee'].map((item) => (
                    <span key={item} className="flex items-center gap-1.5 text-sm text-gray-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => navigate('ai-agency-launch-kit')}
                  className="group inline-flex items-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  View The Launch Kit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <p className="text-xs text-gray-600">One-time payment · Instant access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-black tracking-widest text-blue-600 uppercase mb-4">Results</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight tracking-tight">
              Real Results From Real People
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-2xl p-8 border transition-all ${
                  i === 1
                    ? 'bg-blue-600 border-blue-600 shadow-2xl shadow-blue-600/20 md:-translate-y-3'
                    : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <div className="flex mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${i === 1 ? 'text-yellow-300' : 'text-yellow-400'}`} fill="currentColor" />
                  ))}
                </div>
                <p className={`text-base leading-relaxed mb-7 ${i === 1 ? 'text-blue-50' : 'text-gray-700'}`}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20" />
                  <div>
                    <p className={`font-bold text-sm ${i === 1 ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                    <p className={`text-xs ${i === 1 ? 'text-blue-200' : 'text-gray-400'}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EMAIL SIGNUP ════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <Mail className="w-3.5 h-3.5" />
            Free Weekly Tips
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
            Get Weekly AI Business Tips
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto mb-8">
            Practical tips, tool breakdowns, and client acquisition strategies — delivered every week. No fluff.
          </p>

          {subState === 'success' ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
                <CheckCircle className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-white font-black text-lg">You're in!</p>
              <p className="text-gray-400 text-sm">Check your inbox — your first tips are on the way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="First name"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
                required
                className="flex-1 min-w-0 px-4 py-3.5 bg-gray-900 border border-gray-700 hover:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-white placeholder-gray-500 text-sm outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                required
                className="flex-[2] min-w-0 px-4 py-3.5 bg-gray-900 border border-gray-700 hover:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-white placeholder-gray-500 text-sm outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={subState === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold rounded-xl transition-all duration-200 text-sm whitespace-nowrap shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 disabled:translate-y-0"
              >
                {subState === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>Subscribe</>
                )}
              </button>
            </form>
          )}

          {subState === 'error' && (
            <p className="text-red-400 text-xs mt-3">{subError}</p>
          )}

          <p className="text-xs text-gray-600 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ══ 7. FINAL CTA ═════════════════════════════════════════════════ */}
      <section className="bg-white py-28 sm:py-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/30 mb-10">
            <Zap className="w-7 h-7 text-white" fill="currentColor" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 leading-[1.06] tracking-tight mb-5">
            Not Sure<br />
            <span className="text-blue-600">Where To Start?</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
            Take the free quiz and get a recommended business path based on your goals, budget, time, and interests. No email required.
          </p>

          <button
            onClick={() => navigate('quiz')}
            className="group inline-flex items-center gap-3 px-8 py-5 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
          >
            Take the Free Business Launch Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <p className="mt-5 text-sm text-gray-400 font-medium">
            Takes under 2 minutes &nbsp;·&nbsp; Completely free &nbsp;·&nbsp; No credit card
          </p>
        </div>
      </section>

    </div>
  );
}
