"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Filter, Sparkles } from "lucide-react"

// Mock project data - will be replaced with database queries
const allProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    slug: "ai-analytics-platform",
    description: "Machine learning system that analyzes customer behavior patterns and predicts churn with 94% accuracy.",
    category: ["AI/ML", "Full-stack"],
    technologies: ["TensorFlow", "Next.js", "Python", "PostgreSQL"],
    metric: "+150% Efficiency",
    gradient: "from-primary to-secondary",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare SaaS Platform",
    slug: "healthcare-saas",
    description: "Cloud-based patient management system serving 50+ clinics with real-time appointment scheduling.",
    category: ["SaaS", "Full-stack"],
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Vercel"],
    metric: "50K+ Users",
    gradient: "from-secondary to-accent",
    featured: true,
  },
  {
    id: 3,
    title: "Automated Inventory System",
    slug: "inventory-automation",
    description: "Smart inventory management with predictive ordering and multi-warehouse synchronization.",
    category: ["Automation", "AI/ML"],
    technologies: ["Python", "React", "MongoDB", "AWS"],
    metric: "80% Time Saved",
    gradient: "from-accent to-primary",
    featured: true,
  },
  {
    id: 4,
    title: "E-commerce Recommendation Engine",
    slug: "ecommerce-recommendation",
    description: "Personalized product recommendations using collaborative filtering and deep learning.",
    category: ["AI/ML", "Full-stack"],
    technologies: ["PyTorch", "Next.js", "Redis", "PostgreSQL"],
    metric: "+200% Sales",
    gradient: "from-primary to-purple-600",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate CRM Platform",
    slug: "real-estate-crm",
    description: "Comprehensive CRM solution for property management with automated lead nurturing.",
    category: ["SaaS", "Automation"],
    technologies: ["Next.js", "Prisma", "Supabase", "TypeScript"],
    metric: "10K+ Properties",
    gradient: "from-purple-600 to-pink-600",
    featured: false,
  },
  {
    id: 6,
    title: "Supply Chain Optimization",
    slug: "supply-chain-optimization",
    description: "ML-powered route optimization and demand forecasting for logistics companies.",
    category: ["AI/ML", "Automation"],
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
    metric: "40% Cost Reduction",
    gradient: "from-pink-600 to-orange-600",
    featured: false,
  },
]

const categories = ["All", "AI/ML", "Full-stack", "SaaS", "Automation"]

function ProjectCard({ project, index }: { project: typeof allProjects[0]; index: number }) {
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

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <Card className="relative overflow-hidden border-0 bg-transparent h-full transition-all duration-300 hover:-translate-y-2">
          {/* Gradient border */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} p-[1px]`}>
            <div className="absolute inset-0 rounded-3xl glass" />
          </div>

          {/* Gradient overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl`}
          />

          {/* Content */}
          <CardContent className="relative p-0 h-full flex flex-col">
            {/* Project Image/Header */}
            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden rounded-t-3xl`}>
              {/* Pattern overlay */}
              <div className="absolute inset-0 grid-bg opacity-20" />

              {/* Large Letter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.1 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="text-8xl font-bold text-white"
                >
                  {project.title.charAt(0)}
                </motion.div>
              </div>

              {/* External Link Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-4 right-4 z-10"
              >
                <div className="p-2 rounded-xl glass border border-white/20 backdrop-blur-sm">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </motion.div>

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-4 left-4"
                >
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 font-semibold">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </motion.div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex-grow flex flex-col">
              {/* Metric Badge */}
              <div className="mb-4">
                <Badge
                  variant="secondary"
                  className="px-4 py-1.5 text-sm font-semibold glass border border-white/10"
                >
                  <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.metric}
                  </span>
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.category.map((cat) => (
                  <Badge
                    key={cat}
                    variant="outline"
                    className="text-xs glass border-white/10 hover:border-white/20 transition-all"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span key={tech} className="flex items-center gap-1">
                    {tech}
                    {techIndex < Math.min(project.technologies.length, 3) - 1 && (
                      <span className="text-primary">•</span>
                    )}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-primary font-medium">+{project.technologies.length - 3} more</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export function ProjectsGridSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category.includes(selectedCategory))

  return (
    <section className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="container relative z-10">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10">
            <Filter className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20"
                  : "glass border-white/10 hover:border-white/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
