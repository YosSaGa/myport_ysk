// Portfolio content based on Yossakron Janduang's resume.

export const personalInfo = {
  name: "Yossakron Janduang",
  nameEn: "Yossakron Janduang",
  nickname: "Yoss",
  title: "Senior Information Technology Student",
  status: "นักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ",
  isAvailable: true,
  tagline: "นักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ สนใจการพัฒนาซอฟต์แวร์ ระบบเครือข่าย และการออกแบบ UI/UX พร้อมเรียนรู้สิ่งใหม่และเปิดรับความท้าทาย",
  taglineEn: "A fourth-year Information Technology student interested in software development, network systems, and UI/UX design, always ready to learn and take on new challenges.",
  aboutBioThai: [
    "ผมเป็นนักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยสงขลานครินทร์",
    "ผมสนใจด้านการพัฒนาซอฟต์แวร์ ระบบเครือข่าย และการออกแบบ UI/UX เป็นพิเศษ",
    "ผมชอบเรียนรู้สิ่งใหม่ เปิดรับความท้าทาย และพร้อมหาประสบการณ์ใหม่จากการเข้าร่วมกิจกรรมและการฝึกอบรม"
  ],
  aboutBio: [
    "I am a fourth-year Information Technology student at Prince of Songkla University.",
    "I am especially interested in software development, network systems, and UI/UX design.",
    "I enjoy learning new things, welcome challenges, and actively seek new experience through activities and training."
  ],
  contact: {
    email: "yossakron123za@gmail.com",
    phone: "062-187-5053",
    location: "ประเทศไทย (Thailand)",
    github: "https://github.com/YosSaGa",
    linkedin: "",
    line: "",
    twitter: "",
    resumeUrl: "/resume.pdf"
  },
  stats: [
    { number: "ปี 4", label: "นักศึกษาเทคโนโลยีสารสนเทศ" },
    { number: "2", label: "โปรเจกต์ใน Resume" },
    { number: "2022", label: "เริ่มศึกษาที่ ม.อ." },
    { number: "3", label: "ด้านที่สนใจหลัก" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "ทักษะทั้งหมด" },
    { id: "frontend", label: "Web Development" },
    { id: "backend", label: "Programming & Database" },
    { id: "styling", label: "Design" },
    { id: "tools", label: "Tools & Support" }
  ],
  skills: [
    { name: "HTML, CSS, JavaScript", category: "frontend", level: null, experience: "Resume skill", icon: "Braces", description: "พื้นฐานการพัฒนาเว็บไซต์ฝั่งผู้ใช้งาน" },
    { name: "React", category: "frontend", level: null, experience: "Resume skill", icon: "Code2", description: "พัฒนาเว็บแอปพลิเคชันแบบคอมโพเนนต์" },
    { name: "PHP", category: "backend", level: null, experience: "Resume skill", icon: "Server", description: "พัฒนาโปรแกรมและระบบเว็บฝั่งเซิร์ฟเวอร์" },
    { name: "Java", category: "backend", level: null, experience: "Resume skill", icon: "FileCode", description: "การเขียนโปรแกรมเชิงวัตถุและพัฒนาแอปพลิเคชัน" },
    { name: "MySQL", category: "backend", level: null, experience: "Resume skill", icon: "Database", description: "จัดเก็บและจัดการข้อมูลด้วยฐานข้อมูลเชิงสัมพันธ์" },
    { name: "Supabase", category: "backend", level: null, experience: "Resume skill", icon: "Database", description: "บริการ Backend และฐานข้อมูลสำหรับเว็บแอปพลิเคชัน" },
    { name: "Firebase", category: "backend", level: null, experience: "Resume skill", icon: "Zap", description: "บริการ Backend และเครื่องมือสำหรับพัฒนาแอปพลิเคชัน" },
    { name: "UI/UX Design", category: "styling", level: null, experience: "Resume skill", icon: "Palette", description: "ออกแบบประสบการณ์และส่วนติดต่อผู้ใช้งาน" },
    { name: "Figma", category: "styling", level: null, experience: "Resume skill", icon: "Figma", description: "ออกแบบหน้าจอและต้นแบบการใช้งาน" },
    { name: "Web Design Tools", category: "styling", level: null, experience: "Resume skill", icon: "Layers", description: "เครื่องมือสำหรับออกแบบและสร้างเว็บไซต์" },
    { name: "Git & GitHub", category: "tools", level: null, experience: "Resume skill", icon: "GitBranch", description: "ควบคุมเวอร์ชันและจัดเก็บซอร์สโค้ด" },
    { name: "Docker", category: "tools", level: null, experience: "Resume skill", icon: "Server", description: "จัดสภาพแวดล้อมแอปพลิเคชันด้วยคอนเทนเนอร์" },
    { name: "VS Code", category: "tools", level: null, experience: "Resume skill", icon: "Code2", description: "เครื่องมือหลักสำหรับเขียนและจัดการโค้ด" },
    { name: "IT Support Skills", category: "tools", level: null, experience: "Resume skill", icon: "RefreshCw", description: "ทักษะสนับสนุนและแก้ปัญหาด้านเทคโนโลยีสารสนเทศ" },
    { name: "English", category: "tools", level: null, experience: "Fair", icon: "Network", description: "English proficiency: Fair" }
  ]
};

