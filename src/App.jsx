import React from 'react';
// Gymbull Web Application - High-Performance Mobile Optimized

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
  return (
    <>
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
    </>
  );
}

