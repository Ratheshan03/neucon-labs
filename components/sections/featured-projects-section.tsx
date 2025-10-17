"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

// Mock data - will be replaced with real data from database
const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Machine learning system that analyzes customer behavior patterns and predicts churn with 94% accuracy using advanced neural networks.",
    category: ["AI/ML", "Full-stack"],
    technologies: ["TensorFlow", "Next.js", "Python"],
    metric: "+150%",
    metricLabel: "Efficiency Gain",
    slug: "ai-analytics-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare SaaS Platform",
    description: "Cloud-based patient management system serving 50+ clinics with real-time appointment scheduling and telemedicine capabilities.",
    category: ["SaaS", "Full-stack"],
    technologies: ["Next.js", "PostgreSQL", "Stripe"],
    metric: "50K+",
    metricLabel: "Active Users",
    slug: "healthcare-saas",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Inventory System",
    description: "Intelligent inventory management with predictive ordering, multi-warehouse sync, and automated restock alerts.",
    category: ["Automation", "AI/ML"],
    technologies: ["Python", "React", "MongoDB"],
    metric: "80%",
    metricLabel: "Time Saved",
    slug: "inventory-automation",
    featured: false,
  },
]

export function FeaturedProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Add parallax effects to vault cards
    const vaultCards = document.querySelectorAll('.vault-card')
    vaultCards.forEach((card, index) => {
      animations.parallax(card as HTMLElement, 0.03 + index * 0.01)
    })

    // Add scroll-triggered reveals for mobile cards
    const mobileCards = document.querySelectorAll('.mobile-project-card')
    animations.staggerReveal(mobileCards, 'up', 0.2)

    // Add scroll-triggered reveals for desktop vault cards
    const desktopCards = document.querySelectorAll('.desktop-project-card')
    animations.staggerReveal(desktopCards, 'up', 0.15)

    // Add scroll-triggered reveals for connecting lines
    const connectingLines = document.querySelectorAll('.connecting-line')
    animations.staggerReveal(connectingLines, 'up', 0.3)

    // Add scale on scroll for section header
    const sectionHeader = document.querySelector('.projects-header')
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
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 projects-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-6">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Projects That{" "}
            <span className="gradient-text">Deliver Results</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore how we&apos;ve helped clients achieve their goals with intelligent software solutions that make a real impact.
          </p>
        </motion.div>

        {/* Vault-Style Hexagonal Projects Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Mobile: Stack vertically */}
          <div className="block md:hidden space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative mobile-project-card"
              >
                <VaultProjectCard
                  project={project}
                  index={index}
                  isHovered={false}
                />
              </motion.div>
            ))}
          </div>

          {/* Desktop: Hexagonal Vault Layout */}
          <div className="hidden md:block relative">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group absolute cursor-pointer desktop-project-card vault-card"
                style={{
                  top: index === 0 ? '0%' : index === 1 ? '25%' : '50%',
                  left: index === 0 ? '20%' : index === 1 ? '60%' : '40%',
                  zIndex: hoveredId === project.id ? 10 : 3 - index,
                  transform: `translateZ(${hoveredId === project.id ? '50px' : '0px'})`
                }}
              >
                <VaultProjectCard
                  project={project}
                  index={index}
                  isHovered={hoveredId === project.id}
                />
              </motion.div>
            ))}
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
              </linearGradient>
            </defs>

            {/* Animated connecting lines */}
            <motion.path
              d="M300 100 L700 200"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="opacity-60 connecting-line"
            />
            <motion.path
              d="M500 350 L700 200"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              className="opacity-60 connecting-line"
            />
            <motion.path
              d="M300 100 L500 350"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.9 }}
              className="opacity-60 connecting-line"
            />
          </svg>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-32"
        >
          <Button
            asChild
            size="lg"
            className="px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/30"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function VaultProjectCard({
  project,
  index,
  isHovered,
}: {
  project: typeof featuredProjects[0]
  index: number
  isHovered: boolean
}) {
  return (
    <motion.div
      className="relative w-80 h-96"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Hexagonal Vault Card */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Hexagon Shape */}
        <motion.svg
          viewBox="0 0 320 277"
          className="w-full h-full drop-shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <defs>
            <linearGradient id={`vault-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
            </linearGradient>
            <linearGradient id={`vault-border-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" />
              <stop offset="100%" stopColor="rgb(16, 185, 129)" />
            </linearGradient>
            <filter id={`vault-glow-${index}`}>
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Hexagon Background */}
          <motion.path
            d="M160 0L293.3 80V197L160 277L26.7 197V80L160 0Z"
            fill={`url(#vault-gradient-${index})`}
            stroke={`url(#vault-border-${index})`}
            strokeWidth="3"
            filter={isHovered ? `url(#vault-glow-${index})` : undefined}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />

          {/* Inner Hexagon for Content */}
          <path
            d="M160 30L265 90V167L160 227L55 167V90L160 30Z"
            fill="rgba(0, 0, 0, 0.8)"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        </motion.svg>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="absolute -top-2 -right-2"
            >
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 glow-sm px-2 py-1">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </motion.div>
          )}

          {/* Large Letter Background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-5"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-8xl font-bold text-white">
              {project.title.charAt(0)}
            </span>
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            {/* Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="mb-4"
            >
              <div className="text-3xl font-bold gradient-text">{project.metric}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">{project.metricLabel}</div>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-sm text-muted-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {project.description}
            </motion.p>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs border-primary/30 bg-black/50">
                  {tech}
                </Badge>
              ))}
            </motion.div>

            {/* Hover Details */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm rounded-2xl p-6"
            >
              <div className="space-y-3 mb-4">
                {project.category.map((cat) => (
                  <Badge key={cat} className="bg-primary/20 text-primary border-primary/30">
                    {cat}
                  </Badge>
                ))}
              </div>

              <Button
                asChild
                size="sm"
                variant="ghost"
                className="text-xs px-4 py-2 hover:bg-primary/20 border border-primary/30"
              >
                <Link href={`/projects/${project.slug}`}>
                  View Project
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
