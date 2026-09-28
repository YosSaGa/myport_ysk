import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { timelineData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './Timeline.css';

export default function Timeline() {
  const { t, lang } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="timeline" className="portfolio-timeline" ref={containerRef}>
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
            <span>{t.timeline.badge}</span>
          </motion.div>
          <motion.h2
            className="portfolio-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.timeline.titleBefore} <span className="highlight">{t.timeline.titleHighlight}</span>
          </motion.h2>
          <motion.p
            className="portfolio-section-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.timeline.subtitle}
          </motion.p>
        </div>

        {/* Timeline Flow */}
        <div className="timeline-flow-wrapper">
          {/* Background Track Line */}
          <div className="timeline-line-track" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            className="timeline-line-progress"
            style={{ scaleY: lineHeight }}
          />

          {/* Timeline Nodes */}
          <div className="timeline-items-list">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEdu = item.id.startsWith('edu');
              const Icon = isEdu ? GraduationCap : Briefcase;

              const formattedPeriod = lang === 'en' ? item.periodEn : item.period;
              const formattedLocation = lang === 'en' ? item.locationEn : item.location;
              const roleTitle = lang === 'en' ? item.roleEn : item.role;
              const companyTitle = lang === 'en' ? item.companyEn : item.company;
              const description = lang === 'en' ? item.descriptionEn : item.description;
              const achievements = lang === 'en' ? item.achievementsEn : item.achievements;

              return (
                <div
                  key={item.id}
                  className={`timeline-row ${isEven ? 'row-left' : 'row-right'}`}
                >
                  {/* Glowing Node Dot */}
                  <motion.div
                    className="timeline-node-pin"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="node-glow-ring" />
                    <div className="node-center-circle">
                      <Icon size={16} />
                    </div>
                  </motion.div>

                  {/* Timeline Card */}
                  <motion.div
                    className="timeline-card-box interactive-target"
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Period & Location Row */}
                    <div className="timeline-card-header">
                      <div className="period-pill">
                        <Calendar size={13} />
                        <span>{formattedPeriod}</span>
                      </div>
                      <div className="location-pill">
                        <MapPin size={13} />
                        <span>{formattedLocation}</span>
                      </div>
                    </div>

                    {/* Role & Company */}
                    <h3 className="timeline-role">{roleTitle}</h3>
                    <h4 className="timeline-company">{companyTitle}</h4>

                    <p className="timeline-desc">{description}</p>

                    {/* Achievements */}
                    <div className="timeline-achievements">
                      {achievements.map((achieve, i) => (
                        <div key={i} className="timeline-achievement-item">
                          <CheckCircle size={15} className="achieve-icon" />
                          <span>{achieve}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Used */}
                    <div className="timeline-tech-tags">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="timeline-tag">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
