import { useState } from 'react';
import { GA } from '../lib/analytics';
import {
  Lock,
  Download,
  CheckCircle,
  Shield,
  BookOpen,
  Target,
  Search,
  Phone,
  FileText,
  ClipboardList,
  Map,
  Wrench,
  Star,
  ArrowRight,
  Zap,
  Award,
} from 'lucide-react';

interface DownloadsPageProps {
  onNavigate: (page: string) => void;
}

const resources = [
  {
    id: 1,
    icon: BookOpen,
    title: 'AI Business Opportunity Guide',
    desc: 'Understand the full landscape of AI service opportunities. Includes niche breakdowns, income potential by service type, and how to position yourself as a specialist rather than a generalist.',
    tag: 'Start Here',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    pages: '24 pages',
    format: 'PDF',
    color: 'text-blue-600',
    bg: 'bg-blue-600',
    cardBorder: 'border-gray-800 hover:border-blue-500/50',
    accentBar: 'bg-blue-600',
  },
  {
    id: 2,
    icon: Target,
    title: 'Offer Creation Blueprint',
    desc: 'Step-by-step framework for packaging your AI capabilities into a named, priced service. Covers positioning, pricing strategy, and how to articulate your value without sounding generic.',
    tag: 'High Impact',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    pages: '18 pages',
    format: 'PDF',
    color: 'text-emerald-500',
    bg: 'bg-emerald-600',
    cardBorder: 'border-gray-800 hover:border-emerald-500/50',
    accentBar: 'bg-emerald-600',
  },
  {
    id: 3,
    icon: Search,
    title: 'AI Audit Framework',
    desc: 'A structured process for walking into any business and identifying automation opportunities. Includes the exact questions to ask and how to present findings in a way that opens sales conversations.',
    tag: 'Client Getter',
    tagColor: 'text-orange-700 bg-orange-50 border-orange-200',
    pages: '14 pages',
    format: 'PDF',
    color: 'text-orange-500',
    bg: 'bg-orange-600',
    cardBorder: 'border-gray-800 hover:border-orange-500/50',
    accentBar: 'bg-orange-600',
  },
  {
    id: 4,
    icon: Phone,
    title: 'Discovery Call Script',
    desc: 'A structured conversation framework for client calls. Covers how to open, uncover pain, handle objections, and close for a clear next step — naturally, without a rigid sales script.',
    tag: 'High Impact',
    tagColor: 'text-teal-700 bg-teal-50 border-teal-200',
    pages: '10 pages',
    format: 'PDF',
    color: 'text-teal-500',
    bg: 'bg-teal-600',
    cardBorder: 'border-gray-800 hover:border-teal-500/50',
    accentBar: 'bg-teal-600',
  },
  {
    id: 5,
    icon: FileText,
    title: 'Proposal Template',
    desc: 'A polished, ready-to-customize proposal covering the problem summary, solution, deliverables, timeline, pricing options, and social proof. Works for retainers, one-time projects, and audits.',
    tag: 'Revenue Driver',
    tagColor: 'text-violet-700 bg-violet-50 border-violet-200',
    pages: '8 pages',
    format: 'DOCX + PDF',
    color: 'text-violet-500',
    bg: 'bg-violet-600',
    cardBorder: 'border-gray-800 hover:border-violet-500/50',
    accentBar: 'bg-violet-600',
  },
  {
    id: 6,
    icon: ClipboardList,
    title: 'Client Onboarding Checklist',
    desc: 'Every step from signed agreement to first deliverable — including a welcome email sequence, intake questionnaire, kickoff agenda, and expectations document to eliminate scope creep.',
    tag: 'Operations',
    tagColor: 'text-sky-700 bg-sky-50 border-sky-200',
    pages: '12 pages',
    format: 'PDF',
    color: 'text-sky-500',
    bg: 'bg-sky-600',
    cardBorder: 'border-gray-800 hover:border-sky-500/50',
    accentBar: 'bg-sky-600',
  },
  {
    id: 7,
    icon: Map,
    title: 'First Client Acquisition Roadmap',
    desc: 'A 30-day, day-by-day action plan to land your first paying client. Broken into four weekly phases: setup, outreach, follow-up, and close. Designed to fit around a full-time schedule.',
    tag: 'Roadmap',
    tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
    pages: '20 pages',
    format: 'PDF',
    color: 'text-rose-500',
    bg: 'bg-rose-600',
    cardBorder: 'border-gray-800 hover:border-rose-500/50',
    accentBar: 'bg-rose-600',
  },
  {
    id: 8,
    icon: Wrench,
    title: 'AI Tool Stack Guide',
    desc: 'The exact tools to use from day one — with use cases, cost breakdowns, and setup notes. Includes a free starter stack ($0/month) and a professional stack for under $50/month.',
    tag: 'Tools',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    pages: '16 pages',
    format: 'PDF',
    color: 'text-amber-500',
    bg: 'bg-amber-600',
    cardBorder: 'border-gray-800 hover:border-amber-500/50',
    accentBar: 'bg-amber-600',
  },
];

