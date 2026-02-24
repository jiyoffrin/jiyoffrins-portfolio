import { ArrowDown, Mail, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center section-padding pt-24">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left animate-fade-up">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
          Welcome to my portfolio
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
          Hi, I'm <span className="gradient-text">Jiyoffrin R V</span>
        </h1>
        <p className="font-display text-lg md:text-xl text-muted-foreground mb-3">
          Java Backend Developer | Spring Boot Developer | Full-Stack Enthusiast
        </p>
        <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8">
          Building scalable backend systems and efficient web applications with clean and maintainable code.
        </p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a href="#projects" className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm">
            <ArrowDown size={16} /> View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            <Mail size={16} /> Contact Me
          </a>
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
      <div className="flex-shrink-0 animate-fade-up-delay-1">
        <div className="relative">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-card shadow-xl ring-4 ring-primary/20">
            <img src={profileImg} alt="Jiyoffrin R V" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary" />
          <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-secondary" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
