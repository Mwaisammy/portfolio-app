import { useAppSelector } from "@/hooks/redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = useAppSelector((state) => state.portfolio.projects);

  // Default projects for demo
  const defaultProjects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative task management application",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "Portfolio Website",
      description: "Modern portfolio website with animations",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "4",
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Chart.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "5",
      title: "Weather App",
      description: "Real-time weather application",
      image: "/placeholder.svg",
      technologies: ["React Native", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "6",
      title: "Blog Platform",
      description: "Modern blogging platform with CMS",
      image: "/placeholder.svg",
      technologies: ["Gatsby", "Contentful", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const displayProjects = projects.length > 2 ? projects : defaultProjects;

  return (
    <section id="portfolio" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
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
