import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { projectsData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import ProjectModal from './ProjectModal';

import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: t.projects.catAll },
    { id: "webapp", label: t.projects.catWebapp }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="portfolio-projects">
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
            <span>{t.projects.badge}</span>
          </motion.div>
          <motion.h2
            className="portfolio-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.projects.titleBefore} <span className="highlight">{t.projects.titleHighlight}</span>
          </motion.h2>
          <motion.p
            className="portfolio-section-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Filter Categories */}
        <div className="projects-filter-container">
          <div className="projects-filter-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`projects-filter-btn ${isActive ? 'active' : ''}`}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.div
                      className="projects-filter-indicator"
                      layoutId="activeProjectFilter"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Responsive Grid (3 columns on desktop, 1 on mobile) */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="portfolio-project-card interactive-target"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Details */}
                  <div className="project-card-content">
                    <div className="project-card-meta-row">
                      <span className="project-card-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="project-card-tag-pill">{project.categoryLabel}</span>
                      <span className="project-card-year">{project.year}</span>
                    </div>

                    <div className="project-card-header-row">
                      <h3 className="project-card-title">{project.title}</h3>
                      <button
                        className="project-card-link-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        aria-label="เปิดรายละเอียด"
                      >
                        <ArrowUpRight size={18} />
                      </button>
                    </div>

                    <p className="project-card-summary">{project.summary}</p>

                    <button
                      type="button"
                      className="project-card-detail-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <span>{t.projects.quickView}</span>
                      <ArrowUpRight size={16} />
                    </button>

                    {/* Tech Chips */}
                    <div className="project-card-tech-list">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="project-tech-tag">{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="project-tech-tag more">+{project.techStack.length - 4}</span>
                      )}
                    </div>

                    <div className="project-card-actions">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-action project-card-action-live"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${t.projects.liveDemo}: ${project.title}`}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-action project-card-action-github"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${t.projects.sourceCode}: ${project.title}`}
                      >
                        <GithubIcon size={16} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
