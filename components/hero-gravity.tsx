"use client"

import { motion } from "framer-motion"

export function HeroGravity() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col justify-center items-center">

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center h-full pointer-events-none">

        {/* Main Typography */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h1 className="text-[15vw] md:text-[12rem] font-bold text-white tracking-tighter leading-[0.8] select-none mix-blend-difference">
            NEUCON
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start w-full">
            {/* Offset "LABS" */}
            <h1 className="text-[15vw] md:text-[12rem] font-bold text-white tracking-tighter leading-[0.8] select-none md:ml-[25vw] mix-blend-difference">
              LABS
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-lg md:text-2xl text-white/60 font-light tracking-wide text-center md:text-left md:ml-2 max-w-2xl"
        >
          Building the future with Agentic AI & Intelligent Automation.
        </motion.p>

      </div>
    </div>
  )
}
