import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileText, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Training', href: '#training' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll spy logic
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'glass-nav shadow-lg shadow-black/20 border-b border-white/10 py-3'
            : 'glass-nav-light shadow-md shadow-slate-200/50 border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>Prakhar</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions (Dark Mode + Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className={`p-2.5 rounded-full border transition-all duration-300 ${
              isDark
                ? 'bg-slate-900/80 border-white/10 text-yellow-400 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Quick Action Button */}
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg border ${
              isDark
                ? 'bg-slate-900 border-white/10 text-yellow-400'
                : 'bg-white border-slate-200 text-slate-700'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            className={`p-2.5 rounded-xl border ${
              isDark
                ? 'bg-slate-900/80 border-white/10 text-white'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b ${
              isDark
                ? 'bg-slate-950/95 border-white/10 backdrop-blur-xl'
                : 'bg-white/95 border-slate-200 backdrop-blur-xl'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.href.substring(1)
                      ? 'bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20'
                      : isDark
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-2">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
