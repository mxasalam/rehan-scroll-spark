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
      period: "Jul 2025 – Present · 4 mos",
      location: "Tyler, Texas, United States · On-site",
      summary: "Full-time role focusing on API-driven automation, enterprise solutions, and product development.",
      highlights: [
        "Design and implement micro-apps and automation tools using internal APIs, TypeScript, n8n, and Webhooks",
        "Partner with enterprise clients on API-driven white-labeling solutions and workflow customization",
        "Build internal tools to enhance payment processing, onboarding, and team efficiency",
        "Conduct enterprise demos and collaborate with product teams to align features with business needs",
      ],
      featured: true,
    },
    {
      company: "FewCuts",
      role: "Co-Founder",
      period: "Oct 2021 – Present · 4 yrs 1 mo",
      location: "Delaware, United States · Remote",
      summary: "Full-time co-founder role building context-aware AI video editing platform for enterprises and podcast teams.",
      highlights: [
        "Building FewCuts - a context-aware AI video editing platform that helps enterprises and podcast teams transform long-form content into high-performing short clips",
        "Developing niche-specific AI models that adapt to creator tone, audience needs, and platform strategy",
        "Focused on product vision, AI/ML innovation, and scalable infrastructure, while shaping enterprise adoption, compliance, and long-term growth strategy",
        "Currently preparing a $200K pre-seed raise at a $2M valuation to expand engineering and data operations",
      ],
    },
    {
      company: "University of Texas at Tyler",
      role: "Graduate Assistant",
      period: "Jan 2024 – Dec 2024 · 1 yr",
      location: "Tyler, Texas, United States · On-site",
      summary: "Part-time role developing web-based and mobile-friendly tools for academic operations.",
      highlights: [
        "Created web-based and mobile-friendly tools for event registration and QR-based tracking, enhancing user interaction by 40%",
        "Used automation tools to streamline internal IT workflows and built software that minimized manual overhead",
        "Supported student-facing systems and provided technical guidance on mobile-first development across various platforms",
        "Focus Areas: Agile development, software tools for student experience, UI automation, backend process scripting",
      ],
    },
    {
      company: "WE Hub, A Government of Telangana Initiative",
      role: "Developer and Product Management",
      period: "Jan 2020 – Mar 2022 · 2 yrs 3 mos",
      location: "Greater Hyderabad Area · On-site",
      summary: "Contract role developing award-winning SoundTrap noise pollution reduction device.",
      highlights: [
        "Spearheaded the development of SoundTrap, a noise pollution reduction device in partnership with the Telangana State Government, delivering an award-winning project that improved noise detection accuracy by 35%",
        "Designed and implemented the core noise detection algorithm using Python libraries such as PyAudio and SciPy, achieving 30% more effective decibel analysis and recognition",
        "Collaborated with government agencies to deploy SoundTrap technology in high-noise zones, resulting in a 20% improvement in noise management and public safety",
      ],
    },
    {
      company: "Private Therapy Clinic",
      role: "Content Producer and Analyst",
      period: "Nov 2020 – Jan 2022 · 1 yr 3 mos",
      location: "London Area, United Kingdom · Remote",
      summary: "Freelance role producing high-performance social media content for mental health clinic.",
      highlights: [
        "Produced and edited over 100 videos for YouTube, Instagram, and TikTok, helping achieve over 2 million views on YouTube and 1 million views on TikTok and Instagram",
        "Collaborated with CEO Becky Spelman and team to create content that aligned with the clinic's mission, leading to 35-40% growth in audience engagement",
        "Optimized content for platform-specific performance, improving video reach and engagement by 30%",
      ],
    },
    {
      company: "Young With Solutions",
      role: "Content Manager and Producer",
      period: "Sep 2020 – Mar 2021 · 7 mos",
      location: "Remote",
      summary: "Full-time role managing data-driven social media growth and content strategy.",
      highlights: [
        "Managed a data-driven strategy to grow Charisma on Command's TikTok presence from 0 to 100,000 followers within 4 months",
        "Coordinated a content launch for influencer Timote Chanut on YouTube, driving subscriber growth and enhancing brand presence",
        "Applied social media analytics to optimize content reach, leading to a 25% increase in engagement across all managed platforms",
      ],
    },
    {
      company: "ProjectCube",
      role: "Product Development and Technical Support",
      period: "Feb 2017 – Sep 2020 · 3 yrs 8 mos",
      location: "India · On-site",
      summary: "Full-time role co-founding and leading custom computer assembly startup.",
      highlights: [
        "Co-founded and led a startup specializing in custom-built computers, achieving high customer satisfaction and a 95% client retention rate",
        "Managed end-to-end custom computer assembly and technical support services, resulting in a 40% reduction in client wait times and a 30% increase in repeat customers",
      ],
    },
    {
      company: "Government of Telangana",
      role: "Volunteer Staff",
      period: "Aug 2017 · 1 mo",
      location: "Hyderabad, Telangana, India · On-site",
      summary: "Full-time volunteer organizing tech education for special needs children.",
      highlights: [
        "Organized and led tech-based educational activities for special needs children in collaboration with local educational outreach programs",
        "Won first place in a state-wide robotics competition with a project developed to empower children with disabilities, earning praise from government officials and local media",
      ],
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
