"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Code, Cloud, Workflow, ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Brain,
    title: "AI/ML Development",
    description: "Transform your data into intelligent insights with custom machine learning models and neural networks.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"],
    href: "/services#ai-ml",
    gradient: "from-primary via-purple-500 to-secondary",
    iconBg: "from-primary to-purple-600",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Modern, scalable web applications built with cutting-edge frameworks and best practices.",
    features: ["React & Next.js", "Progressive Web Apps", "Real-time Applications", "API Development"],
    href: "/services#full-stack",
    gradient: "from-secondary via-pink-500 to-accent",
    iconBg: "from-secondary to-pink-600",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Cloud-native platforms from concept to scale with enterprise-grade architecture.",
    features: ["Multi-tenant Systems", "Payment Integration", "Analytics Dashboard", "Scalable Infrastructure"],
    href: "/services#saas",
    gradient: "from-accent via-teal-500 to-primary",
    iconBg: "from-accent to-teal-600",
  },
  {
    icon: Workflow,
    title: "Automation & Integration",
    description: "Streamline operations and eliminate manual work with intelligent workflow automation.",
    features: ["Process Automation", "API Integration", "Data Pipelines", "Legacy Modernization"],
    href: "/services#automation",
    gradient: "from-primary via-indigo-500 to-accent",
    iconBg: "from-primary to-indigo-600",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We{" "}
            <span className="gradient-text">Build</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intelligent AI systems to enterprise-grade applications, we deliver comprehensive solutions that drive growth and innovation.
          </p>
        </motion.div>

        {/* Services Grid - Bento Box Style */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <Card className="relative overflow-hidden border-0 bg-transparent h-full">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-[1px]">
                  <div className="absolute inset-0 rounded-2xl glass" />
                </div>

                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500`}
                  animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
                />

                <CardContent className="relative p-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-8">
                    <motion.div
                      className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.iconBg} glow-sm`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10 flex-1">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-3 text-base"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn w-full justify-between px-0 hover:bg-transparent"
                  >
                    <Link href={service.href}>
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 rounded-xl border-2 border-primary/30 glass hover:border-primary hover:bg-primary/10"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <span className="text-sm text-muted-foreground">
              or{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                schedule a consultation
              </Link>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
