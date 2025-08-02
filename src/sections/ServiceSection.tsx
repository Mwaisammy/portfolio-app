import { useAppSelector } from "@/hooks/redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Monitor, Smartphone, Globe } from "lucide-react";

const iconMap = {
  Code,
  Monitor,
  Smartphone,
  Globe,
};

const ServicesSection = () => {
  const services = useAppSelector((state) => state.portfolio.services);

  const defaultServices = [
    {
      id: "1",
      title: "Website Development",
      description:
        "Creating responsive and modern websites using latest technologies and best practices.",
      icon: "Code",
    },
    {
      id: "2",
      title: "Fullstack Development",
      description:
        "Building interactive user interfaces and full-stack systems with React, Vue, and modern frameworks.",
      icon: "Monitor",
    },
    {
      id: "3",
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications for iOS and Android.",
      icon: "Smartphone",
    },
    {
      id: "4",
      title: "Web Applications",
      description:
        "Full-stack web applications with modern architecture and scalable solutions.",
      icon: "Globe",
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section id="services" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Which Services I will
            <br />
            <span className="text-primary">Provide For You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of web development services to help
            bring your digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || Code;

            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-none bg-orange-300/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
