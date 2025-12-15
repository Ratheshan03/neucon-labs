"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { ArrowUpRight, Mail, MapPin, Twitter, Linkedin, Send, Plus, Minus, Instagram, Github, ArrowRight, Globe, Zap, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

// --- 1. Optimized Nano Hero Section ---
function ContactHero() {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] rounded-b-[4rem]">
      {/* CSS-based Gradient Blobs (Performance Optimized) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-10" />

        {/* Blob 1 */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-orange-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow will-change-transform" />

        {/* Blob 2 */}
        <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-yellow-500/10 rounded-full blur-[80px] mix-blend-screen animate-float-slow will-change-transform" />
      </div>

      <div className="container relative z-20 px-6 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase mb-6"
        >
          Initiate Protocol
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-medium tracking-tighter text-white mb-8 flex items-center gap-6"
        >
          Let's Talk.
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-orange-500/30 flex items-center justify-center"
          >
            <Send className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
          </motion.div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-xl leading-relaxed"
        >
          From concept to code, we're ready to engineer your vision.
        </motion.p>
      </div>
    </section>
  )
}



// --- 2. Interactive Info Section (Slider/Reveal) ---
const infoItems = [
  {
    title: "Global Reach",
    value: 3,
    suffix: "Continents",
    desc: "Teams distributed across AU, US, and UK.",
    icon: Globe,
    anim: { rotateY: 360 } // Real 3D rotation
  },
  {
    title: "Velocity",
    value: 2,
    suffix: "x",
    desc: "Faster prototyping to production deployment.",
    icon: Zap,
    anim: { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } // Energetic shake
  },
  {
    title: "Stack",
    value: 100,
    suffix: "%",
    desc: "Modern, type-safe, and scalable architecture.",
    icon: Layers,
    anim: { y: [0, -4, 0], scaleY: [1, 0.9, 1] } // Bouncy stack
  },
]

function SparkleText({ text }: { text: string }) {
  return (
    <span className="relative inline-block group-hover:text-white transition-colors duration-300">
      {text}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 mix-blend-overlay" />
    </span>
  )
}

function Counter({ from, to, trigger }: { from: number; to: number; trigger: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let startTime: number;
    const duration = 2000;

    // Simple quadratic ease-out
    const easeOutQuad = (t: number) => t * (2 - t);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const rawProgress = Math.min((timestamp - startTime) / duration, 1);
      const progress = easeOutQuad(rawProgress);

      const current = Math.floor(progress * (to - from) + from);
      node.textContent = String(current);
      if (rawProgress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);

  }, [from, to, trigger]); // Re-run when trigger changes

  return <span ref={nodeRef} />;
}

function ContactStats() {
  // State to track hover count for each item to trigger re-animation
  const [hoverCounts, setHoverCounts] = useState<number[]>([0, 0, 0]);

  const handleMouseEnter = (index: number) => {
    setHoverCounts(prev => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleMouseEnter(i)}
              className="group relative p-8 h-full min-h-[250px] flex flex-col justify-between rounded-3xl bg-neutral-900/20 border border-white/5 transition-all duration-500 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

              {/* 4-Sided Hover Glow (Inset) */}
              <div className="absolute inset-0 rounded-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none shadow-[inset_0_0_80px_rgba(249,115,22,0.15)] border border-orange-500/20" />

              <div className="flex items-center gap-3 mb-4 relative z-10 text-neutral-500 group-hover:text-orange-500 transition-colors">
                <motion.div
                  animate={item.anim}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
                <h4 className="text-sm uppercase tracking-widest ">
                  <SparkleText text={item.title} />
                </h4>
              </div>

              <div className="relative z-10">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl md:text-6xl font-medium text-white group-hover:scale-105 transition-transform origin-left duration-300 block">
                    {/* Pass hoverCount as trigger to reset counter */}
                    <Counter from={0} to={item.value} trigger={hoverCounts[i]} />
                  </span>
                  <span className="text-xl text-neutral-500">{item.suffix}</span>
                </div>
                <p className="text-neutral-400 leading-relaxed max-w-[80%]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- 3. Refined Bento Grid ---
function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <div className="h-full w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 p-8 md:p-12 flex flex-col relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <h3 className="text-2xl font-medium mb-8 text-white relative z-10">Send a message</h3>
      <form className="flex flex-col gap-6 relative z-10 h-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-2 group/input">
            <label className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within/input:text-orange-500 transition-colors">Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300" placeholder="John Doe" />
          </div>
          <div className="flex-1 space-y-2 group/input">
            <label className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within/input:text-orange-500 transition-colors">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300" placeholder="john@example.com" />
          </div>
        </div>
        <div className="space-y-2 group/input flex-1 flex flex-col">
          <label className="text-xs uppercase tracking-widest text-neutral-500 group-focus-within/input:text-orange-500 transition-colors">Message</label>
          <textarea className="w-full flex-1 min-h-[150px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300 resize-none" placeholder="Tell us about your project..." />
        </div>
        <div className="flex justify-end mt-auto">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95 group/btn">
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  )
}

