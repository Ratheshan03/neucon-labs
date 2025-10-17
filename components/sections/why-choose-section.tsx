"use client"

import { motion } from "framer-motion"
import { Zap, Target, Users, Trophy, Rocket, Shield } from "lucide-react"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

const reasons = [
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Deep expertise in AI/ML and modern web technologies. We build production-ready intelligent systems, not just prototypes.",
    gradient: "from-primary to-purple-600",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by ROI and business impact, not just features delivered. Your success drives our approach.",
    gradient: "from-secondary to-pink-600",
  },
  {
    icon: Rocket,
    title: "Rapid Delivery",
    description: "Agile methodology with startup DNA. We move fast without compromising on quality or scalability.",
    gradient: "from-accent to-teal-600",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "Transparent communication and collaborative approach. We work as an extension of your team.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "98% client satisfaction with 50+ successful projects across diverse industries and use cases.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Shield,
    title: "Enterprise Quality",
    description: "Australian-based with global standards. Security, reliability, and best practices built-in from day one.",
    gradient: "from-indigo-500 to-blue-600",
  },
]

export function WhyChooseSection() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Add parallax effects to hexagonal cards
    const hexCards = document.querySelectorAll('.why-hex-card')
    hexCards.forEach((card, index) => {
      animations.parallax(card as HTMLElement, 0.04 + index * 0.01)
    })

    // Add scroll-triggered reveals for mobile cards
    const mobileCards = document.querySelectorAll('.mobile-why-card')
    animations.staggerReveal(mobileCards, 'up', 0.2)

    // Add scroll-triggered reveals for desktop cards
    const desktopCards = document.querySelectorAll('.desktop-why-card')
    animations.staggerReveal(desktopCards, 'up', 0.12)

    // Add scale on scroll for section header
    const sectionHeader = document.querySelector('.why-header')
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 why-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6">
            <Trophy className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Sets Us{" "}
            <span className="gradient-text">Apart</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technical expertise with a deep understanding of business needs to deliver exceptional results.
          </p>
        </motion.div>

        {/* Hexagonal Reasons Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Stack vertically */}
          <div className="block md:hidden space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex items-center justify-center mobile-why-card"
              >
                <div className="relative w-full h-64 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 200 173"
                    className="w-full h-full drop-shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id={`mobile-why-hex-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                      </linearGradient>
                      <linearGradient id={`mobile-why-hex-border-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                        <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                        <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M100 0L173.2 50V123L100 173L26.8 123V50L100 0Z"
                      fill={`url(#mobile-why-hex-gradient-${index})`}
                      stroke={`url(#mobile-why-hex-border-${index})`}
                      strokeWidth="2"
                    />
                    <path
                      d="M100 25L160 60V113L100 148L40 113V60L100 25Z"
                      fill="rgba(0, 0, 0, 0.9)"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                    />
                  </motion.svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} mb-4 glow-sm`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <reason.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed opacity-90">
                      {reason.description}
                    </p>
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Hexagonal Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative flex items-center justify-center desktop-why-card why-hex-card"
                style={{
                  gridRow: index >= 3 ? '2' : '1',
                  gridColumn: index === 0 ? '1 / span 1' :
                            index === 1 ? '2 / span 1' :
                            index === 2 ? '3 / span 1' :
                            index === 3 ? '1 / span 1' :
                            index === 4 ? '2 / span 1' : '3 / span 1'
                }}
              >
                {/* Hexagonal Card */}
                <div className="relative w-full h-80 flex items-center justify-center">
                  {/* Hexagon Shape */}
                  <motion.svg
                    viewBox="0 0 200 173"
                    className="w-full h-full drop-shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id={`why-hex-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                      </linearGradient>
                      <linearGradient id={`why-hex-border-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                        <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                        <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                      </linearGradient>
                    </defs>

                    {/* Hexagon Background */}
                    <path
                      d="M100 0L173.2 50V123L100 173L26.8 123V50L100 0Z"
                      fill={`url(#why-hex-gradient-${index})`}
                      stroke={`url(#why-hex-border-${index})`}
                      strokeWidth="2"
                    />

                    {/* Inner Hexagon for Content */}
                    <path
                      d="M100 20L165 57.5V115.5L100 153L35 115.5V57.5L100 20Z"
                      fill="rgba(0, 0, 0, 0.8)"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                    />
                  </motion.svg>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} mb-4 glow-sm`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <reason.icon className="h-7 w-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed opacity-90">
                      {reason.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
