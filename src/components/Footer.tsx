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
            <h3 className="text-2xl font-bold text-gradient mb-4">&lt;MUTHUSURESH/&gt;</h3>
            <p className="text-muted-foreground mb-4">
              Building innovative web applications with modern technologies
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MuthuSuresh5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muthu-suresh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nmuthusuresh2024@gmail.com"
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
              <p>MERN Stack Development</p>
              <p>Full-Stack Web Apps</p>
              <p>Responsive Design</p>
              <p>API Development</p>
              <p>Database Management</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 MUTHUSURESH N. All rights reserved.
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