export default function DownloadsPage({ onNavigate }: DownloadsPageProps) {
  const [downloaded, setDownloaded] = useState<Set<number>>(new Set());

  const handleDownload = (id: number) => {
    setDownloaded((prev) => new Set(prev).add(id));
    // Placeholder — replace with real file URL per resource
  };

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completedCount = downloaded.size;
  const allDone = completedCount === resources.length;

  return (
    <div className="pt-16 min-h-screen bg-gray-950">

      {/* ── MEMBER ACCESS BAR ── */}
      <div className="bg-emerald-600 border-b border-emerald-700">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span className="flex items-center gap-2 text-xs font-bold text-emerald-50">
            <Shield className="w-3.5 h-3.5 flex-shrink-0" />
            Verified Member Access — AI Agency Launch Kit
          </span>
          <span className="flex items-center gap-1.5 text-xs text-emerald-200 font-medium">
            <Lock className="w-3 h-3" />
            Secure · Members Only
          </span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <div className="relative overflow-hidden bg-gray-950 border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,_#1d4ed825,_transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff03_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff03_1px,_transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Left — title block */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">Members Area</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span className="text-xs font-black uppercase tracking-widest text-blue-500">All Resources Unlocked</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                AI Agency Launch Kit<br />
                <span className="text-blue-400">Downloads</span>
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-xl text-base">
                Access all resources included in your purchase. Download each one, save them to a folder, and work through them in the recommended order.
              </p>

              {/* Recommended order tip */}
              <div className="flex items-start gap-2.5 bg-blue-600/10 border border-blue-500/20 rounded-xl px-4 py-3 mt-6 max-w-xl">
                <Star className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" />
                <p className="text-xs text-blue-300 leading-relaxed">
                  <span className="font-bold text-blue-200">Recommended order:</span> Start with the AI Business Opportunity Guide, then the Offer Creation Blueprint, then follow the First Client Acquisition Roadmap.
                </p>
              </div>
            </div>

            {/* Right — progress card */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7 min-w-[220px] flex-shrink-0 text-center shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center mx-auto mb-4">
                {allDone
                  ? <Award className="w-7 h-7 text-yellow-400" />
                  : <Zap className="w-7 h-7 text-blue-400" />}
              </div>
              <div className="text-4xl font-black text-white tabular-nums mb-1">
                {completedCount}
                <span className="text-gray-600 text-2xl font-medium">/8</span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-4">Resources Downloaded</p>

              {/* Progress bar */}
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden mb-3">
                <div
                  className="h-2 bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${(completedCount / resources.length) * 100}%` }}
                />
              </div>

              {allDone ? (
                <p className="text-xs text-yellow-400 font-bold flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  All Downloads Complete
                </p>
              ) : (
                <p className="text-xs text-gray-600 font-medium">
                  {resources.length - completedCount} remaining
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── RESOURCE GRID ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {resources.map((res) => {
            const Icon = res.icon;
            const done = downloaded.has(res.id);

            return (
              <div
                key={res.id}
                className={`group relative bg-gray-900 border rounded-2xl overflow-hidden transition-all duration-200 ${res.cardBorder} ${done ? 'opacity-75' : 'hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5'}`}
              >
                {/* Top accent line */}
                <div className={`h-0.5 w-full ${res.accentBar} opacity-60`} />

                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div className={`w-11 h-11 rounded-xl ${res.bg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="font-black text-white text-sm leading-snug mb-1.5">{res.title}</h2>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${res.tagColor}`}>
                            {res.tag}
                          </span>
                          <span className="text-xs text-gray-600 font-medium">{res.format} · {res.pages}</span>
                        </div>
                      </div>
                    </div>

                    {done && (
                      <div className="flex-shrink-0">
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                          <CheckCircle className="w-3 h-3" />
                          Done
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{res.desc}</p>

                  {/* Download button */}
                  <button
                    onClick={() => handleDownload(res.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                      done
                        ? 'bg-gray-800 text-emerald-400 border border-emerald-500/20 cursor-default'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 hover:-translate-y-0.5'
                    }`}
                  >
                    {done ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Downloaded
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Download Resource
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── NEED HELP IMPLEMENTING ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-16">
        <div className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-3xl">
          {/* Background accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,_#ea580c12,_transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_0%_50%,_#1d4ed815,_transparent)] pointer-events-none" />

          <div className="relative px-8 py-10 sm:px-12 flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left">

            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto lg:mx-0">
                <Phone className="w-8 h-8 text-orange-400" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                Included With Your Purchase
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                Need Help Implementing This?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Your purchase includes a free 1-on-1 strategy session. We'll walk through your kit together, answer every question, and map out your specific path to your first client. No cost, no obligation.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5 mt-4">
                {['Free · 30 minutes', 'No obligation', 'Limited spots'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <button
                onClick={() => { GA.bookStrategySession(); navigate('book-call'); }}
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/20 hover:-translate-y-0.5 text-base whitespace-nowrap"
              >
                Book A Free Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
