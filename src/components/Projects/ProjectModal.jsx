import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Sparkles, Calendar, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import './ProjectModal.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="portfolio-modal-overlay-backdrop">
          {/* Backdrop Click */}
          <motion.div
            className="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="portfolio-modal-wrapper"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            <div className="portfolio-modal-card">
              {/* Close Button */}
              <button
                className="portfolio-modal-close-btn"
                onClick={onClose}
                aria-label={lang === 'th' ? "ปิดหน้าต่างผลงาน" : "Close project modal"}
              >
                <X size={20} />
              </button>

              {/* Modal Content Details */}
              <div className="portfolio-modal-body">
                {/* Meta Row */}
                <div className="portfolio-modal-meta">
                  <span className="modal-category-badge">{project.categoryLabel}</span>
                  <div className="modal-year-badge">
                    <Calendar size={14} />
                    <span>{t.projects.yearPrefix} {project.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="portfolio-modal-title">{project.title}</h2>
                <p className="portfolio-modal-desc">{project.description}</p>

                {/* Metrics Highlight */}
                {project.metrics && (
                  <div className="portfolio-modal-metrics">
                    <Sparkles size={20} className="metrics-icon" />
                    <div>
                      <span className="metrics-label">{t.projects.keyMetricsLabel}</span>
                      <p className="metrics-val">{project.metrics}</p>
                    </div>
                  </div>
                )}

                {/* Key Features Checklist */}
                <div className="portfolio-modal-features">
                  <h4 className="features-title">
                    <CheckCircle2 size={18} className="features-icon" />
                    {t.projects.featuresTitle}
                  </h4>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-dot" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="portfolio-modal-tech">
                  <h4 className="tech-title">
                    <Layers size={18} className="tech-icon" />
                    {t.projects.techTitle}
                  </h4>
                  <div className="tech-pills">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="modal-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {(project.demoUrl || project.githubUrl) && (
                  <div className="portfolio-modal-actions">
                  {project.demoUrl && <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-btn-primary"
                  >
                    <ExternalLink size={18} />
                    <span>{t.projects.liveDemo}</span>
                  </a>}
                  {project.githubUrl && <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-btn-secondary"
                  >
                    <GithubIcon size={18} />
                    <span>{t.projects.sourceCode}</span>
                  </a>}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
