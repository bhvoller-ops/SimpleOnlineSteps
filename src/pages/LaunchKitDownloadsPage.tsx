import { useState } from 'react';
import { GA } from '../lib/analytics';
import {
  Download,
  CheckCircle,
  Shield,
  Lock,
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
  Mail,
  MessageSquare,
} from 'lucide-react';

interface LaunchKitDownloadsPageProps {
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
    accentBar: 'bg-blue-600',
    cardBorder: 'border-gray-100 hover:border-blue-200',
    btnColor: 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20',
    downloadUrl: '#',
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
    accentBar: 'bg-emerald-600',
    cardBorder: 'border-gray-100 hover:border-emerald-200',
    btnColor: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20',
    downloadUrl: '#',
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
    accentBar: 'bg-orange-600',
    cardBorder: 'border-gray-100 hover:border-orange-200',
    btnColor: 'bg-orange-500 hover:bg-orange-400 shadow-orange-500/20',
    downloadUrl: '#',
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
    accentBar: 'bg-teal-600',
    cardBorder: 'border-gray-100 hover:border-teal-200',
    btnColor: 'bg-teal-600 hover:bg-teal-500 shadow-teal-600/20',
    downloadUrl: '#',
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
    accentBar: 'bg-violet-600',
    cardBorder: 'border-gray-100 hover:border-violet-200',
    btnColor: 'bg-violet-600 hover:bg-violet-500 shadow-violet-600/20',
    downloadUrl: '#',
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
    accentBar: 'bg-sky-600',
    cardBorder: 'border-gray-100 hover:border-sky-200',
    btnColor: 'bg-sky-600 hover:bg-sky-500 shadow-sky-600/20',
    downloadUrl: '#',
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
    accentBar: 'bg-rose-600',
    cardBorder: 'border-gray-100 hover:border-rose-200',
    btnColor: 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20',
    downloadUrl: '#',
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
    accentBar: 'bg-amber-600',
    cardBorder: 'border-gray-100 hover:border-amber-200',
    btnColor: 'bg-amber-500 hover:bg-amber-400 shadow-amber-500/20',
    downloadUrl: '#',
  },
];

