import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import gallery1 from '../assets/gallery_1.png';
import gallery2 from '../assets/gallery_2.png';
import gallery3 from '../assets/gallery_3.png';

// For gallery items without generated images, use styled placeholders
const GymPlaceholder = ({ label, gradient }) => (
  <div className={`w-full h-full ${gradient} flex items-center justify-center`}>
    <span className="text-white/30 font-sports uppercase tracking-widest text-xs text-center px-4">{label}</span>
  </div>
);

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { img: gallery1, label: 'Battle Ropes Training', tall: true },
    { img: gallery2, label: 'Dumbbell Rack Premium', tall: false },
    { img: gallery3, label: 'Power Squat Zone', tall: false },
    {
      img: null,
      label: 'Zona de Cardio Elite',
      gradient: 'bg-gradient-to-br from-red-950/60 via-zinc-900 to-black',
      tall: true
    },
    {
      img: null,
      label: 'Área Funcional',
      gradient: 'bg-gradient-to-br from-zinc-900 via-red-950/40 to-black',
      tall: false
    },
    {
      img: null,
      label: 'Ambiente Gymbull',
      gradient: 'bg-gradient-to-br from-black via-zinc-900 to-red-950/50',
      tall: false
    },
  ];

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = () => setCurrentIndex((p) => (p - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((p) => (p + 1) % items.length);

  return (
    <section id="galeria" className="relative py-24 bg-gym-black overflow-hidden">
      <div className="absolute inset-0 bg-concrete-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-red-500 font-sports">ATMÓSFERA GYMBULL</span>
          <h2 className="text-4xl md:text-6xl font-sports font-bold tracking-tight uppercase mt-2 text-white">
            GALERÍA <span className="text-red-600 drop-shadow-[0_0_12px_rgba(255,26,26,0.3)]">ELITE</span>
          </h2>
          <div className="h-[3px] bg-red-600 w-20 mx-auto mt-4" />
          <p className="text-zinc-500 text-sm mt-4 max-w-md mx-auto">
            Un vistazo al templo donde se forjan bestias. Equipamiento serio para resultados serios.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] px-4 md:px-0">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openLightbox(idx)}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${item.tall ? 'row-span-2' : 'row-span-1'}`}
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
              ) : (
                <div className="w-full h-full">
                  <GymPlaceholder label={item.label} gradient={item.gradient} />
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end p-4">
                <ZoomIn className="text-white mb-2" size={24} />
                <span className="text-white text-xs font-sports uppercase tracking-widest">{item.label}</span>
              </div>

              {/* Red corner accent */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-zinc-900 hover:bg-red-600 p-2 rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-zinc-900 hover:bg-red-600 p-3 rounded-full transition-all"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-zinc-900 hover:bg-red-600 p-3 rounded-full transition-all"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[80vh] rounded-sm overflow-hidden"
            >
              {items[currentIndex].img ? (
                <img
                  src={items[currentIndex].img}
                  alt={items[currentIndex].label}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-96">
                  <GymPlaceholder
                    label={items[currentIndex].label}
                    gradient={items[currentIndex].gradient}
                  />
                </div>
              )}
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-red-500 w-6' : 'bg-zinc-700'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
