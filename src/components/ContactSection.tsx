import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const contactLinks = [
  { icon: Mail, label: "jiyoffrinjiyo@gmail.com", href: "mailto:jiyoffrinjiyo@gmail.com" },
  { icon: Phone, label: "+91 93456 65967", href: "tel:+919345665967" },
  { icon: MapPin, label: "Nagercoil, Tamil Nadu, India" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jiyoffrin/" },
  { icon: Github, label: "GitHub", href: "https://github.com/jiyoffrin" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_m2c0m3j",
        "template_z5byzja",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "jq8ciFLgwZ7kur92l"
      );
      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt relative overflow-hidden">
      <div className="floating-orb w-80 h-80 bg-primary bottom-0 left-1/4" />
      <div className="floating-orb w-48 h-48 bg-accent top-10 right-10" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-md mx-auto mb-14">
            Let's build something great together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg text-foreground">Contact Information</h3>
            <div className="space-y-3">
              {contactLinks.map((item) => (
                <div key={item.label} className="flex items-center gap-3 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all border border-border">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-7 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary-gradient w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
