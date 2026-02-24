import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Backend Application",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    description: "Developed a scalable backend system with user management, product management, and order processing. Designed RESTful APIs and integrated MySQL for efficient data storage and retrieval.",
    highlight: true,
  },
  {
    title: "Calculator Web Application",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Built a responsive calculator with dynamic operations, DOM manipulation, and real-time calculations using JavaScript.",
    highlight: false,
  },
  {
    title: "Brain Tumor Classification System",
    tech: ["Python", "CNN", "Machine Learning"],
    description: "Developed a deep learning model to detect and classify brain tumors from MRI images using CNN techniques for improved accuracy.",
    highlight: false,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative overflow-hidden">
    <div className="floating-orb w-96 h-96 bg-primary -top-20 left-1/3" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-md mx-auto mb-14">
          Some things I've built
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`group glass-card rounded-2xl p-7 card-elevated flex flex-col transition-all duration-300 hover:border-primary/30 ${p.highlight ? 'gradient-border' : ''}`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display font-semibold text-lg text-foreground flex-1 pr-2">{p.title}</h3>
              <a
                href="https://github.com/jiyoffrin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all flex-shrink-0"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{p.description}</p>
            <a
              href="https://github.com/jiyoffrin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-5 group-hover:gap-2.5 transition-all"
            >
              View on GitHub <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
