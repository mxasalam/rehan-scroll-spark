import { useEffect, useRef } from "react";
import ParallaxSection from "./ParallaxSection";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-appear");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const keywords = [
    "Software Engineering",
    "Systems Development",
    "FinTech",
    "AI/ML",
    "High-Reliability Apps",
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-accent relative overflow-hidden">
      {/* Decorative background */}
      <ParallaxSection speed={0.2} className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="section-appear mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
          </div>

          <div className="section-appear space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm Mohammed Abdul Salam, a Computer Science graduate (MS, University of Texas at Tyler) with{" "}
              <span className="font-semibold text-primary">7+ years of experience</span> designing scalable,
              human-centered applications. My work spans fintech, AI-driven media tools, mobile development,
              and systems engineering.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I focus on building reliable software with real-world impact, bringing together technical
              expertise and a deep understanding of user needs to create solutions that truly matter.
            </p>

            <div className="pt-8">
              <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-secondary font-medium text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
