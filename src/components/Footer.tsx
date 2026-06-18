import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const footerLinks = {
  'Get Started': [
    { label: 'Start Here',           path: '/start' },
    { label: 'Business Launch Quiz', path: '/quiz' },
    { label: 'Book a Free Call',     path: '/book-a-call' },
  ],
  Systems: [
    { label: 'Business-in-a-Box',     path: '/business-in-a-box' },
    { label: 'AI Agency Launch Box',  path: '/business-in-a-box' },
    { label: 'Ebook Business Box',    path: '/business-in-a-box' },
    { label: 'Contractor Growth Box', path: '/business-in-a-box' },
  ],
  Resources: [
    { label: 'Tools Directory', path: '/tools' },
    { label: 'About Us',        path: '/about' },
  ],
};

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Footer({ onNavigate: _onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollTop} className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-white text-base">
                Simple Online<span className="text-blue-400"> Steps</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Step-by-step systems that help beginners build real online businesses with AI and
              proven strategies.
            </p>
            <Link
              to="/book-a-call"
              onClick={scrollTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      onClick={scrollTop}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Simple Online Steps. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
