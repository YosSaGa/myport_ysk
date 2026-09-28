import React from 'react';
import { ArrowUp, MessageCircle, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-container">
        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-symbol">&lt;</span>
              <span className="logo-text">YOSSA</span>
              <span className="logo-symbol">/&gt;</span>
            </div>
            <p className="footer-tagline">
              {lang === 'th' ? personalInfo.tagline : personalInfo.taglineEn}
            </p>
            <div className="footer-status-badge">
              <span className="footer-dot" />
              <span>{t.hero.available}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">{t.footer.navigation}</h4>
            <div className="footer-links-grid">
              <a href="#hero">{t.nav.hero}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#skills">{t.nav.skills}</a>
              <a href="#projects">{t.nav.projects}</a>
              <a href="#timeline">{t.nav.timeline}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="footer-actions-col">
            <h4 className="footer-heading">{t.footer.connect}</h4>
            <div className="footer-socials">
              {personalInfo.contact.github && <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>}
              {personalInfo.contact.linkedin && <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>}
              {personalInfo.contact.twitter && <a
                href={personalInfo.contact.twitter}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Twitter"
              >
                <MessageCircle size={18} />
              </a>}
            </div>

            <button onClick={scrollToTop} className="footer-back-to-top-btn">
              <span>{t.footer.backToTop}</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name} ({personalInfo.nameEn}). {t.footer.copyright}
          </p>
          <p className="footer-tech-stack">
            {t.footer.craftedWith} <Heart size={14} className="heart-icon" /> React 19, Framer Motion &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
