import { useState, useEffect, useRef } from 'react';
import { GA } from '../lib/analytics';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Brain,
  DollarSign,
  Clock,
  Briefcase,
  Globe,
  FileText,
  MapPin,
  Sparkles,
  User,
  Mail,
  Megaphone,
  Rocket,
  Phone,
  Zap,
  BookOpen,
  TrendingUp,
  LayoutGrid,
  ChevronRight,
  Star,
  RefreshCw,
} from 'lucide-react';

interface StartPageProps {
  onNavigate: (page: string) => void;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: 'goal',
    question: 'What is your primary goal?',
    options: [
      { label: 'Learn AI',              value: 'learn-ai',        icon: Brain,      desc: 'Master AI tools and cutting-edge skills' },
      { label: 'Create Side Income',    value: 'side-income',     icon: DollarSign, desc: 'Earn extra money alongside your current job' },
      { label: 'Start a Full Business', value: 'full-business',   icon: Rocket,     desc: 'Build a complete, scalable online business' },
      { label: 'Change Careers',        value: 'career-change',   icon: TrendingUp, desc: 'Transition into a new field or industry' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your startup budget?',
    options: [
      { label: 'Under $100',     value: 'under-100',  icon: DollarSign, desc: 'Starting very lean' },
      { label: '$100 – $500',    value: '100-500',    icon: DollarSign, desc: 'A small investment to get started' },
      { label: '$500 – $2,000',  value: '500-2000',   icon: DollarSign, desc: 'Serious about launching right' },
      { label: '$2,000+',        value: '2000-plus',  icon: DollarSign, desc: 'Ready to invest and move fast' },
    ],
  },
  {
    id: 'time',
    question: 'How much time can you commit each week?',
    options: [
      { label: 'Under 5 Hours',  value: 'under-5',   icon: Clock, desc: 'Evenings and weekends only' },
      { label: '5 – 10 Hours',   value: '5-10',      icon: Clock, desc: 'Consistent part-time effort' },
      { label: '10 – 20 Hours',  value: '10-20',     icon: Clock, desc: 'A strong part-time push' },
      { label: 'Full Time',      value: 'full-time', icon: Clock, desc: '20+ hours — going all in' },
    ],
  },
  {
    id: 'interest',
    question: 'What type of work interests you most?',
    options: [
      { label: 'Helping Businesses',          value: 'helping-biz',    icon: Briefcase, desc: 'Consulting, AI services, and automation' },
      { label: 'Building Websites',           value: 'building-sites', icon: Globe,     desc: 'Web design, development, digital presence' },
      { label: 'Creating Content',            value: 'content',        icon: Megaphone, desc: 'Writing, video, blogging, social media' },
      { label: 'Selling Digital Products',    value: 'digital-prod',   icon: FileText,  desc: 'Ebooks, courses, templates, downloads' },
      { label: 'Planning Travel Experiences', value: 'travel',         icon: MapPin,    desc: 'Itineraries, travel guides, concierge' },
    ],
  },
  {
    id: 'income',
    question: 'What is your income goal?',
    options: [
      { label: '$500 / month',    value: '500',        icon: DollarSign, desc: 'A meaningful boost to my budget' },
      { label: '$1,000 / month',  value: '1000',       icon: DollarSign, desc: 'Cover a major recurring expense' },
      { label: '$5,000 / month',  value: '5000',       icon: DollarSign, desc: 'Replace or match my current income' },
      { label: '$10,000+ / month',value: '10000-plus', icon: DollarSign, desc: 'Build serious, life-changing income' },
    ],
  },
];

type PathKey = 'ai-agency' | 'contractor' | 'ebook' | 'travel' | 'affiliate';

const PATHS: Record<PathKey, {
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  accentBg: string;
  textColor: string;
  income: string;
  timeline: string;
  level: string;
  highlights: string[];
}> = {
  'ai-agency': {
    title: 'AI Agency Path',
    tagline: 'High demand. Recurring revenue. No degree required.',
    description: 'Learn AI, offer services to local businesses, and build recurring monthly income. You become the bridge between AI tools and the businesses that desperately need them.',
    icon: Brain,
    accent: '#2563EB',
    accentBg: '#EFF6FF',
    textColor: 'text-blue-600',
    income: '$3,000 – $12,000/mo',
    timeline: '3–6 weeks to first client',
    level: 'Intermediate',
    highlights: [
      'No prior technical background needed',
      'Recurring monthly retainer model',
      'AI tools handle most of the heavy lifting',
      'Fastest path to high recurring income',
    ],
  },
  'contractor': {
    title: 'Contractor Website Business',
    tagline: 'Serve an underserved local market that pays monthly.',
    description: 'Build and sell websites and lead generation systems for contractors and local businesses. Plumbers, roofers, and landscapers need digital help — and they pay monthly retainers.',
    icon: Globe,
    accent: '#059669',
    accentBg: '#ECFDF5',
    textColor: 'text-emerald-600',
    income: '$2,000 – $10,000/mo',
    timeline: '2–4 weeks to first client',
    level: 'Beginner–Intermediate',
    highlights: [
      'Massive underserved local market',
      'Recurring monthly retainer income',
      'Done-for-you templates make delivery fast',
      'Simple, repeatable sales process',
    ],
  },
  'ebook': {
    title: 'Ebook Business Path',
    tagline: 'Create once. Sell forever. Zero inventory.',
    description: 'Create and publish books, guides, templates, and digital products using AI. Zero shipping, zero inventory — your product earns revenue around the clock while you sleep.',
    icon: BookOpen,
    accent: '#D97706',
    accentBg: '#FFFBEB',
    textColor: 'text-amber-600',
    income: '$1,500 – $8,000/mo',
    timeline: '2–3 weeks to first sale',
    level: 'Beginner Friendly',
    highlights: [
      'Zero inventory or shipping costs',
      'Earn passively once published',
      'AI cuts writing time dramatically',
      'Launch for under $50',
    ],
  },
  'travel': {
    title: 'Travel Planner Business Path',
    tagline: 'Monetize a passion for travel into real income.',
    description: 'Launch an AI-assisted travel planning service. Turn destination knowledge and planning skills into a profitable service, digital product brand, or content channel with multiple income streams.',
    icon: MapPin,
    accent: '#0284C7',
    accentBg: '#F0F9FF',
    textColor: 'text-sky-600',
    income: '$1,000 – $6,000/mo',
    timeline: '4–6 weeks to first income',
    level: 'Beginner Friendly',
    highlights: [
      'Lifestyle-first business model',
      'Multiple income streams available',
      'Pairs naturally with social content',
      'Low startup cost',
    ],
  },
  'affiliate': {
    title: 'Affiliate & Content Business Path',
    tagline: 'Build once. Earn forever. No client work required.',
    description: 'Build an audience and monetize through affiliate marketing and digital content. Create a niche blog, YouTube channel, or social brand that earns commissions and ad revenue — compounding over time.',
    icon: Megaphone,
    accent: '#DC2626',
    accentBg: '#FEF2F2',
    textColor: 'text-red-600',
    income: '$500 – $8,000/mo',
    timeline: '6–10 weeks to first commission',
    level: 'Beginner Friendly',
    highlights: [
      'Fully passive once content ranks',
      'AI accelerates content creation 10x',
      'No client work — ever',
      'Scales without additional hours',
    ],
  },
};

// ─── Scoring ──────────────────────────────────────────────────────────────────

type Answers = Record<string, string>;

function score(a: Answers): PathKey {
  const s: Record<PathKey, number> = {
    'ai-agency': 0, contractor: 0, ebook: 0, travel: 0, affiliate: 0,
  };

  // goal
  if (a.goal === 'learn-ai')       { s['ai-agency'] += 3; s.contractor += 1; }
  if (a.goal === 'side-income')    { s.ebook += 2; s.affiliate += 2; s.travel += 1; }
  if (a.goal === 'full-business')  { s['ai-agency'] += 2; s.contractor += 2; }
  if (a.goal === 'career-change')  { s.contractor += 2; s['ai-agency'] += 1; s.ebook += 1; }

  // budget
  if (a.budget === 'under-100')  { s.ebook += 3; s.affiliate += 3; }
  if (a.budget === '100-500')    { s.affiliate += 2; s.travel += 1; s.ebook += 1; }
  if (a.budget === '500-2000')   { s.contractor += 3; s['ai-agency'] += 1; }
  if (a.budget === '2000-plus')  { s['ai-agency'] += 3; s.contractor += 1; }

  // time
  if (a.time === 'under-5')   { s.ebook += 2; s.affiliate += 2; }
  if (a.time === '5-10')      { s.affiliate += 2; s.travel += 2; s.ebook += 1; }
  if (a.time === '10-20')     { s.contractor += 2; s['ai-agency'] += 1; }
  if (a.time === 'full-time') { s['ai-agency'] += 3; s.contractor += 2; }

  // interest
  if (a.interest === 'helping-biz')    { s['ai-agency'] += 4; }
  if (a.interest === 'building-sites') { s.contractor += 4; s['ai-agency'] += 1; }
  if (a.interest === 'content')        { s.affiliate += 3; s.travel += 2; }
  if (a.interest === 'digital-prod')   { s.ebook += 4; s.affiliate += 1; }
  if (a.interest === 'travel')         { s.travel += 4; s.affiliate += 1; }

  // income
  if (a.income === '500')        { s.affiliate += 2; s.ebook += 2; s.travel += 1; }
  if (a.income === '1000')       { s.travel += 2; s.ebook += 1; s.affiliate += 1; }
  if (a.income === '5000')       { s.contractor += 2; s['ai-agency'] += 1; }
  if (a.income === '10000-plus') { s['ai-agency'] += 3; s.contractor += 1; }

  const keys = Object.keys(s) as PathKey[];
  return keys.reduce((best, k) => s[k] > s[best] ? k : best, keys[0]);
}

// ─── Animation hook ───────────────────────────────────────────────────────────

function useSlide(dep: unknown) {
  const [visible, setVisible] = useState(false);
  const prev = useRef(dep);
  useEffect(() => {
    if (prev.current !== dep) {
      setVisible(false);
      const t = setTimeout(() => { setVisible(true); prev.current = dep; }, 50);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, [dep]);
  return visible;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function OptionCard({
  label, desc, icon: Icon, selected, onClick,
}: {
  label: string; desc: string; icon: React.ElementType;
  selected: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-150 ${
        selected
          ? 'border-blue-500 bg-blue-50 shadow-sm shadow-blue-100'
          : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50/40'
      }`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
        selected ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-100'
      }`}>
        <Icon className={`w-5 h-5 transition-colors ${selected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-bold text-sm leading-snug transition-colors ${selected ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-700'}`}>
          {label}
        </p>
        <p className="text-xs text-gray-400 mt-0.5 truncate">{desc}</p>
      </div>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        selected ? 'border-blue-500 bg-blue-500' : 'border-gray-300 group-hover:border-blue-400'
      }`}>
        {selected && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type Screen = 'hero' | 'quiz' | 'lead' | 'result';

export default function StartPage({ onNavigate }: StartPageProps) {
  const [screen, setScreen]         = useState<Screen>('hero');
  const [step, setStep]             = useState(0);
  const [answers, setAnswers]       = useState<Answers>({});
  const [selected, setSelected]     = useState<string | null>(null);
  const [firstName, setFirstName]   = useState('');
  const [email, setEmail]           = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  const [emailErr, setEmailErr]     = useState('');
  const [result, setResult]         = useState<PathKey | null>(null);

  const slideKey = `${screen}-${step}`;
  const visible  = useSlide(slideKey);

  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startQuiz = () => {
    setScreen('quiz');
    setStep(0);
    setSelected(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!selected) return;
    const q = QUESTIONS[step];
    const updated = { ...answers, [q.id]: selected };
    setAnswers(updated);
    setSelected(null);

    if (step < QUESTIONS.length - 1) {
      setStep((s) => s + 1);
    } else {
      setScreen('lead');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (step === 0) { setScreen('hero'); return; }
    const prevAnswers = { ...answers };
    const prevQ = QUESTIONS[step - 1];
    setSelected(prevAnswers[prevQ.id] ?? null);
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let ok = true;
    if (!firstName.trim()) { setFirstNameErr('First name is required'); ok = false; } else setFirstNameErr('');
    if (!email.trim()) {
      setEmailErr('Email is required'); ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Please enter a valid email address'); ok = false;
    } else {
      setEmailErr('');
    }
    if (!ok) return;
    setResult(score(answers));
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setScreen('hero');
    setStep(0);
    setAnswers({});
    setSelected(null);
    setFirstName('');
    setEmail('');
    setFirstNameErr('');
    setEmailErr('');
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = screen === 'hero'
    ? 0
    : screen === 'quiz'
    ? Math.round(((step + 1) / (QUESTIONS.length + 2)) * 100)
    : screen === 'lead'
    ? Math.round(((QUESTIONS.length + 1) / (QUESTIONS.length + 2)) * 100)
    : 100;

  const slideClass = `transition-all duration-500 ease-out ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  }`;

  return (
    <div className="pt-16 min-h-screen bg-gray-50">

      {/* ── PROGRESS BAR ─────────────────────────────────────────────────── */}
      {screen !== 'hero' && (
        <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* HERO                                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {screen === 'hero' && (
        <div className={slideClass}>
          {/* Hero banner */}
          <section className="relative bg-white border-b border-gray-100 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
                backgroundSize: '28px 28px',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 800px 500px at 50% -80px, rgba(37,99,235,0.10) 0%, transparent 70%)',
              }}
            />
            <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-16 pb-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Business Launch Quiz — Free
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 leading-[1.05] tracking-tight mb-6">
                Find The Best Online<br />
                <span className="text-blue-600">Business For You</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
                Answer a few questions and receive a personalized roadmap to help you
                learn AI, start a business, and create income online.
              </p>
              <button
                onClick={startQuiz}
                className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 hover:-translate-y-0.5"
              >
                Start Quiz
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-400 mt-4">Takes less than 2 minutes &nbsp;·&nbsp; 100% free</p>
            </div>
          </section>

          {/* Trust + proof */}
          <section className="py-14">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {[
                  { value: '3,200+', label: 'Students Matched' },
                  { value: '5',      label: 'Business Paths' },
                  { value: '42',     label: 'Countries' },
                  { value: '$2,800', label: 'Avg Monthly Income' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                    <p className="text-2xl font-black text-blue-600 mb-1">{s.value}</p>
                    <p className="text-xs text-gray-500 font-semibold">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Path preview cards */}
              <h2 className="text-xl font-black text-gray-950 text-center mb-6">
                Which path will be yours?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {(Object.entries(PATHS) as [PathKey, typeof PATHS[PathKey]][]).map(([key, p]) => {
                  const Icon = p.icon;
                  return (
                    <div key={key} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: p.accentBg }}>
                        <Icon className={`w-5 h-5 ${p.textColor}`} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm leading-snug">{p.title}</p>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{p.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl border border-gray-100 p-7 text-center max-w-xl mx-auto">
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed mb-4">
                  "I had zero experience and launched my AI agency in 3 weeks. This quiz pointed me
                  in exactly the right direction."
                </p>
                <p className="text-xs font-bold text-gray-500">
                  Marcus T. &nbsp;·&nbsp; Former Teacher &nbsp;·&nbsp; Now earning $4,200/mo
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-10">
                <button
                  onClick={startQuiz}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5"
                >
                  Start My Free Quiz
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* QUIZ                                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {screen === 'quiz' && (
        <div className={`max-w-lg mx-auto px-5 sm:px-6 py-10 ${slideClass}`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <span className="text-xs font-bold text-gray-400 tabular-nums">
              {step + 1} of {QUESTIONS.length}
            </span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Step dots */}
            <div className="flex gap-1.5 px-7 pt-7">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    i < step ? 'bg-blue-600' : i === step ? 'bg-blue-400' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <div className="px-7 pt-6 pb-7">
              <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-2">
                Question {step + 1}
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-gray-950 leading-snug mb-6">
                {QUESTIONS[step].question}
              </h2>

              <div className="space-y-2.5">
                {QUESTIONS[step].options.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    label={opt.label}
                    desc={opt.desc}
                    icon={opt.icon}
                    selected={selected === opt.value}
                    onClick={() => setSelected(opt.value)}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={!selected}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-black rounded-xl transition-all duration-200 disabled:cursor-not-allowed shadow-md shadow-blue-600/20 disabled:shadow-none hover:-translate-y-0.5 disabled:translate-y-0"
              >
                {step < QUESTIONS.length - 1 ? (
                  <>Next Question <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>See My Results <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* LEAD CAPTURE                                                        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {screen === 'lead' && (
        <div className={`max-w-lg mx-auto px-5 sm:px-6 py-10 ${slideClass}`}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Banner */}
            <div className="relative bg-blue-600 px-7 py-9 text-center overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% -30%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}
              />
              <div className="relative">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-white/20 items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" fill="currentColor" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                  Get Your Personalized<br />Business Roadmap
                </h2>
                <p className="text-blue-100 text-sm">
                  Enter your information to see your recommended business path.
                </p>
              </div>
            </div>

            <div className="px-7 py-7">
              <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                        firstNameErr
                          ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-500/15'
                          : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                      }`}
                    />
                  </div>
                  {firstNameErr && (
                    <p className="text-xs text-red-500 mt-1.5 font-semibold">{firstNameErr}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                        emailErr
                          ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-500/15'
                          : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                      }`}
                    />
                  </div>
                  {emailErr && (
                    <p className="text-xs text-red-500 mt-1.5 font-semibold">{emailErr}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-base rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 mt-2"
                >
                  Show My Results
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-gray-400">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>

              <button
                onClick={() => setScreen('quiz')}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mt-4 mx-auto"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Go back to quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* RESULT                                                              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {screen === 'result' && result && (() => {
        const path = PATHS[result];
        const PathIcon = path.icon;
        return (
          <div className={`max-w-2xl mx-auto px-5 sm:px-6 py-10 space-y-5 ${slideClass}`}>

            {/* ── Recommended path card ── */}
            <div className="bg-white rounded-2xl overflow-hidden border-2" style={{ borderColor: path.accent }}>
              {/* Top banner */}
              <div
                className="relative px-7 py-10 text-center overflow-hidden"
                style={{ background: `linear-gradient(160deg, ${path.accentBg} 0%, white 65%)` }}
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${path.accent}15 0%, transparent 65%)`,
                    transform: 'translate(30%, -30%)',
                  }}
                />
                <div className="relative">
                  <div
                    className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-5"
                    style={{ background: path.accentBg, boxShadow: `0 8px 24px ${path.accent}22` }}
                  >
                    <PathIcon className={`w-8 h-8 ${path.textColor}`} />
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3"
                    style={{ background: `${path.accent}18`, color: path.accent }}
                  >
                    <CheckCircle className="w-3 h-3" />
                    Your Recommended Path
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-2">
                    {path.title}
                  </h2>
                  <p className={`text-sm font-bold ${path.textColor} mb-4`}>{path.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                    {path.description}
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-3 text-center divide-x divide-gray-200"
                style={{ background: path.accentBg }}
              >
                {[
                  { label: 'Income Potential', value: path.income },
                  { label: 'Time to Launch',   value: path.timeline },
                  { label: 'Difficulty',       value: path.level },
                ].map((s) => (
                  <div key={s.label} className="py-4 px-3">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
                    <p className={`text-xs font-black ${path.textColor} leading-snug`}>{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Highlights + CTAs */}
              <div className="p-7 sm:p-8">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                  Why this path fits you
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                  {path.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Ready for next step */}
                <div className="border-t border-gray-100 pt-7">
                  <h3 className="text-xl font-black text-gray-950 text-center mb-5">
                    Ready For Your Next Step?
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { GA.bookStrategySession(); nav('book-call'); }}
                      className="w-full flex items-center justify-center gap-2.5 py-4 text-white font-black text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${path.accent} 0%, ${path.accent}cc 100%)`,
                        boxShadow: `0 8px 28px ${path.accent}30`,
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      Book A Free Strategy Call
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => nav('business-box')}
                      className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-50 transition-all"
                    >
                      <LayoutGrid className="w-4 h-4 text-blue-500" />
                      Explore Business-In-A-Box Systems
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── All paths overview ── */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                <h3 className="font-black text-gray-950 text-lg">All 5 Business Paths</h3>
                <p className="text-sm text-gray-500 mt-0.5">Explore every option available to you.</p>
              </div>
              <div className="divide-y divide-gray-100">
                {(Object.entries(PATHS) as [PathKey, typeof PATHS[PathKey]][]).map(([key, p]) => {
                  const Icon = p.icon;
                  const isMatch = key === result;
                  return (
                    <div key={key} className={`flex items-start gap-4 px-6 py-4 ${isMatch ? 'bg-blue-50/50' : ''}`}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: p.accentBg }}
                      >
                        <Icon className={`w-5 h-5 ${p.textColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-gray-900 text-sm">{p.title}</p>
                          {isMatch && (
                            <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] font-black rounded-full uppercase tracking-wide">
                              Your Match
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{p.description}</p>
                        <p className={`text-xs font-bold ${p.textColor} mt-1.5`}>{p.income}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Bottom CTA banner ── */}
            <div className="bg-gray-950 rounded-2xl p-8 sm:p-10 text-center">
              <div className="inline-flex w-14 h-14 rounded-xl bg-blue-600 items-center justify-center mb-5 shadow-xl shadow-blue-600/30">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Ready For Your Next Step?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto mb-7">
                Spend 30 minutes with our team. We will map out your exact first steps,
                the right tools, and a realistic timeline to launch your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => { GA.bookStrategySession(); nav('book-call'); }}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Book A Free Strategy Call
                </button>
                <button
                  onClick={() => nav('business-box')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <LayoutGrid className="w-4 h-4" />
                  Explore Business-In-A-Box Systems
                </button>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors mt-6"
              >
                <RefreshCw className="w-3 h-3" />
                Retake the quiz
              </button>
            </div>

          </div>
        );
      })()}

    </div>
  );
}
