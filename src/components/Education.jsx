import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = ({ isDark }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

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
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-4">
              Education <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Computer Applications degrees from Medi-Caps University, Indore.
            </p>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl glass-panel p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    edu.status === 'Pursuing'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {/* Degree Title & Institution */}
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-purple-300 mt-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-400" />
                    {edu.institution}
                  </p>
                </div>

                {/* Location & Duration Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.location}
                  </span>
                </div>

                {/* Coursework Details */}
                <p className={`text-xs leading-relaxed pt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {edu.details}
                </p>
              </div>

              {/* Bottom Verification Marker */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Medi-Caps University Accredited</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
