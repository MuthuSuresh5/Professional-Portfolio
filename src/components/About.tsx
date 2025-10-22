import { Code, Cpu, Blocks, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building responsive web applications with modern technologies",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT Solutions",
      description: "Creating smart hardware systems with ESP32 and Arduino",
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: "Blockchain",
      description: "Developing secure decentralized applications",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Implementing AI-powered solutions with TensorFlow",
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
                <div className="text-8xl font-bold text-gradient">ECE</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-bold text-foreground">
              Passionate Engineer & Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm an Electronics and Communication Engineering student with a deep passion for
              bridging the gap between hardware and software. My journey in technology has led me
              to specialize in full-stack web development, IoT systems, blockchain technology, and
              machine learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Puduchatram, Tamil Nadu, I've worked on diverse projects ranging from
              real-time drowsiness detection systems using ESP32 and MediaPipe to building
              transparent supply chain solutions with blockchain. I believe in creating innovative
              solutions that make a real impact.
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
