import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Flame } from 'lucide-react';
import heroBg from '../assets/hero_bg.webp';

export default function Hero() {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/56936474703?text=Hola!%20Me%20interesa%20saber%20más%20de%2520los%2520planes%2520y%2520horarios%2520de%2520Gymbull.', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gym-black select-none">
      {/* Background Image with Cinematic Zoom/Fade */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Cinematic dark red overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/30 to-transparent" />
        {/* Subtle red spotlight glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-650/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20 flex flex-col items-center">
        {/* Tag badge with small fire icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 px-4 py-1.5 rounded-full mb-6"
        >
          <Flame size={16} className="text-red-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-sports">
            EL TEMPLO DE LA DISCIPLINA EN COLTAUCO
          </span>
        </motion.div>

        {/* Massive Aggressive Title */}
        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sports font-bold tracking-tight uppercase leading-[0.95] text-white">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            ENTRENA COMO
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-750 drop-shadow-[0_0_30px_rgba(255,26,26,0.35)]"
          >
            UNA BESTIA
          </motion.span>
        </h1>

        {/* Motivator Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm md:text-lg lg:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed px-2"
        >
          Transforma tu cuerpo, supera tus límites físicos y conviértete en tu versión más fuerte y disciplinada. Equipamiento de élite para resultados implacables.
        </motion.p>

        {/* Responsive Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center px-4"
        >
          <a
            href="#planes"
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-750 text-white font-sports tracking-wider text-base font-bold uppercase rounded-sm hover:shadow-[0_0_30px_rgba(255,26,26,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            VER PLANES ELITE
          </a>
          <button
            onClick={handleWhatsAppRedirect}
            className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-red-600 text-zinc-200 hover:text-white font-sports tracking-wider text-base font-bold uppercase rounded-sm flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageCircle size={20} className="text-red-500" />
            HABLAR POR WHATSAPP
          </button>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">SCROLL</span>
        <div className="scroll-indicator-line" />
      </motion.div>
    </section>
  );
}
