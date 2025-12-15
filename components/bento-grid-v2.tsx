"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface BentoItemProps {
    title: string
    description: string
    className?: string
    children?: React.ReactNode
    index: number
}

function BentoItem({ title, description, className, children, index }: BentoItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden bg-[#0a0a0a] border border-white/10 p-8 transition-all hover:border-white/20",
                className
            )}
        >
            <div className="z-10 relative">
                <h3 className="text-2xl font-medium text-white mb-3">{title}</h3>
                <p className="text-base text-neutral-400 max-w-[90%] leading-relaxed">{description}</p>
            </div>

            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                <ArrowUpRight className="w-6 h-6 text-white" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="mt-6 flex-1 min-h-[200px] rounded-xl bg-neutral-900/50 border border-white/5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                {children}
            </div>
        </motion.div>
    )
}

export function BentoGridV2() {
    return (
        <div className="w-full flex flex-col">
            {/* Full Width Grid - Taller rows */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border-t border-white/10 w-full auto-rows-[600px]">

                {/* Column 1 */}
                <BentoItem
                    index={0}
                    title="Agentic AI"
                    description="Autonomous agents that work for you."
                    className="md:row-span-1 border-r border-white/10 rounded-none bg-[#0a0a0a]"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent opacity-50" />
                </BentoItem>

                {/* Column 2 & 3 (Center Large) */}
                <BentoItem
                    index={1}
                    title="AI & Machine Learning"
                    description="Custom MLOps pipelines and intelligent model deployment."
                    className="md:col-span-2 md:row-span-1 border-r border-white/10 rounded-none bg-[#0a0a0a]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-700 font-mono text-sm tracking-widest uppercase">
                        [Interactive Model Visualization]
                    </div>
                </BentoItem>

                {/* Column 4 */}
                <BentoItem
                    index={2}
                    title="Mobile Dev"
                    description="Native and cross-platform experiences."
                    className="md:row-span-1 rounded-none bg-[#0a0a0a]"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
                </BentoItem>

                {/* Row 2 Items */}
                <BentoItem
                    index={3}
                    title="Cloud Arch"
                    description="Scalable infrastructure."
                    className="border-r border-t border-white/10 rounded-none bg-[#0a0a0a]"
                />
                <BentoItem
                    index={4}
                    title="Web Dev"
                    description="Future-proof websites."
                    className="border-r border-t border-white/10 rounded-none bg-[#0a0a0a]"
                />
                <BentoItem
                    index={5}
                    title="Automation"
                    description="Streamlining workflows."
                    className="border-r border-t border-white/10 rounded-none bg-[#0a0a0a]"
                />
                <BentoItem
                    index={6}
                    title="Consulting"
                    description="Strategic guidance."
                    className="border-t border-white/10 rounded-none bg-[#0a0a0a]"
                />
            </div>

            {/* Footer Row - "And more is coming..." */}
            <a href="/services" className="w-full border-y border-white/10 p-6 flex items-center justify-between group bg-[#0a0a0a] hover:bg-white/5 transition-colors cursor-pointer relative overflow-hidden">
                <div className="flex items-center gap-4 mx-auto md:mx-0 md:w-full md:justify-center">
                    <span className="text-neutral-500 font-medium group-hover:text-white transition-colors uppercase tracking-widest text-sm">
                        And more is coming...
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                </div>
            </a>
        </div>
    )
}
