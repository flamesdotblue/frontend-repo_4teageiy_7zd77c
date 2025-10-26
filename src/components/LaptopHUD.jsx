import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, FolderGit2, Mail } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'about', label: 'About Me', icon: User },
  { key: 'skills', label: 'Skills', icon: Code2 },
  { key: 'projects', label: 'Projects', icon: FolderGit2 },
  { key: 'contact', label: 'Contact', icon: Mail },
];

export default function LaptopHUD({ active, onChange }) {
  return (
    <div className="absolute inset-0 grid place-items-center pointer-events-none">
      <motion.div
        className="pointer-events-auto w-[92vw] max-w-[980px] aspect-[16/10] rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-[0_0_120px_-20px_rgba(0,255,255,0.45)]"
        initial={{ scale: 0.92, rotateX: 8, rotateZ: -2, y: 20, opacity: 0 }}
        animate={{ scale: 1, rotateX: 0, rotateZ: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_80%_90%,rgba(168,85,247,0.18),transparent_50%)]" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-2 px-4 pt-3">
              {tabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => onChange(key)}
                  className={`group inline-flex items-center gap-2 px-3 py-2 rounded-md transition-all border ${
                    active === key
                      ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                      : 'border-white/10 text-white/70 hover:text-white/90 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${active === key ? 'text-cyan-300' : 'text-white/60 group-hover:text-white/80'}`} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>

            <div className="relative flex-1 mt-2">
              <AnimatePresence mode="wait">
                {active === 'home' && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full grid place-items-center text-center p-8"
                  >
                    <div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-white">
                        Welcome to my workspace
                      </h2>
                      <p className="mt-2 text-white/70 max-w-xl mx-auto">
                        Explore my background, skills, selected projects, and ways to reach me — all inside this interactive screen.
                      </p>
                    </div>
                  </motion.div>
                )}

                {active === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full overflow-y-auto p-6 space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white">About Me</h3>
                    <p className="text-white/80 leading-relaxed">
                      I’m Bhargav K B, a Computer Science student passionate about building immersive, performant web applications. I love blending creative visuals with robust engineering — from interactive 3D scenes to clean, accessible UI.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-white/80">
                      <li className="p-4 rounded-lg bg-white/5 border border-white/10">Focused on modern web and 3D experiences</li>
                      <li className="p-4 rounded-lg bg-white/5 border border-white/10">Strong fundamentals in data structures and algorithms</li>
                      <li className="p-4 rounded-lg bg-white/5 border border-white/10">Curious, iterative, and detail-oriented</li>
                      <li className="p-4 rounded-lg bg-white/5 border border-white/10">Loves TypeScript, React, and creative coding</li>
                    </ul>
                  </motion.div>
                )}

                {active === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="h-full overflow-y-auto p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['JavaScript', 'TypeScript', 'React', 'Three.js', 'Node.js', 'Python', 'Tailwind', 'Git'].map((skill) => (
                        <div
                          key={skill}
                          className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors"
                        >
                          <p className="text-white/80 group-hover:text-cyan-200 text-sm font-medium">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {active === 'projects' && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="h-full overflow-y-auto p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Projects</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: 'Cinematic 3D Portfolio', desc: 'A web-based portfolio with immersive camera motion and 3D interactions.' },
                        { title: 'Realtime Chat', desc: 'Socket-powered chat app with typing indicators and presence.' },
                        { title: 'Algo Visualizer', desc: 'Interactive visualizations for classic algorithms and data structures.' },
                        { title: 'Design System', desc: 'Reusable UI components with accessibility and theming.' },
                      ].map((p) => (
                        <div key={p.title} className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                          <h4 className="text-white font-medium">{p.title}</h4>
                          <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {active === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="h-full p-6 flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-semibold text-white">Contact</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a href="mailto:bhargav@example.com" className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors text-white/80">Gmail</a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors text-white/80">LinkedIn</a>
                      <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors text-white/80">GitHub</a>
                      <form onSubmit={(e)=>e.preventDefault()} className="p-4 rounded-lg border border-white/10 bg-white/5 flex flex-col gap-2">
                        <input className="bg-black/40 border border-white/10 rounded px-3 py-2 text-white placeholder-white/40" placeholder="Your email" />
                        <textarea className="bg-black/40 border border-white/10 rounded px-3 py-2 text-white placeholder-white/40" rows={3} placeholder="Message" />
                        <button className="self-start px-3 py-2 rounded-md bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 hover:bg-cyan-500/30 hover:border-cyan-300 transition-colors">Send</button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-16 opacity-60 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.25),transparent_60%)]" />
        </div>
      </motion.div>
    </div>
  );
}
