import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  th: {
    // Navigation
    nav: {
      hero: 'หน้าแรก',
      about: 'เกี่ยวกับ',
      skills: 'ทักษะ',
      projects: 'ผลงาน',
      timeline: 'ประสบการณ์',
      contact: 'ติดต่อ',
      hireMe: 'ติดต่อเรา',
    },
    // Hero
    hero: {
      available: 'นักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ',
      greeting: 'สวัสดีครับ ผมคือ 👋',
      role: 'Senior Information Technology Student',
      viewProjects: 'ดูผลงานนักศึกษา (View Projects)',
      contactMe: 'ติดต่อฉัน (Contact Me)',
      coreStack: 'CORE TECH STACK:',
      scrollDown: 'เลื่อนลงเพื่อดูเพิ่มเติม',
      terminalFile: 'App.jsx — StudentDeveloper',
      terminalFocus: 'Software • Network • UI/UX',
      terminalPassion: 'Learning Through Real Projects',
      metric1Title: 'ปี 4 IT Student',
      metric1Desc: 'เทคโนโลยีสารสนเทศ',
      metric2Title: '2 Projects',
      metric2Desc: 'จาก Resume',
    },
    // About
    about: {
      badge: 'STUDENT PROFILE • ประวัตินักศึกษา',
      titleBefore: 'เส้นทางการเรียนรู้และความมุ่งมั่น',
      titleHighlight: 'ด้านเทคโนโลยีสารสนเทศ',
      subtitle: 'นักศึกษาชั้นปีที่ 4 มหาวิทยาลัยสงขลานครินทร์ สนใจ Software, Network และ UI/UX',
      greeting: 'สวัสดีครับ ผมคือ',
      specialistBadge: 'IT Student',
      expBadge: 'ระดับชั้นปีที่ 4',
      projBadge: 'โปรเจกต์สำเร็จ',
      letsTalk: 'ติดต่อพูดคุย',
      downloadCv: 'ดาวน์โหลด Resume / CV นักศึกษา',
      stat1: 'นักศึกษาชั้นปีที่ 4 (Senior IT Student)',
      stat2: 'ผลงานที่ระบุใน Resume',
      stat3: 'เริ่มศึกษาที่มหาวิทยาลัยสงขลานครินทร์',
      stat4: 'Software • Network • UI/UX',
      pillar1Title: 'Software Development',
      pillar1Desc: 'สนใจการพัฒนาซอฟต์แวร์และการสร้างเว็บแอปพลิเคชันจากโจทย์จริง',
      pillar2Title: 'Network Systems',
      pillar2Desc: 'สนใจระบบเครือข่ายและการเชื่อมต่อบริการต่าง ๆ ผ่าน API',
      pillar3Title: 'UI/UX Design',
      pillar3Desc: 'ออกแบบส่วนติดต่อและประสบการณ์ผู้ใช้ด้วย Figma และ Web Design Tools',
      pillar4Title: 'Learning & Growth',
      pillar4Desc: 'ชอบเรียนรู้สิ่งใหม่ เปิดรับความท้าทาย และเก็บเกี่ยวประสบการณ์จากกิจกรรมและการฝึกอบรม',
    },
    // Skills
    skills: {
      badge: 'MY TECH STACK • ทักษะความเชี่ยวชาญ',
      titleBefore: 'เครื่องมือและเทคโนโลยีที่ใช้ในการ',
      titleHighlight: 'พัฒนาโปรเจกต์',
      subtitle: 'ทักษะด้าน Web Development, Programming, Database, Design และ IT Support ตามที่ระบุใน Resume',
      all: 'ทักษะทั้งหมด (All)',
      frontend: 'Web Development',
      backend: 'Programming & Database',
      styling: 'Design',
      tools: 'Tools & IT Support',
      philosophyTitle: 'กระตือรือร้นในการเรียนรู้และปรับใช้เทคโนโลยีใหม่อยู่เสมอ',
      philosophyDesc: 'ผมชอบเรียนรู้สิ่งใหม่ เปิดรับความท้าทาย และพร้อมพัฒนาทักษะผ่านกิจกรรม การฝึกอบรม และการลงมือทำโปรเจกต์',
    },
    // Projects
    projects: {
      badge: 'STUDENT PORTFOLIO • ผลงานและโครงงาน',
      titleBefore: 'โครงงานและโปรเจกต์ที่สร้างสรรค์ด้วย',
      titleHighlight: 'ความตั้งใจ',
      subtitle: 'ผลงานตาม Resume ได้แก่ PlookPloen (Plant2_letgo) และเว็บไซต์ Exotic_Pet_5_6',
      catAll: 'ทั้งหมด (All Projects)',
      catWebapp: 'Web Applications',
      catEcommerce: 'E-Commerce & SaaS',
      catCreative: 'Creative & Interactive',
      catMobile: 'Mobile & Innovation',
      quickView: 'ดูรายละเอียดโปรเจกต์',
      yearPrefix: 'ช่วงเวลา',
      keyMetricsLabel: 'ผลลัพธ์และประสิทธิภาพหลักของโครงงาน:',
      featuresTitle: 'ฟีเจอร์เด่นและความสามารถของระบบ',
      techTitle: 'เทคโนโลยีที่ใช้งาน (Tech Stack)',
      liveDemo: 'เยี่ยมชมเว็บไซต์จริง (Live Demo)',
      sourceCode: 'ดูซอร์สโค้ด (GitHub Repository)',
    },
    // Timeline
    timeline: {
      badge: 'ACADEMIC & JOURNEY • การศึกษาและประสบการณ์',
      titleBefore: 'เส้นทางการศึกษาและ',
      titleHighlight: 'ประสบการณ์พัฒนาเว็บ',
      subtitle: 'ลำดับการศึกษาและประสบการณ์จาก 2 โปรเจกต์ที่ระบุใน Resume',
    },
    // Contact
    contact: {
      badge: 'GET IN TOUCH • ติดต่อ',
      titleBefore: 'ติดต่อพูดคุยเรื่อง',
      titleHighlight: 'โอกาสและโปรเจกต์',
      subtitle: 'ติดต่อได้โดยตรงผ่านอีเมล โทรศัพท์ หรือ GitHub ตามข้อมูลใน Resume',
      directChannels: 'ช่องทางการติดต่อตรง',
      directDesc: 'ติดต่อผมได้ผ่านอีเมล เบอร์โทรศัพท์ หรือ GitHub ตามข้อมูลใน Resume',
      emailLabel: 'อีเมล (Email)',
      phoneLabel: 'เบอร์โทรศัพท์ (Phone)',
      locationLabel: 'ที่อยู่ (Location)',
      copied: 'คัดลอกแล้ว! ✓',
      statusHeading: 'นักศึกษาชั้นปีที่ 4',
      statusBody: 'กำลังศึกษาสาขาเทคโนโลยีสารสนเทศที่มหาวิทยาลัยสงขลานครินทร์',
      socialsLabel: 'ติดตามผลงานและโปรเจกต์เพิ่มเติม:',
      formTitle: 'ส่งข้อความถึงผม (ติดต่อ / สอบถามข้อมูล)',
      formSubtitle: 'กรอกแบบฟอร์มด้านล่างเพื่อติดต่อพูดคุยเรื่องโอกาสหรือโปรเจกต์',
      successTitle: 'ส่งข้อความสำเร็จแล้ว! 🎉',
      successDesc: 'ขอบคุณที่ให้ความสนใจ ผมจะติดต่อกลับไปยังอีเมลของคุณโดยเร็วที่สุดครับ',
      nameField: 'ชื่อ - นามสกุล หรือชื่อองค์กร / บริษัท *',
      namePlaceholder: 'เช่น คุณสมชาย วิริยะ หรือ บริษัท เทคโนโลยี จำกัด',
      emailField: 'อีเมลสำหรับติดต่อกลับ *',
      emailPlaceholder: 'hr@company.com หรือ name@company.com',
      subjectField: 'หัวข้อเรื่อง',
      subjectPlaceholder: 'เช่น ติดต่อเรื่องโปรเจกต์ หรือโอกาสร่วมงาน',
      messageField: 'รายละเอียดข้อความ *',
      messagePlaceholder: 'บอกเล่าขอบเขตงาน, ตำแหน่งที่เปิดรับ, หรือรายละเอียดที่ต้องการสอบถาม...',
      submitBtn: 'ส่งข้อความทันที (Send Message)',
      errName: 'กรุณากรอกชื่อของคุณหรือชื่อองค์กร',
      errEmail: 'กรุณากรอกอีเมลของคุณ',
      errEmailFormat: 'รูปแบบอีเมลไม่ถูกต้อง',
      errMessage: 'กรุณากรอกข้อความที่ต้องการติดต่อ',
    },
    // Footer
    footer: {
      navigation: 'การนำทาง (Navigation)',
      connect: 'เชื่อมต่อ (Connect)',
      backToTop: 'กลับด้านบนสุด',
      copyright: 'Student Developer Portfolio. สงวนลิขสิทธิ์ทุกประการ',
      craftedWith: 'พัฒนาด้วย',
    },
    // Intro Screen
    intro: {
      tagline: 'Information Technology Student • Software • Network • UI/UX',
      subtagline: 'Yossakron Janduang (Yoss) — Student Developer Portfolio',
      enterBtn: 'เข้าสู่พอร์ตผลงาน • Explore Student Portfolio',
      clickToEnterTitle: 'คลิกเพื่อเข้าสู่หน้าพอร์ตผลงานนักศึกษา',
    }
  },

  en: {
    // Navigation
    nav: {
      hero: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      timeline: 'Experience',
      contact: 'Contact',
      hireMe: 'Contact Me',
    },
    // Hero
    hero: {
      available: 'Fourth-year Information Technology Student',
      greeting: 'Hello, I’m 👋',
      role: 'Senior Information Technology Student',
      viewProjects: 'View Student Projects',
      contactMe: 'Contact Me',
      coreStack: 'CORE TECH STACK:',
      scrollDown: 'Scroll down to explore',
      terminalFile: 'App.jsx — StudentDeveloper',
      terminalFocus: 'Software • Network • UI/UX',
      terminalPassion: 'Learning Through Real Projects',
      metric1Title: 'Senior IT Student',
      metric1Desc: 'Information Technology',
      metric2Title: '2 Projects',
      metric2Desc: 'Listed in Resume',
    },
    // About
    about: {
      badge: 'STUDENT PROFILE • ACADEMIC & DEV',
      titleBefore: 'My Academic Journey &',
      titleHighlight: 'Interest in Information Technology',
      subtitle: 'A fourth-year Information Technology student at Prince of Songkla University.',
      greeting: 'Hello, I am',
      specialistBadge: 'IT Student',
      expBadge: 'Senior Year (Year 4)',
      projBadge: 'Projects Built',
      letsTalk: 'Get in Touch',
      downloadCv: 'Download Student Resume / CV',
      stat1: 'Fourth-year IT Student',
      stat2: 'Projects Listed in Resume',
      stat3: 'Started at Prince of Songkla University',
      stat4: 'Software • Network • UI/UX',
      pillar1Title: 'Software Development',
      pillar1Desc: 'Interested in software development and building web applications from practical requirements.',
      pillar2Title: 'Network Systems',
      pillar2Desc: 'Interested in networking and connecting services through APIs.',
      pillar3Title: 'UI/UX Design',
      pillar3Desc: 'Designing user interfaces and experiences with Figma and web design tools.',
      pillar4Title: 'Learning & Growth',
      pillar4Desc: 'Enjoys learning new things, welcomes challenges, and gains experience through activities and training.',
    },
    // Skills
    skills: {
      badge: 'MY TECH STACK • SKILLS & TOOLS',
      titleBefore: 'Tools & Technologies I Use to',
      titleHighlight: 'Build Projects',
      subtitle: 'Web development, programming, database, design, and IT support skills listed in the resume.',
      all: 'All Skills',
      frontend: 'Frontend Development',
      backend: 'Programming & Database',
      styling: 'Design',
      tools: 'Tools & IT Support',
      philosophyTitle: 'Continuously Learning & Exploring Emerging Tech',
      philosophyDesc: 'Beyond these core tools, I proactively study cloud services, next-generation web frameworks, and best software engineering practices to bring fresh energy to the engineering team.',
    },
    // Projects
    projects: {
      badge: 'STUDENT PORTFOLIO • SHOWCASE',
      titleBefore: 'Projects Handcrafted with',
      titleHighlight: 'Dedication & Precision',
      subtitle: 'The two projects listed in the resume: PlookPloen (Plant2_letgo) and Exotic_Pet_5_6.',
      catAll: 'All Projects',
      catWebapp: 'Web Applications',
      catEcommerce: 'E-Commerce & SaaS',
      catCreative: 'Creative & Interactive',
      catMobile: 'Mobile & Innovation',
      quickView: 'View Project Details',
      yearPrefix: 'Period',
      keyMetricsLabel: 'Key Project Impact & Performance:',
      featuresTitle: 'Key Capabilities & System Features',
      techTitle: 'Technologies Used (Tech Stack)',
      liveDemo: 'Visit Live Website (Demo)',
      sourceCode: 'View Source Code (GitHub)',
    },
    // Timeline
    timeline: {
      badge: 'ACADEMIC & JOURNEY • EXPERIENCE',
      titleBefore: 'Educational Background &',
      titleHighlight: 'Developer Journey',
      subtitle: 'Education and project experience documented in the resume.',
    },
    // Contact
    contact: {
      badge: 'GET IN TOUCH • CONTACT',
      titleBefore: 'Get in Touch About',
      titleHighlight: 'Opportunities & Projects',
      subtitle: 'Contact me through the email, phone number, or GitHub profile listed in my resume.',
      directChannels: 'Direct Contact Channels',
      directDesc: 'Reach out via email, phone, or chat. Responsive and ready to discuss opportunities.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      copied: 'Copied! ✓',
      statusHeading: 'Fourth-year Student',
      statusBody: 'Currently studying Information Technology at Prince of Songkla University.',
      socialsLabel: 'Connect & Explore Repositories:',
      formTitle: 'Send Me a Message',
      formSubtitle: 'Fill out the form below to reach out regarding internships, job openings, or collaborations.',
      successTitle: 'Message Sent Successfully! 🎉',
      successDesc: 'Thank you for reaching out! I will respond to your email as soon as possible.',
      nameField: 'Your Name or Company / Organization *',
      namePlaceholder: 'e.g. Hiring Manager or Studio Tech Co.',
      emailField: 'Your Email Address *',
      emailPlaceholder: 'recruiter@company.com or name@company.com',
      subjectField: 'Subject',
      subjectPlaceholder: 'e.g. Project discussion or opportunity',
      messageField: 'Message / Opportunity Details *',
      messagePlaceholder: 'Share the role details, tech stack expectations, or interview schedule...',
      submitBtn: 'Send Message Now',
      errName: 'Please provide your name or company',
      errEmail: 'Please provide your email address',
      errEmailFormat: 'Please enter a valid email address',
      errMessage: 'Please enter your message',
    },
    // Footer
    footer: {
      navigation: 'Navigation',
      connect: 'Connect',
      backToTop: 'Back to Top',
      copyright: 'Student Developer Portfolio. All rights reserved.',
      craftedWith: 'Crafted with',
    },
    // Intro Screen
    intro: {
      tagline: 'Information Technology Student • Software • Network • UI/UX',
      subtagline: 'Yossakron Janduang (Yoss) — Student Developer Portfolio',
      enterBtn: 'Explore Student Portfolio • Click to Enter',
      clickToEnterTitle: 'Click to explore student portfolio website',
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'th';
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'th' ? 'en' : 'th';
      localStorage.setItem('portfolio_lang', next);
      return next;
    });
  };

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.th;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
