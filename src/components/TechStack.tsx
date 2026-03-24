import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Brain, Code, Database, FlaskConical, GitBranch, BarChart3, Cpu, Layers } from "lucide-react";

const techs = [
  { name: "Python", icon: Code, desc: "Core Language" },
  { name: "Scikit-Learn", icon: Brain, desc: "ML Framework" },
  { name: "NumPy & Pandas", icon: Database, desc: "Data Processing" },
  { name: "TensorFlow", icon: Cpu, desc: "Deep Learning" },
  { name: "PyTorch", icon: Layers, desc: "Neural Networks" },
  { name: "SHAP", icon: BarChart3, desc: "Interpretability" },
  { name: "Git & GitHub", icon: GitBranch, desc: "Version Control" },
  { name: "Jupyter", icon: FlaskConical, desc: "Notebooks" },
];

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tech" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          Tools and frameworks I work with daily
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map((tech, i) => (
            <div
              key={tech.name}
              className={`glass-card p-6 text-center group hover:glow-border hover:border-primary/30 transition-all duration-300 cursor-default ${
                isVisible ? "animate-fade-up opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <tech.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
