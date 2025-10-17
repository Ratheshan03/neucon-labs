"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

export function CTASection() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Add parallax effects to floating hexagonal elements
    const floatingHexagons = document.querySelectorAll('.floating-hexagon')
    floatingHexagons.forEach((hex, index) => {
      animations.parallax(hex as HTMLElement, 0.05 + index * 0.02)
    })

    // Add parallax effects to floating orbs
    const floatingOrbs = document.querySelectorAll('.floating-orb')
    floatingOrbs.forEach((orb, index) => {
      animations.parallax(orb as HTMLElement, 0.03 + index * 0.01)
    })

    // Add scroll-triggered reveals for CTA content
    const ctaContent = document.querySelectorAll('.cta-content')
    animations.staggerReveal(ctaContent, 'up', 0.2)

    // Add scale on scroll for the main CTA container
    const ctaContainer = document.querySelector('.cta-container')
    if (ctaContainer) {
      animations.scaleOnScroll(ctaContainer as HTMLElement, 0.95, 1.05)
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
    <section className="relative py-32 overflow-hidden">
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hex-pattern" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <path d="M50 0L93.3 25V61.6L50 86.6L6.7 61.6V25L50 0Z" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl cta-container"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />

          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary opacity-50"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 grid-bg opacity-10" />

          {/* Floating Hexagonal Elements */}
          <motion.div
            className="absolute top-10 right-10 floating-hexagon"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg width="80" height="69" viewBox="0 0 80 69" className="text-white/10">
              <path d="M40 0L73.4 20V49L40 69L6.6 49V20L40 0Z" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-10 floating-hexagon"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <svg width="100" height="86" viewBox="0 0 100 86" className="text-white/10">
              <path d="M50 0L93.3 25V61.6L50 86.6L6.7 61.6V25L50 0Z" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 blur-2xl floating-orb"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/10 blur-2xl floating-orb"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8 cta-content"
            >
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Let&apos;s Build Together</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto cta-content"
            >
              Ready to Transform Your{" "}
              <span className="relative inline-block">
                Vision
                <motion.div
                  className="absolute -inset-1 bg-white/20 rounded-lg blur"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>{" "}
              Into Reality?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed cta-content"
            >
              Let&apos;s discuss how we can help you build intelligent, scalable solutions that drive real business results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center cta-content"
            >
              <Button
                asChild
                size="lg"
                className="group px-8 py-6 text-lg font-semibold bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-xl shadow-2xl"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm rounded-xl"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm cta-content"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white/60" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white/60" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white/60" />
                <span>No Commitment Required</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
