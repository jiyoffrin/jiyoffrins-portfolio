import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jiyoffrinjiyo@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-lg text-foreground">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "jiyoffrinjiyo@gmail.com", href: "mailto:jiyoffrinjiyo@gmail.com" },
                { icon: Phone, label: "+91 93456 65967", href: "tel:+919345665967" },
                { icon: MapPin, label: "Nagercoil, Tamil Nadu, India" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jiyoffrin/" },
                { icon: Github, label: "GitHub", href: "https://github.com/jiyoffrin" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
            <button
              type="submit"
              className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
