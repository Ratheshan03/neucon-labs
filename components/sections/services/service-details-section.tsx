"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Cloud, Workflow, Check, ArrowRight } from "lucide-react"

const services = [
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI/ML Development",
    description: "Machine learning solutions, predictive models, neural networks, and intelligent systems tailored to your business.",
    gradient: "from-primary to-secondary",
    capabilities: [
      "Custom ML model development",
      "Model training and optimization",
      "ML pipeline development",
      "Data engineering and preparation",
      "Model deployment and monitoring",
      "AI-powered feature development",
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Keras", "Hugging Face"],
    ideal: "Companies with data looking to gain insights, automate decisions, or build intelligent features",
    cta: "Discuss Your AI Project",
  },
  {
    id: "full-stack",
    icon: Code,
    title: "Full-Stack Software Development",
    description: "Modern web and mobile applications built with cutting-edge frameworks for exceptional user experiences.",
    gradient: "from-secondary to-accent",
    capabilities: [
      "Progressive web applications (PWA)",
      "Mobile app development (React Native)",
      "Enterprise web applications",
      "API development",
      "Database design and optimization",
      "Real-time applications",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    ideal: "Startups building MVPs, companies modernizing legacy systems",
    cta: "Start Your Project",
  },
  {
    id: "saas",
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Cloud-based software platforms from concept to scale with robust architecture and seamless user experiences.",
    gradient: "from-accent to-primary",
    capabilities: [
      "SaaS product development",
      "Multi-tenant architecture",
      "Payment integration (Stripe, subscriptions)",
      "User management and authentication",
      "Analytics and reporting",
      "DevOps and deployment",
    ],
    technologies: ["Next.js", "Prisma", "Supabase", "Vercel", "AWS", "Stripe"],
    ideal: "Entrepreneurs launching SaaS products, companies building internal platforms",
    cta: "Build Your SaaS",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Automation & Integration",
    description: "Streamline workflows and connect systems intelligently to eliminate manual processes and boost efficiency.",
    gradient: "from-primary to-accent",
    capabilities: [
      "Workflow automation",
      "API integration and development",
      "Data pipeline development",
      "Scraping and data extraction",
      "Legacy system modernization",
      "Process optimization",
    ],
    technologies: ["Python", "Node.js", "n8n", "Zapier", "REST/GraphQL APIs"],
    ideal: "Businesses with manual processes, companies needing system integration",
    cta: "Automate Your Workflows",
  },
]

export function ServiceDetailsSection() {
  return (
    <section className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="container relative z-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We offer end-to-end software development services, from ideation to deployment and beyond. Our team combines technical excellence with business acumen to deliver solutions that drive real value.
          </p>
        </motion.div>

        {/* Service Details */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="scroll-mt-20"
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block mb-8"
                  >
                    <div className={`p-5 rounded-2xl bg-gradient-to-br ${service.gradient} glow-sm`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                  {/* What We Do */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className={`h-1 w-12 bg-gradient-to-r ${service.gradient} rounded-full`} />
                      What We Do
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {service.capabilities.map((capability, capIndex) => (
                        <motion.li
                          key={capability}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: capIndex * 0.05 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className={`flex-shrink-0 mt-1 p-1 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-base group-hover:text-foreground transition-colors">{capability}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    className={`group px-8 py-6 text-lg bg-gradient-to-r ${service.gradient} hover:shadow-xl hover:shadow-primary/20 transition-all duration-300`}
                  >
                    <Link href="/contact">
                      {service.cta}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Details Card */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="relative overflow-hidden border-0 bg-transparent group">
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} p-[1px]`}>
                      <div className="absolute inset-0 rounded-3xl glass" />
                    </div>

                    {/* Gradient overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl`}
                    />

                    <CardContent className="relative p-10">
                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {service.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="px-4 py-2 text-sm font-medium glass border border-white/10 hover:border-white/30 transition-all"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div>
                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                          Ideal For
                        </h4>
                        <p className="text-base leading-relaxed">{service.ideal}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
