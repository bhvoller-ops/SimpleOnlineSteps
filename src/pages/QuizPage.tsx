import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Brain,
  DollarSign,
  Rocket,
  Zap,
  Laptop,
  Users,
  Globe,
  FileText,
  Building2,
  User,
  Mail,
  ChevronRight,
  TrendingUp,
  Clock,
} from 'lucide-react';
const MAKE_WEBHOOK = 'https://hook.us2.make.com/0l3knnlxpvd7fosfqtad5pj44xjqf2aq';

interface QuizPageProps {
  onNavigate: (page: string) => void;
}

const questions = [
  {
    id: 'goal',
    label: 'Goal',
    question: 'What is your goal?',
    options: [
      { label: 'Learn AI', value: 'learn-ai', icon: Brain },
      { label: 'Side Income', value: 'side-income', icon: DollarSign },
      { label: 'Full-Time Business', value: 'full-time', icon: Rocket },
      { label: 'Career Change', value: 'career-change', icon: TrendingUp },
    ],
  },
  {
    id: 'budget',
    label: 'Budget',
    question: 'Budget?',
    options: [
      { label: 'Under $100', value: 'under-100', icon: DollarSign },
      { label: '$100–500', value: '100-500', icon: DollarSign },
      { label: '$500–2,000', value: '500-2000', icon: DollarSign },
      { label: '$2,000+', value: '2000-plus', icon: DollarSign },
    ],
  },
  {
    id: 'available_time',
    label: 'Time',
    question: 'Available Time?',
    options: [
      { label: 'Under 5 hours', value: 'under-5', icon: Clock },
      { label: '5–10 hours', value: '5-10', icon: Clock },
      { label: '10–20 hours', value: '10-20', icon: Clock },
      { label: 'Full Time', value: 'full-time', icon: Clock },
    ],
  },
  {
    id: 'interest',
    label: 'Interest',
    question: 'Interest?',
    options: [
      { label: 'AI Services', value: 'ai-services', icon: Brain },
      { label: 'Websites', value: 'websites', icon: Globe },
      { label: 'Content', value: 'content', icon: FileText },
      { label: 'Digital Products', value: 'digital-products', icon: Laptop },
      { label: 'Local Businesses', value: 'local-businesses', icon: Building2 },
    ],
  },
  {
    id: 'income_goal',
    label: 'Income',
    question: 'Income Goal?',
    options: [
      { label: '$500/mo', value: '500', icon: DollarSign },
      { label: '$1,000/mo', value: '1000', icon: DollarSign },
      { label: '$5,000/mo', value: '5000', icon: DollarSign },
      { label: '$10,000+/mo', value: '10000-plus', icon: DollarSign },
    ],
  },
];

const results = [
  {
    key: 'ai-agency',
    title: 'AI Agency Owner',
    desc: 'You have the drive to sell AI-powered services to businesses. The income potential is massive and the barrier to entry is dropping fast.',
    icon: Brain,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    accent: '#2563EB',
    box: 'AI Agency Launch Box',
    boxPage: 'business-box',
    income: '$3,000 – $12,000/mo',
    timeline: '3–6 weeks to first client',
  },
  {
    key: 'ebook',
    title: 'Digital Product Creator',
    desc: "You're built for creating and selling ebooks, templates, or mini-courses. Build once, earn repeatedly — even while you sleep.",
    icon: Laptop,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    accent: '#EA580C',
    box: 'Ebook Business Box',
    boxPage: 'business-box',
    income: '$1,500 – $8,000/mo',
    timeline: '2–4 weeks to launch',
  },
  {
    key: 'contractor',
    title: 'Freelance Contractor',
    desc: 'You have valuable skills and need the right system to find clients, price your services, and build a reliable income stream.',
    icon: Users,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: '#059669',
    box: 'Contractor Growth Box',
    boxPage: 'business-box',
    income: '$2,000 – $10,000/mo',
    timeline: '1–3 weeks to first project',
  },
  {
    key: 'travel',
    title: 'Content & Travel Planner',
    desc: 'You think creatively and want to build an audience or niche brand around content, travel, or a passion that pays.',
    icon: FileText,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    accent: '#0284C7',
    box: 'Travel Planner Box',
    boxPage: 'business-box',
    income: '$1,000 – $6,000/mo',
    timeline: '4–8 weeks to monetize',
  },
];

type Answers = {
  goal?: string;
  budget?: string;
  available_time?: string;
  interest?: string;
  income_goal?: string;
};

