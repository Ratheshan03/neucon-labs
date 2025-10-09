"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function StorySection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Neucon Labs was founded with a simple yet powerful vision: to bridge the gap between cutting-edge AI/ML technology and real-world business solutions. We saw too many companies struggling to leverage the power of artificial intelligence, and we knew we could help.
              </p>

              <p className="text-lg leading-relaxed">
                Our founders bring together years of experience from leading tech companies, startups, and academic research. We&apos;ve built machine learning systems that serve millions of users, architected scalable platforms, and helped businesses transform their operations through intelligent automation.
              </p>

              <p className="text-lg leading-relaxed">
                What drives us is the challenge of solving complex problems and the satisfaction of seeing our solutions create measurable impact. Every project is an opportunity to push the boundaries of what&apos;s possible and deliver exceptional value to our clients.
              </p>

              <div className="flex items-start gap-4 mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
                <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-foreground/90 m-0">
                    To empower businesses with intelligent software solutions that combine technical excellence with practical business value, making advanced technology accessible and impactful.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
