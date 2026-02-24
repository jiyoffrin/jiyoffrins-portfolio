import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => (
  <section id="experience" className="section-padding section-alt relative overflow-hidden">
    <div className="floating-orb w-64 h-64 bg-primary bottom-0 right-0" />
    <div className="container mx-auto max-w-2xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-md mx-auto mb-14">
          Professional journey so far
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card rounded-2xl p-8 card-elevated relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-primary to-accent" />
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
            <Briefcase size={22} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">Java Developer Trainee</h3>
            <p className="text-sm text-muted-foreground">Alo Info-Tech Pvt Ltd</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mt-2">
              <Calendar size={12} />
              Aug 2025 – Feb 2026
            </div>
          </div>
        </div>
        <ul className="space-y-3 ml-1">
          {[
            "Developed RESTful APIs using Java and Spring Boot",
            "Implemented CRUD operations",
            "Integrated MySQL database",
            "Used Postman for API testing",
            "Followed MVC architecture and coding best practices",
            "Built a full-stack calculator web application",
          ].map((r) => (
            <li key={r} className="text-sm text-muted-foreground flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-1.5 flex-shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
