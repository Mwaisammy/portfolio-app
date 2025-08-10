import { useAppSelector } from "@/hooks/redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Monitor, Smartphone, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const iconMap = {
  Code,
  Monitor,
  Smartphone,
  Globe,
};

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false });

    // Refresh AOS on scroll and resize to re-trigger animations
    const handleScroll = () => AOS.refresh();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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

  // Map default services by id for quick lookup
  const defaultServicesMap = new Map(defaultServices.map((s) => [s.id, s]));

  // Filter Redux services to only include those not already in defaults
  const extraServices = services.filter((s) => !defaultServicesMap.has(s.id));

  // Combine default services + extra unique services
  const displayServices = [...defaultServices, ...extraServices];

  return (
    <section id="services" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Which Services I will
            <br />
            <span className="text-primary">Provide For You</span>
          </h2>
          <p
            data-aos="fade-down"
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I offer a comprehensive range of web development services to help
            bring your digital vision to life.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayServices.map((service) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || Code;

            return (
              <Card
                key={service.id}
                className="group border-none bg-gradient-to-tr from-orange-400 to-emerald-400 
                   hover:shadow-lg hover:-translate-y-2 hover:bg-gradient-to-b 
                   hover:from-emerald-400 hover:to-orange-400 
                   cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-sm dark:bg-gradient-to-t  dark:from-orange-400/20 dark:to-emerald-400/20"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-black dark:text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-300">
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
