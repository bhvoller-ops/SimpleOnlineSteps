import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StartHerePage from './pages/StartHerePage';
import BusinessBoxPage from './pages/BusinessBoxPage';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import BookCallPage from './pages/BookCallPage';

type Page = 'home' | 'start-here' | 'business-box' | 'tools' | 'about' | 'book-call';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'start-here':
        return <StartHerePage onNavigate={navigate} />;
      case 'business-box':
        return <BusinessBoxPage onNavigate={navigate} />;
      case 'tools':
        return <ToolsPage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'book-call':
        return <BookCallPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
