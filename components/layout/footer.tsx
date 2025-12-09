"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { NeuconLogo } from "@/components/ui/neucon-logo"

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  // Parallax effect for the big text
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0])

  return (
    <footer ref={containerRef} className="bg-[#050505] text-white pt-20 pb-10 overflow-hidden">

      {/* CTA Section */}
      <div className="container mx-auto px-4 mb-32 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
          Let&apos;s make this official, sign up<br />
          and access the future.
        </h2>
        <div className="flex items-center gap-2 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border border-black" />
            ))}
          </div>
          <span className="text-sm text-neutral-400">335+ people already joined</span>
        </div>
        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition-colors"
        >
          Become a partner
        </Link>
      </div>

      {/* Links & Newsletter */}
      <div className="container mx-auto px-4 border-t border-white/10 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6">Sitemap</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-neutral-400 transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-neutral-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-neutral-400 transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/licensing" className="hover:text-neutral-400 transition-colors">Licensing</Link></li>
              <li><Link href="/terms" className="hover:text-neutral-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-neutral-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/faq" className="hover:text-neutral-400 transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-neutral-400 transition-colors">Support</Link></li>
            </ul>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6">
              ANY PROJECT. ANY SCALE.
            </h4>
            <Link href="/contact" className="group flex items-center justify-between bg-white text-black px-6 py-4 hover:bg-neutral-200 transition-all duration-300 w-full max-w-[280px]">
              <span className="text-xs font-bold tracking-wider">GET IN TOUCH WITH US</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Big Text & Bottom Info */}
      <div className="relative w-full overflow-hidden mt-32">
        <motion.div style={{ y }} className="w-full flex flex-col items-center">
          <div className="relative flex items-center justify-center overflow-hidden w-full mb-12">
            <h1 className="text-[13vw] leading-[0.8] font-bold text-[#111] tracking-tighter select-none flex justify-center">
              <span>NEUCON</span>
              <span className="flex">
                {["L", "a", "b", "s"].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    whileHover={{
                      y: 20,
                      rotate: Math.random() * 20 - 10,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      duration: 1,
                      delay: i * 0.1 + 0.5
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          <div className="w-full flex justify-between items-end px-4 md:px-10 pb-10 relative z-10">
            <div className="flex flex-col items-start">
              <NeuconLogo size="sm" className="mb-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <p className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">
                ©2025 NeuconLabs. All rights reserved.
              </p>
            </div>
            <p className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">
              Linkedin, Instagram, X/Twitter
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
