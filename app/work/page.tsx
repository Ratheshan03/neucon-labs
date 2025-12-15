"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { ArrowUpRight, ArrowRight, LayoutGrid, List, CheckCircle2, Instagram, Twitter, Linkedin, Github } from "lucide-react"
import { cn } from "@/lib/utils"

// --- 1. Crazy Velocity Hero ---
function WorkHero() {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const baseX = useMotionValue(0);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * 10 * (delta / 1000); // Base speed

        // Add scroll velocity
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <section className="relative h-screen flex flex-col justify-center bg-[#050505] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

            {/* Spotlight Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-neutral-900/40 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12"
                >
                    <span className="text-orange-500 font-mono text-sm tracking-[0.5em] uppercase pl-1">Portfolio</span>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mt-4 mix-blend-difference">
                        SELECTED <br />
                        <span className="text-neutral-600">PROJECTS</span>
                    </h1>
                </motion.div>
            </div>

            {/* Velocity Text Strip */}
            <div className="absolute bottom-24 w-full overflow-hidden whitespace-nowrap opacity-30 select-none pointer-events-none">
                <motion.div className="flex text-[10vw] font-bold text-transparent text-stroke-2 stroke-neutral-700 tracking-tighter" style={{ x: baseX, willChange: "transform" }}>
                    <span className="mr-8">STRATEGY • DESIGN • ENGINEERING • </span>
                    <span className="mr-8">STRATEGY • DESIGN • ENGINEERING • </span>
                    <span className="mr-8">STRATEGY • DESIGN • ENGINEERING • </span>
                    <span className="mr-8">STRATEGY • DESIGN • ENGINEERING • </span>
                </motion.div>
            </div>

            <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full flex items-center justify-center animate-spin-slow">
                <ArrowRight className="w-8 h-8 text-neutral-500 rotate-90" />
            </div>
        </section>
    )
}

// --- 2. Marquee Intro ---
function MarqueeIntro() {
    return (
        <div className="bg-orange-500 py-4 overflow-hidden -rotate-1 origin-left scale-105">
            <div className="flex whitespace-nowrap animate-marquee">
                {Array(10).fill("FEATURED CASE STUDIES • ").map((text, i) => (
                    <span key={i} className="text-black font-bold text-xl md:text-2xl mx-4 tracking-widest">{text}</span>
                ))}
            </div>
        </div>
    )
}

// --- 3. Lando Style Grid (Shape V7: Subtle & Sharp) ---
interface Project {
    id: number;
    title: string;
    client: string;
    role: string;
    year: string;
    image: string;
    logo: string;
    description: string;
}

const projects: Project[] = [
    { id: 1, title: "Velocity One", client: "Formula Tech", role: "Platform Engineering", year: "2024", image: "bg-blue-600", logo: "VT", description: "High-performance telemetry analysis dashboard for race engineers." },
    { id: 2, title: "Nebula Stream", client: "Cosmos AI", role: "Infrastructure", year: "2024", image: "bg-purple-600", logo: "NS", description: "Scalable data pipeline architecture for real-time model training." },
    { id: 3, title: "Flux Audio", client: "Sony Music", role: "Web Experience", year: "2023", image: "bg-indigo-600", logo: "FX", description: "Immersive 3D audio visualization platform for artists." },
    { id: 4, title: "Apex Capital", client: "Chase Bank", role: "Fintech Dashboard", year: "2023", image: "bg-emerald-600", logo: "AC", description: "Real-time trading execution interface with sub-ms latency." },
    { id: 5, title: "Zenith Health", client: "NHS", role: "Mobile App", year: "2022", image: "bg-rose-600", logo: "ZH", description: "Patient-first digital health record system." },
    { id: 6, title: "Echo Systems", client: "Bose", role: "Design System", year: "2024", image: "bg-amber-600", logo: "ES", description: "Unified component library across all digital products." },
]

