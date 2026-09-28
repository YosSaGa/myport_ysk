import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Code2, FileCode, Layers, Braces, Palette, 
  Smartphone, Database, RefreshCw, Network, Zap, 
  GitBranch, Gauge, Check, Server
} from 'lucide-react';
import { FigmaIcon } from '../ui/BrandIcons';
import { skillsData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './Skills.css';

// Icon mapping helper
const iconMap = {
  Code2,
  FileCode,
  Layers,
  Braces,
  Sparkles,
  Palette,
  Smartphone,
  Database,
  RefreshCw,
  Network,
  Zap,
  GitBranch,
  Gauge,
  Server,
  Figma: FigmaIcon
};

export default function Skills() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: "all", label: t.skills.all },
    { id: "frontend", label: t.skills.frontend },
    { id: "backend", label: t.skills.backend },
    { id: "styling", label: t.skills.styling },
    { id: "tools", label: t.skills.tools }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="portfolio-skills">
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
            <span>{t.skills.badge}</span>
          </motion.div>
          <motion.h2
            className="portfolio-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.skills.titleBefore} <span className="highlight">{t.skills.titleHighlight}</span>
          </motion.h2>
          <motion.p
            className="portfolio-section-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.skills.subtitle}
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs-wrap">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`skills-tab-btn ${isSelected ? 'active' : ''}`}
                >
                  <span>{cat.label}</span>
                  {isSelected && (
                    <motion.div
                      className="skills-tab-indicator"
                      layoutId="activeSkillTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              const formattedExp = skill.experience.replace('ปี', lang === 'en' ? 'Years' : 'ปี');
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ y: -6 }}
                  className="portfolio-skill-card interactive-target"
                >
                  <div className="skill-card-top">
                    <div className="skill-icon-wrap">
                      <IconComponent size={24} />
                    </div>
                    <div className="skill-meta">
                      <h3 className="skill-name">{skill.name}</h3>
                      <span className="skill-exp">{formattedExp}</span>
                    </div>
                    {skill.level != null && (
                      <div className="skill-level-number">{skill.level}%</div>
                    )}
                  </div>

                  {/* Animated Progress Bar */}
                  {skill.level != null && (
                    <div className="skill-progress-wrap">
                      <div className="skill-progress-track">
                        <motion.div
                          className="skill-progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        />
                      </div>
                    </div>
                  )}

                  <p className="skill-desc">{skill.description}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Philosophy Banner */}
        <motion.div
          className="skills-philosophy-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="philosophy-icon">
            <Check size={20} />
          </div>
          <div className="philosophy-content">
            <h4>{t.skills.philosophyTitle}</h4>
            <p>{t.skills.philosophyDesc}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
