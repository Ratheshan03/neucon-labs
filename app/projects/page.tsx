import type { Metadata } from "next"
import { ProjectsHeroSection } from "@/components/sections/projects/projects-hero-section"
import { ProjectsGridSection } from "@/components/sections/projects/projects-grid-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Case Studies & Projects | Neucon Labs",
  description: "Explore our portfolio of successful AI/ML, SaaS, and software development projects. See how we've helped clients achieve their goals.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeroSection />
      <ProjectsGridSection />
      <CTASection />
    </>
  )
}