export default function LaunchKitDownloadsPage({ onNavigate }: LaunchKitDownloadsPageProps) {
  const [downloaded, setDownloaded] = useState<Set<number>>(new Set());

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = (id: number) => {
    setDownloaded((prev) => new Set(prev).add(id));
  };

  const completedCount = downloaded.size;
  const allDone = completedCount === resources.length;

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* ── MEMBER ACCESS BAR ── */}
      <div className="bg-blue-600 border-b border-blue-700">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span className="flex items-center gap-2 text-xs font-bold text-blue-50">
            <Shield className="w-3.5 h-3.5 flex-shrink-0" />
            AI Agency Launch Kit — Download Center
          </span>
          <span className="flex items-center gap-1.5 text-xs text-blue-200 font-medium">
            <Lock className="w-3 h-3" />
            Secure · Members Only
          </span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <div className="bg-gray-950 border-b border-gray-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,_#1d4ed825,_transparent)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">Members Area</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span className="text-xs font-black uppercase tracking-widest text-blue-400">All Resources Unlocked</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                AI Agency Launch Kit<br />
                <span className="text-blue-400">Download Center</span>
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-xl text-base">
                Access all resources included with your purchase. Download each one, save them to a folder, and work through them in the recommended order.
              </p>

              <div className="flex items-start gap-2.5 bg-blue-600/10 border border-blue-500/20 rounded-xl px-4 py-3 mt-6 max-w-xl">
                <Star className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" />
                <p className="text-xs text-blue-300 leading-relaxed">
                  <span className="font-bold text-blue-200">Recommended order:</span> Start with the AI Business Opportunity Guide, then the Offer Creation Blueprint, then follow the First Client Acquisition Roadmap day by day.
                </p>
              </div>
            </div>

            {/* Progress card */}
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
                <p className="text-xs text-gray-600 font-medium">{resources.length - completedCount} remaining</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── WELCOME MESSAGE ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-10 pb-2">
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl px-8 py-10 sm:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-black uppercase tracking-widest mb-5">
              <CheckCircle className="w-3.5 h-3.5" />
              Welcome to the AI Agency Launch Kit
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight mb-4">
              You now have everything you need to launch.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              You now have access to the exact frameworks, templates, scripts, and implementation guides designed to help you launch your first AI business faster.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Start with the <span className="font-bold text-gray-700">First Client Acquisition Roadmap</span> and work through the resources in order. Everything builds on the step before it.
            </p>
          </div>
        </div>
      </div>

      {/* ── RECOMMENDED ORDER ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-8 pb-2">
        <div className="bg-gray-950 rounded-3xl overflow-hidden">
          <div className="px-8 py-8 sm:px-12">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Star className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-0.5">Start Here</p>
                <h3 className="text-lg font-black text-white leading-tight">Recommended Order</h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { n: 1, title: 'First Client Acquisition Roadmap', note: 'Begin here — your day-by-day plan' },
                { n: 2, title: 'AI Business Opportunity Guide', note: 'Understand the market' },
                { n: 3, title: 'Offer Creation Blueprint', note: 'Build your service offer' },
                { n: 4, title: 'AI Audit Framework', note: 'Open client conversations' },
                { n: 5, title: 'Discovery Call Script', note: 'Close with confidence' },
                { n: 6, title: 'Proposal Template', note: 'Win the deal professionally' },
                { n: 7, title: 'Client Onboarding Checklist', note: 'Start clients the right way' },
                { n: 8, title: 'AI Tool Stack Guide', note: 'Set up your tool stack' },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3.5">
                  <span className="w-6 h-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-xs font-black text-blue-400 tabular-nums mt-0.5">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white leading-snug mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-snug">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── RESOURCE GRID ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-5">
          {resources.map((res) => {
            const Icon = res.icon;
            const done = downloaded.has(res.id);

            return (
              <div
                key={res.id}
                className={`group relative bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-200 ${res.cardBorder} ${!done && 'hover:shadow-md hover:-translate-y-0.5'} ${done && 'opacity-80'}`}
              >
                <div className={`h-0.5 ${res.accentBar}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div className={`w-11 h-11 rounded-xl ${res.accentBar} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="font-black text-gray-900 text-sm leading-snug mb-1.5">{res.title}</h2>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${res.tagColor}`}>
                            {res.tag}
                          </span>
                          <span className="text-xs text-gray-400 font-medium">{res.format} · {res.pages}</span>
                        </div>
                      </div>
                    </div>
                    {done && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold flex-shrink-0">
                        <CheckCircle className="w-3 h-3" />
                        Done
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{res.desc}</p>

                  {/* Download button */}
                  <a
                    href={res.downloadUrl}
                    onClick={() => handleDownload(res.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-md ${
                      done
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default'
                        : `${res.btnColor} text-white hover:-translate-y-0.5`
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
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── NEED HELP SECTION ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-8">
        <div className="bg-gray-950 rounded-3xl overflow-hidden">
          <div className="relative px-8 py-10 sm:px-12 flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,_#1d4ed815,_transparent)] pointer-events-none" />

            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto lg:mx-0">
                <MessageSquare className="w-7 h-7 text-blue-400" />
              </div>
            </div>

            <div className="relative flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                Need Help Implementing This?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Book a free strategy session and we'll walk through your resources together, answer your questions, and map out your specific path to your first AI client.
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

            <div className="relative flex-shrink-0">
              <button
                onClick={() => { GA.bookStrategySession(); navigate('book-call'); }}
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/25 hover:-translate-y-0.5 text-base whitespace-nowrap"
              >
                Book A Free Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── ACCELERATOR UPSELL ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-8">
        <div className="relative overflow-hidden bg-gray-950 border border-gray-800 rounded-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_50%,_#1d4ed818,_transparent)] pointer-events-none" />
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />

          <div className="relative px-8 py-10 sm:px-12 flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left">

            {/* Price badge */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-blue-600 flex flex-col items-center justify-center shadow-2xl shadow-blue-600/30 mx-auto lg:mx-0">
                <span className="text-xs font-black text-blue-200 uppercase tracking-widest leading-none mb-1">Only</span>
                <span className="text-3xl font-black text-white leading-none">$197</span>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Private 1-on-1 · 60 Minutes
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                Need More Personalized Help?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-4">
                Book a Private AI Agency Accelerator Session — a 60-minute 1-on-1 strategy call where we build your business model, offer, pricing, and 30-day action plan together.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5">
                {['60 Minutes', 'Personalized Guidance', 'Written Summary Included', '7-Day Guarantee'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative flex-shrink-0">
              <a
                href="/ai-agency-accelerator"
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/25 hover:-translate-y-0.5 text-base whitespace-nowrap"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── SUPPORT ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-8 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 mb-4">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-black text-gray-900 text-lg mb-2">Questions?</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-1">
            Email us any time — we typically respond within one business day.
          </p>
          <a
            href="mailto:cassey@simpleonlinesteps.com"
            className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-500 font-semibold transition-colors mt-2"
          >
            cassey@simpleonlinesteps.com
          </a>
        </div>
      </div>

    </div>
  );
}
