import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioPlatform from "@/assets/Portfolio Platform.png";
import medicode from "@/assets/medicode.png";
import mentorship from "@/assets/mentorship.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Student Record & Portfolio Platform",
      description:
        "AI-powered platform for student academic & career management with smart features including certificate verification, dynamic dashboards, portfolio generation, AI mentorship chatbot, and job matching system.",
      tech: ["React 18", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/MuthuSuresh5/student-record-plaform-with-ai-powered",
      demo: "https://demo.com",
      image: portfolioPlatform,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Medicode4 - AI-Powered Medical Assistant Platform",
      description:
        "Web-based healthcare application combining computer vision for medicine identification with AI chatbot for health guidance, featuring real-time image analysis and comprehensive history tracking.",
      tech: ["Computer Vision", "NLP", "React", "AI/ML", "Netlify", "Image Processing"],
      github: "https://github.com",
      demo: "https://medicode4.netlify.app/",
      image: medicode,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Mentorship and Project Collaboration Platform",
      description:
        "Web platform for student project submission, mentor matching, and team formation using MERN Stack with session-based login, dashboards, notifications, and real-time chat features.",
      tech: ["React", "Node.js", "Express.js", "HTML", "CSS", "JavaScript", "JSON"],
      github: "https://github.com/MuthuSuresh5/TEAM-FORMATION-WEB-APPLICATION",
      demo: "https://demo.com",
      image: mentorship,
      gradient: "from-orange-500 to-red-500",
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
            Showcasing AI-powered full-stack development with real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-card border border-primary/20 overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
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
                    className={`flex-1 ${index === 0 ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50' : 'bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/50'}`}
                    asChild={index !== 0}
                    disabled={index === 0}
                  >
                    {index === 0 ? (
                      <span>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </span>
                    ) : (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    )}
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
