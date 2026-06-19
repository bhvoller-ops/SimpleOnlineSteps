import { useState } from 'react';
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
  ChevronRight,
  Star,
} from 'lucide-react';

interface DownloadsPageProps {
  onNavigate: (page: string) => void;
}

const resources = [
  {
    id: 1,
    icon: BookOpen,
    title: 'AI Business Opportunity Guide',
    desc: 'Understand the full landscape of AI service opportunities. Includes niche breakdowns, income potential by service type, and how to position yourself in a crowded market.',
    tag: 'Start Here',
    tagStyle: 'bg-blue-100 text-blue-700',
    pages: '24 pages',
    format: 'PDF',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
  },
  {
    id: 2,
    icon: Target,
    title: 'Offer Creation Blueprint',
    desc: 'Step-by-step framework for packaging your AI skills into an irresistible offer. Covers pricing, positioning, and how to articulate your value without sounding generic.',
    tag: 'High Impact',
    tagStyle: 'bg-emerald-100 text-emerald-700',
    pages: '18 pages',
    format: 'PDF',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100 hover:border-emerald-300',
  },
  {
    id: 3,
    icon: Search,
    title: 'AI Audit Framework',
    desc: 'A proven audit process to walk into any business and identify automation opportunities. Use this to deliver immediate value and create a pathway to ongoing retainer work.',
    tag: 'Client Getter',
    tagStyle: 'bg-orange-100 text-orange-700',
    pages: '14 pages',
    format: 'PDF',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100 hover:border-orange-300',
  },
  {
    id: 4,
    icon: Phone,
    title: 'Discovery Call Script',
    desc: 'Word-for-word script for your first client call. Structured to uncover pain points, qualify the prospect, and close the meeting with a clear next step — naturally.',
    tag: 'High Impact',
    tagStyle: 'bg-emerald-100 text-emerald-700',
    pages: '10 pages',
    format: 'PDF',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
  },
  {
    id: 5,
    icon: FileText,
    title: 'Proposal Template',
    desc: 'Professional proposal template that wins deals. Includes sections for problem summary, solution overview, deliverables, timeline, pricing, and social proof.',
    tag: 'Revenue Driver',
    tagStyle: 'bg-violet-100 text-violet-700',
    pages: '8 pages',
    format: 'DOCX + PDF',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100 hover:border-violet-300',
  },
  {
    id: 6,
    icon: ClipboardList,
    title: 'Client Onboarding Checklist',
    desc: 'Every step from signed contract to first deliverable. Includes welcome email templates, intake questionnaire, and a kickoff call agenda to set the right expectations.',
    tag: 'Operations',
    tagStyle: 'bg-sky-100 text-sky-700',
    pages: '12 pages',
    format: 'PDF',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
  },
  {
    id: 7,
    icon: Map,
    title: 'First Client Acquisition Roadmap',
    desc: '30-day action plan to land your first paying client. Day-by-day tasks covering outreach, follow-up sequences, lead nurturing, and closing — no cold calling required.',
    tag: 'Roadmap',
    tagStyle: 'bg-rose-100 text-rose-700',
    pages: '20 pages',
    format: 'PDF',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100 hover:border-rose-300',
  },
  {
    id: 8,
    icon: Wrench,
    title: 'AI Tool Stack Guide',
    desc: 'Curated list of tools to run a lean, profitable AI agency. Includes free and paid options, use cases, setup notes, and cost estimates so you can start for under $50/month.',
    tag: 'Tools',
    tagStyle: 'bg-amber-100 text-amber-700',
    pages: '16 pages',
    format: 'PDF',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
  },
];

export default function DownloadsPage({ onNavigate }: DownloadsPageProps) {
  const [downloaded, setDownloaded] = useState<Set<number>>(new Set());

  const handleDownload = (id: number) => {
    setDownloaded((prev) => new Set(prev).add(id));
    // TODO: replace with real file URL
  };

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completedCount = downloaded.size;

  return (
    <div className="pt-16 min-h-screen bg-gray-50">

      {/* ── ACCESS BAR ── */}
      <div className="bg-emerald-600 border-b border-emerald-700">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span className="flex items-center gap-2 text-xs font-semibold text-emerald-50">
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
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Members Area</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-2">
                AI Agency Launch Kit Downloads
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                All 8 resources are unlocked and ready. Download each one, save them to your device, and work through them in order for the best results.
              </p>
            </div>

            {/* Progress widget */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 min-w-[200px] flex-shrink-0 text-center">
              <div className="text-3xl font-black text-gray-950 tabular-nums">{completedCount}<span className="text-gray-400 font-light">/8</span></div>
              <p className="text-xs text-gray-500 font-medium mt-1 mb-3">Resources Downloaded</p>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${(completedCount / 8) * 100}%` }}
                />
              </div>
              {completedCount === 8 && (
                <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center justify-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> All done!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── START HERE TIP ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-8">
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-5 py-4">
          <Star className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" />
          <p className="text-sm text-blue-800 leading-relaxed">
            <span className="font-bold">Recommended order:</span> Start with the AI Business Opportunity Guide, then the Offer Creation Blueprint, and follow the First Client Acquisition Roadmap. Use the remaining resources as you reach each stage.
          </p>
        </div>
      </div>

      {/* ── RESOURCE GRID ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 space-y-3">
        {resources.map((res) => {
          const Icon = res.icon;
          const done = downloaded.has(res.id);

          return (
            <div
              key={res.id}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm ${res.border} ${done ? 'opacity-80' : ''}`}
            >
              <div className="flex items-start gap-5 p-5 sm:p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${res.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${res.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h2 className="text-base font-black text-gray-900 leading-snug">{res.title}</h2>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${res.tagStyle}`}>{res.tag}</span>
                    {done && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        <CheckCircle className="w-3 h-3" /> Downloaded
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-2.5">
                    <span>{res.format}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{res.pages}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{res.desc}</p>
                </div>

                {/* Download button */}
                <div className="flex-shrink-0 pt-1">
                  <button
                    onClick={() => handleDownload(res.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 whitespace-nowrap ${
                      done
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 hover:-translate-y-0.5'
                    }`}
                  >
                    {done ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span className="hidden sm:inline">Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── HELP STRIP ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pb-16">
        <div className="relative overflow-hidden bg-gray-950 rounded-3xl px-8 py-9 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_0%_50%,_#1d4ed820,_transparent)] pointer-events-none" />
          <div className="relative">
            <h3 className="text-lg font-black text-white mb-1.5">Need help getting started?</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Book a free strategy session and we'll walk through the kit together, answer your questions, and map out your next 30 days.
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-3 flex-shrink-0">
            <button
              onClick={() => navigate('book-call')}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm whitespace-nowrap"
            >
              Book Free Strategy Call
              <ChevronRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-gray-600">Free · 30 min · No obligation</p>
          </div>
        </div>
      </div>

    </div>
  );
}
