import { Code2, Database, Globe, Wrench, Brain } from "lucide-react";

const categories = [
  {
    title: "Backend",
    icon: Code2,
    skills: ["Java", "Spring Boot", "RESTful APIs", "JWT Authentication", "MVC Architecture"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB (Basic)"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Postman"],
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: ["OOP", "Data Structures", "Problem Solving"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-card rounded-xl p-6 card-elevated border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
