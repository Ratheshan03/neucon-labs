import { HeroGravity } from "@/components/hero-gravity"
import { BentoGridV2 } from "@/components/bento-grid-v2"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { WorkSection } from "@/components/sections/work-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroGravity />
      <ManifestoSection />

      <AboutSection />

      <ServicesSection />

      <ApproachSection />

      <WorkSection />

      {/* Spacer for footer visibility */}
      <div className="h-24" />
    </main>
  )
}
