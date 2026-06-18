import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Brain,
  DollarSign,
  Rocket,
  Zap,
  Globe,
  FileText,
  MapPin,
  TrendingUp,
  Clock,
  Target,
  Sparkles,
  User,
  Mail,
  Phone,
  Star,
  BarChart3,
  ChevronRight,
  BookOpen,
  Megaphone,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface StartPageProps {
  onNavigate: (page: string) => void;
}

// ─── Questions ──────────────────────────────────────────────────────────────

const questions = [
  {
    id: 'goal',
    step: '01',
    label: 'Goal',
    question: 'What is your main goal?',
    subtitle: 'Pick the one that best describes where you want to be.',
    options: [
      { label: 'Replace My Full-Time Income', value: 'replace', icon: Rocket, desc: 'Quit my job and go all-in online' },
      { label: 'Earn Extra Side Income', value: 'side-income', icon: DollarSign, desc: 'Keep my job and earn on the side' },
      { label: 'Build a Scalable Business', value: 'scale', icon: TrendingUp, desc: 'Build a system that grows with me' },
      { label: 'Learn AI & New Skills', value: 'learn-ai', icon: Brain, desc: 'Master modern tools and new opportunities' },
    ],
  },
  {
    id: 'budget',
    step: '02',
    label: 'Budget',
    question: 'What is your starting budget?',
    subtitle: 'Every path has options — be honest for the best match.',
    options: [
      { label: 'Under $100', value: 'under-100', icon: DollarSign, desc: 'Starting very lean' },
      { label: '$100 – $500', value: '100-500', icon: DollarSign, desc: 'Some room to invest' },
      { label: '$500 – $2,000', value: '500-2000', icon: DollarSign, desc: 'Serious about launching' },
      { label: '$2,000+', value: '2000-plus', icon: DollarSign, desc: 'Ready to move fast' },
    ],
  },
  {
    id: 'time',
    step: '03',
    label: 'Time',
    question: 'How many hours per week can you commit?',
    subtitle: 'We will match you to models that fit your schedule.',
    options: [
      { label: 'Under 5 Hours / Week', value: 'under-5', icon: Clock, desc: 'Very limited — nights and weekends' },
      { label: '5 – 10 Hours / Week', value: '5-10', icon: Clock, desc: 'Part-time commitment' },
      { label: '10 – 20 Hours / Week', value: '10-20', icon: Clock, desc: 'Strong part-time push' },
      { label: 'Full Time (20+ Hours)', value: 'full-time', icon: Clock, desc: 'All in — ready to go fast' },
    ],
  },
  {
    id: 'interest',
    step: '04',
    label: 'Skills',
    question: 'What best describes your skills or interests?',
    subtitle: 'No experience needed — just pick what resonates.',
    options: [
      { label: 'AI & Technology', value: 'tech-ai', icon: Brain, desc: 'ChatGPT, automation, tools' },
      { label: 'Writing & Content', value: 'writing-content', icon: FileText, desc: 'Creating, teaching, storytelling' },
      { label: 'Web & Design', value: 'design-web', icon: Globe, desc: 'Websites, visuals, branding' },
      { label: 'Sales & Marketing', value: 'sales-marketing', icon: Megaphone, desc: 'Outreach, funnels, client work' },
      { label: 'Local & Service Work', value: 'local-service', icon: MapPin, desc: 'Hands-on, community-based' },
    ],
  },
  {
    id: 'income_goal',
    step: '05',
    label: 'Income',
    question: 'What is your monthly income goal?',
    subtitle: 'Pick the number that would genuinely change your life.',
    options: [
      { label: '$500 / month', value: '500', icon: BarChart3, desc: 'A meaningful side boost' },
      { label: '$1,000 – $3,000 / month', value: '1000-3000', icon: BarChart3, desc: 'Replace a bill or two' },
      { label: '$3,000 – $10,000 / month', value: '3000-10000', icon: BarChart3, desc: 'Replace your job income' },
      { label: '$10,000+ / month', value: '10000-plus', icon: BarChart3, desc: 'Life-changing business income' },
    ],
  },
];

// ─── Results ────────────────────────────────────────────────────────────────

