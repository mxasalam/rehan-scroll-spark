import { useEffect, useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = "" }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const motionPreference = document.body.classList.contains("no-motion");
      if (motionPreference || !sectionRef.current) return;

      const scrolled = window.pageYOffset;
      const element = sectionRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    // Use requestAnimationFrame for smooth performance
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", smoothScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`parallax-layer ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxSection;
