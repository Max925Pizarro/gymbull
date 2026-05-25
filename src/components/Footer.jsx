import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import logo from '../assets/logo.webp';

// Custom SVG social icons (lucide-react doesn't include brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Planes', href: '#planes' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  const socials = [
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: <FacebookIcon />, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: <YoutubeIcon />, href: 'https://www.youtube.com/', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 overflow-hidden">
      {/* Top glowing red separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      {/* Decorative background dot pattern */}
      <div className="absolute inset-0 bg-concrete-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 group mb-6">
              <img
                src={logo}
                alt="Gymbull"
                className="w-14 h-14 object-contain drop-shadow-[0_0_8px_rgba(255,26,26,0.25)] group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-sports tracking-wider font-bold text-white">
                GYM<span className="text-red-500">BULL</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              El gimnasio de alto rendimiento más serio y motivador de Coltauco. Forjamos bestias, construimos resultados.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-sports uppercase tracking-widest font-bold text-white mb-6">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-500 hover:text-red-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-red-600 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-sports uppercase tracking-widest font-bold text-white mb-6">
              CONTACTO
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-500">
                <MapPin className="text-red-500 shrink-0 mt-0.5" size={16} />
                <span>Av. Arturo Prat 534,<br />Coltauco, Región del Libertador</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <Phone className="text-red-500 shrink-0" size={16} />
                <a
                  href="tel:+56936474703"
                  className="hover:text-red-400 transition-colors"
                >
                  +56 9 3647 4703
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios Summary */}
          <div>
            <h4 className="text-sm font-sports uppercase tracking-widest font-bold text-white mb-6">
              HORARIOS
            </h4>
            <ul className="space-y-4">
              {[
                { day: 'Lun — Vie', hours: '06:00 — 22:00' },
                { day: 'Sábado', hours: '09:00 — 18:00' },
                { day: 'Dom y Festivos', hours: 'Cerrado' },
              ].map((item) => (
                <li key={item.day} className="flex items-center justify-between text-sm border-b border-zinc-900/60 pb-3">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Clock className="text-red-600" size={13} />
                    <span>{item.day}</span>
                  </div>
                  <span className={`font-sports font-bold text-xs tracking-wider ${
                    item.hours === 'Cerrado' ? 'text-zinc-700' : 'text-white'
                  }`}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 uppercase tracking-widest">
          <p>© {currentYear} Gymbull Coltauco. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            Hecho con <span className="text-red-600">♥</span> en Coltauco, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
