import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.webp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Planes', href: '#planes' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/56936474703?text=Hola!%20Quiero%20unirme%20a%20Pitbull%20Gym%20y%20comenzar%20mi%20entrenamiento.', '_blank');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-45 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo and Brand Name */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Gymbull Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,26,26,0.3)]"
            />
            <span className="text-xl font-sports tracking-wider uppercase font-bold text-white group-hover:text-red-500 transition-colors duration-300">
              GYM<span className="text-red-650">BULL</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-zinc-300 hover:text-white relative py-2 group transition-colors duration-300"
              >
                {link.name}
                {/* Neon bottom line animation on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#ff1a1a]" />
              </a>
            ))}
          </div>

          {/* CTA Right Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleWhatsAppRedirect}
              className="relative px-6 py-2.5 overflow-hidden group rounded-sm font-sports uppercase tracking-wider text-sm font-bold text-white transition-all duration-300 border border-red-600 hover:border-transparent"
            >
              {/* Button bg hover glow */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-750 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                ÚNETE HOY
              </span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-300 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between px-8 py-20 lg:hidden overflow-y-auto"
          >
            {/* Dark Concrete Grid Pattern & glows for texture */}
            <div className="absolute inset-0 bg-concrete-pattern opacity-10 pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[100px] -top-10 -right-10 pointer-events-none" />
            
            <div className="flex flex-col space-y-5 relative z-10 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-sports tracking-widest uppercase font-bold text-zinc-300 hover:text-red-500 transition-colors duration-300 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="w-0 h-[2px] bg-red-600 group-hover:w-16 transition-all duration-300 shadow-[0_0_8px_#ff1a1a]" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
                className="pt-8"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleWhatsAppRedirect();
                  }}
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-750 hover:shadow-neon-red-lg font-sports tracking-wider text-lg font-bold text-white uppercase rounded-sm flex items-center justify-center gap-3 transition-all duration-300"
                >
                  <Phone size={20} />
                  ÚNETE HOY
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