export const projectsData = [
  {
    id: "plookploen",
    title: "PlookPloen",
    category: "webapp",
    categoryLabel: "Plant2_letgo",
    year: "ชั้นปีที่ 4",
    summary: "เว็บแอปพลิเคชัน Responsive สำหรับแนะนำการปลูกพืช คำนวณปริมาณน้ำ ดูแลพืชผ่านปฏิทิน และจำแนกโรคใบพืชด้วย Machine Learning",
    description: "โครงงานชั้นปีที่ 4 สำหรับช่วยแนะนำการปลูกและดูแลพืช โดยนำข้อมูลสภาพอากาศจริงมาใช้คำนวณปริมาณน้ำ เชื่อมระบบปฏิทินเพื่อแจ้งเตือน และใช้โมเดล Machine Learning จำแนกโรคใบพืช",
    features: [
      "พัฒนาเว็บแอปพลิเคชันแบบ Responsive สำหรับแนะนำการปลูกพืชและคำนวณปริมาณน้ำตามสภาพอากาศจริงผ่าน OpenWeather API",
      "พัฒนาระบบปฏิทินบันทึกการดูแลพืช และเชื่อมต่อ Google Calendar API (OAuth) สำหรับแจ้งเตือนการรดน้ำและใส่ปุ๋ยอัตโนมัติ",
      "พัฒนาและฝึกสอนโมเดล Machine Learning (CNN) จากชุดข้อมูลภาพถ่าย เพื่อจำแนกโรคใบพืช 5 ชนิด พร้อมแสดงค่าความมั่นใจ (Confidence Score)"
    ],
    techStack: ["Responsive Web App", "OpenWeather API", "Google Calendar API", "OAuth", "Machine Learning", "CNN"],
    metrics: "จำแนกโรคใบพืช 5 ชนิด พร้อมแสดง Confidence Score",
    demoUrl: "https://plant2-letgo.vercel.app/",
    githubUrl: "https://github.com/YosSaGa/Plant2_letgo",
    accentColor: "#00B4D8"
  },
  {
    id: "exotic-pet",
    title: "Exotic_Pet_5_6",
    category: "webapp",
    categoryLabel: "Exotic_Pet_5_6",
    year: "โครงงานการศึกษา",
    summary: "เว็บไซต์สำหรับให้ข้อมูล ข่าวสาร และบทความเกี่ยวกับสัตว์เลี้ยงชนิดพิเศษ (Exotic Pets)",
    description: "พัฒนาเว็บไซต์เพื่อรวบรวมและนำเสนอข้อมูล ข่าวสาร และบทความเกี่ยวกับสัตว์เลี้ยงชนิดพิเศษ ช่วยให้ผู้สนใจเข้าถึงความรู้เกี่ยวกับ Exotic Pets ได้สะดวกขึ้น",
    features: [
      "นำเสนอข้อมูลเกี่ยวกับสัตว์เลี้ยงชนิดพิเศษ",
      "รวบรวมข่าวสารที่เกี่ยวข้องกับ Exotic Pets",
      "เผยแพร่บทความให้ความรู้สำหรับผู้สนใจ"
    ],
    techStack: ["Website", "Content", "Exotic Pets"],
    metrics: "ผลงานเว็บไซต์ตามรายการ Project Experience ใน Resume",
    demoUrl: "https://exotic-pet-5-6.vercel.app/",
    githubUrl: "https://github.com/YosSaGa/Exotic_Pet_5_6",
    accentColor: "#4A90E2"
  }
];

