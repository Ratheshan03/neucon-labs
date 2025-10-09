"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Users, Trophy, Rocket, Shield } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Deep expertise in AI/ML and modern web technologies. We build production-ready intelligent systems, not just prototypes.",
    gradient: "from-primary to-purple-600",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by ROI and business impact, not just features delivered. Your success drives our approach.",
    gradient: "from-secondary to-pink-600",
  },
  {
    icon: Rocket,
    title: "Rapid Delivery",
    description: "Agile methodology with startup DNA. We move fast without compromising on quality or scalability.",
    gradient: "from-accent to-teal-600",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "Transparent communication and collaborative approach. We work as an extension of your team.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "98% client satisfaction with 50+ successful projects across diverse industries and use cases.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Shield,
    title: "Enterprise Quality",
    description: "Australian-based with global standards. Security, reliability, and best practices built-in from day one.",
    gradient: "from-indigo-500 to-blue-600",
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6">
            <Trophy className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Sets Us{" "}
            <span className="gradient-text">Apart</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technical expertise with a deep understanding of business needs to deliver exceptional results.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="relative overflow-hidden border-0 bg-transparent h-full">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-[1px]">
                  <div className="absolute inset-0 rounded-2xl glass" />
                </div>

                <CardContent className="relative p-10 h-full">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${reason.gradient} glow-sm mb-8`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <reason.icon className="h-9 w-9 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-5 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
