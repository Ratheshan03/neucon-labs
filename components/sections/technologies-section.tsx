"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

const technologies = {
  "AI & Machine Learning": [
    { name: "TensorFlow", color: "from-orange-500 to-orange-600" },
    { name: "PyTorch", color: "from-red-500 to-orange-500" },
    { name: "Scikit-learn", color: "from-blue-500 to-cyan-500" },
    { name: "Keras", color: "from-red-600 to-pink-600" },
    { name: "Hugging Face", color: "from-yellow-500 to-orange-500" },
    { name: "OpenAI", color: "from-green-500 to-emerald-500" },
  ],
  "Frontend Development": [
    { name: "Next.js 15", color: "from-gray-700 to-gray-900" },
    { name: "React 19", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-600 to-blue-700" },
    { name: "Tailwind CSS", color: "from-cyan-500 to-blue-600" },
    { name: "Framer Motion", color: "from-pink-500 to-purple-600" },
  ],
  "Backend & Database": [
    { name: "Node.js", color: "from-green-600 to-green-700" },
    { name: "Python", color: "from-blue-500 to-yellow-500" },
    { name: "PostgreSQL", color: "from-blue-600 to-blue-700" },
    { name: "Prisma", color: "from-indigo-600 to-purple-600" },
    { name: "MongoDB", color: "from-green-500 to-green-600" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", color: "from-orange-500 to-orange-600" },
    { name: "Vercel", color: "from-gray-800 to-black" },
    { name: "Supabase", color: "from-green-500 to-emerald-600" },
    { name: "Docker", color: "from-blue-500 to-blue-600" },
    { name: "GitHub Actions", color: "from-gray-700 to-gray-900" },
  ],
}

export function TechnologiesSection() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Add parallax effects to hexagonal cards
    const hexCards = document.querySelectorAll('.tech-hex-card')
    hexCards.forEach((card, index) => {
      animations.parallax(card as HTMLElement, 0.03 + index * 0.01)
    })

    // Add scroll-triggered reveals for mobile cards
    const mobileCards = document.querySelectorAll('.mobile-tech-card')
    animations.staggerReveal(mobileCards, 'up', 0.2)

    // Add scroll-triggered reveals for desktop cards
    const desktopCards = document.querySelectorAll('.desktop-tech-card')
    animations.staggerReveal(desktopCards, 'up', 0.1)

    // Add scroll-triggered reveals for technology badges
    const techBadges = document.querySelectorAll('.tech-badge')
    animations.staggerReveal(techBadges, 'up', 0.05)

    // Add scale on scroll for section header
    const sectionHeader = document.querySelector('.tech-header')
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
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 tech-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-6">
            <Code2 className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Tech Stack</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powered By{" "}
            <span className="gradient-text">Modern Technology</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge tools and frameworks to build robust, scalable solutions that stand the test of time.
          </p>
        </motion.div>

        {/* Technologies Hexagonal Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Mobile: Stack vertically */}
          <div className="block md:hidden space-y-8">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group mobile-tech-card"
              >
                <div className="relative h-64 flex items-center justify-center mb-6">
                  <motion.svg
                    viewBox="0 0 200 173"
                    className="w-full h-full drop-shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id={`mobile-tech-hex-gradient-${categoryIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                      </linearGradient>
                      <linearGradient id={`mobile-tech-hex-border-${categoryIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                        <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                        <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M100 0L173.2 50V123L100 173L26.8 123V50L100 0Z"
                      fill={`url(#mobile-tech-hex-gradient-${categoryIndex})`}
                      stroke={`url(#mobile-tech-hex-border-${categoryIndex})`}
                      strokeWidth="2"
                    />
                    <path
                      d="M100 25L160 60V113L100 148L40 113V60L100 25Z"
                      fill="rgba(0, 0, 0, 0.9)"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                    />
                  </motion.svg>

                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h3 className="text-xl font-bold text-center text-white group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="group/tech"
                    >
                      <Badge
                        className={`px-4 py-2 text-sm font-medium glass border border-white/10 hover:border-white/30 transition-all cursor-default relative overflow-hidden`}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover/tech:opacity-20`}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold relative z-10`}>
                          {tech.name}
                        </span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Technologies Grid with Hexagonal Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group desktop-tech-card tech-hex-card"
              >
                {/* Hexagonal Category Card */}
                <div className="relative h-80 flex items-center justify-center mb-6">
                  {/* Hexagon Shape */}
                  <motion.svg
                    viewBox="0 0 200 173"
                    className="w-full h-full drop-shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id={`tech-hex-gradient-${categoryIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                      </linearGradient>
                      <linearGradient id={`tech-hex-border-${categoryIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                        <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                        <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                      </linearGradient>
                    </defs>

                    {/* Hexagon Background */}
                    <path
                      d="M100 0L173.2 50V123L100 173L26.8 123V50L100 0Z"
                      fill={`url(#tech-hex-gradient-${categoryIndex})`}
                      stroke={`url(#tech-hex-border-${categoryIndex})`}
                      strokeWidth="2"
                    />

                    {/* Inner Hexagon */}
                    <path
                      d="M100 25L160 60V113L100 148L40 113V60L100 25Z"
                      fill="rgba(0, 0, 0, 0.9)"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="1"
                    />
                  </motion.svg>

                  {/* Category Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h3 className="text-xl font-bold text-center text-white group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="group/tech tech-badge"
                    >
                      <Badge
                        className={`px-4 py-2 text-sm font-medium glass border border-white/10 hover:border-white/30 transition-all cursor-default relative overflow-hidden`}
                      >
                        {/* Animated background on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover/tech:opacity-20`}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold relative z-10`}>
                          {tech.name}
                        </span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            And many more tools in our arsenal to bring your vision to life
          </p>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