export const timelineData = [
  {
    id: "project-plookploen", period: "โครงงานชั้นปีที่ 4", periodEn: "Fourth-year project", role: "PlookPloen", roleEn: "PlookPloen", company: "Project Experience", companyEn: "Project Experience", location: "ประเทศไทย", locationEn: "Thailand",
    description: "เว็บแอปพลิเคชันสำหรับแนะนำการปลูกพืช คำนวณปริมาณน้ำตามสภาพอากาศ และช่วยบันทึกการดูแลพืช",
    descriptionEn: "A responsive web application that recommends plant care, calculates watering needs from live weather data, and records plant-care activities.",
    achievements: ["เชื่อมต่อ OpenWeather API เพื่อใช้ข้อมูลสภาพอากาศจริง", "เชื่อมต่อ Google Calendar API ผ่าน OAuth เพื่อแจ้งเตือนการรดน้ำและใส่ปุ๋ย", "ฝึกสอนโมเดล CNN เพื่อจำแนกโรคใบพืช 5 ชนิดและแสดง Confidence Score"],
    achievementsEn: ["Integrated OpenWeather API for real weather data", "Connected Google Calendar API through OAuth for watering and fertilizing reminders", "Trained a CNN model to classify five plant-leaf diseases and display a confidence score"],
    skills: ["Responsive Web", "OpenWeather API", "Google Calendar API", "OAuth", "Machine Learning", "CNN"]
  },
  {
    id: "project-exotic-pet", period: "โครงงานการศึกษา", periodEn: "Academic project", role: "Exotic_Pet Website", roleEn: "Exotic_Pet Website", company: "Project Experience", companyEn: "Project Experience", location: "ประเทศไทย", locationEn: "Thailand",
    description: "เว็บไซต์สำหรับให้ข้อมูล ข่าวสาร และบทความเกี่ยวกับสัตว์เลี้ยงชนิดพิเศษ (Exotic Pets)", descriptionEn: "A website providing information, news, and articles about exotic pets.",
    achievements: ["รวบรวมข้อมูลเกี่ยวกับสัตว์เลี้ยงชนิดพิเศษ", "นำเสนอข่าวสารและบทความให้ผู้สนใจเข้าถึงได้สะดวก"], achievementsEn: ["Collected information about exotic pets", "Presented related news and articles in an accessible website"],
    skills: ["Web Development", "Content Website", "Exotic Pets"]
  },
  {
    id: "edu-1", period: "2022 - ปัจจุบัน", periodEn: "2022 - Present", role: "วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ", roleEn: "Bachelor of Science in Information Technology", company: "มหาวิทยาลัยสงขลานครินทร์", companyEn: "Prince of Songkla University", location: "ประเทศไทย", locationEn: "Thailand",
    description: "ปัจจุบันเป็นนักศึกษาระดับปริญญาตรี ชั้นปีที่ 4", descriptionEn: "Currently a fourth-year undergraduate student.",
    achievements: ["สนใจการพัฒนาซอฟต์แวร์ ระบบเครือข่าย และการออกแบบ UI/UX", "พัฒนา PlookPloen เป็นโครงงานชั้นปีที่ 4"], achievementsEn: ["Interested in software development, network systems, and UI/UX design", "Developing PlookPloen as a fourth-year project"],
    skills: ["Information Technology", "Software Development", "Network Systems", "UI/UX Design"]
  },
  {
    id: "edu-2", period: "2019 - 2022", periodEn: "2019 - 2022", role: "สาขาคอมพิวเตอร์ธุรกิจ", roleEn: "Computer Business", company: "วิทยาลัยเทคโนโลยีอุดมศึกษาพณิชยการ", companyEn: "Udomsueksaphanitchayakan Technological College", location: "ประเทศไทย", locationEn: "Thailand",
    description: "สำเร็จการศึกษาในปี พ.ศ. 2565", descriptionEn: "Graduated in 2022 (B.E. 2565).", achievements: ["ศึกษาด้านคอมพิวเตอร์ธุรกิจ"], achievementsEn: ["Studied Computer Business"], skills: ["Computer Business"]
  }
];

export const projectCategories = [
  { id: "all", label: "ทั้งหมด (All Projects)" },
  { id: "webapp", label: "Web Applications" }
];
