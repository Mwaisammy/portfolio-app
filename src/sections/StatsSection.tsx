import { useAppSelector } from "@/hooks/redux";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Star, Calendar } from "lucide-react";

const StatsSection = () => {
  const stats = useAppSelector((state) => state.portfolio.stats);

  const statsData = [
    {
      icon: Calendar,
      value: `${stats.yearsExperience}+`,
      label: "Years Experience",
      color: "text-primary",
    },
    {
      icon: Award,
      value: `${stats.projectsCompleted}+`,
      label: "Project Completed",
      color: "text-secondary",
    },
    {
      icon: Users,
      value: `${stats.happyClients}+`,
      label: "Happy Clients",
      color: "text-primary",
    },
    {
      icon: Star,
      value: `${stats.rating}/5`,
      label: "Average Rating",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <Card
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
