import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StartHerePage from './pages/StartHerePage';
import BusinessBoxPage from './pages/BusinessBoxPage';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import BookCallPage from './pages/BookCallPage';
import QuizPage from './pages/QuizPage';
import StartPage from './pages/StartPage';
import AIAgencyLaunchKitPage from './pages/AIAgencyLaunchKitPage';
import ThankYouPage from './pages/ThankYouPage';
import ThankYouLaunchKitPage from './pages/ThankYouLaunchKitPage';
import DownloadsPage from './pages/DownloadsPage';
import LaunchKitDownloadsPage from './pages/LaunchKitDownloadsPage';

const PAGE_ROUTES: Record<string, string> = {
  home:                    '/',
  'start-here':            '/start',
  start:                   '/start',
  quiz:                    '/quiz',
  'book-call':             '/book-a-call',
  'business-box':          '/business-in-a-box',
  tools:                   '/tools',
  about:                   '/about',
  'business-quiz':         '/business-quiz',
  'ai-agency-launch-kit':  '/ai-agency-launch-kit',
  'thank-you':             '/thank-you',
  'thank-you-launch-kit':  '/thank-you-launch-kit',
  'downloads':             '/downloads',
  'launch-kit-downloads':  '/launch-kit-downloads',
};

export default function App() {
  const nav = useNavigate();

  const onNavigate = (page: string) => {
    const path = PAGE_ROUTES[page] ?? '/';
    nav(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="flex-1">
        <Routes>
          <Route path="/"                     element={<HomePage               onNavigate={onNavigate} />} />
          <Route path="/start"                element={<StartHerePage          onNavigate={onNavigate} />} />
          <Route path="/quiz"                 element={<QuizPage               onNavigate={onNavigate} />} />
          <Route path="/book-a-call"          element={<BookCallPage           onNavigate={onNavigate} />} />
          <Route path="/business-in-a-box"    element={<BusinessBoxPage        onNavigate={onNavigate} />} />
          <Route path="/tools"                element={<ToolsPage              onNavigate={onNavigate} />} />
          <Route path="/about"                element={<AboutPage              onNavigate={onNavigate} />} />
          <Route path="/business-quiz"        element={<StartPage              onNavigate={onNavigate} />} />
          <Route path="/ai-agency-launch-kit" element={<AIAgencyLaunchKitPage  onNavigate={onNavigate} />} />
          <Route path="/thank-you"            element={<ThankYouPage           onNavigate={onNavigate} />} />
          <Route path="/thank-you-launch-kit" element={<ThankYouLaunchKitPage  onNavigate={onNavigate} />} />
          <Route path="/downloads"            element={<DownloadsPage          onNavigate={onNavigate} />} />
          <Route path="/launch-kit-downloads" element={<LaunchKitDownloadsPage onNavigate={onNavigate} />} />
          <Route path="*"                     element={<HomePage               onNavigate={onNavigate} />} />
        </Routes>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
