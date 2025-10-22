import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Driver Drowsiness Detection System",
      description:
        "Real-time drowsiness detection using ESP32, MediaPipe, and TensorFlow Lite. Alerts drivers through buzzer and LED indicators to prevent accidents.",
      tech: ["ESP32", "MediaPipe", "TensorFlow Lite", "Python", "IoT"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Tea Supply Chain Blockchain Platform",
      description:
        "Transparent traceability system from farm to cup using blockchain technology. Ensures authenticity and quality control throughout the supply chain.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "Smart Contracts"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Digital Student Activity Records",
      description:
        "Comprehensive MERN stack platform for Higher Education Institutions to manage and track student activities, achievements, and progress.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Travel Package Explorer",
      description:
        "Modern, responsive travel booking website with interactive UI, package comparisons, and seamless user experience. Frontend-focused design.",
      tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "IoT Security System",
      description:
        "ESP32-based smart security system with real-time monitoring, motion detection, and instant mobile alerts for enhanced home protection.",
      tech: ["ESP32", "Arduino", "Firebase", "Sensors", "Mobile App"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-red-500 to-rose-500",
    },
    {
      title: "Account Management System",
      description:
        "React-based authentication system with secure login/registration, JWT tokens, and Zoom API integration for virtual meetings.",
      tech: ["React", "JWT", "Node.js", "Zoom API", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-[hsl(var(--section-bg))]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, IoT, blockchain, and machine
            learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-card border border-primary/20 overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary hover:text-background group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/50"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
