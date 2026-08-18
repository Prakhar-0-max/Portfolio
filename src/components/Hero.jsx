import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowRight, MapPin, CheckCircle, Code2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ isDark }) => {
  // Typing Animation logic
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = personalInfo.titles[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % personalInfo.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Animated Gradient Mesh Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Open for Opportunities &bull; {personalInfo.availability}</span>
            </div>

            {/* Main Name */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              {/* Typing Animation Subtitle */}
              <div className="mt-3 text-xl sm:text-2xl font-bold font-mono text-slate-300 flex items-center gap-2 h-10">
                <span className="text-cyan-400">&gt;</span>
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Professional Summary */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
              "{personalInfo.summary}"
            </p>

            {/* Recruiter Badge Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-xs rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 font-mono flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> MCA Graduate Medi-Caps
              </span>
              <span className="px-3 py-1 text-xs rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 font-mono flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" /> MERN Stack Developer Intern
              </span>
              <span className="px-3 py-1 text-xs rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Indore / Remote
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* View Resume Button */}
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <FileText className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>View Resume</span>
              </a>

              {/* Hire Me Button */}
              <a
                href={`mailto:${personalInfo.email}`}
                className={`group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${isDark
                    ? 'bg-slate-900/80 border-white/15 text-white hover:bg-slate-800 hover:border-cyan-500/40'
                    : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 shadow-sm'
                  }`}
              >
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4">
              <span className={`text-xs font-mono tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                CONNECT WITH ME:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic Card (Clean Visual Tech Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-2xl group-hover:opacity-100 transition duration-1000 animate-pulse-slow" />

              {/* Main Glass Card */}
              <div className="relative rounded-3xl glass-panel p-6 shadow-2xl space-y-6 border border-white/10">

                {/* Tech Badge Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-md">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-white">Full Stack Stack</h3>
                      <p className="text-xs font-mono text-cyan-400">MERN & Java Ecosystem</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    MCA Graduate
                  </span>
                </div>

                {/* Tech Stack Pills Showcase */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>PRIMARY STACK</span>
                    <span className="text-cyan-400 font-semibold">100% Production Ready</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Java", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", "REST APIs", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900/80 border border-white/10 text-cyan-300 shadow-sm hover:border-cyan-500/40 hover:scale-105 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Stats Grid inside card */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {personalInfo.stats.map((stat, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 text-center">
                      <div className="text-xl font-bold font-heading bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
