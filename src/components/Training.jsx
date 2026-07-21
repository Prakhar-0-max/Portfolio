import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Award, Terminal, Code2 } from 'lucide-react';
import { trainingData } from '../data/portfolioData';

const Training = ({ isDark }) => {
  return (
    <section id="training" className="py-24 relative overflow-hidden">
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
              Professional Training
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-4">
              Training <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Industry-grade software engineering training at HCLTech.
            </p>
          </motion.div>
        </div>

        {/* Training Main Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-cyan-500/20">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      {trainingData.company}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white mt-1">
                      {trainingData.title}
                    </h3>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 font-mono text-xs w-fit">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{trainingData.duration}</span>
                </div>
              </div>

              {/* Main Description */}
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {trainingData.description}
              </p>

              {/* Learning Highlights Bullet Points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold font-heading text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4" /> Key Training Takeaways & Achievements
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {trainingData.points.map((point, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 mr-2">Core Tech:</span>
                {["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Manual Testing"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Training;
