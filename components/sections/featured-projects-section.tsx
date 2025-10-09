"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Star } from "lucide-react"
import { useState } from "react"

// Mock data - will be replaced with real data from database
const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Machine learning system that analyzes customer behavior patterns and predicts churn with 94% accuracy using advanced neural networks.",
    category: ["AI/ML", "Full-stack"],
    technologies: ["TensorFlow", "Next.js", "Python"],
    metric: "+150%",
    metricLabel: "Efficiency Gain",
    slug: "ai-analytics-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare SaaS Platform",
    description: "Cloud-based patient management system serving 50+ clinics with real-time appointment scheduling and telemedicine capabilities.",
    category: ["SaaS", "Full-stack"],
    technologies: ["Next.js", "PostgreSQL", "Stripe"],
    metric: "50K+",
    metricLabel: "Active Users",
    slug: "healthcare-saas",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Inventory System",
    description: "Intelligent inventory management with predictive ordering, multi-warehouse sync, and automated restock alerts.",
    category: ["Automation", "AI/ML"],
    technologies: ["Python", "React", "MongoDB"],
    metric: "80%",
    metricLabel: "Time Saved",
    slug: "inventory-automation",
    featured: false,
  },
]

export function FeaturedProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-6">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Projects That{" "}
            <span className="gradient-text">Deliver Results</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore how we&apos;ve helped clients achieve their goals with intelligent software solutions that make a real impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredId === project.id}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/30"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
}: {
  project: typeof featuredProjects[0]
  index: number
  isHovered: boolean
  onHover: (id: number | null) => void
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 25,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 25,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => {
        onHover(null)
        mouseX.set(0)
        mouseY.set(0)
      }}
      className="group perspective-1000"
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative"
        >
          <Card className="relative overflow-hidden border-0 bg-transparent h-full">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 p-[1px]">
              <div className="absolute inset-0 rounded-2xl glass" />
            </div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-xl"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <CardContent className="relative p-0 h-full flex flex-col">
              {/* Project Image Placeholder */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30">
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 grid-bg opacity-30" />

                  {/* Large letter */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-9xl font-bold text-white/5"
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title.charAt(0)}
                    </motion.div>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 glow-sm">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                {/* External link icon */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg glass border border-white/20">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                </motion.div>

                {/* Metric Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="glass px-4 py-2 rounded-xl border border-primary/30">
                    <div className="text-2xl font-bold gradient-text">{project.metric}</div>
                    <div className="text-xs text-muted-foreground">{project.metricLabel}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map((cat) => (
                    <Badge key={cat} variant="outline" className="text-xs border-primary/30">
                      {cat}
                    </Badge>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={tech} className="flex items-center gap-1">
                      {tech}
                      {i < project.technologies.length - 1 && <span>•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  )
}
