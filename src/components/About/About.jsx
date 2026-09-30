import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Sparkles, Download, Mail, Phone, 
  Award, ShieldCheck, Flame, Compass
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import avatarImg from '../../assets/YOSS.jpg';
import './About.css';

export default function About() {
  const { t, lang } = useLanguage();
  const cardRef = useRef(null);

  // 3D Tilt Effect on Avatar Card using Framer Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const pillars = [
    {
      icon: Flame,
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc
    },
    {
      icon: ShieldCheck,
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc
    },
    {
      icon: Award,
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc
    },
    {
      icon: Compass,
      title: t.about.pillar4Title,
      desc: t.about.pillar4Desc
    }
  ];

  const bioParagraphs = lang === 'th' ? personalInfo.aboutBioThai : personalInfo.aboutBio;

  const statsList = personalInfo.stats.map((stat, index) => ({
    ...stat,
    label: [t.about.stat1, t.about.stat2, t.about.stat3, t.about.stat4][index]
  }));

  return (
    <section id="about" className="portfolio-about">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="portfolio-section-header">
          <motion.div
            className="portfolio-section-badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} />
            <span>{t.about.badge}</span>
          </motion.div>
          <motion.h2
            className="portfolio-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.about.titleBefore} <span className="highlight">{t.about.titleHighlight}</span>
          </motion.h2>
          <motion.p
            className="portfolio-section-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.about.subtitle}
          </motion.p>
        </div>

        {/* Main Grid: Avatar & Bio */}
        <div className="portfolio-about-grid">
          {/* Left Column: 3D Tilt Profile Card */}
          <motion.div
            className="portfolio-about-avatar-wrap"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="portfolio-about-profile-card interactive-target"
            >
              <div className="profile-card-glow" />
              <div className="profile-img-container">
                <img
                  src={avatarImg}
                  alt={personalInfo.name}
                  className="profile-avatar-img"
                  loading="lazy"
                />
                <div className="profile-badge-overlay">
                  <span className="badge-dot" />
                  <span>{t.about.specialistBadge}</span>
                </div>
              </div>

              {/* Floating Stat Badges on Card */}
              <div className="profile-floating-badge badge-exp">
                <span className="badge-number">ปี 4</span>
                <span className="badge-text">{t.about.expBadge}</span>
              </div>

              <div className="profile-floating-badge badge-proj">
                <span className="badge-number">2</span>
                <span className="badge-text">{t.about.projBadge}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Bio & Info */}
          <motion.div
            className="portfolio-about-bio-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-bio-card">
              <h3 className="about-bio-title">
                {t.about.greeting} <span className="highlight-text">{personalInfo.name}</span>
              </h3>
              
              <div className="about-bio-paragraphs">
                {bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Quick Contact & Details Pills */}
              <div className="about-quick-info">
                <div className="info-item">
                  <Mail size={18} className="info-icon" />
                  <span>{personalInfo.contact.email}</span>
                </div>
                <div className="info-item">
                  <Phone size={18} className="info-icon" />
                  <span>{personalInfo.contact.phone}</span>
                </div>
              </div>

              {/* Download Resume / Contact Button */}
              <div className="about-actions-row">
                <a
                  href="#contact"
                  className="portfolio-btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Sparkles size={18} />
                  <span>{t.about.letsTalk}</span>
                </a>
                
                <a
                  href={personalInfo.contact.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-btn-secondary"
                >
                  <Download size={18} />
                  <span>{t.about.downloadCv}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="portfolio-about-pillars">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                className="about-pillar-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="pillar-icon-box">
                  <Icon size={24} />
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Key Metrics Strip */}
        <motion.div
          className="portfolio-about-stats-strip"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {statsList.map((stat, i) => (
            <div key={i} className="about-stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
