import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle({ className = '', variant = 'default' }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`portfolio-lang-toggle ${variant} ${className}`}
      aria-label={`Switch language (Current: ${lang === 'th' ? 'ภาษาไทย' : 'English'})`}
      title={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
    >
      <Globe size={16} className="lang-globe-icon" />
      <div className="lang-pill">
        <span className={`lang-opt ${lang === 'th' ? 'active' : ''}`}>TH</span>
        <span className="lang-divider">/</span>
        <span className={`lang-opt ${lang === 'en' ? 'active' : ''}`}>EN</span>
      </div>
    </button>
  );
}
