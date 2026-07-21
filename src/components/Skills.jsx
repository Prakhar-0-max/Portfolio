import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Coffee, Server, Zap, Database, FileCode, Layout, 
  Palette, Wind, Network, GitBranch, Send
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/portfolioData';

// Map icon string names to Lucide / Custom Icon components
const iconMap = {
  Code2,
  Coffee,
  Server,
  Zap,
  Database,
  FileCode,
  Layout,
  Palette,
  Wind,
  Network,
  GitBranch,
  Github: GithubIcon,
  Send
};

const categories = ["All", "Frontend", "Backend", "Database", "Languages", "Tools"];

const Skills = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-400">
              Technical Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Technologies and tools I use to build scalable full-stack applications.
            </p>
          </motion.div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : isDark
                  ? 'bg-slate-900/60 border border-white/10 text-slate-300 hover:border-cyan-500/30'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl glass-panel p-5 overflow-hidden transition-all border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  {/* Subtle Gradient Glow on Hover */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-15 blur-xl transition duration-500 pointer-events-none`} />

                  <div className="flex items-center justify-between mb-4">
                    {/* Skill Icon */}
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Skill Category Tag */}
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-400">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-base font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Animated Progress Bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
