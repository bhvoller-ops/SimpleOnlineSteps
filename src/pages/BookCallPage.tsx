import { useState } from 'react';
import { CheckCircle, Clock, Users, Star, MessageCircle, Phone } from 'lucide-react';

const benefits = [
  'Identify the best business model for YOUR situation',
  'Get a custom 30-day action plan, step by step',
  'Learn which AI tools to use and how',
  'Ask any questions — nothing is too basic',
  'Walk away with complete clarity and confidence',
];

const faqs = [
  {
    q: 'Is the call really free?',
    a: "Yes, 100% free. No credit card, no obligation. We want to make sure you're matched with the right path before you invest in anything.",
  },
  {
    q: 'Who will I be talking to?',
    a: 'You will speak directly with one of our business coaches — a real entrepreneur who has built online income using these systems.',
  },
  {
    q: 'What if I have no business experience?',
    a: "Perfect — most of our students start with zero experience. The call is designed specifically to help beginners find their starting point.",
  },
  {
    q: 'How long is the call?',
    a: 'We schedule 30 minutes, though many calls run a bit longer if needed. Come with questions — there are no dumb ones.',
  },
  {
    q: 'Will I be pressured to buy anything?',
    a: "Absolutely not. We hate pushy sales tactics. If there's a system that fits you, we'll tell you about it. If not, we'll still give you a clear next step.",
  },
];

interface BookCallPageProps {
  onNavigate: (page: string) => void;
}

export default function BookCallPage({ onNavigate: _onNavigate }: BookCallPageProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    goal: '',
    experience: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-semibold mb-6 tracking-wide uppercase">
            Free — No Obligation
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Book a Free{' '}
            <span className="text-blue-600">Strategy Call</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            30 minutes with a real business coach. Walk away with clarity on your best
            business model, your first steps, and a custom action plan.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* What you get */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-4">What You'll Get</h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call details */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Call Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">30 Minutes</p>
                    <p className="text-blue-200 text-xs">Via Zoom or phone</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">1-on-1 Coaching</p>
                    <p className="text-blue-200 text-xs">Private, personalized session</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">No Sales Pressure</p>
                    <p className="text-blue-200 text-xs">Zero obligation, ever</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mb-3">
                "The call completely changed my direction. I had been spinning my wheels for months.
                In 30 minutes, I had a clear plan."
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60"
                  alt="Priya S."
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-xs">Priya S.</p>
                  <p className="text-gray-400 text-xs">Freelance Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                  You're Booked!
                </h2>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                  We've received your request. You'll get a confirmation email within 2 hours with
                  your call link and prep guide.
                </p>
                <div className="flex items-center gap-2 justify-center text-blue-600">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Check your inbox for next steps.
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Call</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Jordan"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Lee"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      What's your #1 goal? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="goal"
                      required
                      value={form.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white text-gray-700"
                    >
                      <option value="">Select a goal...</option>
                      <option value="replace">Replace my 9-5 income</option>
                      <option value="side">Earn extra income on the side</option>
                      <option value="scale">Scale an existing business</option>
                      <option value="learn">Learn AI and modern business tools</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Online business experience
                    </label>
                    <select
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white text-gray-700"
                    >
                      <option value="">Select your level...</option>
                      <option value="none">Complete beginner</option>
                      <option value="some">Tried a few things, no real results yet</option>
                      <option value="moderate">Have some experience</option>
                      <option value="experienced">Already making income online</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Hours available per week
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white text-gray-700"
                    >
                      <option value="">Select hours...</option>
                      <option value="low">Less than 5 hours</option>
                      <option value="medium">5 to 10 hours</option>
                      <option value="high">10 to 20 hours</option>
                      <option value="full">20+ hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Anything specific you want help with? (optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share any questions or context..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-lg shadow-blue-600/20"
                  >
                    Book My Free Strategy Call
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    No spam. No sales pressure. Just clarity.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-14 max-w-2xl mx-auto">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-semibold text-gray-900 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <span className="text-gray-400 ml-4 flex-shrink-0 font-light text-xl leading-none">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
