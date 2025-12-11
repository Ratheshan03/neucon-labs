"use client"

import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code, Cpu, Globe, Layers, Zap, Database, Cloud, Lock, Smartphone, Wifi, Server, Monitor, Minimize2, Grid3X3, Rocket } from "lucide-react"

// --- Horizontal Wave Ecosystem Grid (Antigravity Style) ---
const baseIcons = [
    { icon: Code, color: "text-blue-500" },
    { icon: Cpu, color: "text-purple-500" },
    { icon: Globe, color: "text-green-500" },
    { icon: Layers, color: "text-orange-500" },
    { icon: Zap, color: "text-yellow-500" },
    { icon: Database, color: "text-red-500" },
    { icon: Cloud, color: "text-cyan-500" },
    { icon: Lock, color: "text-emerald-500" },
    { icon: Smartphone, color: "text-indigo-500" },
    { icon: Wifi, color: "text-pink-500" },
    { icon: Server, color: "text-teal-500" },
    { icon: Monitor, color: "text-violet-500" },
]

// Duplicate icons to ensure full width coverage
const ecosystemIcons = [...baseIcons, ...baseIcons, ...baseIcons]

function HorizontalWaveEcosystem() {
    return (
        <div className="w-full pt-24 pb-0 bg-[#050505] overflow-hidden relative flex flex-col items-center justify-center z-10">
            <div className="container mx-auto px-6 md:px-12 mb-24 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                    Powered by <span className="text-neutral-500">Modern Intelligence.</span>
                </h2>
            </div>

            <div className="w-full relative h-40 md:h-52 flex items-center">
                {/* Gradient Masks - Optional, keeping subtle */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

                {/* Icons Row - Full Width, Edge to Edge */}
                <div className="flex w-full justify-between items-center px-4 min-w-max md:min-w-0">
                    {ecosystemIcons.map((item, i) => (
                        <WaveIcon key={i} item={item} index={i} total={ecosystemIcons.length} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function WaveIcon({ item, index, total }: { item: typeof baseIcons[0], index: number, total: number }) {
    return (
        <motion.div
            animate={{
                y: [20, -20, 20],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: -index * 0.3, // Tighter delay for a smoother "snake" flow
            }}
            className="flex-shrink-0 px-2 md:px-4"
        >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-neutral-900/50 border border-white/5 flex items-center justify-center backdrop-blur-sm hover:bg-neutral-800/80 transition-colors group">
                <item.icon className={cn("w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110", item.color)} />
            </div>
        </motion.div>
    )
}

// --- Scrollytelling Text Reveal ---

function ScrollyTelling() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    // 1. Card Entry: Slides up quickly as user scrolls into the section
    // Slower transition: [0, 0.35] range
    const cardY = useTransform(scrollYProgress, [0, 0.35], ["50vh", "0vh"])
    const cardScale = useTransform(scrollYProgress, [0, 0.35], [0.95, 1])

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-[#050505] z-20">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ y: cardY, scale: cardScale }}
                    className="w-full h-full bg-[#EAEAEA] rounded-[3rem] overflow-hidden relative flex flex-col p-8 md:p-20 text-black"
                >
                    <div className="relative z-10 w-full h-full flex flex-col justify-center max-w-7xl mx-auto">
                        <StoryContent progress={scrollYProgress} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

function StoryContent({ progress }: { progress: any }) {
    const words = [
        { text: "At", icon: null },
        { text: "some", icon: null },
        { text: "point,", icon: null },
        { text: "software", icon: null },
        { text: "became", icon: null },
        { text: "too", icon: null },
        { text: "complex.", icon: Layers, color: "text-orange-600" },
        { text: "Instead", icon: null },
        { text: "of", icon: null },
        { text: "simplifying", icon: null },
        { text: "work,", icon: Zap, color: "text-yellow-600" },
        { text: "it", icon: null },
        { text: "added", icon: null },
        { text: "friction.", icon: null },
        { text: "So", icon: null },
        { text: "we", icon: null },
        { text: "stripped", icon: null },
        { text: "it", icon: null },
        { text: "all", icon: null },
        { text: "away.", icon: Minimize2, color: "text-blue-600" },
        { text: "We", icon: null },
        { text: "chose", icon: null },
        { text: "to", icon: null },
        { text: "organize", icon: null },
        { text: "everything", icon: Grid3X3, color: "text-green-600" },
        { text: "by", icon: null },
        { text: "the", icon: null },
        { text: "most", icon: null },
        { text: "fundamental", icon: null },
        { text: "concept:", icon: null },
        { text: "impact.", icon: Rocket, color: "text-red-600" },
    ]

    return (
        <div className="flex flex-col items-start">
            {/* Static Header Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12 md:mb-20"
            >
                <span className="text-lg md:text-xl text-neutral-500 font-medium mb-6 block uppercase tracking-wider">
                    ● Our Story
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-black">
                    REDEFINING THE <br className="hidden md:block" /> DIGITAL LANDSCAPE.
                </h2>
            </motion.div>

            {/* Revealing Text */}
            <div className="max-w-5xl">
                <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-black flex flex-wrap gap-x-3 gap-y-2">
                    {words.map((item, i) => {
                        // Map the 0.4 - 0.9 range to 0 - 1 for the words (delayed start)
                        const start = 0.4 + (i / words.length) * 0.5
                        const end = start + (1 / words.length) * 0.5
                        return <Word key={i} item={item} progress={progress} range={[start, end]} />
                    })}
                </p>
            </div>
        </div>
    )
}

function Word({ item, progress, range }: { item: any, progress: any, range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.1, 1])
    const y = useTransform(progress, range, [20, 0])
    const scale = useTransform(progress, range, [0.9, 1])

    return (
        <motion.span style={{ opacity, y, scale }} className="inline-flex items-center gap-2 relative">
            {item.text}
            {item.icon && (
                <span className={cn("inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/5 ml-1", item.color)}>
                    <item.icon className="w-4 h-4 md:w-6 md:h-6" />
                </span>
            )}
        </motion.span>
    )
}

// --- Sticky Scroll (Refined Liquid Tabs) ---
const stickyContent = [
    {
        id: "automation",
        tab: "Automation",
        title: "Enterprise Grade AI Platform.",
        description: "Purpose-built for the high-stakes world of specialty care, combining scientific rigor, workflow expertise, and a human-first approach to streamline patient access at scale.",
        graphic: (
            <div className="w-full h-full bg-[#1a1a1a] rounded-xl border border-white/10 p-6 flex flex-col gap-4">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${((i * 33) % 50) + 50}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="h-2 bg-neutral-800 rounded"
                        />
                    ))}
                </div>
                <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="h-24 bg-neutral-800/50 rounded-lg border border-white/5" />
                    <div className="h-24 bg-neutral-800/50 rounded-lg border border-white/5" />
                </div>
            </div>
        )
    },
    {
        id: "communication",
        tab: "Communication",
        title: "Seamless Communication.",
        description: "Connect your entire ecosystem. From patient intake to provider referrals, ensure every message is delivered, tracked, and acted upon instantly.",
        graphic: (
            <div className="w-full h-full bg-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <div className="relative z-10 grid grid-cols-2 gap-8">
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-32 h-40 bg-neutral-900 border border-white/10 rounded-lg shadow-xl p-4"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 mb-4" />
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-neutral-800 rounded" />
                                <div className="h-2 w-2/3 bg-neutral-800 rounded" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: "visibility",
        tab: "Visibility",
        title: "Real-time Analytics.",
        description: "Gain complete visibility into your operations. Track performance, identify bottlenecks, and make data-driven decisions to optimize your workflow.",
        graphic: (
            <div className="w-full h-full bg-[#1a1a1a] rounded-xl border border-white/10 p-8 flex items-end justify-between gap-2">
                {[40, 70, 50, 90, 60, 80].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="w-full bg-gradient-to-t from-orange-500/20 to-orange-500 rounded-t-sm relative group"
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white">
                            {h}%
                        </div>
                    </motion.div>
                ))}
            </div>
        )
    }
]

function StickyScroll() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const { scrollYProgress: p1 } = useScroll({ target: ref1, offset: ["start end", "end start"] })
    const { scrollYProgress: p2 } = useScroll({ target: ref2, offset: ["start end", "end start"] })
    const { scrollYProgress: p3 } = useScroll({ target: ref3, offset: ["start end", "end start"] })

    return (
        <div className="relative bg-[#050505] text-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row">
                {/* Left Column - Sticky */}
                <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center h-screen sticky top-0 py-24 pr-12">
                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-orange-500 font-mono text-sm mb-4 block">// OUR PLATFORM</span>
                        <h2 className="text-5xl font-bold mb-6 tracking-tighter">Built for Impact.</h2>
                        <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
                            We didn't just build another tool. We engineered a fundamental shift in how care is accessed. By unifying automation, communication, and visibility, we empower teams to move faster and focus on what matters—the patient.
                        </p>
                    </div>

                    {/* Tabs - Pill Style Container */}
                    <div className="flex flex-col md:flex-row gap-1 bg-neutral-900/50 p-1 rounded-xl border border-white/10 w-fit backdrop-blur-sm">
                        <LiquidTab title={stickyContent[0].tab} progress={p1} targetRef={ref1} />
                        <LiquidTab title={stickyContent[1].tab} progress={p2} targetRef={ref2} />
                        <LiquidTab title={stickyContent[2].tab} progress={p3} targetRef={ref3} />
                    </div>

                    {/* Redirection to Full About Page */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-12"
                    >
                        <a href="/about" className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors cursor-pointer">
                            <span className="text-sm font-medium tracking-widest uppercase">Read Our Full Story</span>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                                <Rocket className="w-4 h-4 text-white transform group-hover:rotate-45 transition-transform" />
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Right Column - Scrolling */}
                <div className="w-full md:w-1/2 flex flex-col pb-24">
                    <ContentSection ref={ref1} item={stickyContent[0]} />
                    <ContentSection ref={ref2} item={stickyContent[1]} />
                    <ContentSection ref={ref3} item={stickyContent[2]} />
                </div>
            </div>
        </div>
    )
}

function LiquidTab({ title, progress, targetRef }: { title: string, progress: any, targetRef: any }) {
    // Smooth out the progress for a more fluid feel
    const smoothProgress = useSpring(progress, { stiffness: 200, damping: 25, mass: 0.5 })

    // Liquid fill logic: width expands from 0% to 100% based on scroll progress
    const width = useTransform(smoothProgress, [0.2, 0.5], ["0%", "100%"])

    return (
        <div
            onClick={() => targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="relative px-6 py-3 rounded-lg overflow-hidden cursor-pointer group bg-neutral-900 border border-white/5 transition-colors hover:bg-neutral-800"
        >
            {/* Inactive Text (Bottom Layer) */}
            <span className="relative z-0 text-sm font-medium text-neutral-500 whitespace-nowrap transition-colors group-hover:text-neutral-300">
                {title}
            </span>

            {/* Active Text & Fill (Top Layer - Clipped) */}
            <motion.div
                style={{ width }}
                className="absolute inset-y-0 left-0 overflow-hidden z-10"
            >
                {/* The Fill Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" />

                {/* The Active Text - Positioned absolutely to match the bottom layer */}
                <div className="absolute inset-0 flex items-center px-6">
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                        {title}
                    </span>
                </div>
            </motion.div>
        </div>
    )
}

// Forward ref for the section
const ContentSection = React.forwardRef<HTMLDivElement, { item: typeof stickyContent[0] }>(({ item }, ref) => {
    // Internal scroll progress for text reveal
    const localRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: localRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
    const y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])
    const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1])

    return (
        <div ref={ref} className="h-[150vh] relative">
            <div ref={localRef} className="sticky top-0 h-screen flex flex-col justify-center py-24 gap-8 px-4 md:px-0">
                {/* Media Placeholder */}
                <motion.div
                    style={{ scale, opacity }}
                    className="w-full aspect-square md:aspect-video bg-neutral-900 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl"
                >
                    {/* The Graphic Content */}
                    <div className="absolute inset-0 p-4 md:p-8">
                        {item.graphic}
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="max-w-xl">
                    <motion.h3
                        style={{ opacity, y }}
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
                    >
                        {item.title}
                    </motion.h3>
                    <motion.p
                        style={{ opacity, y }}
                        className="text-xl text-neutral-400 leading-relaxed"
                    >
                        {item.description}
                    </motion.p>
                </div>
            </div>
        </div>
    )
})
ContentSection.displayName = "ContentSection"

export function AboutSection() {
    return (
        <section id="about" className="w-full bg-[#050505] relative z-10">
            <HorizontalWaveEcosystem />
            <ScrollyTelling />
            <StickyScroll />
        </section>
    )
}
