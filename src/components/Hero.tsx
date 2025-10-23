import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = [
    "B.Tech AI & Data Science Student",
    "Full Stack Developer",
    "Java Developer",
    "Data Analyst"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setDisplayText(currentRole.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentRole.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 35, 0.8), rgba(10, 10, 35, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated particles overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ top: "20%", left: "10%" }} />
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ top: "60%", right: "10%", animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10 text-center px-8 sm:px-12 lg:px-24 py-20">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse-glow">
              <img 
                src={avatar} 
                alt="MUTHUSURESH N" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Hi, I'm <span className="text-gradient glow-effect">MUTHUSURESH N</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-2">
            📍 Chennai, Tamil Nadu, India
          </p>

          <div className="h-16 mb-6">
            <p className="text-2xl md:text-3xl text-muted-foreground">
              <span className="text-primary font-semibold">{displayText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Building innovative software solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-gradient-to-r from-primary to-secondary text-background font-semibold text-lg px-8 hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105"
            >
              View My Work
            </Button>
            <a
              href="/MuthuSuresh_CV.pdf"
              download="MuthuSuresh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold text-lg px-8 transition-all transform hover:scale-105"
              >
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/MuthuSuresh5/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muthu-suresh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nmuthusuresh2024@gmail.com"
              className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
