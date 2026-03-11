import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import beautySalonPreview from "@/assets/beauty-salon-preview.png";

const Projects = () => {
  const projects = [
    {
      title: "Beauty Salon Website",
      description:
        "A modern and responsive website for a beauty salon featuring elegant design, service listings, appointment booking interface, and gallery showcasing the salon's work.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: beautySalonPreview,
      demoLink: "#",
      sourceLink: "#",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects grid */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image placeholder */}
                <div className="relative aspect-video md:aspect-auto overflow-hidden bg-gradient-to-br from-accent to-blush">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-3">
                          <Sparkles className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm">Project Preview</p>
                      </div>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-primary/30 hover:bg-accent"
                    >
                      <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects coming */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More projects coming soon... Stay tuned! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
