import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './BackToTop.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      if (currentScroll > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="portfolio-back-to-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.92 }}
          aria-label="เลื่อนกลับด้านบนสุด (Back to top)"
          title="กลับด้านบนสุด"
        >
          <svg className="portfolio-progress-ring" width="50" height="50">
            <circle
              className="portfolio-progress-ring-bg"
              stroke="rgba(74, 144, 226, 0.15)"
              strokeWidth="3"
              fill="transparent"
              r={radius}
              cx="25"
              cy="25"
            />
            <circle
              className="portfolio-progress-ring-circle"
              stroke="url(#bttGrad)"
              strokeWidth="3"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="25"
              cy="25"
            />
            <defs>
              <linearGradient id="bttGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00B4D8" />
                <stop offset="100%" stopColor="#1E5FA8" />
              </linearGradient>
            </defs>
          </svg>
          <ArrowUp className="portfolio-btt-icon" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