function pickResult(answers: Answers): number {
  const { goal, interest, income_goal, available_time } = answers;

  if (interest === 'ai-services' || goal === 'learn-ai') return 0;
  if (interest === 'content' || interest === 'local-businesses') return 3;
  if (interest === 'digital-products') return 1;
  if (interest === 'websites') return 2;
  if (goal === 'full-time' || income_goal === '5000' || income_goal === '10000-plus') return 0;
  if (available_time === 'under-5' || goal === 'side-income') return 1;
  if (goal === 'career-change') return 2;
  return 0;
}

type LeadForm = { name: string; email: string };

export default function QuizPage({ onNavigate }: QuizPageProps) {
  const [step, setStep] = useState<'quiz' | 'lead' | 'result'>('quiz');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [leadForm, setLeadForm] = useState<LeadForm>({ name: '', email: '' });
  const [leadErrors, setLeadErrors] = useState<Partial<LeadForm>>({});
  const [submitting, setSubmitting] = useState(false);
  const [webhookFailed, setWebhookFailed] = useState(false);
  const [resultIndex, setResultIndex] = useState(0);

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (qId: string, value: string) => {
    const updated = { ...answers, [qId]: value };
    setAnswers(updated);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setResultIndex(pickResult(updated));
      setStep('lead');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const validateLead = (): boolean => {
    const errors: Partial<LeadForm> = {};
    if (!leadForm.name.trim()) errors.name = 'Name is required';
    if (!leadForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) {
      errors.email = 'Enter a valid email';
    }
    setLeadErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLead()) return;
    setSubmitting(true);
    const result = results[resultIndex];

    try {
      const res = await fetch(MAKE_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          firstName: leadForm.name.trim(),
          email: leadForm.email.trim(),
          recommendedPath: result.key,
          goal: answers.goal ?? null,
          budget: answers.budget ?? null,
          timeAvailable: answers.available_time ?? null,
          interest: answers.interest ?? null,
          incomeGoal: answers.income_goal ?? null,
        }),
      });
      if (!res.ok) setWebhookFailed(true);
    } catch {
      setWebhookFailed(true);
    }

    setSubmitting(false);
    setStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setStep('quiz');
    setCurrentQ(0);
    setAnswers({});
    setLeadForm({ name: '', email: '' });
    setLeadErrors({});
    setWebhookFailed(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const result = results[resultIndex];
  const ResultIcon = result.icon;
  const progress = step === 'quiz'
    ? (currentQ / questions.length) * 100
    : step === 'lead' ? 90 : 100;

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Free Business Launch Quiz
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 leading-[1.07] tracking-tight mb-5">
            Find The Best Online<br />
            <span className="text-blue-600">Business For You</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            Answer a few questions and receive a customized roadmap.
          </p>
        </div>
      </section>

      {/* ── QUIZ / LEAD / RESULT CARD ── */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">

          {/* Progress bar + step label */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {step === 'quiz'
                  ? `Step ${currentQ + 1} of ${questions.length}`
                  : step === 'lead'
                  ? 'Almost there — your results are ready'
                  : 'Your Personalized Roadmap'}
              </span>
              <span className="text-xs font-bold text-blue-600">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* ── QUIZ STEP ── */}
          {step === 'quiz' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Step breadcrumbs */}
              <div className="flex border-b border-gray-100">
                {questions.map((q, i) => (
                  <div
                    key={q.id}
                    className={`flex-1 py-2.5 text-center text-xs font-semibold transition-colors ${
                      i < currentQ
                        ? 'bg-blue-600 text-white'
                        : i === currentQ
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-400'
                    }`}
                  >
                    {q.label}
                  </div>
                ))}
              </div>

              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight">
                    {questions[currentQ].question}
                  </h2>
                  {currentQ > 0 && (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors ml-4 flex-shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  {questions[currentQ].options.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(questions[currentQ].id, opt.value)}
                        className="group w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-150 font-semibold text-gray-700 hover:text-blue-700 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
                          </div>
                          {opt.label}
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── LEAD CAPTURE STEP ── */}
          {step === 'lead' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Teaser */}
              <div className="bg-blue-600 px-8 py-7 text-center">
                <div className={`inline-flex w-14 h-14 rounded-2xl ${result.bg} items-center justify-center mb-4`}>
                  <ResultIcon className={`w-7 h-7 ${result.color}`} />
                </div>
                <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-1">Your result is ready</p>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {result.title}
                </h2>
                <p className="text-blue-200 text-sm mt-2">
                  {result.income} potential &nbsp;·&nbsp; {result.timeline}
                </p>
              </div>

              <div className="p-8 sm:p-10">
                <div className="mb-7 text-center">
                  <h3 className="text-xl font-black text-gray-950 mb-1.5">
                    Get Your Personalized Business Roadmap
                  </h3>
                  <p className="text-sm text-gray-500">
                    Enter your information to see your recommended business path.
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Jane"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          leadErrors.name
                            ? 'border-red-400 bg-red-50 focus:border-red-400'
                            : 'border-gray-200 bg-white focus:border-blue-500'
                        }`}
                      />
                    </div>
                    {leadErrors.name && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{leadErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          leadErrors.email
                            ? 'border-red-400 bg-red-50 focus:border-red-400'
                            : 'border-gray-200 bg-white focus:border-blue-500'
                        }`}
                      />
                    </div>
                    {leadErrors.email && (
                      <p className="text-xs text-red-500 mt-1.5 font-medium">{leadErrors.email}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 disabled:translate-y-0 disabled:shadow-none mt-2"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Preparing your results...
                      </>
                    ) : (
                      <>
                        Show My Results
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* ── RESULT STEP ── */}
          {step === 'result' && (
            <div className="space-y-5">
              {/* Main result card */}
              <div className={`bg-white rounded-2xl shadow-sm border-2 ${result.border} overflow-hidden`}>
                {/* Header */}
                <div className="relative px-8 py-8 text-center border-b border-gray-100">
                  <div className={`inline-flex w-16 h-16 rounded-2xl ${result.bg} items-center justify-center mb-5`}>
                    <ResultIcon className={`w-8 h-8 ${result.color}`} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight mb-2">
                    Your Personalized Business Recommendation Is Ready
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-5">
                    Based on your answers, here is the best path for you to start learning AI and
                    building an online business.
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: `${result.accent}15`, color: result.accent }}>
                    {result.title}
                  </div>
                </div>

                <div className="p-8">
                  {/* Result description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                    {result.desc}
                  </p>

                  {/* Stats row */}
                  <div className={`grid grid-cols-3 gap-4 rounded-xl p-5 mb-7 ${result.bg}`}>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 font-semibold mb-1">Income Potential</p>
                      <p className={`text-sm font-black ${result.color}`}>{result.income}</p>
                    </div>
                    <div className="text-center border-x" style={{ borderColor: `${result.accent}30` }}>
                      <p className="text-xs text-gray-500 font-semibold mb-1">Time to Launch</p>
                      <p className={`text-sm font-black ${result.color}`}>{result.timeline}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 font-semibold mb-1">System</p>
                      <p className={`text-sm font-black ${result.color} leading-tight`}>{result.box}</p>
                    </div>
                  </div>

                  {/* What's included */}
                  <div className="space-y-2.5 mb-7">
                    {[
                      'Custom 30-day action plan',
                      'Recommended tools & resources',
                      `Access to the ${result.box}`,
                      'Step-by-step launch system',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  {webhookFailed && (
                    <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-4">
                      <span className="text-amber-500 mt-0.5 flex-shrink-0 text-sm">⚠</span>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Your recommendation is ready. Please save this page or book a strategy call.
                      </p>
                    </div>
                  )}
                  <div className="space-y-3">
                    <button
                      onClick={() => navigate('book-call')}
                      className="w-full flex items-center justify-center gap-2.5 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                    >
                      Book a Free Strategy Session
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(result.boxPage)}
                      className="w-full py-3.5 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      Explore Business-in-a-Box Systems
                    </button>
                  </div>

                  <button
                    onClick={reset}
                    className="w-full mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Retake the quiz
                  </button>
                </div>
              </div>

              {/* All options */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4 text-center">
                  Explore All Business Models
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {results.map((r, i) => {
                    const Icon = r.icon;
                    return (
                      <button
                        key={r.key}
                        onClick={() => {
                          setResultIndex(i);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`text-left p-4 rounded-xl border-2 transition-all duration-150 ${
                          i === resultIndex
                            ? `${r.border} ${r.bg}`
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${r.bg}`}>
                            <Icon className={`w-5 h-5 ${r.color}`} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm leading-snug">{r.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{r.income}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── TRUST FOOTER ── */}
      {step !== 'result' && (
        <section className="pb-16">
          <div className="max-w-2xl mx-auto px-5 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400 font-medium">
              {['Takes under 2 minutes', 'Free — no credit card', '3,200+ students launched', '42 countries'].map((t, i) => (
                <span key={t} className="flex items-center gap-1.5">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />}
                  <Zap className="w-3 h-3 text-blue-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
