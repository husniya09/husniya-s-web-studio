import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2026 <span className="text-foreground font-medium">Husniya Rozimboyeva</span>. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-1 mt-1">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Back to top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-accent hover:border-primary transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
