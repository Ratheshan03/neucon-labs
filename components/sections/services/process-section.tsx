"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, FileText, Code2, TestTube, Rocket, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We start by understanding your requirements, challenges, and goals in depth.",
    gradient: "from-primary to-secondary",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal & Planning",
    description: "Detailed project scope, timeline, and deliverables tailored to your needs.",
    gradient: "from-secondary to-accent",
  },
  {
    number: "03",
    icon: Code2,
    title: "Design & Development",
    description: "Iterative development process with regular check-ins and progress updates.",
    gradient: "from-accent to-primary",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing & QA",
    description: "Comprehensive quality assurance to ensure reliability and performance.",
    gradient: "from-primary to-purple-600",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment & Support",
    description: "Smooth launch with ongoing maintenance and support as needed.",
    gradient: "from-purple-600 to-secondary",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-5" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            From Idea to{" "}
            <span className="gradient-text">Launch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A proven, step-by-step approach to delivering exceptional software solutions that exceed expectations.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 rounded-full opacity-30" />

          {/* Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 bg-transparent h-full">
                  {/* Gradient border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} p-[1px]`}>
                    <div className="absolute inset-0 rounded-2xl glass" />
                  </div>

                  {/* Number Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl z-10 glow-sm`}
                  >
                    {index + 1}
                  </motion.div>

                  <CardContent className="relative p-6 pt-12 text-center h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.gradient} mx-auto mb-4`}
                    >
                      <step.icon className="h-6 w-6 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-white/10">
            <p className="text-lg text-muted-foreground">
              Not sure which service you need?{" "}
              <a href="/contact" className="text-primary hover:text-secondary transition-colors font-semibold underline decoration-primary/30 hover:decoration-secondary/50">
                Schedule a free consultation
              </a>{" "}
              and we&apos;ll help you find the right solution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
