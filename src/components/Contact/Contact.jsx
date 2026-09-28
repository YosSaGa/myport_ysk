import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Send, Mail, Phone, MapPin, Copy, Check, 
  MessageCircle, Clock, HeartHandshake
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedKey, setCopiedKey] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = t.contact.errName;
    if (!formData.email.trim()) {
      errs.email = t.contact.errEmail;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = t.contact.errEmailFormat;
    }
    if (!formData.message.trim()) errs.message = t.contact.errMessage;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00B4D8', '#4A90E2', '#1E5FA8', '#FFFFFF']
        });
      } catch {
        // Fallback gracefully
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

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

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            className="contact-info-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card-box">
              <h3 className="contact-column-title">{t.contact.directChannels}</h3>
              <p className="contact-column-desc">
                {t.contact.directDesc}
              </p>

              {/* Contact Items with One-Click Copy */}
              <div className="contact-channels-list">
                {/* Email */}
                <div
                  className="contact-channel-item interactive-target"
                  onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                >
                  <div className="channel-icon-wrap blue">
                    <Mail size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.emailLabel}</span>
                    <span className="channel-value">{personalInfo.contact.email}</span>
                  </div>
                  <button className="channel-copy-btn" title={t.contact.emailLabel}>
                    {copiedKey === 'email' ? <Check size={16} className="text-green" /> : <Copy size={16} />}
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
                    <Phone size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.phoneLabel}</span>
                    <span className="channel-value">{personalInfo.contact.phone}</span>
                  </div>
                  <button className="channel-copy-btn" title={t.contact.phoneLabel}>
                    {copiedKey === 'phone' ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                  </button>
                  {copiedKey === 'phone' && (
                    <span className="copy-tooltip">{t.contact.copied}</span>
                  )}
                </div>

                {/* Location */}
                <div className="contact-channel-item static">
                  <div className="channel-icon-wrap light-blue">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">{t.contact.locationLabel}</span>
                    <span className="channel-value">
                      {personalInfo.contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Availability Status */}
              <div className="contact-status-card">
                <div className="status-indicator-box">
                  <Clock size={18} className="status-clock-icon" />
                </div>
                <div>
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
                  {personalInfo.contact.github && <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>}
                  {personalInfo.contact.linkedin && <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>}
                  {personalInfo.contact.twitter && <a
                    href={personalInfo.contact.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="Twitter / X"
                  >
                    <MessageCircle size={18} />
                  </a>}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            className="contact-form-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-box">
              <h3 className="contact-form-title">{t.contact.formTitle}</h3>
              <p className="contact-form-subtitle">
                {t.contact.formSubtitle}
              </p>

              {isSubmitted && (
                <motion.div
                  className="contact-success-banner"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <HeartHandshake size={24} className="success-icon" />
                  <div>
                    <h4>{t.contact.successTitle}</h4>
                    <p>{t.contact.successDesc}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="portfolio-contact-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">{t.contact.nameField}</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder={t.contact.namePlaceholder}
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{t.contact.emailField}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder={t.contact.emailPlaceholder}
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">{t.contact.subjectField}</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.contact.subjectPlaceholder}
                    className="form-input"
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">{t.contact.messageField}</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder={t.contact.messagePlaceholder}
                    className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="portfolio-btn-primary form-submit-btn"
                >
                  {isSubmitting ? (
                    <div className="submit-loading-spinner" />
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
