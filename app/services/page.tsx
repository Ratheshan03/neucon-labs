import type { Metadata } from "next"
import { ServicesHeroSection } from "@/components/sections/services/services-hero-section"
import { ServiceDetailsSection } from "@/components/sections/services/service-details-section"
import { ProcessSection } from "@/components/sections/services/process-section"
import { TechnologiesSection } from "@/components/sections/technologies-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Services | AI/ML, Full-stack, SaaS, Automation | Neucon Labs",
  description: "Comprehensive software development services including AI/ML development, full-stack applications, SaaS solutions, and business automation.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServiceDetailsSection />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection />
    </>
  )
}
