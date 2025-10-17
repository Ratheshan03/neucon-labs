"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Code, Cpu, Zap, Brain, Database, Cloud, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

export function HeroSection() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [currentCommand, setCurrentCommand] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [activeTab, setActiveTab] = useState("ai-ml")

  const commands = useMemo(() => [
    { text: "neucon init --premium", delay: 1000 },
    { text: "Loading AI/ML capabilities...", delay: 2000 },
    { text: "Initializing neural networks...", delay: 3000 },
    { text: "System ready. Welcome to Neucon Labs.", delay: 4000 },
  ], [])

  const expertiseTabs = [
    { id: "ai-ml", label: "AI/ML", icon: Brain },
    { id: "data", label: "Data Engineering", icon: Database },
    { id: "cloud", label: "Cloud Solutions", icon: Cloud },
    { id: "security", label: "Cybersecurity", icon: Shield },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ]

  const expertiseData = {
    "ai-ml": [
      { title: "Neural Networks", description: "Custom deep learning models", level: "Expert", projects: "50+" },
      { title: "Computer Vision", description: "Image recognition & processing", level: "Advanced", projects: "30+" },
      { title: "NLP", description: "Language models & chatbots", level: "Expert", projects: "40+" },
      { title: "Reinforcement Learning", description: "Autonomous systems", level: "Advanced", projects: "15+" },
    ],
    "data": [
      { title: "Big Data Processing", description: "Distributed computing", level: "Expert", projects: "35+" },
      { title: "Data Warehousing", description: "Scalable data architecture", level: "Advanced", projects: "25+" },
      { title: "ETL Pipelines", description: "Data transformation", level: "Expert", projects: "45+" },
      { title: "Real-time Analytics", description: "Streaming data processing", level: "Advanced", projects: "20+" },
    ],
    "cloud": [
      { title: "AWS/Azure/GCP", description: "Multi-cloud architecture", level: "Expert", projects: "60+" },
      { title: "Serverless", description: "Lambda & Functions", level: "Advanced", projects: "40+" },
      { title: "Kubernetes", description: "Container orchestration", level: "Expert", projects: "30+" },
      { title: "DevOps", description: "CI/CD pipelines", level: "Advanced", projects: "50+" },
    ],
    "security": [
      { title: "Threat Detection", description: "AI-powered security", level: "Expert", projects: "25+" },
      { title: "Encryption", description: "Data protection", level: "Advanced", projects: "35+" },
      { title: "Compliance", description: "GDPR & standards", level: "Expert", projects: "20+" },
      { title: "Penetration Testing", description: "Security assessment", level: "Advanced", projects: "15+" },
    ],
    "analytics": [
      { title: "Predictive Modeling", description: "Forecasting algorithms", level: "Expert", projects: "40+" },
      { title: "Business Intelligence", description: "Dashboard development", level: "Advanced", projects: "55+" },
      { title: "A/B Testing", description: "Statistical analysis", level: "Expert", projects: "30+" },
      { title: "Data Visualization", description: "Interactive charts", level: "Advanced", projects: "45+" },
    ],
  }

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Start terminal sequence
    const startTerminal = () => {
      let commandIndex = 0

      const runCommand = () => {
        if (commandIndex < commands.length) {
          setCurrentCommand(commandIndex)
          setIsTyping(true)

          setTimeout(() => {
            setIsTyping(false)
            commandIndex++
            setTimeout(runCommand, commands[commandIndex]?.delay || 1000)
          }, commands[commandIndex].text.length * 50 + 500)
        }
      }

      setTimeout(runCommand, 1000)
    }

    startTerminal()

    // Add floating particles
    if (terminalRef.current) {
      const cleanup = animations.floatingParticles(terminalRef.current, 30)
      return cleanup
    }

    // Add magnetic effect to button
    if (buttonRef.current) {
      const cleanupMagnetic = animations.magneticHover(buttonRef.current, 0.2)
      return () => {
        cleanupMagnetic()
        if (lenis) {
          lenis.destroy()
        }
      }
    }

    // Add enhanced scroll-triggered animations
    const setupScrollAnimations = () => {
      // Parallax effects for background elements
      const bgElements = document.querySelectorAll('.hero-bg-element')
      bgElements.forEach((element, index) => {
        animations.parallax(element as HTMLElement, 0.1 + index * 0.05)
      })

      // Scroll-triggered reveals for terminal elements
      const terminalElements = document.querySelectorAll('.terminal-reveal')
      animations.staggerReveal(terminalElements, 'left', 0.3)

      // Scroll-triggered reveals for content elements
      const contentElements = document.querySelectorAll('.content-reveal')
      animations.staggerReveal(contentElements, 'right', 0.2)

      // Scale on scroll for stats grid
      const statsGrid = document.querySelector('.stats-grid')
      if (statsGrid) {
        animations.scaleOnScroll(statsGrid as HTMLElement, 0.8, 1.05)
      }

      // Staggered reveals for expertise tabs
      const expertiseTabs = document.querySelectorAll('.expertise-tab')
      animations.staggerReveal(expertiseTabs, 'up', 0.1)

      // Enhanced reveals for expertise table items
      const expertiseItems = document.querySelectorAll('.expertise-item')
      animations.staggerReveal(expertiseItems, 'up', 0.08)
    }

    // Delay scroll animations setup to ensure DOM is ready
    setTimeout(setupScrollAnimations, 100)

    return () => {
      if (lenis) {
        lenis.destroy()
      }
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [commands])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-terminal-bg">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-purple/5 hero-bg-element" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse hero-bg-element" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse hero-bg-element" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-matrix-green/5 rounded-full blur-3xl animate-pulse hero-bg-element" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Hero Content */}
      <div className="container relative z-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
            {/* Left Side - Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8 order-2 lg:order-1"
            >
              {/* Terminal Window */}
              <div className="terminal-card relative terminal-reveal">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-glass-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-4 h-4 text-electric-blue" />
                    <span className="text-sm font-mono text-muted-foreground">neucon-terminal</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-electric-blue">$</span>
                    <span className="text-foreground">neucon --version</span>
                  </div>
                  <div className="text-matrix-green">Neucon Labs v2.0.0 - AI/ML Development Framework</div>

                  {commands.slice(0, currentCommand + 1).map((command, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-electric-blue">$</span>
                        <span className="text-foreground">
                          {index === currentCommand && isTyping ? (
                            <span>
                              {command.text.slice(0, Math.floor((Date.now() / 50) % (command.text.length + 1)))}
                              <span className="animate-pulse">|</span>
                            </span>
                          ) : (
                            command.text
                          )}
                        </span>
                      </div>
                      {index < currentCommand && (
                        <div className="text-matrix-green ml-4">
                          {index === 0 && "✓ Project initialized successfully"}
                          {index === 1 && "✓ AI/ML modules loaded"}
                          {index === 2 && "✓ Neural networks online"}
                          {index === 3 && "✓ Ready for deployment"}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Cursor */}
                  <div className="flex items-center gap-2">
                    <span className="text-electric-blue">$</span>
                    <span className="animate-pulse">|</span>
                  </div>
                </div>

                {/* Holographic Border Effect */}
                <div className="absolute inset-0 holographic opacity-50 pointer-events-none" />
              </div>

              {/* Status Indicators */}
              <div className="flex gap-4 terminal-reveal">
                <div className="flex items-center gap-2 px-3 py-2 terminal-card">
                  <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">SYSTEM ONLINE</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 terminal-card">
                  <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">AI ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 terminal-card">
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">SECURE</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-10 order-1 lg:order-2"
            >
              {/* Main Heading */}
              <div className="space-y-6 content-reveal">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 terminal-card border-electric-blue/30"
                >
                  <Code className="w-4 h-4 text-electric-blue" />
                  <span className="text-sm font-mono text-electric-blue">NEXT-GEN AI/ML DEVELOPMENT</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="block">Build the</span>
                  <span className="block gradient-text glitch" data-text="Future">Future</span>
                  <span className="block">of Intelligence</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-xl text-muted-foreground leading-relaxed max-w-lg"
                >
                  Transform your vision into reality with Australia&apos;s most advanced AI/ML development team.
                  We don&apos;t just code—we architect intelligence.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 content-reveal"
              >
                <Button
                  ref={buttonRef}
                  asChild
                  size="lg"
                  className="group relative px-8 py-6 text-lg font-semibold overflow-hidden rounded-xl bg-gradient-to-r from-electric-blue to-neon-purple hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-300 magnetic"
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Initialize Project
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-matrix-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-electric-blue/30 terminal-card hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                >
                  <Link href="/projects">
                    <span className="flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      View Neural Networks
                    </span>
                  </Link>
                </Button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="grid grid-cols-2 gap-4 stats-grid content-reveal"
              >
                {[
                  { icon: Zap, label: "AI Models", value: "50+", color: "text-electric-blue" },
                  { icon: Code, label: "Projects", value: "200+", color: "text-neon-purple" },
                  { icon: Cpu, label: "Success Rate", value: "99%", color: "text-matrix-green" },
                  { icon: Terminal, label: "Uptime", value: "100%", color: "text-electric-blue" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    className="terminal-card p-4 text-center"
                  >
                    <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Our Expertise Section - Osmo Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-32 space-y-16"
          >
            {/* Section Header */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="inline-flex items-center gap-2 px-4 py-2 terminal-card border-electric-blue/30"
              >
                <Terminal className="w-4 h-4 text-electric-blue" />
                <span className="text-sm font-mono text-electric-blue">OUR EXPERTISE</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="text-3xl md:text-4xl font-bold"
              >
                Technologies We Master
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                From cutting-edge AI/ML to enterprise-grade cloud solutions,
                we deliver expertise across the full technology spectrum.
              </motion.p>
            </div>

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="flex justify-center animate-on-scroll"
            >
              <div className="flex flex-wrap justify-center gap-2 p-2 terminal-card rounded-2xl">
                {expertiseTabs.map((tab, index) => {
                  const Icon = tab.icon
                  return (
                    <motion.button
                      key={tab.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 expertise-tab ${
                        activeTab === tab.id
                          ? "text-white bg-gradient-to-r from-electric-blue to-neon-purple shadow-lg shadow-electric-blue/25"
                          : "text-muted-foreground hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* Expertise Table */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="terminal-card rounded-2xl overflow-hidden animate-on-scroll"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-glass-border">
                {expertiseData[activeTab as keyof typeof expertiseData].map((item, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-terminal-bg/50 p-6 hover:bg-terminal-bg/80 transition-colors duration-300 group expertise-item"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-white group-hover:text-electric-blue transition-colors">
                          {item.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-mono ${
                          item.level === "Expert"
                            ? "bg-electric-blue/20 text-electric-blue"
                            : "bg-neon-purple/20 text-neon-purple"
                        }`}>
                          {item.level}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-glass-border">
                        <span className="text-xs text-muted-foreground font-mono">
                          Projects
                        </span>
                        <span className="text-sm font-semibold text-matrix-green">
                          {item.projects}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs uppercase tracking-wider font-mono">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-electric-blue/30 rounded-full flex justify-center p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-3 bg-electric-blue rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </section>
  )
}
