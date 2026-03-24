import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import omarPhoto from "@/assets/omar-photo.png";
const titles = [
  "AI & Data Engineer",
  "Machine Learning Developer",
  "Data Science Enthusiast",
];

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === title) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? title.substring(0, displayText.length - 1)
              : title.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10 max-w-3xl flex flex-col items-center">
        {/* Profile Photo */}
        <div className="mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
            <img src={omarPhoto} alt="Omar Nagy" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        <p className="text-primary font-mono text-sm mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Omar <span className="text-gradient">Nagy</span>
        </h1>
        <div className="h-10 md:h-12 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl font-mono text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </span>
        </div>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          Computer Science student specializing in AI & Machine Learning. Building intelligent solutions with Python, Scikit-learn, and deep learning frameworks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all animate-pulse-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
