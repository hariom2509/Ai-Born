import HeroSection from "@/components/HeroSection";
import TheIdeaSection from "@/components/TheIdeaSection";
import GenesisSection from "@/components/GenesisSection";
import TraitsSection from "@/components/TraitsSection";
import RevealSection from "@/components/RevealSection";
import UtilitySection from "@/components/UtilitySection";
import AgentSection from "@/components/AgentSection";
import ArcSection from "@/components/ArcSection";
import PythonSection from "@/components/PythonSection";
import RoadmapSection from "@/components/RoadmapSection";
import EarlyBuildSection from "@/components/EarlyBuildSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <TheIdeaSection />
      <GenesisSection />
      <TraitsSection />
      <RevealSection />
      <UtilitySection />
      <AgentSection />
      <ArcSection />
      <PythonSection />
      <RoadmapSection />
      <EarlyBuildSection />
      <Footer />
    </main>
  );
}
