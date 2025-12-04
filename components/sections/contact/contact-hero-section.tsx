"use client"

import { motion } from "framer-motion"
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

export function ContactHeroSection() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Add scroll-triggered reveals
    const heroContent = document.querySelectorAll('.contact-hero-content')
    animations.staggerReveal(heroContent, 'up', 0.2)

    // Add scale on scroll for hero container
    const heroContainer = document.querySelector('.contact-hero-container')
    if (heroContainer) {
      animations.scaleOnScroll(heroContainer as HTMLElement, 0.95, 1.02)
    }

    return () => {
      if (lenis) {
        lenis.destroy()
      }
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden contact-hero-container">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10 px-8 py-32 text-center">
        {/* Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 contact-hero-content"
        >
          <MessageSquare className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Let&apos;s Start a Conversation</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 max-w-6xl mx-auto leading-tight contact-hero-content"
        >
          Ready to{" "}
          <span className="relative inline-block">
            Transform
            <motion.div
              className="absolute -inset-1 bg-primary/20 rounded-lg blur"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </span>{" "}
          Your Vision Into Reality?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed contact-hero-content"
        >
          Whether you have a groundbreaking idea or need expert guidance on your current project,
          we&apos;re here to help you navigate the complex world of AI/ML and software development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center contact-hero-content"
        >
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 rounded-xl shadow-2xl"
          >
            <Link href="#contact-form" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold border-2 border-primary/40 text-primary hover:bg-primary/10 backdrop-blur-sm rounded-xl"
          >
            <Link href="#contact-info">
              Learn More About Us
            </Link>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm contact-hero-content"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary/60" />
            <span>Free Initial Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary/60" />
            <span>24/7 Support Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary/60" />
            <span>Confidential & Secure</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 contact-hero-content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}