import useScrollAnimation from "@/hooks/useScrollAnimation";
import { BrainCircuit, BarChart3, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Model Development",
    desc: "End-to-end ML pipelines from data preprocessing to model deployment with interpretability analysis.",
    icon: BrainCircuit,
  },
  {
    title: "Data Analysis",
    desc: "Exploratory data analysis, feature engineering, and actionable insights from complex datasets.",
    icon: BarChart3,
  },
  {
    title: "Technical Training",
    desc: "ML workshops, team mentoring, and structured learning sessions on AI/ML concepts and tools.",
    icon: GraduationCap,
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          How I can help bring your ideas to life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-card p-8 text-center group hover:glow-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-up opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