const results = [
  {
    key: 'ai-agency',
    title: 'AI Agency Owner',
    tagline: 'Sell AI-powered services to businesses that need them.',
    desc: 'You are a strong fit to build and sell AI services — automation, chatbots, and content systems — to businesses desperate for help. High income ceiling, fast ramp, no tech degree required.',
    icon: Brain,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    accent: '#2563EB',
    accentLight: '#EFF6FF',
    box: 'AI Agency Launch Box',
    income: '$3,000 – $12,000/mo',
    timeline: '3–6 weeks to first client',
    difficulty: 'Intermediate',
    highlights: [
      'No tech background required',
      'High-demand, low-competition niche',
      'Recurring retainer model',
      'Scalable with systems and AI',
    ],
  },
  {
    key: 'contractor',
    title: 'Contractor Website Business',
    tagline: 'Build websites and generate leads for local contractors.',
    desc: 'Local contractors — plumbers, roofers, landscapers — need websites and leads but have no time. You become their digital partner, build once, and earn a recurring monthly retainer.',
    icon: Globe,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: '#059669',
    accentLight: '#ECFDF5',
    box: 'Contractor Growth Box',
    income: '$2,000 – $10,000/mo',
    timeline: '2–4 weeks to first client',
    difficulty: 'Beginner–Intermediate',
    highlights: [
      'Massive underserved local market',
      'Recurring monthly retainer income',
      'Templates make delivery fast',
      'No cold calling required',
    ],
  },
  {
    key: 'ebook',
    title: 'Ebook Business',
    tagline: 'Write once, earn repeatedly with digital books.',
    desc: 'Package your knowledge or curated research into ebooks and digital guides. Low overhead, no inventory, and the product earns while you sleep.',
    icon: BookOpen,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    accent: '#EA580C',
    accentLight: '#FFF7ED',
    box: 'Ebook Business Box',
    income: '$1,500 – $8,000/mo',
    timeline: '2–3 weeks to first sale',
    difficulty: 'Beginner Friendly',
    highlights: [
      'Zero inventory or shipping',
      'Earn passively while you sleep',
      'AI dramatically speeds up writing',
      'Start with under $50',
    ],
  },
  {
    key: 'travel',
    title: 'Travel Planner Business',
    tagline: 'Turn travel knowledge into a planning service or content brand.',
    desc: 'Monetize a love of travel or local expertise as a planning service, digital product brand, or content channel. Lifestyle-friendly with multiple income streams.',
    icon: MapPin,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    accent: '#0284C7',
    accentLight: '#F0F9FF',
    box: 'Travel Planner Box',
    income: '$1,000 – $6,000/mo',
    timeline: '4–6 weeks to first income',
    difficulty: 'Beginner Friendly',
    highlights: [
      'Lifestyle-first business model',
      'Multiple monetization streams',
      'Pairs well with social content',
      'Low startup cost',
    ],
  },
  {
    key: 'affiliate',
    title: 'Affiliate & Content Business',
    tagline: 'Earn commissions by creating content that ranks and converts.',
    desc: 'Build a niche blog, YouTube channel, or social brand that earns affiliate commissions and ad revenue. Compound growth — the more content you create, the more you earn, forever.',
    icon: Megaphone,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    accent: '#E11D48',
    accentLight: '#FFF1F2',
    box: 'Affiliate Content Box',
    income: '$500 – $8,000/mo',
    timeline: '6–10 weeks to first commission',
    difficulty: 'Beginner Friendly',
    highlights: [
      'Fully passive once content ranks',
      'AI speeds up content creation 10x',
      'No client work ever required',
      'Scales without extra hours',
    ],
  },
];

// ─── Scoring ────────────────────────────────────────────────────────────────

type Answers = Record<string, string>;

