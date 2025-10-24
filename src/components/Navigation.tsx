import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const navItems = [
    { id: "home", label: "Home", type: "scroll" },
    { id: "about", label: "About", type: "scroll" },
    { id: "experience", label: "Experience", type: "scroll" },
    { id: "projects", label: "Projects", type: "scroll" },
    { id: "skills", label: "Skills", type: "scroll" },
    { id: "blog", label: "Blog", type: "link", path: "/blog" },
    { id: "motivations", label: "Motivations", type: "link", path: "/motivations" },
    { id: "contact", label: "Contact", type: "scroll" },
  ];

  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              MAS
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => item.type === "link" ? navigate(item.path || `/${item.id}`) : scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors relative group ${
                    (item.type === "scroll" && activeSection === item.id) || 
                    (item.type === "link" && location.pathname === item.path)
                      ? "text-primary"
                      : isScrolled 
                        ? "text-foreground hover:text-primary" 
                        : "text-white hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                      (item.type === "scroll" && activeSection === item.id) || 
                      (item.type === "link" && location.pathname === item.path)
                        ? "w-full" 
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