function ContactBento() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050505]">
      <div className="container mx-auto space-y-12">

        {/* Intro */}
        <div className="max-w-2xl">
          <span className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Connect</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Direct Access Channels
          </h2>
          <p className="text-neutral-400 text-lg">
            Choose your preferred vector. Whether it's a formal inquiry or a quick DM, our lines are open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[800px]">
          {/* Main Form */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full min-h-[500px]">
            <ContactForm />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 h-full">
            {/* Map Card (Expanded) - Maximized Height */}
            <div className="bg-neutral-900 border border-white/5 rounded-[2rem] flex-[10] overflow-hidden relative group min-h-[500px]">
              <div className="absolute inset-0 bg-neutral-800 opacity-50" />
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Radar Effect */}
                  <div className="absolute -inset-12 border border-orange-500/20 rounded-full animate-ping opacity-20 delay-75" />
                  <div className="absolute -inset-8 border border-orange-500/40 rounded-full animate-ping opacity-40" />
                  <div className="w-3 h-3 bg-orange-500 rounded-full z-10 relative shadow-[0_0_20px_rgba(249,115,22,1)]" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-white font-medium flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <MapPin className="w-3 h-3 text-orange-500" /> Melbourne HQ
                </p>
              </div>
            </div>

            {/* Email Card (Smaller) */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-6 flex-1 flex flex-col justify-center items-center text-center group hover:border-orange-500/30 transition-colors duration-500 min-h-[120px]">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">General Inquiries</p>
              <a href="mailto:hello@neucon.labs" className="text-base font-medium hover:text-orange-500 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@neucon.labs
              </a>
            </div>

            {/* Socials Card (Expanded with X/Insta) */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center gap-4 group hover:border-white/20 transition-colors">
              <span className="text-sm font-medium text-neutral-400">Follow the signal</span>
              <div className="flex gap-3 flex-wrap">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                  <Instagram className="w-4 h-4" /> {/* Lucide has Instagram */}
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- 4. Sticky FAQ (Matched Styling) ---
const faqData = [
  { question: "What is your typical project timeline?", answer: "Scale dictates speed. MVPs typically ship in 4-8 weeks. Enterprise transformations span 3-6 months. We rigorously time-box every sprint to ensure continuous velocity." },
  { question: "Do you audit existing codebases?", answer: "Yes. We specialize in forensic code analysis and modernization. We identify architectural debt, security vulnerabilities, and performance bottlenecks before prescribing a refactoring roadmap." },
  { question: "How does pricing work?", answer: "We operate on value-based pricing for clear scopes, or monthly retainers for evolving product partners. No hidden hourly billing padding—just clear milestones and outcomes." },
  { question: "Do you handle post-launch scaling?", answer: "Launch is day zero. We offer hyper-care support packages and long-term SLAs to ensure your infrastructure scales elastically with your user growth." },
  { question: "Can you augment our existing team?", answer: "We often embed as a specialized 'SWAT team' alongside internal engineering units to accelerate critical features or handle complex migrations." },
  { question: "What stack do you prefer?", answer: "We are TypeScript absolutists. Next.js/React for frontend, Node/Go for backend, and specialized cloud infrastructure (AWS/Vercel) to ensure type safety end-to-end." },
  { question: "Do you offer design services?", answer: "Yes. We believe engineering cannot be decoupled from design. Our product designers work in lockstep with engineers to ensure feasibility and fidelity." },
  { question: "How do you handle IP rights?", answer: "You own everything. From the first line of code to the final deployment scripts. We operate as a work-for-hire partner and transfer full IP ownership upon handover." },
  { question: "Can you help with fundraising?", answer: "We build decks and prototypes that raise capital. We've helped partners secure millions in pre-seed and seed funding by demonstrating tangible technical traction." },
  { question: "What about QA and Testing?", answer: "Automated testing is non-negotiable. We implement CI/CD pipelines with comprehensive unit, integration, and E2E test suites to ensure zero-regression deployments." }
]

function FAQItem({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "cursor-pointer py-8 group transition-all duration-500",
        isOpen ? "opacity-100" : "opacity-50 hover:opacity-100"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={cn("text-2xl md:text-3xl font-medium transition-colors duration-300", isOpen ? "text-orange-500" : "text-white")}>
          {item.question}
        </h3>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 flex-shrink-0 ml-4",
          isOpen ? "bg-orange-500 border-orange-500 text-black rotate-180" : "border-white/20 text-white group-hover:border-orange-500 group-hover:text-orange-500"
        )}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl pb-4">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full h-[1px] bg-white/10 mt-4" />
    </motion.div>
  )
}

