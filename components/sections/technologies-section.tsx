"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"

const technologies = {
  "AI & Machine Learning": [
    { name: "TensorFlow", color: "from-orange-500 to-orange-600" },
    { name: "PyTorch", color: "from-red-500 to-orange-500" },
    { name: "Scikit-learn", color: "from-blue-500 to-cyan-500" },
    { name: "Keras", color: "from-red-600 to-pink-600" },
    { name: "Hugging Face", color: "from-yellow-500 to-orange-500" },
    { name: "OpenAI", color: "from-green-500 to-emerald-500" },
  ],
  "Frontend Development": [
    { name: "Next.js 15", color: "from-gray-700 to-gray-900" },
    { name: "React 19", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-600 to-blue-700" },
    { name: "Tailwind CSS", color: "from-cyan-500 to-blue-600" },
    { name: "Framer Motion", color: "from-pink-500 to-purple-600" },
  ],
  "Backend & Database": [
    { name: "Node.js", color: "from-green-600 to-green-700" },
    { name: "Python", color: "from-blue-500 to-yellow-500" },
    { name: "PostgreSQL", color: "from-blue-600 to-blue-700" },
    { name: "Prisma", color: "from-indigo-600 to-purple-600" },
    { name: "MongoDB", color: "from-green-500 to-green-600" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", color: "from-orange-500 to-orange-600" },
    { name: "Vercel", color: "from-gray-800 to-black" },
    { name: "Supabase", color: "from-green-500 to-emerald-600" },
    { name: "Docker", color: "from-blue-500 to-blue-600" },
    { name: "GitHub Actions", color: "from-gray-700 to-gray-900" },
  ],
}

export function TechnologiesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

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
            <Code2 className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Tech Stack</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powered By{" "}
            <span className="gradient-text">Modern Technology</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge tools and frameworks to build robust, scalable solutions that stand the test of time.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Badge
                      className={`px-5 py-3 text-base font-medium glass border border-white/10 hover:border-white/30 transition-all cursor-default`}
                    >
                      <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold`}>
                        {tech.name}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            And many more tools in our arsenal to bring your vision to life
          </p>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
