"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  const { scrollY } = useScroll()
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1])

  useEffect(() => {
    const handleScroll = () => {
      // Scroll handling is now done via useTransform
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background with blur effect */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
      />

      {/* Subtle border */}
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <nav className="relative container flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <Link href="/" className="group relative z-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            {/* Two-tone logo effect */}
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Neucon Labs
              </span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-2xl md:text-3xl font-bold bg-gradient-to-r from-electric-blue/20 via-neon-purple/20 to-matrix-green/20 bg-clip-text text-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Neucon Labs
              </div>
            </div>

            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-electric-blue via-neon-purple to-matrix-green"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigation.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onHoverStart={() => setActiveItem(item.href)}
              onHoverEnd={() => setActiveItem(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-5 py-3 text-sm font-medium transition-all duration-300 rounded-full",
                  "hover:text-white group",
                  pathname === item.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Background hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-neon-purple/10 to-matrix-green/10 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeItem === item.href ? 1 : 0,
                    scale: activeItem === item.href ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                />

                {/* Active indicator */}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-full border border-electric-blue/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ opacity: activeItem === item.href ? 0.3 : 0 }}
                />
              </Link>
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              className="relative ml-6 px-8 py-3 text-sm font-semibold overflow-hidden rounded-full bg-gradient-to-r from-electric-blue to-neon-purple hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-300 group"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </span>

                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-matrix-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </motion.div>
            </motion.div>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full sm:w-[400px] bg-black/95 backdrop-blur-xl border-l border-white/10"
          >
            <motion.nav
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8 mt-8"
            >
              <Link
                href="/"
                className="text-2xl font-bold gradient-text mb-4"
                onClick={() => setIsOpen(false)}
              >
                Neucon Labs
              </Link>

              <div className="flex flex-col gap-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-all py-4 px-6 rounded-2xl border border-transparent hover:border-white/20",
                        pathname === item.href
                          ? "text-white bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border-electric-blue/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="mt-8"
                >
                  <Button asChild className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:shadow-lg hover:shadow-electric-blue/50">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
