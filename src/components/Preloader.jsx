import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.webp';

export default function Preloader({ onComplete }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = ["DISCIPLINA", "FUERZA", "RESULTADOS"];

  useEffect(() => {
    // Cycle taglines or just show the main combined text
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 bg-[#050505] z-50 flex flex-col justify-center items-center select-none"
    >
      {/* Background glow spot */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Logo Container */}
      <div className="relative flex flex-col items-center">
        {/* Outer neon breathing ring */}
        <motion.div
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.5, 0.9, 0.5],
            boxShadow: [
              "0 0 20px rgba(255, 26, 26, 0.2)",
              "0 0 50px rgba(255, 26, 26, 0.6)",
              "0 0 20px rgba(255, 26, 26, 0.2)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full border border-red-600/30"
        />

        {/* Bulldog Logo */}
        <motion.img
          src={logo}
          alt="Gymbull Logo"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-40 h-40 object-contain relative z-10 p-2 drop-shadow-[0_0_15px_rgba(255,26,26,0.4)]"
        />
      </div>

      {/* Tagline text container */}
      <div className="mt-12 overflow-hidden h-8 relative flex items-center justify-center w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex space-x-3 text-sm md:text-base tracking-[0.3em] text-zinc-400 font-medium"
        >
          <span>DISCIPLINA</span>
          <span className="text-red-550">•</span>
          <span className="text-red-550">FUERZA</span>
          <span className="text-red-550">•</span>
          <span>RESULTADOS</span>
        </motion.div>
      </div>

      {/* Bottom glowing loading indicator */}
      <div className="absolute bottom-12 w-64 h-[2px] bg-zinc-900 overflow-hidden rounded-full">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-red-600 to-transparent"
        />
      </div>
    </motion.div>
  );
}
