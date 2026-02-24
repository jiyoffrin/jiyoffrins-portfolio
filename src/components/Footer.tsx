import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border relative overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
        © {new Date().getFullYear()} Jiyoffrin R V. Built with <Heart size={14} className="text-primary fill-primary" />
      </p>
      <div className="flex items-center gap-2">
        {[
          { icon: Github, href: "https://github.com/jiyoffrin" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/jiyoffrin/" },
          { icon: Mail, href: "mailto:jiyoffrinjiyo@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
