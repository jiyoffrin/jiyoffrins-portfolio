import { Server, Layout, DatabaseZap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    items: ["Scalable applications using Java & Spring Boot", "REST API design and development", "Business logic implementation", "Secure authentication integration"],
  },
  {
    icon: Layout,
    title: "Full-Stack Web Development",
    items: ["Responsive UI development (HTML, CSS, JS)", "Backend integration", "Real-time application modules"],
  },
  {
    icon: DatabaseZap,
    title: "Database Design & API Integration",
    items: ["MySQL database design", "CRUD operations", "API testing with Postman", "Version control using Git"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt relative overflow-hidden">
    <div className="floating-orb w-72 h-72 bg-accent top-10 right-0" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-md mx-auto mb-14">
          What I can do for you
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group glass-card rounded-2xl p-7 card-elevated hover:border-primary/30 transition-all duration-300 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
              <s.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-4">{s.title}</h3>
            <ul className="space-y-2.5">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
