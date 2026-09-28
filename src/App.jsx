import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import PortfolioHero from './components/ui/portfolio-hero';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  // Intro screen shown on initial visit
  const [showIntro, setShowIntro] = useState(true);

  const handleEnterWebsite = () => {
    setShowIntro(false);
    document.documentElement.classList.remove('dark');
  };

  return (
    <div className="portfolio-app">
      {/* 1. Intro Screen Overlay (YOSS JANDUANG Cover) */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="portfolio-intro-overlay"
            className="fixed inset-0 z-[99999] overflow-hidden"
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: '-100%',
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
          >
            <PortfolioHero onEnter={handleEnterWebsite} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Micro Utilities */}
      <CustomCursor />
      <ScrollProgress />

      {/* 3. Ambient Background Animated Blobs */}
      <div className="portfolio-ambient-blobs" aria-hidden="true">
        <div className="portfolio-ambient-blob blob-top-right" />
        <div className="portfolio-ambient-blob blob-mid-left" />
        <div className="portfolio-ambient-blob blob-bottom-right" />
      </div>

      {/* 4. Full White & Blue Portfolio Website */}
      <Navbar />

      <main className="portfolio-main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