function pickResult(a: Answers): number {
  // scores: [ai-agency, contractor, ebook, travel, affiliate]
  const s = [0, 0, 0, 0, 0];

  if (a.goal === 'learn-ai')     { s[0] += 3; s[1] += 1; }
  if (a.goal === 'replace')      { s[0] += 2; s[1] += 2; }
  if (a.goal === 'scale')        { s[0] += 2; s[1] += 1; s[3] += 1; }
  if (a.goal === 'side-income')  { s[2] += 2; s[4] += 2; s[3] += 1; }

  if (a.budget === 'under-100')  { s[2] += 2; s[4] += 3; s[3] += 1; }
  if (a.budget === '100-500')    { s[2] += 1; s[3] += 2; s[4] += 1; s[1] += 1; }
  if (a.budget === '500-2000')   { s[0] += 1; s[1] += 3; s[2] += 1; }
  if (a.budget === '2000-plus')  { s[0] += 3; s[1] += 1; }

  if (a.time === 'under-5')      { s[2] += 2; s[4] += 2; s[3] += 1; }
  if (a.time === '5-10')         { s[3] += 2; s[4] += 2; s[2] += 1; }
  if (a.time === '10-20')        { s[1] += 2; s[0] += 1; s[4] += 1; }
  if (a.time === 'full-time')    { s[0] += 3; s[1] += 2; }

  if (a.interest === 'tech-ai')          { s[0] += 4; }
  if (a.interest === 'design-web')       { s[1] += 4; s[0] += 1; }
  if (a.interest === 'writing-content')  { s[2] += 2; s[3] += 2; s[4] += 3; }
  if (a.interest === 'sales-marketing')  { s[0] += 2; s[1] += 2; }
  if (a.interest === 'local-service')    { s[1] += 3; s[3] += 3; }

  if (a.income_goal === '500')        { s[4] += 2; s[3] += 2; s[2] += 1; }
  if (a.income_goal === '1000-3000')  { s[2] += 2; s[3] += 1; s[4] += 1; s[1] += 1; }
  if (a.income_goal === '3000-10000') { s[0] += 1; s[1] += 3; }
  if (a.income_goal === '10000-plus') { s[0] += 3; s[1] += 1; }

  return s.indexOf(Math.max(...s));
}

// ─── Component ──────────────────────────────────────────────────────────────

type FlowStep = 'quiz' | 'lead' | 'result';
type LeadForm = { name: string; email: string; phone: string };

