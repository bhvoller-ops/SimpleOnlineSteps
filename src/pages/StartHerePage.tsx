import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Brain, DollarSign, Rocket, Zap, Clock, Laptop, Users } from 'lucide-react';
import { GA } from '../lib/analytics';

interface StartHerePageProps {
  onNavigate: (page: string) => void;
}

const questions = [
  {
    id: 1,
    question: "What's your primary goal right now?",
    options: [
      { label: 'Replace my 9-5 income', value: 'replace' },
      { label: 'Earn extra income on the side', value: 'side' },
      { label: 'Build a scalable online business', value: 'scale' },
      { label: 'Learn AI and modern skills', value: 'learn' },
    ],
  },
  {
    id: 2,
    question: 'How much time can you commit per week?',
    options: [
      { label: 'Less than 5 hours', value: 'low' },
      { label: '5 to 10 hours', value: 'medium' },
      { label: '10 to 20 hours', value: 'high' },
      { label: '20+ hours (full focus)', value: 'full' },
    ],
  },
  {
    id: 3,
    question: 'Which best describes your background?',
    options: [
      { label: 'Complete beginner, no experience', value: 'beginner' },
      { label: 'Some tech or freelance experience', value: 'some' },
      { label: 'I have a skill but no clients', value: 'skilled' },
      { label: 'I already have a business to grow', value: 'existing' },
    ],
  },
  {
    id: 4,
    question: "What type of work appeals to you?",
    options: [
      { label: 'Writing, creating content, or teaching', value: 'content' },
      { label: 'Selling services to clients', value: 'services' },
      { label: 'Selling digital products', value: 'products' },
      { label: 'Using AI to automate and systemize', value: 'automation' },
    ],
  },
  {
    id: 5,
    question: "How comfortable are you with technology?",
    options: [
      { label: 'Not very — I need simple tools', value: 'low' },
      { label: 'Somewhat — I can follow guides', value: 'medium' },
      { label: 'Comfortable — I learn quickly', value: 'high' },
      { label: 'Very tech-savvy', value: 'expert' },
    ],
  },
];

const results = [
  {
    title: 'AI Agency Owner',
    desc: 'You have the drive and discipline to sell AI-powered services to businesses. Your personality fits the client-facing model — and the income potential is massive.',
    icon: Brain,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    box: 'AI Agency Launch Box',
    boxPage: 'business-box',
    income: '$3,000 – $12,000/mo',
  },
  {
    title: 'Digital Product Creator',
    desc: "You're built for creating and selling ebooks, templates, or mini-courses. You can earn money while you sleep with the right system.",
    icon: Laptop,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    box: 'Ebook Business Box',
    boxPage: 'business-box',
    income: '$1,500 – $8,000/mo',
  },
  {
    title: 'Freelance Contractor',
    desc: "You have valuable skills and just need the right system to find clients, charge what you're worth, and build a reliable business.",
    icon: Users,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    box: 'Contractor Growth Box',
    boxPage: 'business-box',
    income: '$2,000 – $10,000/mo',
  },
  {
    title: 'Automation Entrepreneur',
    desc: "You think systemically and love leveraging tools to build businesses that run without you. Automation and AI are your superpower.",
    icon: Zap,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    box: 'AI Agency Launch Box',
    boxPage: 'business-box',
    income: '$4,000 – $15,000/mo',
  },
];

const steps = [
  {
    number: '01',
    title: 'Take the Quiz',
    desc: 'Find your ideal business model in under 2 minutes.',
    icon: CheckCircle,
  },
  {
    number: '02',
    title: 'Get Your System',
    desc: 'Access your Business-in-a-Box and all included templates.',
    icon: Rocket,
  },
  {
    number: '03',
    title: 'Follow the Steps',
    desc: 'Each module is simple, sequential, and beginner-friendly.',
    icon: Clock,
  },
  {
    number: '04',
    title: 'Launch & Earn',
    desc: 'Go live and start generating income with your new business.',
    icon: DollarSign,
  },
];

export default function StartHerePage({ onNavigate }: StartHerePageProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizDone, setQuizDone] = useState(false);
  const [resultIndex, setResultIndex] = useState(0);

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Determine result based on answers
      const idx = newAnswers.filter((a) => ['replace', 'services', 'skilled', 'existing'].includes(a)).length;
      setResultIndex(idx >= 2 ? 2 : newAnswers.includes('automation') ? 3 : newAnswers.includes('content') ? 1 : 0);
      setQuizDone(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setQuizDone(false);
  };

  const result = results[resultIndex];
  const ResultIcon = result?.icon;

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold mb-6 tracking-wide uppercase">
            Free Quiz — 2 Minutes
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Start Here — Find Your{' '}
            <span className="text-blue-600">Perfect Business Model</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Answer 5 quick questions and we'll match you with the exact business model,
            system, and action plan for your situation.
          </p>
        </div>
      </section>

      {/* How it Works Strip */}
      <section className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{step.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!quizDone ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Progress */}
              <div className="h-1.5 bg-gray-100">
                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${((currentQ) / questions.length) * 100}%` }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Question {currentQ + 1} of {questions.length}
                  </span>
                  {currentQ > 0 && (
                    <button
                      onClick={() => {
                        setCurrentQ(currentQ - 1);
                        setAnswers(answers.slice(0, -1));
                      }}
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {questions[currentQ].question}
                </h2>
                <div className="space-y-3">
                  {questions[currentQ].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-medium text-gray-700 hover:text-blue-700 group"
                    >
                      <div className="flex items-center justify-between">
                        {option.label}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Result card */}
              <div className={`bg-white rounded-2xl shadow-sm border-2 ${result.border} overflow-hidden`}>
                <div className="h-1.5 bg-gray-100">
                  <div className="h-full bg-blue-600 w-full" />
                </div>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center ${result.bg} mb-4`}>
                      <ResultIcon className={`w-8 h-8 ${result.color}`} />
                    </div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                      Your Match
                    </p>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{result.title}</h2>
                    <p className="text-gray-500 leading-relaxed">{result.desc}</p>
                  </div>

                  <div className={`rounded-xl ${result.bg} p-4 mb-6`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-0.5">Recommended System</p>
                        <p className={`font-bold ${result.color}`}>{result.box}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-gray-500 mb-0.5">Income Potential</p>
                        <p className="font-bold text-gray-900">{result.income}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => navigate(result.boxPage)}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      View My Business System <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => { GA.bookStrategySession(); navigate('book-call'); }}
                      className="w-full py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Book a Free Strategy Call
                    </button>
                  </div>
                  <button
                    onClick={reset}
                    className="w-full mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Retake the quiz
                  </button>
                </div>
              </div>

              {/* All paths */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">
                  Explore All Business Models
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {results.map((r, i) => {
                    const Icon = r.icon;
                    return (
                      <button
                        key={r.title}
                        onClick={() => {
                          setResultIndex(i);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`text-left p-4 rounded-xl border-2 transition-all ${
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
                            <p className="font-bold text-gray-900 text-sm">{r.title}</p>
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
    </div>
  );
}
