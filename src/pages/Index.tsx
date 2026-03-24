import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsGallery from "@/components/ProjectsGallery";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <div id="about" />
      <TechStack />
      <ProjectsGallery />
      <ExperienceTimeline />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
