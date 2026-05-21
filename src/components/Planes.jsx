import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Flame, Star, Sparkles, MessageCircle } from 'lucide-react';

export default function Planes() {
  const [activeTab, setActiveTab] = useState('mensuales');

  const categories = [
    { id: 'mensuales', label: 'Mensuales' },
    { id: 'clases', label: 'Packs Clases' },
    { id: 'elite', label: 'Membresías Élite' },
  ];

  const planes = {
    mensuales: [
      {
        name: "Full Mensual",
        price: "29.000",
        period: "mes",
        popular: true,
        badge: "MÁS POPULAR",
        features: [
          "Acceso ilimitado a musculación y cardio",
          "Acceso a todas las clases del gym",
          "Evaluación física inicial",
          "Pauta de entrenamiento digital",
          "Duchas y lockers premium",
          "Estacionamiento gratuito"
        ],
        message: "Hola! Quiero inscribirme en el plan Full Mensual de $29.000."
      },
      {
        name: "Estudiante",
        price: "19.000",
        period: "mes",
        popular: false,
        features: [
          "Acceso de Lunes a Sábado en horario especial",
          "Área de musculación y cardio completa",
          "Evaluación digital básica",
          "Matrícula liberada",
          "Duchas y lockers",
          "Estacionamiento gratuito"
        ],
        message: "Hola! Quiero inscribirme en el plan Estudiante de $19.000. Adjunto credencial de estudiante activa."
      }
    ],
    clases: [
      {
        name: "16 Clases",
        price: "26.000",
        period: "pase",
        popular: true,
        badge: "RECOMENDADO",
        features: [
          "Válido por 30 días",
          "16 ingresos a elección",
          "Clases dirigidas y musculación",
          "Acceso a vestidores y duchas",
          "Estacionamiento gratuito",
          "Ideal para entrenamiento híbrido"
        ],
        message: "Hola! Quiero inscribirme en el Pack de 16 Clases por $26.000."
      },
      {
        name: "12 Clases",
        price: "23.000",
        period: "pase",
        popular: false,
        features: [
          "Válido por 30 días",
          "12 ingresos a elección",
          "Clases dirigidas y musculación",
          "Acceso a vestidores y duchas",
          "Estacionamiento gratuito"
        ],
        message: "Hola! Quiero inscribirme en el Pack de 12 Clases por $23.000."
      },
      {
        name: "10 Clases",
        price: "20.000",
        period: "pase",
        popular: false,
        features: [
          "Válido por 30 días",
          "10 ingresos a elección",
          "Acceso total a máquinas",
          "Acceso a vestidores y duchas",
          "Flexibilidad total"
        ],
        message: "Hola! Quiero inscribirme en el Pack de 10 Clases por $20.000."
      },
      {
        name: "8 Clases",
        price: "18.000",
        period: "pase",
        popular: false,
        features: [
          "Válido por 30 días",
          "8 ingresos a elección",
          "Acceso total a máquinas",
          "Acceso a vestidores",
          "Ideal para complementar otros deportes"
        ],
        message: "Hola! Quiero inscribirme en el Pack de 8 Clases por $18.000."
      }
    ],
    elite: [
      {
        name: "Semestral Full",
        price: "147.900",
        period: "6 meses",
        popular: false,
        features: [
          "Pago único por 6 meses de acceso total",
          "Equivale a $24.650 mensuales (Ahorra 15%)",
          "Acceso libre de Lunes a Domingo",
          "2 evaluaciones físicas avanzadas",
          "Pautas personalizadas actualizables",
          "Estacionamiento e infraestructura completa"
        ],
        message: "Hola! Quiero inscribirme en la Membresía Semestral Full por $147.900."
      },
      {
        name: "Anual Full",
        price: "278.400",
        period: "12 meses",
        popular: true,
        badge: "MEJOR VALOR (AHORRA 20%)",
        features: [
          "Pago único por 12 meses de acceso total",
          "Equivale a $23.200 mensuales (Ahorro extremo)",
          "1 congelamiento de plan gratis (30 días)",
          "4 evaluaciones físicas avanzadas",
          "Pautas personalizadas mensuales",
          "Polera oficial Gymbull de regalo"
        ],
        message: "Hola! Quiero inscribirme en la Membresía Anual Full por $278.400 y obtener mi polera oficial."
      }
    ]
  };

  const handleEnroll = (message) => {
    window.open(`https://wa.me/56936474703?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planes" className="relative py-24 bg-gym-black overflow-hidden select-none">
      {/* Background radial neon glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-red-500 font-sports">TARIFAS Y MEMBRESÍAS</span>
          <h2 className="text-4xl md:text-6xl font-sports font-bold tracking-tight uppercase mt-2 text-white">
            SELECCIONA TU <span className="text-red-655 drop-shadow-[0_0_15px_rgba(255,26,26,0.3)]">PLAN DE ATAQUE</span>
          </h2>
          <div className="h-[3px] bg-red-600 w-20 mx-auto mt-4" />
          <p className="text-zinc-400 mt-6 max-w-lg mx-auto font-light text-sm md:text-base">
            Elige el plan ideal para tus objetivos. Sin contratos abusivos, disciplina absoluta y resultados reales.
          </p>
        </div>

        {/* Tab Controls (SaaS Segmented Style) */}
        <div className="flex justify-center mb-10 md:mb-16 px-4">
          <div className="bg-zinc-950 p-1 rounded-sm border border-zinc-900 grid grid-cols-3 w-full max-w-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`py-2.5 text-[10px] xs:text-xs md:text-sm font-bold font-sports uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(255,26,26,0.35)]'
                    : 'text-zinc-500 hover:text-zinc-300 bg-transparent'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Display with Smooth Animations */}
        <div className="flex justify-center px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full gap-6 md:gap-8"
            >
              {planes[activeTab].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                  className={`glass-card p-6 md:p-8 rounded-sm flex flex-col justify-between relative overflow-hidden group ${
                    plan.popular
                      ? 'border-red-600 shadow-[0_0_30px_rgba(255,26,26,0.15)] bg-zinc-900/60'
                      : 'border-white/5 hover:border-zinc-800'
                  }`}
                >
                  {/* Neon ribbon for popular plan */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-red-650 text-white font-sports font-bold tracking-widest text-[8px] md:text-[9px] uppercase px-3 py-1.5 shadow-[0_2px_10px_rgba(255,26,26,0.4)] flex items-center gap-1.5 rounded-bl-sm">
                      <Sparkles size={11} className="animate-spin-slow" />
                      {plan.badge}
                    </div>
                  )}

                  {/* Header info */}
                  <div>
                    <span className="text-zinc-550 text-xs font-bold uppercase tracking-[0.2em]">{plan.period === 'mes' ? 'PASE MENSUAL' : 'MEMBRESÍA'}</span>
                    <h3 className="text-2xl font-sports uppercase tracking-wider font-bold text-white mt-1 group-hover:text-red-500 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    
                    {/* Price display */}
                    <div className="flex items-baseline mt-6 mb-8">
                      <span className="text-lg md:text-xl font-sports text-red-500 font-bold">$</span>
                      <span className="text-5xl md:text-6xl font-sports font-bold tracking-tight text-white px-1">
                        {plan.price}
                      </span>
                      <span className="text-zinc-500 text-xs font-medium lowercase tracking-wide">
                        / {plan.period}
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-4 border-t border-zinc-900 pt-6 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-zinc-350">
                          <Check size={16} className="text-red-500 shrink-0 mt-0.5 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Purchase CTA */}
                  <button
                    onClick={() => handleEnroll(plan.message)}
                    className={`w-full py-4 font-sports uppercase tracking-wider text-sm font-bold rounded-sm flex items-center justify-center gap-2.5 transition-all duration-300 transform group-hover:-translate-y-0.5 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-red-750 text-white shadow-neon-red hover:shadow-neon-red-lg'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                    }`}
                  >
                    <MessageCircle size={16} />
                    ADQUIRIR PLAN
                  </button>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
