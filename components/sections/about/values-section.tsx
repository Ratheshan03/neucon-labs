"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Users, Award } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology, constantly learning and applying the latest advancements to solve real problems.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and business value, not just technical deliverables.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, ensuring clear communication and shared success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We take pride in our craftsmanship, delivering high-quality solutions that stand the test of time.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-surface/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={item}>
              <Card className="h-full border-border/40 bg-card hover:bg-surface-light transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
