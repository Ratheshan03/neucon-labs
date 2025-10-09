import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section"
import { WhyChooseSection } from "@/components/sections/why-choose-section"
import { TechnologiesSection } from "@/components/sections/technologies-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <WhyChooseSection />
      <TechnologiesSection />
      <CTASection />
    </>
  )
}
