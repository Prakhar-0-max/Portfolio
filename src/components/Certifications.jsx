import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Server, Coffee } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = ({ isDark }) => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Accent Orbs */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-400">
              Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-4">
              Certifications & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Badges</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Industry certifications in Node.js, Core Java, and Full-Stack Development.
            </p>
          </motion.div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl glass-panel p-6 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Icon & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
                    {cert.icon === 'Server' ? <Server className="w-6 h-6" /> : <Coffee className="w-6 h-6" />}
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> {cert.issuer}
                  </p>
                </div>

                {/* Certified Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/80 border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer status */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Completed
                </span>
                <span className="text-purple-400 font-semibold">{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
