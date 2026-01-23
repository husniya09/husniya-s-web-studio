import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Frontend Developer</span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="text-gradient">Husniya Rozimboyeva</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-8" style={{ animationDelay: "0.2s" }}>
            I build modern and responsive web interfaces that combine
            <span className="text-primary font-medium"> clean design</span> with
            <span className="text-primary font-medium"> seamless functionality</span>
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/30 hover:bg-accent hover:border-primary transition-all duration-300"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2" style={{ animationDelay: "0.5s" }}>
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">Scroll down</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
