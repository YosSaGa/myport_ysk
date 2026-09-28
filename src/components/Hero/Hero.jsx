import React from 'react';
import { motion } from 'framer-motion';
import { Send, Eye, Sparkles, Code2, CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t, lang } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="portfolio-hero">
      {/* Animated Mesh / Gradient Blobs Background */}
      <div className="portfolio-hero-bg-blobs" aria-hidden="true">
        <motion.div
          className="hero-blob blob-1"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="hero-blob blob-2"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="hero-grid-pattern" />
      </div>

      <div className="portfolio-container portfolio-hero-container">
        <motion.div
          className="portfolio-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="portfolio-hero-badge-wrap">
            <div className="portfolio-hero-status-badge">
              <span className="pulsing-dot" />
              <span className="badge-text">{t.hero.available}</span>
              <Sparkles size={14} className="badge-sparkle" />
            </div>
          </motion.div>

          {/* Stagger Reveal Greeting & Name */}
          <motion.div variants={itemVariants} className="portfolio-hero-heading-wrap">
            <span className="portfolio-hero-greeting">
              {t.hero.greeting}
            </span>
            <h1 className="portfolio-hero-name">
              {personalInfo.name} <span className="nickname">({personalInfo.nickname})</span>
            </h1>
            <h2 className="portfolio-hero-role">
              <span className="role-gradient">{t.hero.role}</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="portfolio-hero-tagline">
            {lang === 'th' ? personalInfo.tagline : personalInfo.taglineEn}
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div variants={itemVariants} className="portfolio-hero-cta-group">
            <button
              onClick={() => scrollToSection('projects')}
              className="portfolio-btn-primary"
            >
              <Eye size={18} />
              <span>{t.hero.viewProjects}</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="portfolio-btn-secondary"
            >
              <Send size={18} />
              <span>{t.hero.contactMe}</span>
            </button>
          </motion.div>

          {/* Tech Stack Floating Badges */}
          <motion.div variants={itemVariants} className="portfolio-hero-tech-strip">
            <span className="tech-strip-label">{t.hero.coreStack}</span>
            <div className="tech-strip-items">
              <span className="tech-pill">⚛️ React</span>
              <span className="tech-pill">🌐 HTML / CSS / JavaScript</span>
              <span className="tech-pill">☕ Java</span>
              <span className="tech-pill">🐘 PHP</span>
              <span className="tech-pill">🗄️ MySQL</span>
              <span className="tech-pill">🎨 Figma</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Interactive Floating Visual Element */}
        <motion.div
          className="portfolio-hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-card-glow-aura" />
          
          <div className="hero-main-glass-card">
            <div className="glass-card-header">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="window-title">{t.hero.terminalFile}</span>
            </div>

            <div className="glass-card-code">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">studentDeveloper</span> = &#123;
              </div>
              <div className="code-line indent">
                <span className="code-prop">name:</span>{' '}
                <span className="code-str">"{personalInfo.nameEn}"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">status:</span>{' '}
                <span className="code-str">"Senior IT Student (Year 4)"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">stack:</span>{' '}
                <span className="code-str">"Software, Network &amp; UI/UX"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">enthusiasm:</span>{' '}
                <span className="code-num">100</span>,
              </div>
              <div className="code-line indent">
                <span className="code-prop">goal:</span>{' '}
                <span className="code-str">"Learn &amp; Gain Experience"</span>
              </div>
              <div className="code-line">&#125;;</div>
              <div className="code-line mt-2">
                <span className="code-keyword">await</span> studentDeveloper.
                <span className="code-func">buildRealWorldImpact</span>();
              </div>
            </div>
          </div>

          {/* Floating Micro Cards */}
          <motion.div
            className="floating-micro-card card-top-right"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="micro-icon-wrap blue">
              <CheckCircle size={18} />
            </div>
            <div>
              <div className="micro-title">{t.hero.metric1Title}</div>
              <div className="micro-desc">{t.hero.metric1Desc}</div>
            </div>
          </motion.div>

          <motion.div
            className="floating-micro-card card-bottom-left"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <div className="micro-icon-wrap cyan">
              <Code2 size={18} />
            </div>
            <div>
              <div className="micro-title">{t.hero.metric2Title}</div>
              <div className="micro-desc">{t.hero.metric2Desc}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="portfolio-hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollToSection('about')}
      >
        <span className="scroll-label">{t.hero.scrollDown}</span>
        <div className="scroll-mouse-icon">
          <motion.div
            className="scroll-wheel"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
