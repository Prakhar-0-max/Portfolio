import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Training from './components/Training';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for smooth initial state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-slate-950 text-slate-100 bg-mesh' : 'bg-slate-50 text-slate-900 bg-mesh-light'
    }`}>
      {/* Initial Animated Loading Screen */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="relative overflow-x-hidden">
          {/* Top Sticky Glass Navigation */}
          <Navbar isDark={isDark} setIsDark={setIsDark} />

          {/* Main Content Sections */}
          <main>
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Skills isDark={isDark} />
            <Training isDark={isDark} />
            <Education isDark={isDark} />
            <Projects isDark={isDark} />
            <Certifications isDark={isDark} />
            <Contact isDark={isDark} />
          </main>

          {/* Footer & Floating Action Button */}
          <Footer isDark={isDark} />
          <BackToTop />
        </div>
      )}
    </div>
  );
}

export default App;
