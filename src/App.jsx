import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Scene from './components/Scene';
import IntroPanel from './components/IntroPanel';
import LaptopHUD from './components/LaptopHUD';
import NeonAtmosphere from './components/NeonAtmosphere';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'laptop'
  const [section, setSection] = useState('home');
  const camera = useAnimation();

  const goToLaptop = useCallback(async () => {
    await camera.start({
      y: 0,
      rotateX: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    });
    setView('laptop');
  }, [camera]);

  const goHome = useCallback(async () => {
    setView('home');
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      if (e.deltaY > 8 && view === 'home') {
        e.preventDefault();
        goToLaptop();
      }
      if (e.deltaY < -8 && view === 'laptop') {
        e.preventDefault();
        goHome();
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [view, goToLaptop, goHome]);

  const handleTabChange = async (key) => {
    if (key === 'home') {
      // reverse zoom to landing
      await camera.start({
        y: 20,
        rotateX: 6,
        rotateZ: -2,
        scale: 0.92,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
      });
      setView('home');
      setSection('home');
      return;
    }
    // subtle pullback, then push-in for cinematic feel
    await camera.start({
      y: -12,
      rotateX: -3,
      rotateZ: 1.2,
      scale: 0.96,
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    });
    setSection(key);
    await camera.start({
      y: 0,
      rotateX: 0,
      rotateZ: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Scene />
      <NeonAtmosphere />

      <AnimatePresence>
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <IntroPanel onEnter={goToLaptop} />
            <div className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-white/60">
              <p className="text-xs md:text-sm">Scroll or click "Enter Workspace" to zoom into the laptop</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {view === 'laptop' && (
          <motion.div
            key="laptop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <motion.div animate={camera} className="absolute inset-0">
              <LaptopHUD active={section} onChange={handleTabChange} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}
