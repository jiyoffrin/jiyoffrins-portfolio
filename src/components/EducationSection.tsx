import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => (
  <section id="education" className="section-padding relative overflow-hidden">
    <div className="floating-orb w-64 h-64 bg-accent -top-10 left-0" />
    <div className="container mx-auto max-w-2xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-md mx-auto mb-14">
          Academic background
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card rounded-2xl p-8 card-elevated text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-accent to-primary" />
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
          <GraduationCap size={30} className="text-primary-foreground" />
        </div>
        <h3 className="font-display font-semibold text-xl text-foreground">
          Bachelor of Engineering (B.E.)
        </h3>
        <p className="text-primary font-semibold mt-1">Computer Science and Engineering</p>
        <p className="text-sm text-muted-foreground mt-3">
          St. Xavier's Catholic College of Engineering
        </p>
        <p className="text-xs text-muted-foreground">(Affiliated to Anna University)</p>
        <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
          <Award size={14} className="text-primary" />
          Graduated in 2025
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