export default function StartPage({ onNavigate }: StartPageProps) {
  const [flowStep, setFlowStep] = useState<FlowStep>('quiz');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [leadForm, setLeadForm] = useState<LeadForm>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Partial<LeadForm>>({});
  const [submitting, setSubmitting] = useState(false);
  const [resultIndex, setResultIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (qId: string, value: string) => {
    const updated = { ...answers, [qId]: value };
    setAnswers(updated);
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      const idx = pickResult(updated);
      setResultIndex(idx);
      setSelectedTab(idx);
      setFlowStep('lead');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ((q) => q - 1);
  };

  const validate = (): boolean => {
    const e: Partial<LeadForm> = {};
    if (!leadForm.name.trim()) e.name = 'Name is required';
    if (!leadForm.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) {
      e.email = 'Enter a valid email address';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await supabase.from('quiz_leads').insert({
      name: leadForm.name.trim(),
      email: leadForm.email.trim(),
      phone: leadForm.phone.trim() || null,
      goal: answers.goal ?? null,
      budget: answers.budget ?? null,
      available_time: answers.time ?? null,
      interest: answers.interest ?? null,
      income_goal: answers.income_goal ?? null,
      recommended_result: results[resultIndex].key,
    });
    setSubmitting(false);
    setFlowStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setFlowStep('quiz');
    setCurrentQ(0);
    setAnswers({});
    setLeadForm({ name: '', email: '', phone: '' });
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress =
    flowStep === 'quiz' ? Math.round((currentQ / questions.length) * 100) :
    flowStep === 'lead' ? 92 : 100;

  const topResult = results[resultIndex];
  const TopIcon = topResult.icon;
  const tabResult = results[selectedTab];
  const TabIcon = tabResult.icon;

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 pt-16 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-7">
            <Sparkles className="w-3.5 h-3.5" />
            Free Business Launch Quiz
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-gray-950 leading-[1.07] tracking-tight mb-5">
            Find Your Best Online<br />
            <span className="text-blue-600">Business Model</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            Answer 5 quick questions and get a personalized recommendation —
            built for beginners and aspiring AI entrepreneurs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400 font-medium">
            {[
              { icon: CheckCircle, text: 'Takes under 2 minutes' },
              { icon: CheckCircle, text: '100% free — no credit card' },
              { icon: CheckCircle, text: '3,200+ students launched' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-emerald-500" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARD AREA ───────────────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {flowStep === 'quiz'
                  ? `Question ${currentQ + 1} of ${questions.length}`
                  : flowStep === 'lead'
                  ? 'One last step — your results are ready'
                  : 'Your Personalized Roadmap'}
              </span>
              <span className="text-xs font-black text-blue-600 tabular-nums">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* ── QUIZ STEP ── */}
          {flowStep === 'quiz' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Step breadcrumb tabs */}
              <div className="grid grid-cols-5 border-b border-gray-100">
                {questions.map((q, i) => (
                  <div
                    key={q.id}
                    className={`py-2.5 text-center text-[10px] font-black uppercase tracking-wider transition-colors ${
                      i < currentQ
                        ? 'bg-blue-600 text-white'
                        : i === currentQ
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-300'
                    }`}
                  >
                    {q.label}
                  </div>
                ))}
              </div>

              <div className="p-7 sm:p-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-blue-50 text-blue-600">
                    <Target className="w-3 h-3" />
                    Step {questions[currentQ].step}
                  </span>
                  {currentQ > 0 && (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight mb-2">
                  {questions[currentQ].question}
                </h2>
                <p className="text-sm text-gray-500 mb-8">{questions[currentQ].subtitle}</p>

                <div className="space-y-3">
                  {questions[currentQ].options.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(questions[currentQ].id, opt.value)}
                        className="group w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50/60 transition-all duration-150 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800 group-hover:text-blue-700 text-sm leading-snug transition-colors">
                              {opt.label}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-3" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── LEAD CAPTURE ── */}
          {flowStep === 'lead' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Result teaser banner */}
              <div
                className="px-8 py-9 text-center"
                style={{
                  background: `linear-gradient(145deg, ${topResult.accent} 0%, ${topResult.accent}bb 100%)`,
                }}
              >
                <div className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-4" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <TopIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-white/70 text-xs font-black uppercase tracking-widest mb-2">
                  Your result is ready
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {topResult.title}
                </h2>
                <p className="text-white/75 text-sm mt-2">
                  {topResult.income} potential &nbsp;·&nbsp; {topResult.timeline}
                </p>
              </div>

              <div className="p-7 sm:p-10">
                <div className="text-center mb-7">
                  <h3 className="text-xl font-black text-gray-950 mb-2">
                    Where should we send your roadmap?
                  </h3>
                  <p className="text-sm text-gray-500">
                    Enter your details to unlock your personalized plan. No spam, ever.
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                          errors.name
                            ? 'border-red-400 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-500/15'
                            : 'border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1.5 font-semibold">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-500/15'
                            : 'border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1.5 font-semibold">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5">
                      Phone{' '}
                      <span className="text-gray-400 normal-case font-normal text-xs">(optional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm font-medium outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black text-base rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 disabled:translate-y-0 disabled:shadow-none"
                    >
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Preparing your roadmap...
                        </>
                      ) : (
                        <>
                          Show My Results
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-center text-xs text-gray-400">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          )}

          {/* ── RESULTS ── */}
          {flowStep === 'result' && (
            <div className="space-y-5">

              {/* Top match card */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-2" style={{ borderColor: topResult.accent }}>
                <div
                  className="relative px-8 py-10 text-center overflow-hidden"
                  style={{ background: `linear-gradient(145deg, ${topResult.accentLight} 0%, white 100%)` }}
                >
                  <div
                    className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${topResult.accent}18 0%, transparent 70%)`, transform: 'translate(35%, -35%)' }}
                  />
                  <div
                    className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-5"
                    style={{ background: topResult.accentLight, boxShadow: `0 8px 24px ${topResult.accent}25` }}
                  >
                    <TopIcon className={`w-8 h-8 ${topResult.color}`} />
                  </div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3"
                    style={{ background: `${topResult.accent}15`, color: topResult.accent }}
                  >
                    Your #1 Match
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-950 mb-2 leading-tight">
                    {topResult.title}
                  </h2>
                  <p className={`text-sm font-bold ${topResult.color} mb-4`}>{topResult.tagline}</p>
                  <p className="text-gray-600 leading-relaxed max-w-md mx-auto text-sm">{topResult.desc}</p>
                </div>

                <div className="p-7 sm:p-9">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 rounded-xl p-4 mb-7 text-center" style={{ background: topResult.accentLight }}>
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide mb-1">Income</p>
                      <p className={`text-xs font-black ${topResult.color} leading-snug`}>{topResult.income}</p>
                    </div>
                    <div className="border-x border-gray-200/70">
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide mb-1">To Launch</p>
                      <p className={`text-xs font-black ${topResult.color} leading-snug`}>{topResult.timeline}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide mb-1">Level</p>
                      <p className={`text-xs font-black ${topResult.color} leading-snug`}>{topResult.difficulty}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">What you get</h4>
                  <div className="grid sm:grid-cols-2 gap-2 mb-8">
                    {topResult.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <button
                      onClick={() => nav('book-call')}
                      className="w-full flex items-center justify-center gap-2.5 py-4 text-white font-black text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${topResult.accent} 0%, ${topResult.accent}cc 100%)`,
                        boxShadow: `0 8px 28px ${topResult.accent}35`,
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      Book a Free Strategy Call
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => nav('business-box')}
                      className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <Rocket className="w-4 h-4 text-blue-500" />
                      Explore the {topResult.box}
                    </button>
                  </div>

                  <button
                    onClick={reset}
                    className="w-full mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
                  >
                    Retake the quiz
                  </button>
                </div>
              </div>

              {/* All 5 paths explorer */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                  <h3 className="font-black text-gray-950 text-lg">Explore All 5 Business Paths</h3>
                  <p className="text-sm text-gray-500 mt-0.5">See full details on every model before you decide.</p>
                </div>

                {/* Tabs */}
                <div className="flex overflow-x-auto border-b border-gray-100">
                  {results.map((r, i) => {
                    const Icon = r.icon;
                    return (
                      <button
                        key={r.key}
                        onClick={() => setSelectedTab(i)}
                        className={`flex items-center gap-1.5 px-4 py-3.5 text-[11px] font-bold whitespace-nowrap flex-shrink-0 border-b-2 transition-all ${
                          selectedTab === i
                            ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {r.title.split(' ').slice(0, 2).join(' ')}
                        {i === resultIndex && (
                          <span className="ml-1 px-1.5 py-0.5 bg-blue-600 text-white text-[8px] font-black rounded-full uppercase tracking-wide">
                            Match
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Tab content */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: tabResult.accentLight }}
                    >
                      <TabIcon className={`w-6 h-6 ${tabResult.color}`} />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-950 text-base leading-snug">{tabResult.title}</h4>
                      <p className={`text-xs font-semibold ${tabResult.color} mt-0.5`}>{tabResult.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{tabResult.desc}</p>

                  <div className="grid grid-cols-3 gap-3 rounded-xl p-4 mb-5 text-center" style={{ background: tabResult.accentLight }}>
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide mb-0.5">Income</p>
                      <p className={`text-xs font-black ${tabResult.color}`}>{tabResult.income}</p>
                    </div>
                    <div className="border-x border-gray-200/70">
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide mb-0.5">To Launch</p>
                      <p className={`text-xs font-black ${tabResult.color}`}>{tabResult.timeline}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide mb-0.5">Level</p>
                      <p className={`text-xs font-black ${tabResult.color}`}>{tabResult.difficulty}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {tabResult.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {h}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => nav('book-call')}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-black rounded-xl text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: tabResult.accent, boxShadow: `0 4px 16px ${tabResult.accent}30` }}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Book a Free Strategy Call
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom CTA banner */}
              <div className="bg-gray-950 rounded-2xl p-8 text-center">
                <div className="inline-flex w-12 h-12 rounded-xl bg-blue-600 items-center justify-center mb-5 shadow-lg shadow-blue-600/30">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Book a Free Strategy Call</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                  Spend 30 minutes with our team. We will map out your exact first steps, the tools
                  you need, and a realistic timeline to launch.
                </p>
                <button
                  onClick={() => nav('book-call')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
                >
                  Schedule My Free Call
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-gray-600 text-xs mt-4">No pressure. No sales pitch. Just a real plan.</p>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ── SOCIAL PROOF (quiz + lead steps only) ───────────────────────── */}
      {flowStep !== 'result' && (
        <section className="pb-14">
          <div className="max-w-2xl mx-auto px-5 sm:px-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
              <div className="flex items-center justify-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                ))}
                <span className="text-sm font-black text-gray-900 ml-2">4.9 / 5.0</span>
              </div>
              <p className="text-sm text-gray-600 italic mb-4 max-w-md mx-auto">
                "I had zero experience and launched my AI agency in 3 weeks. This quiz pointed me
                in exactly the right direction."
              </p>
              <p className="text-xs font-bold text-gray-500">
                — Marcus T., Former Teacher &nbsp;·&nbsp; Now earning $4,200/mo
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400 font-medium mt-5 pt-5 border-t border-gray-100">
                {['3,200+ Students', '42 Countries', '$2,800 Avg Monthly Income', '6 Business Systems'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-blue-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
