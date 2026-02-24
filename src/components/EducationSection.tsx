import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Education</span>
      </h2>
      <div className="bg-card rounded-xl p-8 card-elevated border border-border text-center">
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
          <GraduationCap size={28} className="text-primary" />
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground">
          Bachelor of Engineering (B.E.)
        </h3>
        <p className="text-primary font-medium mt-1">Computer Science and Engineering</p>
        <p className="text-sm text-muted-foreground mt-2">
          St. Xavier's Catholic College of Engineering
        </p>
        <p className="text-xs text-muted-foreground">(Affiliated to Anna University)</p>
        <p className="text-sm font-medium text-foreground mt-3">Graduated in 2025</p>
      </div>
    </div>
  </section>
);

export default EducationSection;
