import React from 'react';
import { Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ isDark }) => {
  return (
    <footer className={`border-t transition-colors ${
      isDark ? 'bg-slate-950 border-white/10 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Copyright */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-md">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                Prakhar Sethiya
              </span>
            </a>
            <p className="text-xs font-mono text-slate-500">
              MERN Stack Developer &bull; Java Developer &bull; MCA Graduate
            </p>
          </div>

          {/* Center Copyright Tagline */}
          <div className="text-center">
            <p className="text-xs font-mono text-slate-400">
              &copy; 2026 Prakhar Sethiya. All rights reserved.
            </p>
          </div>

          {/* Right Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
