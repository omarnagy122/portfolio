import useScrollAnimation from "@/hooks/useScrollAnimation";

const experiences = [
  {
    role: "Head of AI Team",
    org: "Google Developer Student Clubs (GDSC)",
    period: "2026 — Present",
    desc: "Leading AI team roadmap, delivering ML workshops, and managing team operations.",
  },
  {
    role: "Data Engineering Trainee",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "2026 — Present",
    desc: "Learning data pipelines, data modeling, ETL fundamentals with SQL and Python.",
  },
  {
    role: "HR / HR Security Team",
    org: "Google Developer Student Clubs (GDSC)",
    period: "Oct 2024 — May 2025",
    desc: "Organized recruitment, onboarding, and supervised security team performance.",
  },
  {
    role: "IEEE AI Team Member",
    org: "IEEE",
    period: "Oct 2023 — May 2025",
    desc: "Attended workshops on computer vision and NLP. Contributed to team projects.",
  },
  {
    role: "ICPC Trainee",
    org: "Fayoum ICPC Community",
    period: "Oct 2023 — Aug 2024",
    desc: "Solved 300+ competitive programming problems. Top 15 in contests.",
  },
];

const ExperienceTimeline = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experience <span className="text-gradient">Timeline</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          My journey in tech and AI
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${isVisible ? "animate-fade-up opacity-0" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 shadow-[0_0_10px_hsl(210_100%_55%/0.5)]" />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-5 ${
                  i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <span className="text-xs font-mono text-primary mb-1 block">
                  {exp.period}
                </span>
                <h3 className="font-bold mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-2">{exp.org}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
