import Header from "@/layout/header";
import AboutSection from "@/sections/AboutSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import FAQSection from "@/sections/FAQSection";
import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";
import ServicesSection from "@/sections/ServiceSection";
import StatsSection from "@/sections/StatsSection";
import TestimonialsSection from "@/sections/TestmonialsSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Portfolio;
