import { ArrowRight, CheckCircle, Heart, Target, Users, Lightbulb } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const values = [
  {
    icon: Lightbulb,
    title: 'Clarity Over Complexity',
    desc: 'We strip away the noise and give you exactly what you need to take the next step — nothing more.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Target,
    title: 'Action Over Theory',
    desc: "Every resource we create is built to produce a real outcome — not just education, but implementation.",
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Heart,
    title: 'Beginner First',
    desc: "We never assume knowledge. We explain everything simply so you can start without a background in business.",
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Users,
    title: 'Community & Support',
    desc: 'You are never alone. We guide you through every step and connect you with a community of doers.',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const milestones = [
  { year: '2021', event: 'Simple Online Steps founded with one mission: make online business accessible to everyone.' },
  { year: '2022', event: 'Launched the first Business-in-a-Box systems. Over 500 students in the first 6 months.' },
  { year: '2023', event: 'Expanded to AI-powered business models. Helped 1,000+ students launch their first business.' },
  { year: '2024', event: 'Crossed 3,000 active students. Average student earns $2,800/month within 90 days.' },
  { year: '2025', event: 'Launched the full Systems Library with 6 Business-in-a-Box packs and a Tools directory.' },
];

const team = [
  {
    name: 'Jordan Lee',
    role: 'Founder & Lead Strategist',
    bio: 'Built 3 online businesses from scratch before 30. Obsessed with systems, automation, and helping beginners skip the mistakes.',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Aisha Patel',
    role: 'AI Business Coach',
    bio: 'Former software engineer turned AI entrepreneur. Specializes in helping people use AI tools to build service businesses.',
    img: 'https://images.pexels.com/photos/3783958/pexels-photo-3783958.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Chris Mendoza',
    role: 'Systems & Content Lead',
    bio: 'Ran a 7-figure content business. Now helps students build and launch digital products that sell on autopilot.',
    img: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const stats = [
  { label: 'Active Students', value: '3,200+' },
  { label: 'Avg. Monthly Income', value: '$2,800' },
  { label: 'Business Systems', value: '6' },
  { label: 'Countries Reached', value: '42' },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold mb-6 tracking-wide uppercase">
                Our Story
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                We Built This Because We{' '}
                <span className="text-blue-600">Needed It Too</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Simple Online Steps started when our founder hit information overload —
                dozens of courses, conflicting advice, and no clear path forward.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We created the step-by-step system we wished existed. Clear, simple, and
                beginner-friendly — so anyone can go from overwhelmed to launched, regardless
                of experience.
              </p>
              <button
                onClick={() => navigate('start-here')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Team working together"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Students launched this year</p>
                <p className="text-2xl font-extrabold text-gray-900">3,200+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-14 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-blue-600 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              To give every beginner a clear, step-by-step path to building a real online income —
              no fluff, no overwhelm, just systems that work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${val.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Real entrepreneurs who built real businesses and now help others do the same.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-52 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex gap-6 pl-14">
                  <div className="absolute left-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                  </div>
                  <div className="pt-2 pb-6">
                    <p className="text-sm font-bold text-blue-600 mb-1">{m.year}</p>
                    <p className="text-gray-600 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Our Promise to You</h2>
          <div className="space-y-3 text-left max-w-xl mx-auto mb-8">
            {[
              'Every step is clearly explained — no assumed knowledge',
              'We only recommend tools we actually use and trust',
              'You will always have a next step, never a dead end',
              'We measure success by your results, not our revenue',
            ].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">{p}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('book-call')}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
