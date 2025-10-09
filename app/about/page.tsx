import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/sections/about/about-hero-section"
import { StorySection } from "@/components/sections/about/story-section"
import { ValuesSection } from "@/components/sections/about/values-section"
import { TeamSection } from "@/components/sections/about/team-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Neucon Labs | Meet Our Team",
  description: "Learn about Neucon Labs, our mission, values, and the team behind our AI/ML and software development expertise.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
