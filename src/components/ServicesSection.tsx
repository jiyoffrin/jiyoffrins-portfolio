import { Server, Layout, DatabaseZap } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    items: [
      "Scalable applications using Java & Spring Boot",
      "REST API design and development",
      "Business logic implementation",
      "Secure authentication integration",
    ],
  },
  {
    icon: Layout,
    title: "Full-Stack Web Development",
    items: [
      "Responsive UI development (HTML, CSS, JS)",
      "Backend integration",
      "Real-time application modules",
    ],
  },
  {
    icon: DatabaseZap,
    title: "Database Design & API Integration",
    items: [
      "MySQL database design",
      "CRUD operations",
      "API testing with Postman",
      "Version control using Git",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Services</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 card-elevated border border-border">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-3">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
