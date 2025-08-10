import { useAppSelector } from "@/hooks/redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceApp from "../assets/images/shopify-website.png";
import hotelMng from "../assets/images/hotel-mng-app.png";
import movieApp from "../assets/images/movie-app.png";
import colorsWebsite from "../assets/images/scrolls-colors.png";
import suchiWebsite from "../assets/images/suchiman.png";
import ecommercePlatform from "../assets/images/fresh-cart.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PortfolioSection = () => {
  const projects = useAppSelector((state) => state.portfolio.projects);
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

  // Default projects for demo
  const defaultProjects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: ecommerceApp,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://shopping-app-zustand.vercel.app",
      githubUrl: "https://github.com/Mwaisammy/shopping-app-zustand",
    },
    {
      id: "2",
      title: "Hotel Management App",
      description: "Collaborative task management application",
      image: hotelMng,
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "Movies app",
      description: "Modern movies website with awesome UI",
      image: movieApp,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://react-movie-app-cyan-rho.vercel.app",
      githubUrl: "https://github.com/Mwaisammy/react-movie-app",
    },
    {
      id: "4",
      title: "Colors website",
      description: "Website to showcase my web development skills",
      image: colorsWebsite,
      technologies: ["Next.js", "Chart.js", "PostgreSQL"],
      liveUrl: "https://colors-website.vercel.app",
      githubUrl: "https://github.com/Mwaisammy/Colors-Website.git",
    },
    {
      id: "5",
      title: "Suchi website",
      description: "Website for a starter restaurant/hotel",
      image: suchiWebsite,
      technologies: ["HTML CSS", "JavaScript"],
      liveUrl: "https://sushi-website-opal.vercel.app/",
      githubUrl: "https://github.com/Mwaisammy/suchi-website.git",
    },
    {
      id: "6",
      title: "Ecommerce Platform",
      description: "Modern ecomerce platform with CMS",
      image: ecommercePlatform,
      technologies: ["NextJS", "React", "ClerkAuth"],
      liveUrl: "https://freshcart-next-js.vercel.app/shop/shop-grid",
      githubUrl: "#",
    },
  ];

  const displayProjects = projects.length > 2 ? projects : defaultProjects;

  return (
    <section id="portfolio" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            data-aos="flip-up"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Recent <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>

        <div
          data-aos="zoom-out"
          data-aos-delay="300"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl}>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
