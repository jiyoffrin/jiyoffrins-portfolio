import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding section-alt">
    <div className="container mx-auto max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Experience</span>
      </h2>
      <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
        <div className="mb-2">
          <span className="text-xs font-medium text-primary bg-secondary px-3 py-1 rounded-full">
            Aug 2025 – Feb 2026
          </span>
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground mt-2">Java Developer Trainee</h3>
        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
          <Briefcase size={14} /> Alo Info-Tech Pvt Ltd
        </p>
        <ul className="space-y-2">
          {[
            "Developed RESTful APIs using Java and Spring Boot",
            "Implemented CRUD operations",
            "Integrated MySQL database",
            "Used Postman for API testing",
            "Followed MVC architecture and coding best practices",
            "Built a full-stack calculator web application",
          ].map((r) => (
            <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
