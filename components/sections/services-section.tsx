"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BentoGridV2 } from "@/components/bento-grid-v2"
import { Brain, Cloud, Layers, Zap, TrendingUp, ArrowRight, Server, Code, Bot, BarChart3 } from "lucide-react"

const services = [
  {
    id: "01",
    title: "AI/ML Solutions",
    description: "Custom neural networks and predictive models that turn data into decision-making power.",
    icon: <Brain className="w-8 h-8 text-emerald-500" />,
    graphic: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 relative z-10">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full"
            />
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <motion.path
            d="M100,80 L140,120 L180,80"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>
    )
  },
  {
    id: "02",
    title: "Cloud Architecture",
    description: "Scalable, secure, and cost-effective cloud infrastructure designed for high availability.",
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    graphic: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Server className="w-16 h-16 text-blue-500/20" />
        </motion.div>
        <motion.div
          animate={{ x: [-50, 50, -50], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            style={{
              width: 40 + i * 20,
              height: 40 + i * 20,
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>
    )
  },
  {
    id: "03",
    title: "Fullstack Dev",
    description: "End-to-end web applications built with modern frameworks for speed and reliability.",
    icon: <Code className="w-8 h-8 text-purple-500" />,
    graphic: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-24">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-white border border-purple-200 rounded-lg shadow-sm"
              style={{
                zIndex: 3 - i,
                top: i * 8,
                left: i * 8,
                width: '100%',
                height: '100%'
              }}
              animate={{
                y: [0, -5, 0],
                x: [0, 2, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity
              }}
            >
              <div className="p-2 space-y-2">
                <div className="w-1/3 h-2 bg-purple-100 rounded" />
                <div className="w-2/3 h-2 bg-neutral-100 rounded" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "04",
    title: "Intelligent Automation",
    description: "Streamline workflows and reduce manual tasks with smart, automated systems.",
    icon: <Bot className="w-8 h-8 text-orange-500" />,
    graphic: (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="relative z-10"
        >
          <Zap className="w-12 h-12 text-orange-500" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-32 h-32 border border-dashed border-orange-300 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>
        {[0, 90, 180, 270].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full"
            style={{ rotate: deg, transformOrigin: "center 60px" }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, delay: i * 0.25, repeat: Infinity }}
          />
        ))}
      </div>
    )
  },
  {
    id: "05",
    title: "Digital Marketing",
    description: "Data-driven campaigns that amplify your brand and drive measurable growth.",
    icon: <BarChart3 className="w-8 h-8 text-red-500" />,
    graphic: (
      <div className="relative w-full h-full flex items-end justify-center pb-8 gap-2">
        {[40, 70, 50, 90, 60].map((h, i) => (
          <motion.div
            key={i}
            className="w-4 bg-red-100 rounded-t-sm relative overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatDelay: 2 }}
          >
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-red-500"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: i * 0.1 + 0.5, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.div>
        ))}
      </div>
    )
  }
]

export function ServicesSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "end end"]
  })

  // Horizontal scroll transform
  // Maps the vertical scroll of the 300vh container to horizontal movement
  // Starts immediately (0) from 30% (off-screen right) to -22% (just revealing the end)
  const x = useTransform(scrollYProgress, [0, 0.9], ["30%", "-22%"])

  return (
    <section id="services" className="w-full bg-[#050505] py-24 relative z-20">
      {/* 
                Main Parent Card 
                Static gradient background, rounded top only.
            */}
      <div
        className="w-full rounded-t-[3rem] relative bg-gradient-to-b from-white to-[#050505]"
      >

        {/* 
                    Horizontal Scroll Section Wrapper 
                    This div provides the height (300vh) for the scroll interaction.
                    The content inside is sticky.
                */}
        <div ref={targetRef} className="relative h-[300vh]">

          {/* Sticky Viewport */}
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

            {/* Header Content - Fixed at top */}
            <div className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 flex-shrink-0 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-lg md:text-xl text-neutral-500 font-medium mb-6 block uppercase tracking-wider">
                  ● Our Services
                </span>
                <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tighter max-w-4xl leading-[0.9]">
                  Comprehensive solutions<br />
                  <span className="text-neutral-400">for digital growth.</span>
                </h2>
              </motion.div>
            </div>

            {/* Horizontal Scroll Track - Vertically Centered */}
            <div className="flex-1 flex items-center w-full pl-6 md:pl-12 overflow-hidden">
              <motion.div
                style={{ x }}
                className="flex gap-6 w-max"
              >
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="w-[350px] md:w-[450px] h-[500px] bg-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl border border-black/5 flex-shrink-0 group hover:shadow-2xl transition-all duration-500"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-neutral-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                          {service.icon}
                        </div>
                        <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                      <p className="text-lg text-neutral-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Graphic Area */}
                    <div className="w-full h-48 bg-neutral-50 rounded-[2rem] relative overflow-hidden group-hover:bg-neutral-100 transition-colors duration-500">
                      {service.graphic}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* 
                    "Our Expertise" Sub-Section 
                    Appears naturally after the horizontal scroll finishes.
                    Dark card inset within the white parent.
                */}
        <div className="relative z-10 px-4 md:px-6 pb-6">
          <div className="bg-[#121212] rounded-[2.5rem] w-full p-8 md:p-16 text-white overflow-hidden relative">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-16">
                <span className="text-orange-500 font-medium mb-4 block uppercase tracking-wider">
                  ● Deep Dive
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  Our Expertise
                </h2>
                <p className="text-xl text-neutral-400 max-w-2xl">
                  We don't just use tools; we master them. From low-level systems to high-level abstractions, our stack is built for performance and scale.
                </p>
              </div>

              {/* Bento Grid Integration */}
              <div className="-mx-8 md:-mx-16">
                <BentoGridV2 />
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-neutral-500">
                <span>© NeuconLabs 2024</span>
                <span>Engineering the future</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
