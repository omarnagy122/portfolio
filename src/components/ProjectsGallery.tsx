import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ExternalLink, Heart, Film, MessageSquare, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Heart Disease Prediction",
    desc: "Full ML pipeline on UCI dataset. Logistic Regression, Random Forest, SVM with 93% accuracy. SHAP for interpretability.",
    tags: ["Python", "Scikit-learn", "SHAP"],
    icon: Heart,
    link: "https://github.com/omarnagy122/Heart-Health-AI-Predictor",
  },
  {
    title: "Arabic Sentiment Analysis",
    desc: "Deep Learning model to classify Arabic text (Positive/Negative/Neutral). 95.8% accuracy, F1-Score 0.94. Fast preprocessing for MSA and dialects.",
    tags: ["LSTM", "TensorFlow", "NLTK", "Transformers"],
    icon: MessageSquare,
    link: "https://github.com/omarnagy122/Arabic-Sentiment-Analysis-model",
  },
  {
    title: "Movie Recommendation System",
    desc: "Content-based recommender on 10K+ movies dataset using cosine similarity for personalized suggestions.",
    tags: ["Python", "Pandas", "Cosine Similarity"],
    icon: Film,
    link: "https://github.com/omarnagy122/movie-recommendation-system",
  },
];

const ProjectsGallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
          Real-world ML solutions I've built from scratch
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              className={`glass-card p-6 group hover:glow-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer block ${
                isVisible ? "animate-fade-up opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
