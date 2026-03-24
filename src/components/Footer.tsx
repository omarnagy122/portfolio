import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border relative z-10">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Omar Nagy. Built with passion for AI.
      </p>
      <div className="flex items-center gap-4">
        <a href="mailto:omarahmednagy122@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
