import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Backend Application",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    description:
      "Developed a scalable backend system with user management, product management, and order processing. Designed RESTful APIs and integrated MySQL for efficient data storage and retrieval.",
  },
  {
    title: "Calculator Web Application",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Built a responsive calculator with dynamic operations, DOM manipulation, and real-time calculations using JavaScript.",
  },
  {
    title: "Brain Tumor Classification System",
    tech: ["Python", "CNN", "Machine Learning"],
    description:
      "Developed a deep learning model to detect and classify brain tumors from MRI images using CNN techniques for improved accuracy.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-card rounded-xl p-6 card-elevated border border-border flex flex-col">
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{p.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tech.map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
            <a
              href="https://github.com/jiyoffrin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 hover:underline"
            >
              View on GitHub <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
