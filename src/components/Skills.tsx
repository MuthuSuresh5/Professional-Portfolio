import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 88 },
        { name: "MongoDB", level: 82 },
      ],
    },
    {
      category: "Hardware & IoT",
      skills: [
        { name: "ESP32 & Arduino", level: 90 },
        { name: "Circuit Design", level: 85 },
        { name: "IoT Sensors", level: 88 },
        { name: "Embedded Systems", level: 82 },
      ],
    },
    {
      category: "Blockchain & AI",
      skills: [
        { name: "Solidity & Web3.js", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "OpenCV & MediaPipe", level: 85 },
        { name: "Machine Learning", level: 78 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning web development, hardware integration, and emerging
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all animate-slide-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(catIndex * 0.1 + skillIndex * 0.1)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Git", "VS Code", "Figma", "Postman", "MySQL", "Bootstrap", "TensorFlow Lite", "Smart Contracts"].map(
            (tool, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card border border-primary/20 text-center hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1"
              >
                <p className="font-medium text-sm">{tool}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
