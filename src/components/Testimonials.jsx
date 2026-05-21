import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Atleta de fuerza',
    initials: 'CM',
    rating: 5,
    text: 'Gymbull cambió completamente mi vida. El ambiente es brutal, las máquinas de primer nivel y los entrenadores te empujan a dar el máximo. Bajé 18 kilos en 6 meses. Nada que envidiarle a un gym de Santiago.',
    color: 'from-red-700 to-red-900'
  },
  {
    name: 'Valentina Torres',
    role: 'Entrenamiento funcional',
    initials: 'VT',
    rating: 5,
    text: 'El mejor gym de Coltauco sin dudas. La atención es personalizada, el espacio es amplio y el ambiente te motiva desde el primer momento. Muy buenas máquinas y una comunidad increíblemente unida.',
    color: 'from-zinc-700 to-zinc-900'
  },
  {
    name: 'Felipe Rojas',
    role: 'Musculación avanzada',
    initials: 'FR',
    rating: 5,
    text: 'Llevo 2 años entrenando en Gymbull y los resultados hablan solos. Excelente ambiente, muy buena atención y los precios son justos para la calidad que ofrecen. Totalmente recomendado.',
    color: 'from-red-800 to-zinc-900'
  },
  {
    name: 'Daniela Soto',
    role: 'Acondicionamiento físico',
    initials: 'DS',
    rating: 5,
    text: 'Nunca pensé que me iba a enamorar tanto del gym. El equipo de entrenadores es muy profesional y siempre están dispuestos a orientarte. El lugar está siempre limpio y bien organizado. 100% recomendado.',
    color: 'from-zinc-800 to-red-950'
  },
  {
    name: 'Rodrigo Fuentes',
    role: 'Cardio y CrossFit',
    initials: 'RF',
    rating: 5,
    text: 'Vengo desde Rancagua a entrenar aquí. Vale totalmente el viaje. El nivel de equipamiento y la intensidad del ambiente es algo que no encuentras en gimnasios de barrio. Gymbull es serio.',
    color: 'from-red-900 to-zinc-800'
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [go]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonios" className="relative py-24 bg-[#070707] overflow-hidden">
      {/* Decorative neon lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/3 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-red-500 font-sports">RESULTADOS REALES</span>
          <h2 className="text-4xl md:text-6xl font-sports font-bold tracking-tight uppercase mt-2 text-white">
            LO QUE DICEN <span className="text-red-600 drop-shadow-[0_0_12px_rgba(255,26,26,0.3)]">NUESTROS ATLETAS</span>
          </h2>
          <div className="h-[3px] bg-red-600 w-20 mx-auto mt-4" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative overflow-hidden min-h-[300px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 md:p-12 rounded-sm w-full relative"
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-8 right-8 text-red-600/15"
                size={64}
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-red-500 fill-red-500" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-zinc-200 text-base md:text-lg leading-relaxed italic font-light mb-8">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-sports font-bold text-white text-sm flex-shrink-0 shadow-[0_0_15px_rgba(255,26,26,0.2)]`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold font-sports uppercase tracking-wide text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>

              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => go(-1)}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-red-600' : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
