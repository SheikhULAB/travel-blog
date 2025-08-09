import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Calendar,
  Globe,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  description: string;
}

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  price: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  // For Input and Textarea (both), use a union type for the event target
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send to backend...
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@ashrafalam.com",
      description: "Drop me a line anytime",
    },
    {
      icon: MapPin,
      title: "Based in",
      value: "Dubai, UAE",
      description: "Currently exploring the Middle East",
    },
    {
      icon: Globe,
      title: "Languages",
      value: "English, Arabic, Hindi",
      description: "Let's chat in your preferred language",
    },
  ];

  const services: Service[] = [
    {
      icon: MessageCircle,
      title: "Travel Consultation",
      description:
        "Get personalized travel advice and itinerary planning for your next adventure.",
      price: "From $50/hour",
    },
    {
      icon: Calendar,
      title: "Photography Tours",
      description:
        "Join me on exclusive photography expeditions to capture stunning landscapes.",
      price: "Starting at $200/day",
    },
    {
      icon: Globe,
      title: "Speaking Engagements",
      description:
        "Book me for travel talks, workshops, and cultural exchange events.",
      price: "Contact for pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ...rest of your JSX unchanged... */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto animate-slide-up">
            Let's plan your next adventure together
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Send Me a Message
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you need travel advice, want to collaborate, or just want to say hello,
                I'd love to hear from you!
              </p>
            </div>

            <Card className="travel-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Travel consultation for Japan trip"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your travel plans or what you'd like to discuss..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="travel-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          <p className="text-travel-deep-blue font-medium">{info.value}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Services I Offer
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="travel-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{service.title}</h3>
                            <span className="text-sm font-medium text-travel-violet">{service.price}</span>
                          </div>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="travel-card bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Adventure?</h3>
                <p className="text-white/90 mb-6">
                  Let me help you create unforgettable memories with expert travel planning
                  and insider knowledge from my global adventures.
                </p>
                <Button className="bg-white text-travel-deep-blue hover:bg-white/90">
                  Schedule a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="travel-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Quick Response Guarantee
              </h3>
              <p className="text-muted-foreground mb-4">
                I typically respond to all messages within 24 hours. For urgent travel consultations
                or time-sensitive questions, please mention "URGENT" in your subject line.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-travel-deep-blue">&lt; 24hrs</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-travel-violet">100%</div>
                  <div className="text-sm text-muted-foreground">Reply Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-travel-slate-gray">5+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
