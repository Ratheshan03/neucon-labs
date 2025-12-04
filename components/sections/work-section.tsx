"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, ArrowRight, Layout, Smartphone, Globe, Box, Cpu, Cloud, Database, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"

const workCategories = [
    {
        id: "case-studies",
        label: "Case Studies",
        description: "Deep dives into our most complex challenges. See how we transform abstract problems into tangible, high-impact solutions through rigorous research and design."
    },
    {
        id: "experiments",
        label: "Experiments",
        description: "Our playground for the future. Here we push the boundaries of interaction design, WebGL, and creative coding to discover what's possible on the web.",
    },
    {
        id: "open-source",
        label: "Open Source",
        description: "Giving back to the community. We build and maintain tools, libraries, and design systems that help other developers build better products faster."
    }
]

const projects = [
    {
        id: 1,
        title: "NeuroCore AI",
        category: "AI/ML",
        color: "bg-emerald-900/20",
        icon: <Cpu className="w-8 h-8 text-emerald-400" />,
        video: "https://cdn.dribbble.com/userupload/13004316/file/original-b9186698b965c7176483318225666206.mp4" // Placeholder video URL - using color fallback for now
    },
    {
        id: 2,
        title: "SkyVault Cloud",
        category: "Cloud",
        color: "bg-blue-900/20",
        icon: <Cloud className="w-8 h-8 text-blue-400" />,
        video: ""
    },
    {
        id: 3,
        title: "Nexus SaaS",
        category: "SaaS",
        color: "bg-purple-900/20",
        icon: <Layout className="w-8 h-8 text-purple-400" />,
        video: ""
    },
    {
        id: 4,
        title: "FlowAutomate",
        category: "Automations",
        color: "bg-orange-900/20",
        icon: <Zap className="w-8 h-8 text-orange-400" />,
        video: ""
    },
]

const filters = ["All", "AI/ML", "Cloud", "SaaS", "Fullstack", "Automations"]

export function WorkSection() {
    const [activeTab, setActiveTab] = useState("case-studies")
    const [activeProjectFilter, setActiveProjectFilter] = useState("All")
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    return (
        <section id="work" className="w-full bg-[#050505] text-white py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-12 max-w-5xl"
                    >
                        Start building solutions that define the future.
                    </motion.h2>

                    <div className="flex flex-wrap gap-4 justify-center mb-24">
                        <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
                            Become a Client
                        </Link>
                        <Link href="/about" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-neutral-600 border border-[#050505]" />
                                <div className="w-6 h-6 rounded-full bg-neutral-500 border border-[#050505]" />
                            </div>
                            About the Founders
                        </Link>
                    </div>

                    {/* Animated Collaboration Divider */}
                    <div className="w-full max-w-4xl flex items-center justify-center relative h-20">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "50%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-white absolute left-0 top-1/2 -translate-y-1/2"
                        />
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "50%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-[1px] bg-gradient-to-l from-transparent via-white/50 to-white absolute right-0 top-1/2 -translate-y-1/2"
                        />
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
                            className="relative z-10 bg-[#050505] p-2"
                        >
                            <Star className="w-8 h-8 text-orange-500 fill-orange-500" />
                            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full -z-10" />
                        </motion.div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1400px] mx-auto relative">

                    {/* Left Column: Content & Tabs */}
                    <div className="lg:col-span-4 flex flex-col justify-center z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-12">
                            Our Work Philosophy
                        </h3>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {workCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={cn(
                                        "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                                        activeTab === cat.id
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-neutral-400 border-white/10 hover:text-white hover:border-white/30"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        <div className="mb-12 min-h-[150px]">
                            <AnimatePresence mode="wait">
                                {workCategories.map((cat) => cat.id === activeTab && (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h4 className="text-2xl font-semibold mb-4">{cat.label}</h4>
                                        <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
                                            {cat.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Interactive "View all projects" Button */}
                            <Link href="/projects" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-white/5 text-white transition-all hover:bg-white/10">
                                {/* Border Pulse Animation */}
                                <span className="absolute inset-0 rounded-full border border-white/10" />
                                <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-orange-500/50 transition-colors duration-500" />

                                {/* Moving Line Pulse */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <rect x="0" y="0" width="100%" height="100%" rx="9999" fill="none" stroke="url(#btn-gradient)" strokeWidth="2" />
                                    <defs>
                                        <linearGradient id="btn-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="transparent" />
                                            <stop offset="50%" stopColor="#f97316" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <span className="relative flex items-center gap-2 font-medium">
                                    View all projects
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Interactive Application Window Mockup */}
                    <div className="lg:col-span-8 relative lg:translate-x-[15%] w-full lg:w-[120%]">
                        <div className="bg-[#111] rounded-xl overflow-hidden shadow-2xl border border-white/10 text-white min-h-[800px] flex flex-col md:flex-row">

                            {/* Sidebar Mockup */}
                            <div className="w-full md:w-64 bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col gap-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>

                                <div className="space-y-1">
                                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 px-3">Categories</div>
                                    {filters.map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setActiveProjectFilter(filter)}
                                            className={cn(
                                                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group",
                                                activeProjectFilter === filter ? "bg-white/10 text-white" : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                            )}
                                        >
                                            {filter}
                                            {activeProjectFilter === filter && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-auto p-4 bg-white/5 rounded-xl">
                                    <p className="text-xs text-neutral-400 mb-2">System Status</p>
                                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 w-[92%] h-full rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-[10px] text-neutral-500">
                                        <span>Operational</span>
                                        <span>99.9%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 bg-[#0f0f0f] p-6 md:p-8 overflow-y-auto">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="text-xl font-semibold">Recent Deployments</h4>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                            <Layout className="w-4 h-4 text-neutral-400" />
                                        </div>
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                            <Box className="w-4 h-4 text-neutral-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Projects Grid - 2 Rows Visible */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <AnimatePresence mode="popLayout">
                                        {projects
                                            .filter(p => activeProjectFilter === "All" || p.category === activeProjectFilter)
                                            .map((project) => (
                                                <motion.div
                                                    key={project.id}
                                                    layout
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.2 }}
                                                    onMouseEnter={() => setHoveredProject(project.id)}
                                                    onMouseLeave={() => setHoveredProject(null)}
                                                    className="group bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer h-[320px] flex flex-col"
                                                >
                                                    {/* Project Preview Area */}
                                                    <div className={cn("flex-1 relative overflow-hidden flex items-center justify-center", project.color)}>
                                                        {/* Background Pattern/Gradient */}
                                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                                                        {/* Icon / Content */}
                                                        <motion.div
                                                            animate={{
                                                                scale: hoveredProject === project.id ? 1.1 : 1,
                                                                y: hoveredProject === project.id ? -5 : 0
                                                            }}
                                                            className="relative z-10 p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10"
                                                        >
                                                            {project.icon}
                                                        </motion.div>

                                                        {/* Hover Overlay - Could be video preview in future */}
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-20"
                                                        >
                                                            <div className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                                View Case Study
                                                            </div>
                                                        </motion.div>
                                                    </div>

                                                    {/* Project Info */}
                                                    <div className="p-5 bg-[#1a1a1a] border-t border-white/5 relative z-30">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h5 className="text-lg font-medium text-white group-hover:text-orange-500 transition-colors">{project.title}</h5>
                                                            <span className="text-[10px] px-2 py-1 bg-white/5 rounded text-neutral-400 border border-white/5 uppercase tracking-wider">
                                                                {project.category}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-neutral-500 line-clamp-2">
                                                            Enterprise-grade solution for scalable infrastructure and automated workflows.
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
