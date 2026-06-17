import { useState } from 'react';
import { CheckCircle, ArrowRight, Search, Star, Clock, Users, Filter } from 'lucide-react';

interface BusinessBoxPageProps {
  onNavigate: (page: string) => void;
}

const allBoxes = [
  {
    id: 1,
    title: 'AI Agency Launch Box',
    category: 'AI & Services',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-600',
    level: 'Beginner',
    time: '3–4 weeks to launch',
    income: '$3K – $12K/mo',
    students: '1,240',
    rating: 4.9,
    img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=700',
    desc: 'Build and sell AI-powered services to local businesses — chatbots, content automation, social media, and more. Full system with client scripts, pricing guides, and outreach templates.',
    features: [
      'Client acquisition scripts',
      'Service menu & pricing guide',
      'AI tool setup walkthroughs',
      'Proposal & contract templates',
      'Onboarding system',
      '30-day launch roadmap',
    ],
    color: 'border-blue-200',
    highlight: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Contractor Growth Box',
    category: 'Freelancing',
    badge: 'High Demand',
    badgeColor: 'bg-emerald-600',
    level: 'Intermediate',
    time: '2–3 weeks to launch',
    income: '$2K – $10K/mo',
    students: '890',
    rating: 4.8,
    img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=700',
    desc: 'Win more clients, charge premium rates, and run a professional contracting business. Everything from lead generation to project delivery systematized for you.',
    features: [
      'Premium proposal templates',
      'Lead generation playbook',
      'Pricing strategy framework',
      'Contract & scope-of-work toolkit',
      'Client communication scripts',
      'Portfolio building guide',
    ],
    color: 'border-emerald-200',
    highlight: 'bg-emerald-50',
  },
  {
    id: 3,
    title: 'Ebook Business Box',
    category: 'Digital Products',
    badge: 'Beginner Friendly',
    badgeColor: 'bg-orange-500',
    level: 'Beginner',
    time: '2 weeks to launch',
    income: '$1.5K – $8K/mo',
    students: '2,100',
    rating: 4.9,
    img: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=700',
    desc: 'Write, publish, and sell ebooks on topics you already know — automated with AI. Includes topic research, AI writing workflow, sales page template, and marketing system.',
    features: [
      'Profitable topic research system',
      'AI-assisted writing workflow',
      'Sales page template & copy',
      'Pricing and packaging guide',
      'Email marketing setup',
      'Traffic generation plan',
    ],
    color: 'border-orange-200',
    highlight: 'bg-orange-50',
  },
  {
    id: 4,
    title: 'Travel Planner Box',
    category: 'Digital Products',
    badge: 'Trending',
    badgeColor: 'bg-sky-500',
    level: 'Beginner',
    time: '3 weeks to launch',
    income: '$1K – $6K/mo',
    students: '650',
    rating: 4.7,
    img: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=700',
    desc: 'Turn your travel knowledge into a digital business. Sell itineraries, travel guides, planning services, and content — with a brand system and monetization roadmap included.',
    features: [
      'Niche & destination selection guide',
      'Content strategy framework',
      'Monetization playbook',
      'Brand kit templates',
      'Social media growth system',
      'Product launch checklist',
    ],
    color: 'border-sky-200',
    highlight: 'bg-sky-50',
  },
  {
    id: 5,
    title: 'Local Lead Gen Box',
    category: 'AI & Services',
    badge: 'New',
    badgeColor: 'bg-rose-500',
    level: 'Intermediate',
    time: '4 weeks to launch',
    income: '$2K – $9K/mo',
    students: '420',
    rating: 4.8,
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700',
    desc: 'Build and sell lead generation systems to local businesses. You run the ads and funnels, they pay you monthly retainers. Complete setup, client toolkit, and delivery system.',
    features: [
      'Niche & market selection guide',
      'Funnel templates & setup guides',
      'Client onboarding system',
      'Retainer pricing frameworks',
      'Reporting dashboard setup',
      'Retention & upsell scripts',
    ],
    color: 'border-rose-200',
    highlight: 'bg-rose-50',
  },
  {
    id: 6,
    title: 'Online Course Creator Box',
    category: 'Digital Products',
    badge: 'Best Value',
    badgeColor: 'bg-violet-600',
    level: 'Intermediate',
    time: '4–6 weeks to launch',
    income: '$3K – $20K/mo',
    students: '780',
    rating: 4.9,
    img: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=700',
    desc: 'Package your expertise into an online course and sell it 24/7. Full system from topic validation to launch email sequence and ongoing sales automation.',
    features: [
      'Course topic validation system',
      'Curriculum design framework',
      'Recording & production guide',
      'Sales page & checkout setup',
      'Launch email sequence',
      'Evergreen funnel templates',
    ],
    color: 'border-violet-200',
    highlight: 'bg-violet-50',
  },
];

const categories = ['All', 'AI & Services', 'Freelancing', 'Digital Products'];

export default function BusinessBoxPage({ onNavigate }: BusinessBoxPageProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = allBoxes.filter((b) => {
    const matchCat = activeCategory === 'All' || b.category === activeCategory;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold mb-6 tracking-wide uppercase">
            Complete Done-For-You Systems
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Business-in-a-Box <span className="text-blue-600">Systems</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Every system includes templates, scripts, roadmaps, and step-by-step instructions.
            Pick one and launch your business in weeks, not years.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search systems..."
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
            <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
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

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-gray-500 mb-6">{filtered.length} systems found</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((box) => (
            <div
              key={box.id}
              className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 ${
                expanded === box.id ? box.color : 'border-gray-200'
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={box.img}
                  alt={box.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold ${box.badgeColor}`}>
                  {box.badge}
                </span>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                    {box.level}
                  </span>
                  <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                    {box.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{box.title}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                    {box.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {box.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {box.time}
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{box.desc}</p>

                {expanded === box.id && (
                  <div className={`rounded-xl ${box.highlight} p-4 mb-4`}>
                    <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">What's Included</p>
                    <ul className="space-y-1.5">
                      {box.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400">Income Potential</p>
                    <p className="font-bold text-gray-900 text-sm">{box.income}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpanded(expanded === box.id ? null : box.id)}
                      className="px-3 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {expanded === box.id ? 'Less' : 'Details'}
                    </button>
                    <button
                      onClick={() => navigate('book-call')}
                      className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Started <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold mb-2">No systems found</p>
            <p className="text-sm">Try adjusting your search or filter.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Which One to Choose?</h2>
          <p className="text-blue-100 mb-8">
            Take the free quiz and get a personalized recommendation based on your goals, schedule,
            and experience level.
          </p>
          <button
            onClick={() => navigate('start-here')}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Take the Free Quiz <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
