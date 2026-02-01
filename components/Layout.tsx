import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, ChevronRight } from 'lucide-react';
import { useAppContext } from '../App';
import { CONTENT } from '../constants';

const Layout: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = CONTENT[language];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/about', label: t.nav.about },
    { path: '/portfolio', label: t.nav.portfolio },
    { path: '/contact', label: t.nav.contact },
  ];

  // Reusable Logo Component
  const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      {/* Logo Mark */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-lg shadow-lg shadow-brand-600/20 group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20l10-16" />
          <path d="M6 6l4-4" />
          <path d="M18 18l-4 4" />
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white leading-none group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          SGC
        </span>
        <span className="text-[0.65rem] font-bold tracking-[0.25em] text-gray-500 dark:text-gray-400 uppercase leading-none mt-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
          Technology
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400 ${
                      isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-600 dark:text-gray-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Controls */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'vn' ? 'en' : 'vn')}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Language"
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* CTA Button */}
              <Link to="/contact" className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-all shadow-md shadow-brand-600/20">
                {t.common.contactUs}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300"
              >
                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4">
                 <button
                  onClick={() => {
                    setLanguage(language === 'vn' ? 'en' : 'vn');
                    closeMenu();
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200"
                >
                  <span>{t.common.language}</span>
                  <div className="flex items-center gap-2">
                    <Globe size={18} />
                    <span>{language === 'vn' ? 'Tiếng Việt' : 'English'}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Link to="/">
                <Logo />
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-4">
                {t.home.heroDescription.split(':')[0]}.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {t.nav.services}
              </h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">WordPress</Link></li>
                <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">AI Solutions</Link></li>
                <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">QR Code</Link></li>
                <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">Automation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {t.nav.about}
              </h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">Mission & Vision</Link></li>
                <li><Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">{t.nav.portfolio}</Link></li>
                <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors">{t.nav.contact}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {t.contact.title}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                   <a href="mailto:info@sgc.vn" className="hover:text-brand-600 transition-colors">Email: info@sgc.vn</a>
                </li>
                <li>
                   <a href="tel:0833246247" className="hover:text-brand-600 transition-colors">Tel: 0833 246 247</a>
                </li>
                <li>
                   <a href="https://zalo.me/0913732102" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Zalo: 0913 732 102</a>
                </li>
                <li>
                   <a href="http://www.SGC.vn" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Web: www.SGC.vn</a>
                </li>
                <li>{t.contact.office}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left">
              © 2025 SGC - Reliable Since 2001. {t.common.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;