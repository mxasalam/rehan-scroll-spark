import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const footerLinks = [
    { label: "Resume", onClick: () => window.open("/assets/Mohammed_Abdul_Salam_Resume.pdf") },
    { label: "LinkedIn", onClick: () => window.open("https://linkedin.com/in/mxasalam", "_blank") },
    { label: "Email", onClick: () => window.location.href = "mailto:mxasalam@gmail.com" },
  ];

  return (
    <footer className="bg-secondary text-white py-12 relative">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-heading font-bold mb-2">Mohammed Abdul Salam</p>
            <p className="text-sm text-gray-400">
              Building the future of fintech and AI-driven media
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.onClick}
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Mohammed Abdul Salam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
