import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Glowing Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-t-2 border-r-2 border-cyan-400 border-b-2 border-b-transparent border-l-2 border-l-purple-500 shadow-lg shadow-cyan-500/20"
        />

        {/* Inner Glowing Icon */}
        <motion.div
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute p-4 rounded-full bg-slate-900/80 border border-white/10 text-cyan-400 shadow-xl backdrop-blur-md"
        >
          <Code2 className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-center"
      >
        <h2 className="text-xl font-bold font-heading bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          Prakhar Sethiya
        </h2>
        <p className="text-sm text-slate-400 mt-1 font-mono tracking-wider">
          Initializing Portfolio...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
