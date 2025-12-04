"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

const approachSteps = [
    {
        id: "01",
        title: "Discovery",
        description: "We start by immersing ourselves in your world. We dig deep to understand your business goals, user needs, and market dynamics. This isn't just about gathering requirements; it's about uncovering the hidden opportunities that will define your product's success.",
        theme: "white",
        graphic: (
            <div className="w-full h-full flex items-center justify-center relative group">
                {/* Clock Face / Orbit Track - Dark on White */}
                <div className="w-64 h-64 border border-black/10 rounded-full relative flex items-center justify-center">
                    {/* Orbiting Dot */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="w-4 h-4 bg-black rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg" />
                    </motion.div>

                    {/* Inner Dashed Circle */}
                    <div className="w-48 h-48 border border-dashed border-black/20 rounded-full" />

                    {/* Clock Hand */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[2px] h-24 bg-black/80 origin-bottom bottom-1/2 left-1/2 -translate-x-1/2"
                        style={{ borderRadius: "2px" }}
                    />

                    {/* Center Point */}
                    <div className="w-3 h-3 bg-black rounded-full absolute z-10" />
                </div>
            </div>
        )
    },
    {
        id: "02",
        title: "Strategy",
        description: "We translate insights into a clear, actionable path forward. We define the product vision, technical architecture, and user experience strategy. This is where we bridge the gap between 'what is' and 'what could be', creating a roadmap that is both ambitious and achievable.",
        theme: "orange",
        graphic: (
            <div className="w-full h-full flex items-center justify-center relative">
                {/* Dynamic Grid - White on Orange */}
                <div className="grid grid-cols-4 gap-4 transform rotate-45">
                    {[...Array(16)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.2, scale: 0.8 }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [0.8, 1.1, 0.8],
                                backgroundColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.2)"]
                            }}
                            transition={{
                                duration: 3,
                                delay: Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-8 h-8 rounded-full"
                        />
                    ))}
                </div>
                {/* Connecting Line Overlay - Reverted to simple curve */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100">
                    <motion.path
                        d="M20,50 Q50,20 80,50 T20,50"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </div>
        )
    },
    {
        id: "03",
        title: "Execution",
        description: "We bring the vision to life with pixel-perfect design and robust engineering. Our iterative process ensures continuous feedback and refinement, delivering a scalable, high-performance solution that not only meets but exceeds user expectations.",
        theme: "dark",
        graphic: (
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden group">
                {/* Bullseye Board - White on Dark */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                    {[1, 2, 3].map((ring) => (
                        <div
                            key={ring}
                            className="absolute rounded-full border border-white/10"
                            style={{
                                width: `${100 - (ring * 25)}%`,
                                height: `${100 - (ring * 25)}%`
                            }}
                        />
                    ))}
                    {/* Center Dot */}
                    <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.8)] z-20 relative" />

                    {/* Impact Ripple */}
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                        className="absolute w-4 h-4 bg-orange-500/50 rounded-full z-10"
                    />
                </div>

                {/* Arrows forming an X */}
                {[45, 135, 225, 315].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-[2px] bg-gradient-to-r from-transparent via-white to-white"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{
                            x: [-40, 0, 0, -40],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "circInOut",
                            times: [0, 0.4, 0.6, 1],
                            delay: i * 0.05
                        }}
                        style={{
                            top: "50%",
                            left: "50%",
                            transformOrigin: "right center",
                            rotate: angle,
                            marginLeft: "-128px"
                        }}
                    >
                        {/* Arrow Head */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
                    </motion.div>
                ))}
            </div>
        )
    }
]

export function ApproachSection() {
    return (
        <section id="approach" className="w-full relative bg-[#050505] pt-32 pb-32">
            {/* 
            Giant Parent Card 
            Full width to screen.
            Rounded corners, light background.
        */}
            <div className="w-full rounded-[3rem] bg-[#EAEAEA] text-black relative z-10">

                <div className="container mx-auto px-6 md:px-12 pt-32 pb-32">

                    {/* Header Content */}
                    <div className="mb-40 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-lg md:text-xl text-neutral-500 font-medium mb-8 block uppercase tracking-wider">
                                ● Our Approach
                            </span>
                            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tighter max-w-7xl mb-12">
                                TEAMS ARE DIFFERENT. NEEDS SHIFT.
                            </h2>
                            <p className="text-xl md:text-3xl text-neutral-600 max-w-4xl leading-relaxed font-light">
                                That’s why we shape our approach around how you work—and what you’re trying to achieve. Then we help you move it forward.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stacking Cards Container */}
                    <div className="flex flex-col relative items-center w-full">
                        {approachSteps.map((step, index) => (
                            <Card key={step.id} step={step} index={index} total={approachSteps.length} />
                        ))}
                    </div>

                    {/* Bottom Description / Conclusion */}
                    <div className="mt-40 px-4 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Ready to build something extraordinary?
                            </h3>
                            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                                Whether you're a startup looking to disrupt the market or an enterprise seeking to innovate, we have the expertise and passion to help you succeed. Let's create the future together.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function Card({ step, index, total }: { step: typeof approachSteps[0], index: number, total: number }) {
    // Sticky offset calculation
    const topOffset = 140 + (index * 60)

    return (
        <div
            className="sticky w-full"
            style={{
                top: topOffset,
                zIndex: index + 1,
                marginBottom: index === total - 1 ? 0 : "5vh"
            }}
        >
            <motion.div
                className={cn(
                    "w-full rounded-[2.5rem] overflow-hidden shadow-2xl origin-top border-t",
                    step.theme === "orange" ? "bg-[#ff6b35] text-white border-white/20" :
                        step.theme === "dark" ? "bg-[#0a0a0a] text-white border-white/20" :
                            "bg-white text-black border-black/10"
                )}
                style={{
                    height: "700px", // Fixed height
                }}
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full relative">
                    {/* Text Content */}
                    <div className="p-10 md:p-20 flex flex-col justify-between relative z-10 h-full">
                        <div>
                            <span className={cn(
                                "text-xl font-medium tracking-wider block mb-4 opacity-60",
                            )}>
                                ({step.id})
                            </span>
                            <h3 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
                                {step.title}
                            </h3>
                        </div>

                        <div className="mt-auto pt-12">
                            <p className={cn(
                                "text-lg md:text-xl leading-relaxed font-light max-w-lg",
                                step.theme === "white" ? "opacity-80" : "text-white opacity-90"
                            )}>
                                {step.description}
                            </p>
                        </div>
                    </div>

                    {/* Graphic/Visual Side */}
                    <div className={cn(
                        "absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-center overflow-hidden pointer-events-none",
                    )}>
                        {/* 
                            Background Circle for Graphic Area 
                            Reduced opacity to just give a subtle hint of structure without separating the card.
                         */}
                        <div className={cn(
                            "absolute inset-0 opacity-5",
                            step.theme === "white" ? "bg-black" : "bg-white"
                        )} />
                        {step.graphic}
                    </div>

                    {/* Mobile Graphic (Simplified or Overlay) */}
                    <div className="md:hidden absolute right-4 top-4 opacity-20 pointer-events-none">
                        {/* Simplified graphic for mobile if needed, or just hide */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
