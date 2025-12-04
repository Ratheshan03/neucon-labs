import type { Metadata } from "next"
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Contact Us | Get In Touch | Neucon Labs",
  description: "Ready to start your next project? Contact Neucon Labs for AI/ML development, full-stack solutions, SaaS platforms, and business automation. Let's discuss your vision.",
  keywords: "contact Neucon Labs, AI development, machine learning consulting, software development, SaaS solutions",
  openGraph: {
    title: "Contact Neucon Labs | Transform Your Vision Into Reality",
    description: "Get in touch with our expert team for AI/ML, full-stack development, and SaaS solutions.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <CTASection />
    </>
  )
}