import React from 'react';
import { motion } from 'framer-motion';

export default function IntroPanel({ onEnter }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute left-6 top-6 md:left-12 md:top-14 max-w-xl text-white/90"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm shadow-[0_0_80px_-20px_rgba(0,255,255,0.35)]">
        <div className="grid grid-cols-5">
          <div className="col-span-2 min-h-[180px] md:min-h-[220px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.3),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)]" />
          <div className="col-span-3 p-5 md:p-7">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Hi, I’m <span className="text-cyan-300">BHARGAV K B</span> 👋
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/70">
              CSE student crafting immersive web experiences at the intersection of code, design, and 3D.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={onEnter}
                className="px-4 py-2 rounded-md bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-500/30 hover:border-cyan-300 transition-colors"
              >
                Enter Workspace
              </button>
              <a
                href="#contact"
                className="px-4 py-2 rounded-md border border-white/10 hover:border-white/20 text-white/80 hover:text-white/100 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
