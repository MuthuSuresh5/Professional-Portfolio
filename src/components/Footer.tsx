import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[hsl(var(--section-bg))] border-t border-primary/20">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">&lt;YourName/&gt;</h3>
            <p className="text-muted-foreground mb-4">
              Building innovative solutions at the intersection of hardware and software
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Web Development</p>
              <p>IoT Solutions</p>
              <p>Blockchain Development</p>
              <p>Machine Learning</p>
              <p>Technical Consulting</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Your Name. Made with{" "}
            <Heart className="inline w-4 h-4 text-primary fill-primary" /> in India
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed with React + TypeScript
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-background flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
