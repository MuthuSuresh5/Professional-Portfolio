import { GraduationCap, Award, Rocket, Trophy } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      year: "2024-Present",
      icon: <Rocket className="w-6 h-6" />,
      title: "AI-Powered Platform Development",
      description:
        "Leading development of comprehensive student management platforms with AI integration, computer vision applications, and advanced web technologies",
      highlights: ["AI Certificate Verification", "Medical Assistant Platform", "Full-Stack Development"],
    },
    {
      year: "2023-2024",
      icon: <Trophy className="w-6 h-6" />,
      title: "MERN Stack Developer & Competition Success",
      description:
        "Specialized in full-stack development with MERN technologies, achieved finalist position in Freshathon competition, and expanded expertise in Java development and data analysis",
      highlights: ["MERN Stack Developer", "Freshathon Finalist - Mentorship Website", "Java Developer", "Data Analyst"],
    },
    {
      year: "2022-2023",
      icon: <Award className="w-6 h-6" />,
      title: "Full-Stack Development Mastery",
      description:
        "Mastered modern web development technologies including React, Node.js, and database management while building real-world applications",
      highlights: ["React & Node.js", "Database Design", "API Development"],
    },
    {
      year: "2021-2022",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "AI & Data Science Journey Begins",
      description:
        "Started B.Tech Artificial Intelligence and Data Science degree with focus on programming fundamentals and data analysis",
      highlights: ["AI/ML Fundamentals", "Java Programming", "Data Science Basics"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A journey of continuous learning and innovation in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 shadow-lg shadow-primary/50 z-10" />

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <div className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
