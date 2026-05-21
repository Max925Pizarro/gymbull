import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Flame } from 'lucide-react';
import ctaBg from '../assets/cta_bg.png';

export default function FinalCTA() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/56936474703?text=Hola!%20Quiero%20comenzar%20mi%20entrenamiento%20en%20Gymbull%20y%20conocer%20los%20planes%20disponibles.', '_blank');
  };

  return (
    <section id="contacto" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      {/* Layered overlays for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/85 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-transparent to-red-950/20" />

      {/* Neon glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Animated fire tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 px-4 py-1.5 rounded-full mb-8"
        >
          <Flame size={14} className="text-red-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-sports">
            EL MOMENTO ES AHORA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl lg:text-8xl font-sports font-bold tracking-tight uppercase text-white leading-[0.95]"
        >
          TU MEJOR VERSIÓN
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-[0_0_30px_rgba(255,26,26,0.4)]">
            COMIENZA HOY
          </span>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-zinc-400 text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed px-2"
        >
          No esperes más. Cada día que no entrenas, alguien más lo hace. Habla con nosotros y activa tu membresía hoy mismo.
        </motion.p>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <button
            onClick={handleWhatsApp}
            className="relative group inline-flex items-center gap-3 px-6 md:px-16 py-4 md:py-6 bg-gradient-to-r from-red-600 to-red-750 text-white font-sports tracking-wider text-sm md:text-xl font-bold uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,26,26,0.6)] hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            {/* Pulsing ring effect */}
            <span className="absolute inset-0 rounded-sm ring-2 ring-red-500/50 animate-ping opacity-0 group-hover:opacity-100" />
            <MessageCircle size={20} className="md:w-[24px] md:h-[24px]" />
            CONTACTAR POR WHATSAPP
          </button>
        </motion.div>

        {/* Small trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-zinc-500 uppercase tracking-widest font-medium"
        >
          <span>✓ Sin permanencia forzada</span>
          <span>✓ Respuesta inmediata</span>
          <span>✓ Primera clase de prueba</span>
        </motion.div>

      </div>
    </section>
  );
}
