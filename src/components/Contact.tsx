import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    try {
      const apiUrl = import.meta.env.DEV ? 'http://localhost:3001/api/contact' : '/api/store-message';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "nmuthusuresh2024@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8610710063",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions. Whether you need web development, IoT solutions, or
                blockchain integration, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-primary/20 hover:border-primary/50 transition-all"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{info.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h4 className="font-bold mb-2 text-lg">Available for Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                Currently seeking internships, freelance projects, and collaborative opportunities
                in full-stack development and web applications.
              </p>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-card border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-primary/20 focus:border-primary min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
