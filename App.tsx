import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Language, Theme } from './types';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetailQR from './pages/ServiceDetailQR';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

// Context Definitions
interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

// SEO Helper
const PageSEO = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = `${title} | SGC - Reliable Since 2001`;
  }, [title]);
  return null;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // State Initialization
  const [language, setLanguage] = useState<Language>('vn');
  const [theme, setTheme] = useState<Theme>('dark');

  // Theme Side Effects
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<><PageSEO title="Home" /><Home /></>} />
            <Route path="about" element={<><PageSEO title="About" /><About /></>} />
            <Route path="services" element={<><PageSEO title="Services" /><Services /></>} />
            <Route path="services/qr-code" element={<><PageSEO title="Dịch vụ QR Code" /><ServiceDetailQR /></>} />
            <Route path="portfolio" element={<><PageSEO title="Portfolio" /><Portfolio /></>} />
            <Route path="contact" element={<><PageSEO title="Contact" /><Contact /></>} />
            <Route path="thank-you" element={<><PageSEO title="Success" /><ThankYou /></>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;