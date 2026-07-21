import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Layers, CheckCircle2, X, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

const Projects = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Accent Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-4">
              Highlighted <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Production-ready Full-Stack applications built with MERN Stack and MySQL databases.
            </p>
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass-panel p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Subtle Card Header Badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-500/30 text-cyan-300">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-xl bg-slate-900/80 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/80 border border-white/10 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-md shadow-cyan-500/20 hover:scale-[1.02] transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 transition-all"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Glassmorphism Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    {selectedProject.badge}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Full Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-heading text-cyan-400 uppercase tracking-wider">
                    Key Features & Technical Achievements:
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills in Modal */}
                <div>
                  <h4 className="text-xs font-bold font-heading text-slate-400 uppercase tracking-wider mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-white/15 text-white hover:bg-slate-800 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View GitHub Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all"
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
