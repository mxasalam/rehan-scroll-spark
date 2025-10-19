import { useEffect, useRef } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "Kotlin", "SQL", "Bash", "JavaScript", "TypeScript"],
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "Platforms & Tools",
      skills: ["Android", "AWS", "PostgreSQL", "Docker", "CI/CD", "n8n", "Webhooks"],
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      title: "Domains",
      skills: ["FinTech", "AI/ML", "Data Analytics", "Systems Engineering"],
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "Key Responsibilities @ Zil Money",
      skills: [
        "API Integration",
        "Automation",
        "DevOps",
        "Management",
        "Marketing",
      ],
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="section-appear mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
              Skills & Expertise
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto" />
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="section-appear"
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-xl font-heading font-semibold text-secondary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full font-medium text-sm transition-all cursor-default hover:scale-105 shadow-sm hover:shadow-md ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
