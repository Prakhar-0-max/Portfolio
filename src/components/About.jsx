import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code2, Database, ShieldCheck, Cpu } from 'lucide-react';
import { aboutContent, personalInfo } from '../data/portfolioData';

const About = ({ isDark }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent Orbs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              Get To Know Me
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {aboutContent.subheading}
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Glass Card with Highlights & Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl glass-panel p-8 relative overflow-hidden space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">MCA Candidate</h3>
                  <p className="text-xs font-mono text-cyan-400">Medi-Caps University (2024–2026)</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {aboutContent.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all"
                  >
                    <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Location & Relocation Tag */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/20 text-xs text-slate-300 flex items-center justify-between">
                <span className="font-mono text-cyan-400">Location Status:</span>
                <span className="font-semibold text-slate-100">{personalInfo.relocation}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs & Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {aboutContent.bio.map((paragraph, index) => (
                <p key={index} className="p-4 rounded-2xl glass-panel border border-white/5">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-white/5 text-center hover:border-cyan-500/40 transition-all">
                <Code2 className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">MERN Stack</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">React & Node.js</p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/5 text-center hover:border-purple-500/40 transition-all">
                <Cpu className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Java Backend</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">OOPs & Logic</p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/5 text-center hover:border-blue-500/40 transition-all col-span-2 sm:col-span-1">
                <Database className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Databases</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">MongoDB & MySQL</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
