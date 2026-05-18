import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="animate-page-enter">
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <ProcessPreview />
    </div>
  );
}
