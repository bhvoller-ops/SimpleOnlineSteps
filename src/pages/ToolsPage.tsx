import { useState } from 'react';
import { ExternalLink, Star, Tag, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface ToolsPageProps {
  onNavigate: (page: string) => void;
}

const categories = ['All', 'AI Writing', 'Automation', 'Design', 'Email & Marketing', 'Analytics', 'Productivity'];

const tools = [
  {
    name: 'ChatGPT',
    category: 'AI Writing',
    badge: 'Essential',
    badgeColor: 'bg-blue-600',
    logo: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'The go-to AI for writing, brainstorming, content creation, client scripts, and business strategy.',
    rating: 5,
    pricing: 'Free / $20/mo',
    useCase: 'Content, scripts, emails, strategy',
    recommended: true,
  },
  {
    name: 'Claude by Anthropic',
    category: 'AI Writing',
    badge: 'Top Pick',
    badgeColor: 'bg-orange-500',
    logo: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Best for long-form writing, nuanced copy, analysis, and complex research tasks.',
    rating: 5,
    pricing: 'Free / $20/mo',
    useCase: 'Long-form writing, analysis',
    recommended: true,
  },
  {
    name: 'Make (Integromat)',
    category: 'Automation',
    badge: 'Powerful',
    badgeColor: 'bg-purple-600',
    logo: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Automate repetitive tasks by connecting your apps and tools without code.',
    rating: 5,
    pricing: 'Free / $9/mo',
    useCase: 'Workflow automation, integrations',
    recommended: true,
  },
  {
    name: 'Canva',
    category: 'Design',
    badge: 'Beginner Friendly',
    badgeColor: 'bg-emerald-600',
    logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Design logos, social posts, ebooks, presentations, and marketing materials — zero design skills needed.',
    rating: 4,
    pricing: 'Free / $12.99/mo',
    useCase: 'Branding, social media, ebooks',
    recommended: true,
  },
  {
    name: 'ConvertKit',
    category: 'Email & Marketing',
    badge: 'Best for Creators',
    badgeColor: 'bg-rose-500',
    logo: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Build your email list, send newsletters, and create automated funnels for your digital business.',
    rating: 5,
    pricing: 'Free / $15/mo',
    useCase: 'Email list, automation, funnels',
    recommended: true,
  },
  {
    name: 'Notion',
    category: 'Productivity',
    badge: 'All-in-One',
    badgeColor: 'bg-gray-700',
    logo: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Organize your business, clients, content calendar, and projects in one beautiful workspace.',
    rating: 4,
    pricing: 'Free / $8/mo',
    useCase: 'Project management, SOPs, docs',
    recommended: false,
  },
  {
    name: 'Zapier',
    category: 'Automation',
    badge: 'Popular',
    badgeColor: 'bg-orange-500',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Connect thousands of apps and automate tasks — from lead capture to client notifications.',
    rating: 4,
    pricing: 'Free / $19.99/mo',
    useCase: 'Simple app integrations',
    recommended: false,
  },
  {
    name: 'Google Analytics',
    category: 'Analytics',
    badge: 'Free',
    badgeColor: 'bg-sky-600',
    logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Track your website visitors, understand your audience, and make data-driven business decisions.',
    rating: 4,
    pricing: 'Free',
    useCase: 'Website analytics, conversions',
    recommended: false,
  },
  {
    name: 'Loom',
    category: 'Productivity',
    badge: 'Client Favorite',
    badgeColor: 'bg-violet-600',
    logo: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=80',
    desc: 'Record quick video walkthroughs for clients, training, and sales — builds trust instantly.',
    rating: 5,
    pricing: 'Free / $8/mo',
    useCase: 'Client videos, tutorials, sales',
    recommended: false,
  },
];

export default function ToolsPage({ onNavigate: _onNavigate }: ToolsPageProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = tools.filter((t) => {
    const matchCat = activeCategory === 'All' || t.category === activeCategory;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold mb-6 tracking-wide uppercase">
            Curated by Simple Online Steps
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            The Tools That{' '}
            <span className="text-blue-600">Actually Move the Needle</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Every tool here is vetted, beginner-friendly, and used in our Business-in-a-Box
            systems. No noise — only what works.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Banner */}
      {activeCategory === 'All' && !search && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-blue-600 rounded-2xl p-6 text-white mb-8">
            <div className="flex items-start gap-4">
              <Star className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" />
              <div>
                <p className="font-bold text-lg mb-1">Our Top Picks for Beginners</p>
                <p className="text-blue-100 text-sm">
                  If you're just starting, focus on these 5 tools: ChatGPT, Claude, Make,
                  Canva, and ConvertKit. They cover writing, design, automation, and email — everything you need to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tools List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4">
        <p className="text-sm text-gray-500 mb-6">{filtered.length} tools found</p>
        <div className="space-y-3">
          {filtered.map((tool) => (
            <div
              key={tool.name}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                tool.recommended ? 'border-blue-200 shadow-sm' : 'border-gray-200'
              }`}
            >
              <div className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{tool.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-white text-xs font-bold ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                      {tool.recommended && (
                        <span className="flex items-center gap-1 text-xs text-blue-600 font-semibold">
                          <Star className="w-3 h-3" fill="currentColor" /> Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {tool.category}
                      </div>
                      <span>{tool.pricing}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < tool.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpanded(expanded === tool.name ? null : tool.name)}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0"
                  >
                    {expanded === tool.name ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {expanded === tool.name && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{tool.desc}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        Use for: {tool.useCase}
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        Visit Tool <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold mb-2">No tools found</p>
            <p className="text-sm">Try a different search or category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
