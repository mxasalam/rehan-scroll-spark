import { useEffect, useRef } from "react";
import { Award, Lightbulb, Trophy } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const Projects = () => {
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

  const projects = [
    {
      icon: Award,
      title: "Patent-Pending Innovation",
      description:
        "System and Method for Broadcasting and Joining Congregational Prayers via Location-Based Mobile App",
      category: "Patent",
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "Hyderabad City Police Hackathon 2019 - First Place",
      category: "Achievement",
    },
    {
      icon: Lightbulb,
      title: "AI/ML Development",
      description:
        "Conversation analysis systems, fintech API integrations, and automation pipelines for enterprise solutions",
      category: "Technical Work",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-accent relative overflow-hidden">
      <ParallaxSection speed={0.2} className="absolute bottom-0 left-1/3 -z-0">
        <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="section-appear mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
              Projects & Achievements
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="section-appear bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                    {project.title}
                  </h3>

                  <p className="text-foreground leading-relaxed">{project.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
