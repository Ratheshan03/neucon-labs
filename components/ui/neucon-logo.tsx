"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeuconLogoProps {
    className?: string
    size?: "sm" | "md" | "lg" | "xl"
    asLink?: boolean
}

export function NeuconLogo({ className, size = "md", asLink = false }: NeuconLogoProps) {
    const sizes = {
        sm: "text-xl",
        md: "text-3xl",
        lg: "text-5xl",
        xl: "text-7xl",
    }

    const ringColor = "#FF5F1F"
    const tiltAngle = -30

    const LogoContent = (
        <div
            className={cn(
                "font-['Space_Grotesk'] tracking-wide flex items-center select-none group relative",
                sizes[size],
                className
            )}
        >
            {/* First part: NEUC (Bold) */}
            <span className="font-bold text-white">Neuc</span>

            {/* The 'o' Container */}
            <div className="relative flex items-center justify-center mx-[0.02em]">

                {/* 1. Back Ring (Behind) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.9em] h-[0.6em] pointer-events-none z-0">
                    <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: `rotate(${tiltAngle}deg)` }}>
                        <defs>
                            <linearGradient id="ringGradientBack" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={ringColor} stopOpacity="0.3" />
                                <stop offset="50%" stopColor={ringColor} stopOpacity="0.1" />
                                <stop offset="100%" stopColor={ringColor} stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        {/* Back Arc: Darker/Fainter */}
                        <path d="M 5,20 A 45,12 0 0 0 95,20" fill="none" stroke="url(#ringGradientBack)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                </div>

                {/* 2. The Text 'o' (Larger) */}
                <span className="relative z-10 font-bold text-white text-[1.25em] leading-none pb-[0.05em]">o</span>

                {/* 3. Front Ring (In Front) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.9em] h-[0.6em] pointer-events-none z-20">
                    <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: `rotate(${tiltAngle}deg)` }}>
                        <defs>
                            <linearGradient id="ringGradientFront" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={ringColor} stopOpacity="0.8" />
                                <stop offset="50%" stopColor={ringColor} stopOpacity="1" />
                                <stop offset="100%" stopColor={ringColor} stopOpacity="0.8" />
                            </linearGradient>
                        </defs>

                        {/* Front Arc: Bright & Solid */}
                        <path d="M 5,20 A 45,12 0 0 1 95,20" fill="none" stroke="url(#ringGradientFront)" strokeWidth="6" strokeLinecap="round" />

                        {/* Particle - Orbiting */}
                        <motion.circle
                            r="4"
                            fill="white"
                            animate={{
                                offsetDistance: ["0%", "100%"],
                                opacity: [0, 1, 0],
                                scale: [0.8, 1.2, 0.8]
                            }}
                            style={{
                                offsetPath: 'path("M 5,20 A 45,12 0 0 1 95,20")',
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

            </div>

            {/* Last part: n (Bold) */}
            <span className="font-bold text-white">n</span>

            {/* Suffix: Labs (Thinner/Lighter) */}
            <span className="font-light text-neutral-200 ml-[0.05em]">Labs</span>
        </div>
    )

    if (asLink) {
        return (
            <a href="/" className="inline-block focus:outline-none focus:opacity-80 transition-opacity">
                {LogoContent}
            </a>
        )
    }

    return LogoContent
}
