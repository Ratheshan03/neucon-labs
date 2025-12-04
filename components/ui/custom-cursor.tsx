"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1"
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0"
      }
    }

    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      document.addEventListener("mousemove", updateCursor)
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseleave", handleMouseLeave)

      // Hide default cursor
      document.body.style.cursor = "none"
    }

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Glass ball cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          opacity: 0,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Main glass ball */}
        <div
          className="w-6 h-6 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.3), rgba(147, 51, 234, 0.2), rgba(0, 255, 136, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 0 20px rgba(0, 212, 255, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1)
            `,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />

        {/* Inner highlight */}
        <div
          className="absolute top-1 left-1 w-2 h-2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
            filter: 'blur(1px)',
          }}
        />
      </motion.div>
    </>
  )
}