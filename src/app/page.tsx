import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Contact />
    </main>
  );
}
