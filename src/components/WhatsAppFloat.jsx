import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open(
      'https://wa.me/56936474703?text=Hola!%20Quiero%20información%20sobre%20los%20planes%20de%20Gymbull.',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-panel-heavy px-4 py-2.5 rounded-sm shadow-xl border border-green-600/20 flex items-center gap-2 max-w-[200px]"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="text-xs font-medium text-zinc-200 leading-snug">
              ¡Escríbenos ahora!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.6, type: 'spring', stiffness: 200 }}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-[0_4px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_40px_rgba(34,197,94,0.7)] transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
        <MessageCircle size={28} className="text-white relative z-10" fill="white" strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}