function ContactFAQ() {
  const containerRef = useRef(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Sticky Scroll Logic: 
  // - Spacer strategy: 45vh empty space to force middle start.
  // - yRight moves UP by -100vh to scroll the full list.
  const yRight = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#050505] py-24">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Parent Card (Principles Style) */}
        <div className="relative w-[95%] h-[90vh] bg-[#0a0a0a] rounded-[3rem] border border-white/5 overflow-hidden flex flex-col md:flex-row">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />

          {/* Left: Sticky Title */}
          <div className="w-full md:w-1/3 p-12 md:p-16 flex flex-col justify-between relative z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-transparent">
            <div>
              <span className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase mb-6 block">Knowledge Base</span>
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8">
                Common <br />
                <span className="text-neutral-500 italic">Queries</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-xs">
                Transparency is core to our process. Here's how we engage.
              </p>
            </div>
          </div>

          {/* Right: Scrolling List */}
          <div className="w-full md:w-2/3 relative h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

            <motion.div
              style={{ y: yRight }}
              className="p-12 md:p-16 flex flex-col gap-0"
            >
              {/* Spacer to force starting position (Higher -> smaller spacer) */}
              <div className="min-h-[25vh]" />

              {faqData.map((item, i) => (
                <FAQItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- 5. Big Card CTA (Enhanced with Process Loop) ---
function ContactCTA() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000); // Cycle every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: "Discovery", desc: "Mapping the territory." },
    { title: "Strategy", desc: "Charting the course." },
    { title: "Execution", desc: "Building the engine." },
    { title: "Scale", desc: "Igniting the fuel." }
  ];

  return (
    <section className="py-24 bg-[#050505] flex justify-center">
      <div className="w-[98%] bg-neutral-900 rounded-[3rem] border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen group-hover:bg-orange-500/20 transition-colors duration-1000" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen" />

        <div className="relative z-10 py-32 md:py-48 px-6 flex flex-col items-center text-center">

          {/* Process Loop (Integrated) */}
          <div className="w-full max-w-6xl mb-24 flex flex-col items-center">
            <span className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase mb-12 block opacity-70">The Process</span>

            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
              {steps.map((step, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={i}
                    className={cn(
                      "relative p-6 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center",
                      isActive
                        ? "bg-white/5 border-orange-500/30 shadow-[0_0_30px_-5px_rgba(249,115,22,0.1)] scale-105"
                        : "bg-transparent border-transparent opacity-50 scale-100"
                    )}
                  >
                    <div className="flex items-center justify-between w-full mb-4">
                      <span className={cn(
                        "text-4xl font-medium transition-colors duration-300",
                        isActive ? "text-orange-500" : "text-neutral-700"
                      )}>
                        0{i + 1}
                      </span>
                      {i < 3 && (
                        <motion.div
                          animate={isActive ? { x: [0, 5, 0] } : { x: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="hidden md:block"
                        >
                          <ArrowRight className={cn(
                            "w-5 h-5 transition-all duration-500",
                            isActive ? "text-orange-500" : "text-neutral-800"
                          )} />
                        </motion.div>
                      )}
                    </div>
                    <h4 className={cn("text-lg font-bold mb-1 transition-colors", isActive ? "text-white" : "text-neutral-400")}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-neutral-500">{step.desc}</p>

                    {/* Active Progress Bar Removed */}
                  </div>
                )
              })}
            </div>
          </div>

          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-12">
            Ready to <span className="text-neutral-500 italic">Scale?</span>
          </h2>

          <a href="mailto:hello@neucon.labs" className="group/btn relative inline-flex items-center justify-center">
            <div className="relative z-10 flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full text-xl font-bold tracking-widest uppercase transition-transform duration-300 group-hover/btn:scale-105">
              Initiate Project
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center overflow-hidden relative">
                <ArrowUpRight className="w-5 h-5 absolute transition-all duration-300 group-hover/btn:translate-x-full group-hover/btn:-translate-y-full" />
                <ArrowUpRight className="w-5 h-5 absolute transition-all duration-300 -translate-x-full translate-y-full group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

// --- Main Page ---
export default function ContactPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-orange-500/30">
      <Navbar />
      <main>
        <ContactHero />
        <ContactStats />
        <ContactBento />
        <ContactFAQ />
        <ContactCTA />
      </main>
    </div>
  )
}