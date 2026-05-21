import React, { useState, useCallback } from 'react';
// Gymbull Web Application - High-Performance Mobile Optimized
import { AnimatePresence, motion } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Planes from './components/Planes';
import Horarios from './components/Horarios';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Planes />
            <Horarios />
            <Gallery />
            <Testimonials />
            <FinalCTA />
          </main>
          <Footer />
          <WhatsAppFloat />
        </motion.div>
      )}
    </>
  );
}