function ProjectCard({ project, index }: { project: Project, index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const clipId = `clip-${project.id}`;

    // Path Logic V7 (Final Polish):
    // 0-1 coordinate space.
    // KEY CHANGES:
    // - Reduced Shelf Length: Goes from x=1.0 to x=0.75 (Shorter overhang).
    // - Tighter Radii: Control points (Q) are much closer to vertices (0.02 or 0.03 offset instead of 0.05).
    // - Subtle Curves: Not "weird" bulging curves, but tight technical corners.

    // 1. M 0.03 0 (Top Left)
    // 2. H 0.97
    // 3. Q 1 0 1 0.03 (Top Right - Tight)
    // Refined Geometry (V9):
    // Tighter corners (0.01 control points) for a sharp, technical folder tab.
    const pathString = "M 0.02 0 H 0.98 Q 1 0 1 0.02 V 0.82 Q 1 0.84 0.98 0.84 H 0.70 Q 0.68 0.84 0.66 0.86 L 0.55 0.98 Q 0.53 1 0.51 1 H 0.02 Q 0 1 0 0.98 V 0.02 Q 0 0 0.02 0 Z";

    return (
        <div className="group relative w-full">
            <div className="relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative w-full aspect-[16/11]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* SVG Definition for Clip Path (Responsive) */}
                    <svg className="absolute w-0 h-0 pointer-events-none">
                        <defs>
                            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                                <path d={pathString} />
                            </clipPath>
                        </defs>
                    </svg>

                    {/* The Clipped Container */}
                    <div
                        className="absolute inset-0 bg-neutral-900 overflow-hidden"
                        style={{ clipPath: `url(#${clipId})` }}>

                        {/* 1. Default State: Logo (Large, centered, watermarked) */}
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-95">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                            <div className="text-[10rem] lg:text-[12rem] font-bold text-neutral-800 tracking-tighter select-none opacity-50 group-hover:opacity-0 transition-opacity duration-300">
                                {project.logo}
                            </div>
                        </div>

                        {/* 2. Hover State: Image Reveal + Description */}
                        <div className={cn(
                            "absolute inset-0 transition-opacity duration-500",
                            isHovered ? "opacity-100" : "opacity-0"
                        )}>
                            <div className={cn("absolute inset-0 z-0", project.image)} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                            {/* Role Badge (Top Left) */}
                            <div className="absolute top-8 left-8 z-20">
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest text-white border border-white/20">
                                    {project.role}
                                </span>
                            </div>

                            {/* Description (Bottom Left - Added Feature) */}
                            <div className="absolute bottom-6 left-6 z-20 max-w-[60%]">
                                <p className="text-sm text-neutral-300 line-clamp-2 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SVG Border Overlay - SOLID LINE (No Dotted Effect) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1 1" preserveAspectRatio="none">
                        {/* Base Dark Border */}
                        <path
                            d={pathString}
                            fill="none"
                            stroke="#333"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                        {/* Hover Border - Solid Fade In (No Flow/Draw Animation that causes dots) */}
                        <path
                            d={pathString}
                            fill="none"
                            stroke="#f97316"
                            strokeWidth="3" // Increased Thickness
                            vectorEffect="non-scaling-stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={cn(
                                "transition-opacity duration-300 ease-out will-change-[opacity]",
                                isHovered ? "opacity-100 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" : "opacity-0"
                            )}
                        />
                    </svg>
                </motion.div>

                {/* The 'Tab' Content - Positioned precisely in the cutout (Lowered) */}
                <div className="absolute bottom-1 right-2 w-[35%] h-[15%] flex flex-col items-end justify-center pointer-events-none z-30 translate-y-2">
                    <h3 className="text-lg lg:text-xl font-bold text-white text-right leading-none mb-1 group-hover:text-orange-500 transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-right">
                        {project.client}
                    </span>
                </div>
            </div>
        </div>
    )
}

