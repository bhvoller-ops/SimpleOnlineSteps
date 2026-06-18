import {
  ArrowRight,
  Brain,
  DollarSign,
  Rocket,
  Zap,
  CheckCircle,
  Star,
  Play,
  TrendingUp,
  Users,
  BarChart3,
  MoveRight,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const paths = [
  {
    icon: Brain,
    title: 'Learn AI',
    desc: 'Master the tools reshaping how people work and earn online.',
    accent: '#2563EB',
    light: '#EFF6FF',
  },
  {
    icon: DollarSign,
    title: 'Start a Side Hustle',
    desc: 'Launch a profitable side hustle that fits your life.',
    accent: '#059669',
    light: '#ECFDF5',
  },
  {
    icon: Rocket,
    title: 'Launch a Business',
    desc: 'Go from idea to real business with a proven system.',
    accent: '#EA580C',
    light: '#FFF7ED',
  },
  {
    icon: Zap,
    title: 'Scale With Automation',
    desc: 'Automate everything and grow without burning out.',
    accent: '#7C3AED',
    light: '#F5F3FF',
  },
];

const boxes = [
  {
    title: 'AI Agency Launch Box',
    tag: 'Most Popular',
    tagStyle: 'bg-blue-600 text-white',
    income: '$3K–$12K/mo',
    img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: ['Client scripts', 'Service menu', 'Pricing guide', 'Outreach templates'],
    border: 'hover:border-blue-300',
  },
  {
    title: 'Contractor Growth Box',
    tag: 'High Demand',
    tagStyle: 'bg-emerald-600 text-white',
    income: '$2K–$10K/mo',
    img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: ['Proposal templates', 'Lead generation', 'Pricing strategy', 'Contract toolkit'],
    border: 'hover:border-emerald-300',
  },
  {
    title: 'Ebook Business Box',
    tag: 'Beginner Friendly',
    tagStyle: 'bg-orange-500 text-white',
    income: '$1.5K–$8K/mo',
    img: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: ['Topic research', 'AI writing system', 'Sales page', 'Marketing plan'],
    border: 'hover:border-orange-300',
  },
  {
    title: 'Travel Planner Box',
    tag: 'Trending',
    tagStyle: 'bg-sky-500 text-white',
    income: '$1K–$6K/mo',
    img: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: ['Niche selection', 'Content strategy', 'Monetization', 'Brand kit'],
    border: 'hover:border-sky-300',
  },
];

const steps = [
  {
    n: '01',
    title: 'Choose a Path',
    desc: 'Take our quiz to find the model that fits your skills, schedule, and goals.',
    icon: Users,
  },
  {
    n: '02',
    title: 'Follow the Steps',
    desc: 'Your Business-in-a-Box is laid out clearly — nothing skipped, nothing assumed.',
    icon: BarChart3,
  },
  {
    n: '03',
    title: 'Launch',
    desc: 'Go live with confidence. Your offer is built and your system is ready.',
    icon: Rocket,
  },
  {
    n: '04',
    title: 'Grow',
    desc: 'Apply automation and scale revenue without scaling your hours.',
    icon: TrendingUp,
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
  { value: '6', label: 'Business Systems' },
  { value: '42', label: 'Countries' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-white">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-28 pb-32 text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Step-by-step systems for real results
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-950 leading-[1.05] tracking-tight mb-7">
            Build an Online Business<br />
            <span className="text-blue-600">Without the Confusion</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Learn AI, launch online businesses, and create income using simple
            step-by-step systems — even if you're starting from scratch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <button
              onClick={() => navigate('quiz')}
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-blue-600 text-white text-base font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              Take the Free Business Launch Quiz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => navigate('business-box')}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white text-gray-800 text-base font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 text-blue-600" />
              Explore Business-in-a-Box Systems
            </button>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400 font-medium">
            {['No experience needed', 'Free to start', '3,200+ students launched', '42 countries'].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />}
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero image strip */}
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 -mt-4 pb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 ring-1 ring-gray-900/5">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Entrepreneurs working"
              className="w-full h-72 sm:h-96 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
            {/* Floating stat */}
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3.5 shadow-xl border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Average monthly income</p>
                  <p className="text-lg font-black text-gray-900">$2,800</p>
                </div>
              </div>
            </div>
            {/* Floating rating */}
            <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3.5 shadow-xl border border-white/50">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-900">4.9 / 5.0</p>
              <p className="text-xs text-gray-400">from 1,200+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50/70">
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

      {/* ── CHOOSE YOUR PATH ───────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section label */}
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Paths</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-950 leading-tight tracking-tight max-w-lg">
                Choose Your Path
              </h2>
              <p className="text-lg text-gray-500 max-w-sm leading-relaxed">
                Whatever stage you're at, there's a clear path built for you.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paths.map((path) => {
              const Icon = path.icon;
              return (
                <button
                  key={path.title}
                  onClick={() => navigate('start-here')}
                  className="group text-left p-7 rounded-2xl border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: path.light }}
                  >
                    <Icon className="w-6 h-6" style={{ color: path.accent }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{path.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{path.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" style={{ color: path.accent }}>
                    Get started <MoveRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUSINESS-IN-A-BOX ──────────────────────────────────────────── */}
      <section className="bg-gray-950 py-28 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3">Systems</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight max-w-xl">
                Popular Business-in-a-Box Systems
              </h2>
              <button
                onClick={() => navigate('business-box')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors group flex-shrink-0"
              >
                View all systems
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {boxes.map((box) => (
              <div
                key={box.title}
                onClick={() => navigate('business-box')}
                className={`group cursor-pointer bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 ${box.border}`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={box.img}
                    alt={box.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${box.tagStyle}`}>
                    {box.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-white mb-1.5 leading-snug">{box.title}</h3>
                  <p className="text-xs text-emerald-400 font-semibold mb-4">{box.income}</p>
                  <ul className="space-y-1.5">
                    {box.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-5 w-full py-2.5 rounded-lg border border-gray-700 text-gray-300 text-xs font-semibold hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-200">
                    View System
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Process</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-950 leading-tight tracking-tight max-w-md">
                How It Works
              </h2>
              <p className="text-lg text-gray-500 max-w-sm leading-relaxed">
                Four steps from zero to launched. No experience needed.
              </p>
            </div>
          </div>

          {/* Steps row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.n} className="relative p-7 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-default">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-gray-200 group-hover:text-blue-500/30 leading-none transition-colors">
                      {step.n}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-blue-500/20 border border-gray-200 group-hover:border-blue-500/30 flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors">
                    {step.desc}
                  </p>
                  {/* connector dot */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-gray-200 z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="mb-16 text-center">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Social Proof</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-950 leading-tight tracking-tight">
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
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${i === 1 ? 'text-yellow-300' : 'text-yellow-400'}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className={`text-base leading-relaxed mb-7 ${i === 1 ? 'text-blue-50' : 'text-gray-700'}`}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20"
                  />
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

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          {/* Decorative ring */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/30 mb-10">
            <Zap className="w-8 h-8 text-white" fill="currentColor" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-950 leading-[1.05] tracking-tight mb-6">
            Take the Business<br />
            <span className="text-blue-600">Launch Quiz</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
            Answer 5 quick questions and we'll send you a custom business model, system, and
            30-day action plan — free.
          </p>

          <button
            onClick={() => navigate('quiz')}
            className="group inline-flex items-center gap-3 px-8 py-4.5 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
            style={{ paddingTop: '1.125rem', paddingBottom: '1.125rem' }}
          >
            Take the Free Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <p className="mt-5 text-sm text-gray-400 font-medium">
            Takes under 2 minutes &nbsp;·&nbsp; No email required &nbsp;·&nbsp; No credit card
          </p>
        </div>
      </section>

    </div>
  );
}
