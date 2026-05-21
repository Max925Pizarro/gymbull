import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ShieldAlert, Award, Users, DollarSign, Target, Trophy, Clock, Flame } from 'lucide-react';

export default function Experience() {
  const benefits = [
    {
      icon: <Dumbbell size={32} className="text-red-500" />,
      title: "Máquinas de Alto Nivel",
      desc: "Equipamiento de fuerza y cardio de grado biomecánico profesional para máxima efectividad y seguridad."
    },
    {
      icon: <Flame size={32} className="text-red-500" />,
      title: "Ambiente Motivador",
      desc: "Luces intensas, audio potente y una vibra de alto impacto diseñada exclusivamente para potenciar tu foco."
    },
    {
      icon: <Award size={32} className="text-red-500" />,
      title: "Entrenadores Capacitados",
      desc: "Asesoría experta que diseña, corrige y te empuja a romper tus límites personales sesión tras sesión."
    },
    {
      icon: <Users size={32} className="text-red-500" />,
      title: "Comunidad Fitness",
      desc: "Únete a un grupo serio de atletas y compañeros enfocados en la disciplina y la superación mutua."
    },
    {
      icon: <DollarSign size={32} className="text-red-500" />,
      title: "Planes Accesibles",
      desc: "Diferentes modalidades mensuales, semestrales y anuales para adaptarnos a tu ritmo sin comprometer calidad."
    },
    {
      icon: <Target size={32} className="text-red-500" />,
      title: "Entrenamiento Funcional",
      desc: "Áreas dedicadas a potencia, agilidad, resistencia y calistenia con turf premium y equipamiento Rogue."
    }
  ];

  const stats = [
    { value: "800+", label: "Clientes Activos", icon: <Users className="text-red-500" size={24} /> },
    { value: "50K+", label: "Horas de Entrenamiento", icon: <Clock className="text-red-500" size={24} /> },
    { value: "8+", label: "Años de Experiencia", icon: <Trophy className="text-red-500" size={24} /> }
  ];

  // Motion variants for container and card items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="experiencia" className="relative py-24 bg-gym-black bg-concrete-pattern overflow-hidden">
      {/* Decorative side red glowing lights */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-bold uppercase tracking-widest text-red-500 font-sports"
          >
            NUESTRO ADN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-sports font-bold tracking-tight uppercase mt-2 text-white"
          >
            LA EXPERIENCIA <span className="text-red-650 drop-shadow-[0_0_15px_rgba(255,26,26,0.3)]">GYMBULL</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[3px] bg-red-600 mx-auto mt-4"
          />
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-sm relative group hover:scale-[1.02]"
            >
              {/* Corner accent line */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-zinc-800 group-hover:bg-red-600 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-zinc-800 group-hover:bg-red-600 transition-colors duration-300" />
              
              <div className="mb-5 bg-zinc-900/50 p-3.5 rounded-sm inline-block group-hover:bg-red-600/10 group-hover:scale-110 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-sports tracking-wide uppercase font-bold text-white mb-2.5 group-hover:text-red-500 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Banner */}
        <div className="mt-16 md:mt-24 border-t border-b border-zinc-900/80 py-8 md:py-12 bg-black/40 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="mb-2 bg-red-600/10 p-2.5 rounded-full drop-shadow-[0_0_10px_rgba(255,26,26,0.1)]">
                  {stat.icon}
                </div>
                <span className="text-5xl md:text-6xl font-sports font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,26,26,0.15)]">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
