import { ArrowDown, Mail, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden">
    {/* Decorative orbs */}
    <div className="floating-orb w-96 h-96 bg-primary -top-32 -right-32 animate-pulse-glow" />
    <div className="floating-orb w-72 h-72 bg-accent bottom-0 -left-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
    <div className="floating-orb w-48 h-48 bg-primary top-1/2 right-1/4 animate-pulse-glow" style={{ animationDelay: '4s' }} />

    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-widest uppercase mb-6 border border-border"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </motion.div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
          Hi, I'm{" "}
          <span className="gradient-text relative">
            Jiyoffrin R V
          </span>
        </h1>

        <motion.p
          className="font-display text-lg md:text-xl text-muted-foreground mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Java Backend Developer · Spring Boot · Full-Stack
        </motion.p>

        <motion.p
          className="text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Building scalable backend systems and efficient web applications with clean and maintainable code.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#projects" className="btn-primary-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm">
            <ArrowDown size={16} /> View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <Mail size={16} /> Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1wer6SMoaeAh5S5Pu2fETtquPK8JS3zcb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm bg-card text-foreground border border-border hover:border-primary/30 transition-all duration-300 card-elevated"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          className="flex gap-3 mt-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="https://github.com/jiyoffrin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/jiyoffrin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
            <Linkedin size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110 animate-pulse-glow" />
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl ring-4 ring-primary/20 animate-float">
            <img src={profileImg} alt="Jiyoffrin R V" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-primary shadow-lg shadow-primary/30 animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-accent shadow-lg shadow-accent/30 animate-float-delayed" />
          <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-secondary border-2 border-primary/30 animate-float" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
