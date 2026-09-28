# 🚀 พอร์ตโฟลิโอส่วนตัว Frontend Web Developer (React + Vite + Framer Motion)

เว็บไซต์ Portfolio ส่วนตัวแนวพรีเมียมในธีม **ขาว-ฟ้า (White & Blue)** ออกแบบด้วยปรัชญา **Clean, Techy, Premium และ Smooth Micro-interactions** ระดับ Awwwards พร้อม Animation เต็มรูปแบบด้วย `framer-motion` และระบบ Single Page Scroll Navigation ที่สมบูรณ์แบบ

---

## ✨ ไฮไลต์และฟีเจอร์เด่น (Key Features)

1. **🎨 White & Blue Design System**:
   - Palette สีตามโจทย์: ขาวสะอาดผสานฟ้าสดใส (#00B4D8, #4A90E2, #1E5FA8)
   - มิติ Glassmorphism (`backdrop-filter: blur(14px)`), Soft-Glow Auras และ Ambient Gradient Blobs เคลื่อนไหวช้าๆ ในพื้นหลัง
   - ฟอนต์ Google Fonts ภาษาไทย/อังกฤษ: `Kanit` (ส่วนหัวข้อ) และ `Sarabun` (เนื้อหา) พร้อม `JetBrains Mono` สำหรับส่วน Code
   - วานิลลา CSS แบบ Scoped Class-Prefix (`.portfolio-...`) ไร้การพึ่งพา Tailwind CSS ตามเงื่อนไข

2. **🪄 Animation เต็มรูปแบบด้วย Framer Motion**:
   - **Preloader**: หน้าจอโหลดเข้าเว็บสุดไฮเทคพร้อมเกจเปอร์เซ็นต์และ Monogram Logo
   - **Hero Section**: Animated text reveal, floating terminal code card, floating micro badges (99+ Lighthouse, 60 FPS), และ scroll mouse indicator เด้งนุ่มนวล
   - **About Section**: การ์ดรูปโปรไฟล์ 3D Tilt Effect เอียงตามการเลื่อนเมาส์ (Spring Physics) พร้อม 4 เสาหลักความเชี่ยวชาญ และแถบสถิติผลงาน
   - **Skills Section**: ตัวกรองหมวดหมู่ทักษะพร้อมแท็บ layout animation, การ์ดทักษะพร้อม animated progress bar วิ่งตาม viewport scroll
   - **Projects Section**: กริดผลงานแบบ Responsive (3 คอลัมน์บน Desktop, 1 บน Mobile) พร้อม Layout Filter Animation และ **Project Modal รายละเอียดแบบเต็ม** (`AnimatePresence`)
   - **Career Timeline**: เส้นไทม์ไลน์วิ่งตาม Scroll Progress ด้วย `useScroll` + `useSpring`
   - **Contact Form**: ฟอร์มติดต่อพร้อม Real-time Validation, จุดคัดลอกอีเมล/เบอร์โทรด้วยคลิกเดียว (Instant Copy Feedback) และ Effect จุดพลุฉลอง (**Confetti**) เมื่อกดส่งข้อความสำเร็จ

3. **🖱️ Interactive Micro-Interactions**:
   - **Custom Spring Cursor**: เคอร์เซอร์วงแหวนเรืองแสงลอยตามเมาส์ และขยายขนาดเมื่อวางเหนือปุ่ม/การ์ด (ซ่อนอัตโนมัติบนจอสัมผัส/Mobile)
   - **Scroll Progress Bar**: แถบวัดความลึกของการอ่านที่ขอบบนสุดของหน้าจอ
   - **Back to Top Button**: ปุ่มลอยกลับด้านบนพร้อมวงแหวน SVG หมุนนับเปอร์เซ็นต์การเลื่อนหน้าเว็บ

---

## 🛠️ Tech Stack

- **Core**: React 19, Vite
- **Motion & Physics**: `framer-motion`
- **Styling**: Scoped Vanilla CSS & CSS Variables
- **Icons**: `lucide-react` & Custom Vector Brand Icons
- **Interactive Effects**: `canvas-confetti`
- **Typography**: Google Fonts (Kanit, Sarabun, JetBrains Mono)

---

## 📂 โครงสร้างโฟลเดอร์ (Project Structure)

```
port/
├── public/
│   └── favicon.svg                    # SVG Favicon ไอคอนโค้ดไล่เฉดสีฟ้า
├── src/
│   ├── assets/                        # รูปภาพและ SVG Mockups ผลงานทั้งหมด
│   │   ├── avatar.svg                 # ภาพโปรไฟล์นักพัฒนาเวกเตอร์สุดเท่
│   │   ├── project-novafin.svg        # Mockup แดชบอร์ดการเงิน SaaS
│   │   ├── project-artisancraft.svg   # Mockup ร้านค้าอีคอมเมิร์ซพรีเมียม
│   │   ├── project-aurahealth.svg     # Mockup ระบบการแพทย์ทางไกล
│   │   ├── project-soraflow.svg       # Mockup โมชันเอเจนซี่ Awwwards
│   │   ├── project-cryptopulse.svg    # Mockup เทอร์มินัลคริปโตเรียลไทม์
│   │   └── project-ecovoyage.svg      # Mockup แอปท่องเที่ยวเชิงอนุรักษ์
│   ├── components/
│   │   ├── Navbar/                    # Glassmorphism Navbar + Mobile Drawer
│   │   ├── Hero/                      # ส่วนเปิดตัวพร้อม Terminal Card & CTAs
│   │   ├── About/                     # แนะนำตัว + การ์ดโปรไฟล์ 3D Tilt + สถิติ
│   │   ├── Skills/                    # กริดทักษะพร้อม Animated Progress Bar
│   │   ├── Projects/                  # กริดผลงาน + ProjectModal (AnimatePresence)
│   │   ├── Timeline/                  # เส้นไทม์ไลน์ประสบการณ์แบบ Scroll-linked
│   │   ├── Contact/                   # ฟอร์มติดต่อ + คัดลอกข้อมูล + Confetti
│   │   ├── Footer/                    # ฟุตเตอร์และปุ่ม Back-to-Top
│   │   └── ui/                        # Preloader, CustomCursor, ScrollProgress, BackToTop
│   ├── data/
│   │   └── portfolioData.js           # 🌟 ศูนย์รวมข้อมูลทั้งหมด (แก้ข้อมูลง่ายที่นี่)
│   ├── styles/
│   │   ├── variables.css              # Design Tokens, สีขาว-ฟ้า, ฟอนต์, เงา
│   │   └── global.css                 # Reset, Typography, Ambient Blobs
│   ├── App.jsx                        # รวบรวม Sections ทั้งหมด
│   ├── App.css
│   └── main.jsx
├── index.html                         # Meta Tags, SEO, Open Graph & Fonts
└── package.json
```

---

## 🚀 วิธีติดตั้งและรันโปรเจกต์ (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันโหมด Development (Hot Module Replacement)
```bash
npm run dev
```
เปิดเบราว์เซอร์ที่: **`http://localhost:5173`**

### 3. ตรวจสอบโค้ดและ Linting
```bash
npm run lint
```

### 4. บิลด์สำหรับ Production
```bash
npm run build
```

---

## 📝 วิธีแก้ไขและปรับแต่งเนื้อหา (Customization Guide)

คุณสามารถแก้ไขข้อมูลส่วนตัว ผลงาน และทักษะได้สะดวกในจุดเดียวที่ไฟล์ **`src/data/portfolioData.js`**:

### 1. แก้ไขชื่อ ข้อมูลติดต่อ และข้อความแนะนำตัว
เปิดไฟล์ `src/data/portfolioData.js` แล้วแก้ไขที่ออบเจกต์ `personalInfo`:
```javascript
export const personalInfo = {
  name: "ชื่อ - นามสกุลของคุณ",
  nameEn: "Your Name In English",
  nickname: "ชื่อเล่น",
  title: "Frontend Web Developer & Creative UI Engineer",
  status: "พร้อมรับงาน (Available for Hire)",
  tagline: "สโลแกนหรือข้อความแนะนำตัวสั้น...",
  aboutBio: [
    "ข้อความแนะนำตัวย่อหน้าที่ 1...",
    "ข้อความแนะนำตัวย่อหน้าที่ 2...",
  ],
  contact: {
    email: "your.email@example.com",
    phone: "+66 89 123 4567",
    location: "กรุงเทพมหานคร, ประเทศไทย",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    resumeUrl: "/path-to-your-resume.pdf"
  }
};
```

### 2. แก้ไขรายการผลงาน (Projects)
ใน `src/data/portfolioData.js` ที่อาร์เรย์ `projectsData`:
- สามารถเพิ่ม ลบ หรือแก้ไขชื่อโปรเจกต์ คำอธิบาย ฟีเจอร์เด่น ลิงก์ Live Demo และ ลิงก์ GitHub
- หากต้องการเปลี่ยนรูปผลงาน ให้วางไฟล์ภาพของคุณในโฟลเดอร์ `src/assets/` แล้ว import เข้ามาใช้งานใน `src/components/Projects/Projects.jsx`

### 3. แก้ไขภาพโปรไฟล์ (Avatar)
- เปลี่ยนไฟล์ภาพโปรไฟล์ของคุณโดยนำไฟล์ภาพมาใส่ที่ `src/assets/avatar.svg` (หรือไฟล์รูปภาพจริง `.png` / `.webp` / `.jpg`) แล้วอัปเดต import ใน `src/components/About/About.jsx`

### 4. ปรับเปลี่ยนธีมสี
หากต้องการปรับเฉดสี สามารถแก้ไข CSS Variables ได้ที่ `src/styles/variables.css`:
```css
:root {
  --color-blue-light: #E8F2FF;
  --color-blue-mid: #4A90E2;
  --color-blue-dark: #1E5FA8;
  --color-blue-accent: #00B4D8;
}
```

---

## 📱 ความเข้ากันได้และการรองรับ (Responsive & Accessibility)

- **Mobile First**: ออกแบบรองรับหน้าจอทุกขนาด ตั้งแต่มือถือจอเล็ก 360px ไปจนถึงจอ Desktop กว้าง 1440px+
- **Prefers-Reduced-Motion**: รองรับผู้ใช้ที่เปิดการตั้งค่าลดการเคลื่อนไหว โดยปิดแอนิเมชันที่ไม่จำเป็นโดยอัตโนมัติ
- **Self-Contained Assets**: ไม่มีรูปภาพ placeholder จากภายนอกที่ต้องพึ่งพา runtime download ทุกอย่างบิลด์อยู่ในตัวโปรเจกต์ โหลดเร็ว ไม่สะดุด
