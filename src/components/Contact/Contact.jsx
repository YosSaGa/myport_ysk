import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Mail, Phone, Copy, Check, 
  MessageCircle, Clock, ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const rawPhone = personalInfo.contact.phone.replace(/[^0-9+]/g, '');

  return (
    <section id="contact" className="portfolio-contact">
      {/* Wave Top Divider */}
      <div className="contact-wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,0 L0,0 Z"
            fill="var(--color-bg-secondary)"
          />
        </svg>
      </div>

      <div className="portfolio-container contact-main-container">
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
            <span>{t.contact.badge}</span>
          </motion.div>
          <motion.h2
            className="portfolio-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.contact.titleBefore} <span className="highlight">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.p
            className="portfolio-section-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Contact Layout: Centered Direct Channels Card */}
        <div className="contact-centered-wrapper">
          <motion.div
            className="contact-card-box contact-main-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card-header">
              <h3 className="contact-column-title">{t.contact.directChannels}</h3>
              <p className="contact-column-desc">
                {t.contact.directDesc}
              </p>
            </div>

            {/* Direct Contact Items Grid: Email & Phone */}
            <div className="contact-channels-grid">
              {/* Email */}
              <div
                className="contact-channel-item interactive-target"
                onClick={() => handleCopy(personalInfo.contact.email, 'email')}
              >
                <div className="channel-icon-wrap blue">
                  <Mail size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">{t.contact.emailLabel}</span>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="channel-value channel-link"
                    title={personalInfo.contact.email}
                  >
                    <span>{personalInfo.contact.email}</span>
                    <ExternalLink size={13} className="channel-link-icon" />
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  title={t.contact.emailLabel}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(personalInfo.contact.email, 'email');
                  }}
                  aria-label="Copy Email"
                >
                  {copiedKey === 'email' ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                </button>
                {copiedKey === 'email' && (
                  <span className="copy-tooltip">{t.contact.copied}</span>
                )}
              </div>

              {/* Phone */}
              <div
                className="contact-channel-item interactive-target"
                onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
              >
                <div className="channel-icon-wrap cyan">
                  <Phone size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">{t.contact.phoneLabel}</span>
                  <a
                    href={`tel:${rawPhone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="channel-value channel-link"
                    title={personalInfo.contact.phone}
                  >
                    <span>{personalInfo.contact.phone}</span>
                    <ExternalLink size={13} className="channel-link-icon" />
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  title={t.contact.phoneLabel}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(personalInfo.contact.phone, 'phone');
                  }}
                  aria-label="Copy Phone"
                >
                  {copiedKey === 'phone' ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                </button>
                {copiedKey === 'phone' && (
                  <span className="copy-tooltip">{t.contact.copied}</span>
                )}
              </div>
            </div>

            {/* Working Availability Status */}
            <div className="contact-status-card">
              <div className="status-indicator-box">
                <Clock size={20} className="status-clock-icon" />
              </div>
              <div className="status-text-wrap">
                <h4 className="status-heading">{t.contact.statusHeading}</h4>
                <p className="status-body">
                  {t.contact.statusBody}
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="contact-socials-row">
              <span className="socials-label">{t.contact.socialsLabel}</span>
              <div className="social-links-list">
                {personalInfo.contact.github && (
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
                {personalInfo.contact.linkedin && (
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                )}
                {personalInfo.contact.twitter && (
                  <a
                    href={personalInfo.contact.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="Twitter / X"
                    title="Twitter"
                  >
                    <MessageCircle size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
