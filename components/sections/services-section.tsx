"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Code, Cloud, Workflow, ArrowRight, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

const services = [
  {
    icon: Brain,
    title: "AI/ML Development",
    description: "Transform your data into intelligent insights with custom machine learning models and neural networks.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"],
    href: "/services#ai-ml",
    gradient: "from-primary via-purple-500 to-secondary",
    iconBg: "from-primary to-purple-600",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Modern, scalable web applications built with cutting-edge frameworks and best practices.",
    features: ["React & Next.js", "Progressive Web Apps", "Real-time Applications", "API Development"],
    href: "/services#full-stack",
    gradient: "from-secondary via-pink-500 to-accent",
    iconBg: "from-secondary to-pink-600",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Cloud-native platforms from concept to scale with enterprise-grade architecture.",
    features: ["Multi-tenant Systems", "Payment Integration", "Analytics Dashboard", "Scalable Infrastructure"],
    href: "/services#saas",
    gradient: "from-accent via-teal-500 to-primary",
    iconBg: "from-accent to-teal-600",
  },
  {
    icon: Workflow,
    title: "Automation & Integration",
    description: "Streamline operations and eliminate manual work with intelligent workflow automation.",
    features: ["Process Automation", "API Integration", "Data Pipelines", "Legacy Modernization"],
    href: "/services#automation",
    gradient: "from-primary via-indigo-500 to-accent",
    iconBg: "from-primary to-indigo-600",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Add parallax effects to hexagonal cards
    const hexCards = document.querySelectorAll('.hex-card')
    hexCards.forEach((card, index) => {
      animations.parallax(card as HTMLElement, 0.05 + index * 0.02)
    })

    // Add scroll-triggered reveals for mobile cards
    const mobileCards = document.querySelectorAll('.mobile-service-card')
    animations.staggerReveal(mobileCards, 'up', 0.2)

    // Add scroll-triggered reveals for desktop cards
    const desktopCards = document.querySelectorAll('.desktop-service-card')
    animations.staggerReveal(desktopCards, 'up', 0.15)

    // Add scale on scroll for section header
    const sectionHeader = document.querySelector('.services-header')
    if (sectionHeader) {
      animations.scaleOnScroll(sectionHeader as HTMLElement, 0.9, 1.02)
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
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 services-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We{" "}
            <span className="gradient-text">Build</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intelligent AI systems to enterprise-grade applications, we deliver comprehensive solutions that drive growth and innovation.
          </p>
        </motion.div>

        {/* Hexagonal Services Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Stack vertically, Desktop: Hexagonal layout */}
          <div className="block md:hidden space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative mobile-service-card"
              >
                <div className="relative h-64 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 200 173"
                    className="w-full h-full drop-shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id={`mobile-hex-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                      </linearGradient>
                      <linearGradient id={`mobile-hex-border-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                        <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                        <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M100 0L173.2 50V123L100 173L26.8 123V50L100 0Z"
                      fill={`url(#mobile-hex-gradient-${index})`}
                      stroke={`url(#mobile-hex-border-${index})`}
                      strokeWidth="2"
                    />
                    <path
                      d="M100 30L165 67.5V115.5L100 153L35 115.5V67.5L100 30Z"
                      fill="rgba(0, 0, 0, 0.8)"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                    />
                  </motion.svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${service.iconBg} mb-4 glow-sm`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed opacity-90">
                      {service.description}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: true ? 1 : 0,
                        scale: true ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/90 backdrop-blur-sm rounded-2xl"
                    >
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 2).map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs">
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="text-xs px-3 py-1 hover:bg-primary/20"
                      >
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Hexagonal Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative desktop-service-card hex-card"
                style={{
                  gridRow: index >= 2 ? '2' : '1',
                  gridColumn: index === 0 ? '1 / span 1' :
                            index === 1 ? '2 / span 1' :
                            index === 2 ? '1 / span 1' :
                            '2 / span 1'
                }}
              >
                {/* Hexagonal Card */}
                <div className="relative h-80 flex items-center justify-center">
                  {/* Hexagon Shape */}
                  <motion.div
                    className="relative w-full h-full cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Hexagon SVG */}
                    <svg
                      viewBox="0 0 200 173"
                      className="w-full h-full drop-shadow-2xl"
                    >
                      <defs>
                        <linearGradient id={`hex-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                          <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                        </linearGradient>
                        <linearGradient id={`hex-border-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                          <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                          <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                        </linearGradient>
                      </defs>

                      {/* Hexagon Background */}
                      <path
                        d="M100 0L173.2 50V123L100 173L26.8 123V50L100 0Z"
                        fill={`url(#hex-gradient-${index})`}
                        stroke={`url(#hex-border-${index})`}
                        strokeWidth="2"
                        className="transition-all duration-500 group-hover:stroke-primary"
                      />

                      {/* Hover Glow Effect */}
                      <path
                        d="M100 0L173.2 50V123L100 173L26.8 123V50L100 0Z"
                        fill="none"
                        stroke="url(#hex-border-${index})"
                        strokeWidth="0"
                        className={`transition-all duration-500 ${
                          hoveredIndex === index ? 'stroke-2 opacity-50' : 'opacity-0'
                        }`}
                        filter="blur(8px)"
                      />
                    </svg>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      {/* Icon */}
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${service.iconBg} mb-4 glow-sm`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed opacity-90">
                        {service.description}
                      </p>

                      {/* Hover Details */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          scale: hoveredIndex === index ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/80 backdrop-blur-sm rounded-2xl"
                      >
                        <div className="space-y-2 mb-4">
                          {service.features.slice(0, 2).map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-xs">
                              <CheckCircle2 className="h-3 w-3 text-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="text-xs px-3 py-1 hover:bg-primary/20"
                        >
                          <Link href={service.href}>
                            Learn More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 rounded-xl border-2 border-primary/30 glass hover:border-primary hover:bg-primary/10"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <span className="text-sm text-muted-foreground">
              or{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                schedule a consultation
              </Link>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
