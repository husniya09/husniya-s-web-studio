import { Heart, Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code",
    },
    {
      icon: Palette,
      title: "UI Design",
      description: "Creating beautiful user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast and responsive apps",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image placeholder with decorative elements */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-rose-gold/20 rounded-3xl blur-2xl" />
              
              {/* Main image placeholder */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-accent to-blush flex items-center justify-center overflow-hidden border border-primary/10">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Your photo here</p>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl rotate-12 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-rose-gold/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Hello! I'm <span className="text-foreground font-medium">Husniya Rozimboyeva</span>, 
                a 17-year-old frontend developer with a passion for creating beautiful and 
                functional web experiences.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, 
                and it quickly turned into a deep passion for crafting <span className="text-primary font-medium">clean, 
                responsive interfaces</span> that users love to interact with.
              </p>
              <p>
                I focus on writing clean, maintainable code while ensuring every project 
                delivers an exceptional <span className="text-primary font-medium">user experience</span>. 
                I'm constantly learning new technologies and best practices to improve my skills.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
