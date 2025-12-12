"use client"

import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { ArrowUpRight, Linkedin, Twitter, ArrowRight, Github, Code, Cpu, Globe, History, Zap, Telescope, Target } from "lucide-react"
import { cn } from "@/lib/utils"

// --- Components ---

function AboutHero() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end center"]
  })

  // Scroll Animations
  const containerPadding = useTransform(scrollYProgress, [0, 0.2], ["0rem", "1.5rem"])
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["0rem", "3rem"])

  // Parallax values
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])

  return (
    <section ref={scrollRef} className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] pt-24 md:pt-32 pb-12">
      <motion.div
        style={{
          marginLeft: containerPadding,
          marginRight: containerPadding,
          marginBottom: containerPadding,
          borderRadius: borderRadius
        }}
        className="relative w-full h-full min-h-[85vh] overflow-hidden bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center"
      >
        <motion.div
          style={{ scale: backgroundScale }}
          className="absolute inset-0 bg-[url('/about-hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-screen grayscale origin-center z-0"
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-[#050505]/40 z-0" />

        <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-500 border border-orange-500/30 px-4 py-2 rounded-full bg-orange-500/10 backdrop-blur-sm">
              Established 2025
            </span>
          </motion.div>

          <motion.div style={{ y: yText }}>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter mb-8 mix-blend-difference text-white">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  We build
                </motion.span>
              </span>
              <span className="block overflow-hidden text-orange-500 italic pr-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  the invisible
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  backbone.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-balance font-light"
            >
              NeuconLabs engineers the mission-critical software that powers high-growth companies. We optimize for velocity, precision, and impact.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// --- Story Section (Refined) ---

function OriginGraphic() {
  return (
    <div className="w-full h-full relative flex items-center">
      <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
      </div>

      {[0.2, 0.5, 0.8].map((pos, i) => (
        <div key={i} className="absolute w-2 h-2 bg-neutral-800 border border-white/20 rounded-full" style={{ left: `${pos * 100}%` }}>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            className="absolute inset-0 bg-white rounded-full opacity-50 blur-[2px]"
          />
        </div>
      ))}

      <div className="absolute top-1/2 mt-4 left-[20%] text-[10px] uppercase tracking-widest text-neutral-500">Inception</div>
      <div className="absolute top-1/2 mt-4 left-[50%] text-[10px] uppercase tracking-widest text-neutral-500">Launch</div>
      <div className="absolute top-1/2 mt-4 left-[80%] text-[10px] uppercase tracking-widest text-neutral-500">Scale</div>
    </div>
  )
}

function VisionGraphic() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      {/* Chart Grid */}
      <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-4 opacity-10">
        {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-white/20" />)}
      </div>

      {/* SVG Chart */}
      <svg className="w-full h-3/4 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
        <motion.path
          d="M0,50 C20,50 40,30 60,30 S80,0 100,0"
          fill="none"
          stroke="#f97316" /* Orange-500 */
          strokeWidth="0.8"
          strokeDasharray="1 0"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        />
        {/* Trailing fade line */}
        <motion.path
          d="M0,50 C20,50 40,30 60,30 S80,0 100,0"
          fill="none"
          stroke="#f97316"
          strokeWidth="2"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        />
      </svg>

      {/* Fixed Target Node (Top Right) */}
      <motion.div
        // Positioned relative to the SVG coordinates roughly (top right corner of container)
        className="absolute top-[15%] right-[5%]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative flex items-center justify-center w-8 h-8">
          <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
          <div className="relative z-10 w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)]">
            <Target className="w-4 h-4 text-orange-500" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function StorySection() {
  return (
    <section className="bg-[#050505] text-white py-12 md:py-24 relative overflow-hidden">
      {/* Section Intro */}
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col items-start md:items-center text-left md:text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4"
        >
          The Narrative
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
        >
          From <span className="italic text-neutral-500">Zero</span> to <span className="italic text-neutral-500">One</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg text-neutral-400 leading-relaxed text-balance"
        >
          Every great product starts with a frustration. Ours was simple: why is building software still so painfully slow? We set out to change that physics.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[500px]">

          {/* Card 1: The Origin (White Glow) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            // Group allows inner elements to react too
            className="group relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-white/40 hover:to-white/10 transition-colors duration-500 shadow-lg hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
          >
            <div className="relative h-full w-full bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-8 md:p-12">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
                  <History className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-medium mb-4">The Origin</h3>
                <p className="text-lg text-neutral-400 leading-relaxed font-light">
                  We started Neucon because we saw too many brilliant ideas die in development hell. We realized that speed isn't just a metric—it's survival.
                </p>
              </div>

              <div className="mt-8 h-24 relative opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <OriginGraphic />
              </div>
            </div>
          </motion.div>

          {/* Card 2: The Vision (Orange Glow) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-orange-500/40 hover:to-orange-500/10 transition-colors duration-500 shadow-lg hover:shadow-[0_0_30px_-5px_rgba(234,88,12,0.15)]"
          >
            <div className="relative h-full w-full bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-8 md:p-12">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-500">
                  <Telescope className="w-5 h-5" />
                </div>
                <h3 className="text-3xl md:text-4xl font-medium mb-4">The Vision</h3>
                <p className="text-lg text-neutral-400 leading-relaxed font-light">
                  Our vision is to build the operating system for the next generation of startups. Not just code, but the entire infrastructure of innovation.
                </p>
              </div>

              <div className="mt-8 h-32 relative opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <VisionGraphic />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16 md:mt-24 text-center">
        <p className="text-sm text-neutral-600 uppercase tracking-widest font-medium">
          The best is yet to come.
        </p>
      </div>
    </section>
  )
}


// --- Principles Section (Sticky Card V7.3) ---
const principles = [
  {
    title: "Lived Experience",
    description: "Our first hand experiences mean we understand the realities of complexity and what it takes to solve it. We've been in the trenches.",
  },
  {
    title: "Enterprise Trust",
    description: "Companies rely on Neucon for high-stakes, mission-critical workflows where nothing can slip through the cracks. Reliability is our baseline.",
  },
  {
    title: "Human-Centered AI",
    description: "We believe AI should amplify human intent, not replace it. We design with empathy, ensuring technology serves the user, not the other way around.",
  },
  {
    title: "Radical Velocity",
    description: "Speed is the ultimate competitive advantage. We iterate faster, ship sooner, and learn quicker than anyone else.",
  }
]




function PrinciplesGraphic() {
  return (
    <div className="w-full h-48 relative flex items-center justify-center gap-8 overflow-hidden rounded-3xl bg-neutral-900/50 border border-white/5 group px-8">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

      {/* Left: The Graphic (HUD / Orbitals) */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center">
        {/* Internal Glow */}
        <div className="absolute w-full h-full bg-orange-500/20 rounded-full blur-2xl animate-pulse" />

        {/* Ring 1: Dashed Outer */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-white/10 border-dashed"
        />

        {/* Ring 2: Counter Rotating Arcs */}
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" strokeDasharray="60 40" />
        </svg>

        {/* Ring 3: Core Pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-12 h-12 bg-orange-500 rounded-full mix-blend-screen opacity-80"
        />

        {/* Central Dot */}
        <div className="absolute w-2 h-2 bg-white rounded-full z-10" />
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col z-10 relative">
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white font-bold italic text-xl md:text-3xl tracking-tighter uppercase leading-none"
        >
          THE <span className="text-neutral-500">INVISIBLE</span> <br /> BACKBONE
        </motion.span>
      </div>
    </div>
  )
}

function PrinciplesSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animation: Right column translates 'up' fully as we scroll 'down'
  // Animation: Right column translates 'up' fully as we scroll 'down'
  // Modified to -55% so it unsticks as soon as the graphic is revealed
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"])

  // Removed opacity fade to allow smooth "scroll up" exit

  return (
    // Height 200vh = Even shorter scroll track for early exit
    <section ref={containerRef} className="relative h-[200vh] bg-[#050505]">

      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-12">

        {/* 95% Width Card */}
        <div className="relative w-[95%] h-full max-h-[90vh] bg-[#0a0a0a] rounded-[3rem] border border-white/5 overflow-hidden flex flex-col md:flex-row">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />

          {/* Left: Sticky Title (Inside the card) */}
          <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-between relative z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent">
            <div>
              <h2 className="text-6xl md:text-8xl tracking-tight leading-[0.9] mb-8 text-white">
                Our <br />
                <span className="italic text-neutral-500">Principles</span>
              </h2>
              <p className="text-xl text-neutral-400 mb-12 max-w-sm">
                The core beliefs that guide every line of code we write and every product we ship.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95 group">
                <span>Start a Project</span>
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>



          <div className="w-full md:w-1/2 relative overflow-hidden">
            <motion.div
              style={{ y: yRight }}
              className="p-12 md:p-16 flex flex-col gap-32"
            >
              {principles.map((item, i) => (
                <div key={i} className="flex flex-col gap-6">
                  <span className="text-orange-500 font-mono text-sm">0{i + 1}</span>
                  <h3 className="text-4xl md:text-5xl text-white">{item.title}</h3>
                  <p className="text-xl text-neutral-400 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                  <div className="w-full h-[1px] bg-white/10" />
                </div>
              ))}

              {/* Final Graphic */}
              <div className="pt-4">
                <PrinciplesGraphic />
              </div>

              {/* Removed extra spacer to ensure exact stop */}
              {/* <div className="h-[20vh]" /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Investors Marquee ---
const investorsLogos = [
  { name: "GOOGLE", icon: Globe },
  { name: "MICROSOFT", icon: Code },
  { name: "OPENAI", icon: Cpu },
  { name: "AWS", icon: Globe },
  { name: "VERCEL", icon: ArrowUpRight },
  { name: "NEXT.JS", icon: Code },
]

function InvestorsMarquee() {
  return (
    <section className="bg-[#050505] py-24 border-y border-white/5 overflow-hidden">
      <div className="text-center mb-16">
        <span className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase">Trusted By Industry Leaders</span>
      </div>

      <div className="relative flex w-full overflow-hidden mask-gradient select-none">
        <div className="flex shrink-0 animate-marquee gap-24 pr-24 whitespace-nowrap items-center" style={{ animationDuration: "40s" }}>
          {[...investorsLogos, ...investorsLogos].map((logo, i) => (
            <div key={i} className="flex items-center gap-4 text-white/30 hover:text-white/80 transition-colors duration-500">
              <logo.icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest leading-none font-grotesk">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-24 pr-24 whitespace-nowrap items-center" aria-hidden="true" style={{ animationDuration: "40s" }}>
          {[...investorsLogos, ...investorsLogos].map((logo, i) => (
            <div key={i} className="flex items-center gap-4 text-white/30 hover:text-white/80 transition-colors duration-500">
              <logo.icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest leading-none font-grotesk">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  )
}

// --- Founders Section ---
const founders = [
  {
    name: "Ratheshan",
    role: "Co-Founder & Lead Engineer",
    image: "/placeholder-founder1.jpg",
    bio: "Former Google engineer with a passion for scalable systems and AI infrastructure."
  },
  {
    name: "Co-Founder Friend",
    role: "Co-Founder & Design Lead",
    image: "/placeholder-founder2.jpg",
    bio: "Award-winning product designer focused on human-computer interaction."
  }
]

function FounderCard({ founder }: { founder: typeof founders[0] }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"])

  function onMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full aspect-[4/5] rounded-[2rem] bg-neutral-900 border border-white/10 overflow-hidden cursor-crosshair group shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_-12px_rgba(234,88,12,0.3)] transition-shadow duration-500"
    >
      {/* Background Image/Placeholder */}
      <div className="absolute inset-0 bg-neutral-800" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
        <h3 className="text-3xl font-medium text-white translate-z-10">{founder.name}</h3>
        <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mt-2 mb-4">{founder.role}</p>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {founder.bio}
        </p>

        <div className="flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function Founders() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-20">
          <span className="text-orange-500 font-bold text-xs tracking-widest mb-4 block uppercase">// FOUNDERS</span>
          <h2 className="text-6xl md:text-8xl text-white tracking-tight leading-[0.9]">
            Leadership <span className="text-neutral-500 italic">Team</span>
          </h2>
          <p className="mt-8 text-xl text-neutral-400 max-w-2xl leading-relaxed">
            We have seen development from every side: startup founders, enterprise engineers, and the people managing the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
          {founders.map((founder, i) => (
            <div key={i} className="perspective-1000">
              <FounderCard founder={founder} />
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <p className="text-2xl md:text-3xl text-white leading-tight max-w-3xl">
            "We believe that the best software is built by small, dedicated teams who care deeply about the craft. That is the culture we are building at Neucon."
          </p>
          <div className="flex flex-col gap-2">
            <span className="block w-24 h-[1px] bg-orange-500 mb-2" />
            <span className="text-xs text-neutral-500 uppercase tracking-widest">Our Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  )
}


// --- Impact CTA (Reverted to V2 Parallax + Rounded) ---
function ImpactCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax background
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section className="py-24 px-4 md:px-8 bg-[#050505]">
      <div ref={containerRef} className="relative h-[120vh] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-6 border border-white/5">

        {/* Fixed/Parallax Background */}
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 bg-slate-900"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] bg-orange-600/20 rounded-full blur-[150px] mix-blend-screen" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]/90" />
        </motion.div>

        <div className="absolute top-24 left-0 right-0 flex justify-center gap-12 z-10 opacity-30">
          {[0, 1, 2, 3].map(i => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-12 h-12 text-white" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] mb-12 text-white">
            We know what usually <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">happens next.</span>
          </h2>

          <p className="text-xl md:text-3xl text-neutral-300 max-w-2xl mb-16 font-light leading-relaxed">
            Neucon exists so fewer founders have to compromise on their vision. Take back control of your software.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-10 py-5 bg-[#dfff5e] text-black rounded-full font-bold text-lg tracking-wide hover:bg-[#ccff00] transition-colors flex items-center gap-2"
          >
            Start Building <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-between px-12 text-white/30 text-xs uppercase tracking-widest font-bold z-10">
          <span>©2025 NeuconLabs</span>
          <span>Melbourne, AU</span>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-orange-500/30">
      <Navbar />
      <main>
        <AboutHero />
        <StorySection />
        <PrinciplesSection />
        <InvestorsMarquee />
        <Founders />
        <ImpactCTA />
      </main>
    </div>
  )
}
