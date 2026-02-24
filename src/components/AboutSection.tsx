import { motion } from "framer-motion";
import aboutImg from "@/assets/about-illustration.png";
import { Code2, Zap, Target } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Zap, label: "Fast Learner", desc: "Quick to adapt new technologies" },
  { icon: Target, label: "Goal Driven", desc: "Focused on delivering results" },
];

const AboutSection = () => (
  <section id="about" className="section-padding section-alt relative overflow-hidden">
    <div className="floating-orb w-64 h-64 bg-accent top-0 right-0 opacity-20" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-md mx-auto mb-14">
          Passionate about building robust backend systems
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          className="space-y-5 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a passionate Software Developer with hands-on experience in backend development using <strong className="text-foreground font-semibold">Java</strong> and <strong className="text-foreground font-semibold">Spring Boot</strong>. I've built RESTful APIs, implemented secure authentication using JWT, and worked with databases like MySQL and MongoDB.
          </p>
          <p>
            I completed my B.E. in Computer Science Engineering and gained practical experience through training and internships, developing backend modules for real-time applications and full-stack projects.
          </p>
          <p>
            I'm eager to grow as a Java Backend Developer, continuously learning new technologies and improving problem-solving skills.
          </p>

          <div className="grid grid-cols-3 gap-3 pt-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="glass-card rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-2">
                  <h.icon size={18} className="text-primary" />
                </div>
                <p className="text-xs font-semibold text-foreground">{h.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl scale-105" />
            <img src={aboutImg} alt="Coding workspace" className="relative rounded-2xl max-w-sm w-full shadow-2xl border border-border" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
