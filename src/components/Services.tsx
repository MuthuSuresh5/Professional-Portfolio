import { Code2, Cpu, Blocks, Brain, Sparkles, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Full-stack web applications using React, Node.js, and modern frameworks. Responsive, fast, and user-friendly.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Responsive UI"],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Integration",
      description:
        "Smart hardware solutions with ESP32, Arduino, and sensor networks for real-world applications.",
      features: ["Hardware Design", "Sensor Integration", "Real-time Systems", "Mobile Alerts"],
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Blockchain Development",
      description:
        "Decentralized applications and smart contracts on Ethereum for secure and transparent solutions.",
      features: ["Smart Contracts", "Web3 Integration", "DApp Development", "Token Systems"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description:
        "AI-powered solutions using TensorFlow, OpenCV, and MediaPipe for computer vision and predictive analytics.",
      features: ["Computer Vision", "Predictive Models", "Real-time Detection", "Data Analysis"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Technical Innovation",
      description:
        "Custom solutions combining hardware and software to solve unique problems with cutting-edge technology.",
      features: ["Proof of Concepts", "Prototyping", "System Integration", "Innovation Labs"],
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Consulting",
      description:
        "Expert guidance on technology stack selection, architecture design, and implementation strategies.",
      features: ["Tech Stack Advice", "Code Reviews", "Architecture Design", "Best Practices"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-[hsl(var(--section-bg))]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="text-gradient">Offered</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="inline-block p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary/10">
                <button className="text-sm font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-2 group/btn">
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
