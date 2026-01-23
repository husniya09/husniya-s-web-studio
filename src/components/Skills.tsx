import { Code2, Palette, Smartphone, Layout, Lightbulb } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: Code2,
      level: 90,
      description: "Semantic markup & accessibility",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "CSS",
      icon: Palette,
      level: 85,
      description: "Styling, animations & layouts",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: Code2,
      level: 75,
      description: "DOM manipulation & ES6+",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Responsive Design",
      icon: Smartphone,
      level: 88,
      description: "Mobile-first approach",
      color: "from-green-400 to-green-600",
    },
    {
      name: "UI/UX Principles",
      icon: Lightbulb,
      level: 70,
      description: "User-centered design thinking",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Skill name */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-medium text-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <Layout className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Currently learning <span className="text-foreground font-medium">React</span> and <span className="text-foreground font-medium">TypeScript</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
