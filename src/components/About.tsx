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
              As a Software Engineer, Systems Developer, and Co-Founder, I design and deliver scalable, intelligent, and human-centered technology that bridges engineering excellence with real-world impact.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              With a Master's in Computer Science and over 7 years of experience, I've built products across fintech, AI-driven media platforms, and intelligent automation systems. My work spans from a patent-pending location-based communication platform to enterprise-grade fintech solutions and AI-backed content tools.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Currently, I'm:
            </p>
            
            <ul className="space-y-3 text-lg text-foreground leading-relaxed ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span><span className="font-semibold text-primary">Co-Founder @ FewCuts</span> - building a context-aware AI video editing platform that helps enterprises and podcast teams turn long-form conversations into high-performing short clips using niche-specific AI models.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span><span className="font-semibold text-primary">Solutions Specialist @ Zil Money</span> - leading API-driven automation, micro-app development, and white-labeling solutions for enterprise clients, while driving U.S. business growth and system scalability.</span>
              </li>
            </ul>

            <p className="text-lg text-foreground leading-relaxed">
              I thrive at the intersection of software engineering, systems thinking, and product strategy, whether it's architecting backend pipelines, developing automation workflows, or shaping go-to-market for emerging platforms.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-semibold text-secondary">🔑 Core Skills:</span> API Integrations, TypeScript, Python, Java, Kotlin, PostgreSQL, Android, n8n, Docker, CI/CD, Scalable Architecture, AI/ML, FinTech Systems
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-semibold text-secondary">📩 Let's connect</span> if you're looking for someone who combines deep technical expertise with entrepreneurial drive - building technology that is not just functional, but transformative.
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
