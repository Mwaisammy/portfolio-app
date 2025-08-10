import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import developer from "../assets/images/web-developer.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FAQSection = () => {
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can You Re-Design a New Brand?",
      answer:
        "Yes, I can help redesign your brand identity from concept to completion, including logo design, color schemes, and brand guidelines.",
    },
    {
      question: "How You Approach a New Project?",
      answer:
        "I start with understanding your requirements, research your target audience, create wireframes, design mockups, and then develop the final solution.",
    },
    {
      question: "What Cost For New Web Design?",
      answer:
        "Costs vary based on project complexity, features required, and timeline. I provide detailed quotes after understanding your specific needs.",
    },
    {
      question: "What is Typically Your Turnaround?",
      answer:
        "Typical turnaround time ranges from 2-6 weeks depending on project scope, complexity, and revision rounds.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-down">
            <div className="mb-8">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                General Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                General Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span className="font-medium text-foreground">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-emerald-500/20 rounded-3xl p-8 h-full flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <img src={developer} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