function WorkGrid() {
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Strategy", "Design", "Engineering"];

    return (
        <section className="bg-[#050505] py-24 relative z-20 rounded-b-[5rem]">
            <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <h2 className="text-4xl text-white font-medium mb-2">The Showcase</h2>
                    <p className="text-neutral-500">A curation of our finest digital products.</p>
                </div>

                <div className="flex gap-2 p-1 bg-neutral-900 rounded-full">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeTab === tab ? "bg-white text-black" : "text-neutral-400 hover:text-white"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- 4. Partners Flow Section ---
function PartnersFlow() {
    return (
        <section className="relative py-32 bg-[#fffdf5] text-black overflow-hidden flex flex-col items-center justify-center -mt-20 pt-40 z-10">
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 pointer-events-none">
                <span className="text-[30vw] font-bold text-orange-500 -rotate-12 italic leading-none tracking-tighter" style={{ fontFamily: 'cursive' }}>
                    Collabs
                </span>
            </div>

            <div className="container relative z-10 px-6 text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                    Trusted By <br />
                    <span className="italic font-serif text-orange-600">Visionaries.</span>
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl mx-auto">
                    We partner with ambitious brands to define the next era of digital culture.
                </p>
            </div>

            {/* <div className="w-full overflow-hidden"> ... marquee removed ... </div> */}
            <div className="w-full max-w-4xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder for future logos if needed, currently empty per request to remove names */}
            </div>
        </section>
    )
}

// --- 5. Neucon Hub / Identity Section ---
function NeuconIdentity() {
    return (
        <section className="relative min-h-[100vh] bg-[#050505] text-white overflow-hidden flex flex-col items-center pt-32 pb-32 rounded-t-[5rem] -mt-20 z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(249,115,22,0.15),transparent)]"
                />
            </div>

            <div className="container relative z-10 px-6 h-full flex flex-col justify-center flex-1">
                <div className="text-center mb-16 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700">
                        ALWAYS <br />
                        <span className="text-orange-500 italic">BUILDING</span> <br />
                        THE FUTURE.
                    </motion.h2>
                </div>

                <div className="relative flex-1 flex items-center justify-center my-8">
                    {/* Enhanced Central Visual */}
                    <div className="relative w-[300px] md:w-[600px] aspect-square flex items-center justify-center">
                        {/* Core Glow */}
                        <div className="absolute w-[20%] h-[20%] bg-orange-500/20 rounded-full blur-xl animate-pulse" />

                        {/* Static Structural Rings */}
                        <div className="absolute w-[40%] h-[40%] border border-neutral-800 rounded-full" />
                        <div className="absolute w-[60%] h-[60%] border border-neutral-800 rounded-full opacity-50" />
                        <div className="absolute w-[95%] h-[95%] border border-neutral-900 rounded-full" />

                        {/* Rotating Elements - Precise & Techy */}
                        <div className="absolute w-[50%] h-[50%] border-t border-l border-orange-500/50 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-[50%] h-[50%] border-b border-r border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />

                        <div className="absolute w-[70%] h-[70%] border-2 border-dashed border-neutral-800 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

                        <div className="absolute w-[85%] h-[85%] rounded-full animate-[spin_15s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]" />
                        </div>

                        {/* Central Identity */}
                        <div className="relative z-10 text-center flex flex-col items-center justify-center bg-[#050505] w-[140px] h-[140px] rounded-full border border-neutral-800 shadow-2xl">
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping absolute" />
                            <span className="font-mono text-[10px] tracking-widest text-neutral-500 mt-4 uppercase">Neucon<br /><span className="text-white font-bold">Works</span></span>
                        </div>
                    </div>

                    {/* Right Side: Meaningful Tech Specs */}
                    <div className="hidden lg:flex flex-col gap-4 absolute right-[10%] top-1/2 -translate-y-1/2 text-right">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-600">Global Reach</span>
                            <span className="text-sm font-mono text-white">North America / EU / Asia</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-600">Availability</span>
                            <span className="text-sm font-mono text-orange-500 animate-pulse">Open for Q1 2025</span>
                        </div>
                        <div className="w-12 h-[1px] bg-neutral-800 self-end my-2" />
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-600">Expertise</span>
                            <span className="text-sm font-mono text-white">Full-Stack Innovation</span>
                        </div>
                    </div>

                    {/* Left Side: Impact Metrics */}
                    <div className="hidden lg:flex flex-col gap-4 absolute left-[10%] top-1/2 -translate-y-1/2 text-left">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-600">Projects Delivered</span>
                            <span className="text-sm font-mono text-white">42+ Enterprise Launches</span>
                        </div>
                        <div className="w-12 h-[1px] bg-neutral-800 my-2" />
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-600">Client Satisfaction</span>
                            <span className="text-sm font-mono text-emerald-500">100% Retention</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Description */}
                <div className="relative z-20 text-center max-w-[80%] mx-auto mt-8">
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        Our work operates at the intersection of rigorous engineering and fluid design. We build digital ecosystems that don't just function—they breathe, adapt, and scale. Every project is a testament to our obsession with performance and our commitment to the future of the web.
                    </p>
                </div>
            </div>
        </section>
    )
}

// --- 6. Extreme CTA (Wide) ---
function ExtremeCTA() {
    return (
        <section className="py-12 px-6 bg-[#050505] flex justify-center">
            <div className="w-[95%] h-[90vh] bg-neutral-900 rounded-[3rem] relative overflow-hidden group flex flex-col items-center justify-center text-center">

                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-orange-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[150px] mix-blend-screen" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] perspective-1000 transform-style-3d rotate-x-60 opacity-50" />

                <div className="relative z-10 flex flex-col items-center gap-12 group cursor-none">
                    <p className="text-orange-500 font-mono text-sm tracking-[0.5em] uppercase">Ready to Deploy?</p>

                    <div className="flex flex-col gap-6 items-center">
                        <a href="/contact" className="relative block group/text">
                            <span className="text-[15vw] font-bold text-white leading-none tracking-tighter mix-blend-difference group-hover/text:text-transparent group-hover/text:bg-clip-text group-hover/text:bg-gradient-to-b group-hover/text:from-white group-hover/text:to-neutral-500 transition-all duration-500">
                                START
                            </span>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[50px] opacity-0 group-hover/text:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </a>

                        <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                            <p className="text-neutral-500 max-w-md text-center">
                                Initiate the partnership protocol.
                            </p>
                            <button className="px-8 py-3 bg-neutral-800 text-white border border-neutral-700 font-bold uppercase tracking-wider rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 hover:scale-105 transition-all flex items-center gap-2 text-sm">
                                Business Enquiries <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default function WorkPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-orange-500/30">
            <Navbar />
            <main>
                <WorkHero />
                <MarqueeIntro />
                <WorkGrid />
                <PartnersFlow />
                <NeuconIdentity />
                <ExtremeCTA />
            </main>
        </div>
    )
}
