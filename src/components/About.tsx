import { Code, Cpu, Blocks, Brain } from "lucide-react";
import aidsImage from "@/assets/AIDS.png";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building responsive web applications with modern technologies",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Java Development",
      description: "Building robust enterprise applications with Java",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Extracting insights from data using analytical tools",
    },
  ];

  return (
    <section id="about" className="section-padding bg-[hsl(var(--section-bg))]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
                <img 
                  src={aidsImage} 
                  alt="AI & Data Science" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-bold text-foreground">
              Passionate Engineer & Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Artificial Intelligence and Data Science Engineering student with a deep fascination for technology that bridges the physical and digital worlds. My journey began with Java Developer and evolved into full-stack development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my AI&DS degree while building real-world applications that solve practical problems. I specialize in creating seamless integrations web applications Development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group"
                >
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
