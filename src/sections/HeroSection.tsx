import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import myProfile from "../assets/images/samuel-mwai.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-orange-400 leading-tight">
                Hello, I'm
                <br />
                <span className="text-primary">Samuel Mwai</span>
                <br />A
                <br />
                Web Developer
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about creating beautiful, functional, and
                user-centered digital experiences. With expertise in modern web
                technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-400 to-emerald-400 cursor-pointer"
              >
                <a href="https://www.dropbox.com/scl/fi/rxe27nfa58v30hrzkf8yk/CV-Update.pdf?rlkey=qu78lz97oelu1xusw79uentbu&dl=0">
                  Download CV
                </a>{" "}
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <a href="#portfolio">View Work</a>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-400 to-emerald-400 p-8 rounded-3xl transform rotate-90 hover:rotate-85 transition-transform duration-300">
              <div className="bg-background rounded-2xl p-8 transform -rotate-90 flex items-center justify-center h-80">
                <span className="">
                  <img
                    src={myProfile}
                    alt="samuel-mwai"
                    className="h-[500px] object-contain w-fit "
                  />
                </span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-300/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-black/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
