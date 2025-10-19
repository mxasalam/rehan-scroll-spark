import { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const Experience = () => {
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

  const experiences = [
    {
      company: "Zil Money",
      role: "Solutions Specialist",
      period: "July 2025 – Present",
      summary: "Payments, API-driven automation, onboarding, and enterprise enablement.",
      highlights: [
        "API Integration & Automation: Internal API work, micro-apps, and workflow tools using TypeScript, n8n, Webhooks",
        "Enterprise Demos & Client Success: Tailored solutions (ACH, wires, checks, payroll by card, virtual cards)",
        "White-Labeling & Customization: API-first solutions for enterprise branding and specialized workflows",
        "Sales Enablement & U.S. Office Launch: Hiring/training support, analytics-driven onboarding improvements",
        "AI Prototypes: Real-time call assistant, onboarding chatbot; data & insights for product roadmap",
      ],
    },
    {
      company: "FewCuts",
      role: "Co-Founder",
      period: "Oct 2021 – Present",
      summary: "Context-aware AI video editing for enterprises & podcasts; niche-specific models that match tone/audience/platform strategy.",
      highlights: [
        "Building AI-driven video editing platform tailored to enterprise needs",
        "Developing niche-specific models for context-aware content optimization",
        "Preparing $200K pre-seed funding round at $2M valuation",
      ],
      featured: true,
    },
    {
      company: "University of Texas at Tyler",
      role: "Graduate Assistant",
      period: "Past Role",
      summary: "Software tools development and automation for academic operations.",
      highlights: [],
    },
    {
      company: "WE Hub (Govt. of Telangana)",
      role: "Developer",
      period: "Past Role",
      summary: "Award-winning SoundTrap noise-reduction initiative.",
      highlights: [],
    },
    {
      company: "Private Therapy Clinic",
      role: "Content Producer",
      period: "Past Role",
      summary: "High-growth social video operations and content strategy.",
      highlights: [],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute top-20 right-0 -z-0">
        <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="section-appear mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
              Experience & Ventures
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`section-appear ${
                  exp.featured ? "bg-gradient-to-br from-primary/5 to-accent" : "bg-card"
                } rounded-2xl p-8 shadow-md hover:shadow-lg transition-all`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${exp.featured ? "bg-primary/10" : "bg-accent"}`}>
                    <Briefcase className={`h-6 w-6 ${exp.featured ? "text-primary" : "text-secondary"}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-secondary">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{exp.role}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium bg-accent px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">{exp.summary}</p>

                    {exp.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                            <span className="text-primary mt-1 flex-shrink-0">▪</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
