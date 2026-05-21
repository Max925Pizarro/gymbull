import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, XCircle, Sun, Sunset, Moon } from 'lucide-react';

export default function Horarios() {
  const [currentStatus, setCurrentStatus] = useState({ open: false, label: '' });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const hour = now.getHours();
      const minute = now.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      if (day >= 1 && day <= 5) {
        // Mon-Fri: 6:00 to 22:00
        if (timeInMinutes >= 360 && timeInMinutes < 1320) {
          setCurrentStatus({ open: true, label: 'ABIERTO AHORA' });
        } else {
          setCurrentStatus({ open: false, label: 'CERRADO' });
        }
      } else if (day === 6) {
        // Saturday: 9:00 to 18:00
        if (timeInMinutes >= 540 && timeInMinutes < 1080) {
          setCurrentStatus({ open: true, label: 'ABIERTO AHORA' });
        } else {
          setCurrentStatus({ open: false, label: 'CERRADO' });
        }
      } else {
        // Sunday
        setCurrentStatus({ open: false, label: 'CERRADO HOY' });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const schedules = [
    {
      day: 'Lunes — Viernes',
      hours: '06:00 — 22:00',
      sub: 'Días de semana completos',
      icon: <Sun className="text-red-500" size={24} />,
      isOpen: true
    },
    {
      day: 'Sábado',
      hours: '09:00 — 18:00',
      sub: 'Mañana y tarde',
      icon: <Sunset className="text-red-500" size={24} />,
      isOpen: true
    },
    {
      day: 'Domingo y Festivos',
      hours: 'Cerrado',
      sub: 'Día de recuperación',
      icon: <Moon className="text-zinc-600" size={24} />,
      isOpen: false
    }
  ];

  return (
    <section id="horarios" className="relative py-24 bg-[#080808] overflow-hidden">
      {/* Neon line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      {/* Neon line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-red-500 font-sports">PLANIFICA TU ENTRENAMIENTO</span>
          <h2 className="text-4xl md:text-6xl font-sports font-bold tracking-tight uppercase mt-2 text-white">
            HORARIOS <span className="text-red-600 drop-shadow-[0_0_12px_rgba(255,26,26,0.3)]">DE ENTRENAMIENTO</span>
          </h2>
          <div className="h-[3px] bg-red-600 w-20 mx-auto mt-4" />
        </div>

        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border font-sports font-bold tracking-widest text-sm uppercase ${
            currentStatus.open
              ? 'bg-green-950/40 border-green-600/40 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]'
              : 'bg-red-950/40 border-red-600/40 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]'
          }`}>
            {currentStatus.open
              ? <><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />{currentStatus.label}</>
              : <><div className="w-2 h-2 rounded-full bg-red-500" />{currentStatus.label}</>
            }
          </div>
        </motion.div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {schedules.map((schedule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative glass-card p-6 md:p-8 rounded-sm text-center flex flex-col items-center gap-4 ${
                !schedule.isOpen ? 'opacity-50' : ''
              }`}
            >
              {/* Icon circle */}
              <div className={`p-4 rounded-full ${schedule.isOpen ? 'bg-red-600/10' : 'bg-zinc-900'}`}>
                {schedule.icon}
              </div>

              {/* Day label */}
              <h3 className="text-base font-sports uppercase tracking-wider font-bold text-white">
                {schedule.day}
              </h3>

              {/* Red divider */}
              <div className={`w-12 h-[2px] ${schedule.isOpen ? 'bg-red-600' : 'bg-zinc-700'}`} />

              {/* Hours */}
              <p className={`text-2xl md:text-3xl font-sports font-bold tracking-tight ${
                schedule.isOpen ? 'text-white' : 'text-zinc-600'
              }`}>
                {schedule.hours}
              </p>

              {/* Sub label */}
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                {schedule.sub}
              </span>

              {/* Open/Closed badge */}
              <div className={`flex items-center gap-2 mt-2 text-xs font-bold uppercase tracking-widest ${
                schedule.isOpen ? 'text-green-500' : 'text-zinc-600'
              }`}>
                {schedule.isOpen
                  ? <><CheckCircle2 size={14} /> Abierto</>
                  : <><XCircle size={14} /> Cerrado</>
                }
              </div>

              {/* Glowing top border on open days */}
              {schedule.isOpen && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-zinc-600 text-xs mt-8 tracking-wider uppercase font-medium"
        >
          * Los horarios pueden variar en fechas festivas especiales. Consulta por WhatsApp.
        </motion.p>

      </div>
    </section>
  );
}
