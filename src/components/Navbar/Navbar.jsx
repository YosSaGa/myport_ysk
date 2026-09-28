import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../ui/LanguageToggle';
import './Navbar.css';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'timeline', 'contact'];

export default function Navbar() {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: t.nav.hero },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'timeline', label: t.nav.timeline },
    { id: 'contact', label: t.nav.contact }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = SECTION_IDS.map(id => document.getElementById(id));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`portfolio-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="portfolio-container portfolio-navbar-container">
        {/* Monogram Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="portfolio-navbar-logo"
        >
          <div className="portfolio-navbar-logo-badge">
            <span className="logo-symbol">&lt;</span>
            <span className="logo-text">YOSSA</span>
            <span className="logo-symbol">/&gt;</span>
          </div>
          <span className="portfolio-navbar-logo-dot" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="portfolio-navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`portfolio-navbar-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="portfolio-navbar-active-pill"
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Language Toggle, CTA & Mobile Toggle */}
        <div className="portfolio-navbar-actions">
          {/* Language Toggle Button */}
          <LanguageToggle />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="portfolio-navbar-cta-btn"
          >
            <Sparkles size={16} className="btn-icon" />
            <span>{t.nav.hireMe}</span>
          </a>

          <button
            className="portfolio-navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? (lang === 'th' ? 'ปิดเมนู' : 'Close menu') : (lang === 'th' ? 'เปิดเมนู' : 'Open menu')}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="portfolio-navbar-mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portfolio-container portfolio-navbar-mobile-content">
              <div className="portfolio-navbar-mobile-actions-row">
                <LanguageToggle />
              </div>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`portfolio-navbar-mobile-link ${activeSection === link.id ? 'active' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="portfolio-navbar-mobile-cta">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="portfolio-navbar-cta-btn full-width"
                >
                  <Send size={16} />
                  <span>{t.nav.hireMe}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
