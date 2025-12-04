"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { NeuconLogo } from "@/components/ui/neucon-logo"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#approach" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "/contact" },
]

const TextReveal = ({ children, isActive, isHovered }: { children: string, isActive: boolean, isHovered: boolean }) => {
  return (
    <div className="relative overflow-hidden h-[20px] flex items-center">
      <motion.div
        initial={false}
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex flex-col"
      >
        <span className={cn("block h-[20px] flex items-center", isActive ? "text-black" : "text-neutral-400")}>{children}</span>
        <span className={cn("block h-[20px] flex items-center absolute top-full", isActive ? "text-black" : "text-white")}>{children}</span>
      </motion.div>
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100) // Trigger navbar collapse after 100px

      // Scroll Spy
      const sections = navigation.map(n => n.href.substring(1)).filter(h => h !== "contact")
      let current = ""
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Section is active if its top is within the upper half of the viewport
          // OR if it covers the middle of the screen
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            current = "#" + section
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between relative pointer-events-auto">

        {/* Logo */}
        <motion.div
          animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -20 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <Link href="/" className="group">
            <NeuconLogo size="md" className="text-3xl md:text-4xl" />
          </Link>
        </motion.div>

        {/* Centered Navigation Pill */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center">

          {/* Dot Outside - Shows when NO section is active (even if scrolled) */}
          {!activeSection && (
            <motion.div
              layoutId="nav-bg"
              className="absolute -left-8 w-3 h-3 rounded-full z-0 shadow-lg"
              style={{
                background: "radial-gradient(circle at 30% 30%, #ff8f6b 0%, #ff6b35 50%, #c2410c 100%)",
                boxShadow: "0 2px 10px rgba(255, 107, 53, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}

          <motion.nav
            animate={{
              backgroundColor: scrolled ? "rgba(17, 17, 17, 0.8)" : "rgba(17, 17, 17, 0)",
              backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
              borderColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
              padding: scrolled ? "4px 4px" : "0px",
              borderRadius: "9999px"
            }}
            className="flex items-center transition-all duration-300 relative"
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.href || pathname === item.href
              const isHovered = hoveredItem === item.href
              const isContact = item.name === "Contact"

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    "relative px-5 py-2 text-sm font-medium transition-colors rounded-full flex items-center overflow-hidden z-10",
                    isContact && !scrolled && "bg-[#222] text-white ml-2 px-6"
                  )}
                >
                  {/* Active Background (Orange Pill) - Only when section is active */}
                  {/* Shares layoutId with the outside dot for smooth morphing */}
                  {(isActive) && !isContact && (
                    <motion.div
                      layoutId="nav-bg"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "#ff6b35", // Flat orange for the pill background
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Hover Background (Subtle White) - Only when NOT scrolled (Top State) */}
                  {(isHovered) && !isActive && !isContact && !scrolled && (
                    <motion.div
                      layoutId="nav-hover-top"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Text Container */}
                  <div className="relative z-10">
                    <TextReveal isActive={isActive && scrolled} isHovered={isHovered}>
                      {item.name}
                    </TextReveal>
                  </div>
                </Link>
              )
            })}
          </motion.nav>
        </div>

        {/* Right Side - Email */}
        <motion.div
          animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex items-center"
        >
          <Link
            href="mailto:hello@neuconlabs.com"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Email us
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white">
          Menu
        </button>
      </div>
    </header>
  )
}
