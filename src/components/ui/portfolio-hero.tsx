import React, { useEffect, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import yossPhoto from "@/assets/YOSS.jpg";
import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = React.useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

interface PortfolioHeroProps {
  onEnter?: () => void;
}

export default function Component({ onEnter }: PortfolioHeroProps) {
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        if (onEnter) onEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter]);

  const handleScrollDown = () => {
    if (onEnter) {
      onEnter();
    }
  };

  return (
    <div 
      className="min-h-screen w-full text-white bg-black transition-colors relative select-none flex flex-col justify-between"
    >
      {/* Minimal Top Header - Signature + Language Switcher */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Left spacer for optical center balance */}
          <div className="w-24 pointer-events-none" />

          {/* Signature: Y for Yossakron */}
          <div 
            className="text-4xl select-none text-white/90" 
            style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
          >
            Y
          </div>

          {/* Right Language Toggle with pointer-events-auto */}
          <div className="w-24 flex justify-end pointer-events-auto">
            <LanguageToggle variant="dark-mode" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col justify-center">
        {/* Centered Main Name - Always Perfectly Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <div>
              <BlurText
                text="YOSS"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ color: "#C3E41D", fontFamily: "'Bebas Neue', 'Prompt', sans-serif" }}
              />
            </div>
            <div>
              <BlurText
                text="JANDUANG"
                delay={80}
                animateBy="letters"
                direction="top"
                className="font-bold text-[60px] sm:text-[95px] md:text-[135px] lg:text-[160px] leading-[0.85] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ color: "#C3E41D", fontFamily: "'Bebas Neue', 'Prompt', sans-serif" }}
              />
            </div>

            {/* Profile Picture (YOSS.jpg) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div 
                onClick={handleScrollDown}
                className="w-[68px] h-[110px] sm:w-[92px] sm:h-[152px] md:w-[114px] md:h-[185px] lg:w-[134px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer border-2 border-[#C3E41D]/50 ring-4 ring-[#C3E41D]/20"
                title={t.intro.clickToEnterTitle}
              >
                <img
                  src={yossPhoto}
                  alt="Yossakron Janduang (ยศกร จันด้วง)"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline - Proper Distance Below Hero */}
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center flex-col items-center gap-2">
            <BlurText
              key={t.intro.tagline}
              text={t.intro.tagline}
              delay={80}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-400 hover:text-white"
              style={{ fontFamily: "'Prompt', sans-serif" }}
            />
            <p className="text-sm font-medium tracking-wide text-neutral-400" style={{ fontFamily: "'Prompt', sans-serif" }}>
              {t.intro.subtagline}
            </p>
          </div>
        </div>

        {/* Scroll Indicator / Enter Website Action */}
        <button
          type="button"
          onClick={handleScrollDown}
          className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-300 cursor-pointer group z-20"
          aria-label={t.intro.clickToEnterTitle}
        >
          <span className="text-xs uppercase tracking-widest text-neutral-400 group-hover:text-[#C3E41D] transition-colors font-mono">
            {t.intro.enterBtn}
          </span>
          <div className="w-9 h-9 rounded-full border border-neutral-700 group-hover:border-[#C3E41D] flex items-center justify-center transition-all bg-black/40 backdrop-blur-sm group-hover:scale-110 shadow-lg shadow-[#C3E41D]/10">
            <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-[#C3E41D] transition-colors animate-bounce" />
          </div>
        </button>
      </main>
    </div>
  );
}
