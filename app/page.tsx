import { HeroGravity } from "@/components/hero-gravity"
import { BentoGridV2 } from "@/components/bento-grid-v2"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { WorkSection } from "@/components/sections/work-section"
import { ServicesSection } from "@/components/sections/services-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroGravity />
      <ManifestoSection />

      <div id="about" className="w-full min-h-screen flex items-center justify-center bg-[#050505] border-t border-white/5">
        <h2 className="text-4xl text-neutral-500">About Us (Coming Soon)</h2>
      </div>

      <ServicesSection />

      <ApproachSection />

      <WorkSection />

      {/* Spacer for footer visibility */}
      <div className="h-24" />
    </main>
  )
}
