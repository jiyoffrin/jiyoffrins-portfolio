import { Code2, Database, Globe, Wrench, Brain } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { title: "Backend", icon: Code2, skills: ["Java", "Spring Boot", "RESTful APIs", "JWT Auth", "MVC"], color: "from-primary to-accent" },
  { title: "Database", icon: Database, skills: ["MySQL", "MongoDB (Basic)"], color: "from-primary to-primary" },
  { title: "Frontend", icon: Globe, skills: ["HTML", "CSS", "JavaScript"], color: "from-accent to-primary" },
  { title: "Tools", icon: Wrench, skills: ["Git", "Postman"], color: "from-primary to-accent" },
  { title: "Core Concepts", icon: Brain, skills: ["OOP", "Data Structures", "Problem Solving"], color: "from-accent to-primary" },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding relative overflow-hidden">
    <div className="floating-orb w-80 h-80 bg-primary -bottom-20 -left-20" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-md mx-auto mb-14">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group glass-card rounded-2xl p-6 card-elevated hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                <cat.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border group-hover:border-primary/20 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
