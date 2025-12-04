"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

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
          <div>
            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-sm text-neutral-400 mb-4">You read this far, might as well sign up.</p>
            <div className="flex gap-2 border-b border-white/20 pb-2">
              <input
                type="text"
                placeholder="Email address"
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-neutral-600"
              />
              <button className="text-sm font-medium hover:text-neutral-400 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Big Text & Bottom Info */}
      <div className="relative w-full overflow-hidden">
        <motion.div style={{ y }} className="w-full">
          <h1 className="text-[13vw] leading-[0.8] font-bold text-center text-[#111] tracking-tighter select-none">
            NEUCON
          </h1>
          <div className="flex justify-between items-end px-4 md:px-10 -mt-4 md:-mt-10 relative z-10">
            <p className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">
              ©2025 Neucon. All rights reserved.
            </p>
            <div className="text-[100px] md:text-[200px] leading-none text-[#111] font-light">
              *
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
