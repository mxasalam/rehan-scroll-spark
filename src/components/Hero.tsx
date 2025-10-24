import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, ArrowDown } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import heroBackground from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpeg";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".section-appear");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Parallax Background */}
      <ParallaxSection speed={0.3} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
      </ParallaxSection>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="section-appear space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Building the Future, One Line at a Time
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight">
                Mohammed Abdul Salam
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-medium">
                Solutions Specialist @ Zil Money | Co-Founder @ FewCuts
              </p>
            </div>

            <p className="section-appear text-lg text-gray-400 leading-relaxed max-w-xl">
              Building intelligent, reliable, and human-centered technology — from fintech platforms to AI-driven media tools.
            </p>

            <div className="section-appear flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
                asChild
              >
                <a
                  href="https://linkedin.com/in/mxasalam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="section-appear flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <img
                src={portrait}
                alt="Mohammed Abdul Salam portrait"
                className="relative rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="section-appear absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors group"
          aria-label="Scroll to about section"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
