"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Mail } from "lucide-react"

// Mock team data - will be replaced with database queries
const teamMembers = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Co-founder & CEO",
    bio: "Former ML engineer at leading tech companies. Passionate about building intelligent systems that solve real business problems.",
    imageUrl: "/images/team/alex.jpg",
    linkedin: "https://linkedin.com/in/alexchen",
    github: "https://github.com/alexchen",
    email: "alex@neuconlabs.com",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Co-founder & CTO",
    bio: "Full-stack architect with expertise in scalable systems. Previously built platforms serving millions of users.",
    imageUrl: "/images/team/sarah.jpg",
    linkedin: "https://linkedin.com/in/sarahwilliams",
    github: "https://github.com/sarahw",
    email: "sarah@neuconlabs.com",
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Lead ML Engineer",
    bio: "PhD in Machine Learning with 8+ years building production ML systems. Specializes in NLP and computer vision.",
    imageUrl: "/images/team/raj.jpg",
    linkedin: "https://linkedin.com/in/rajpatel",
    github: "https://github.com/rajp",
    email: "raj@neuconlabs.com",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Senior Full-Stack Developer",
    bio: "Expert in Next.js, React, and Node.js. Builds beautiful, performant applications with exceptional attention to detail.",
    imageUrl: "/images/team/emma.jpg",
    linkedin: "https://linkedin.com/in/emmadavis",
    github: "https://github.com/emmad",
    email: "emma@neuconlabs.com",
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

export function TeamSection() {
  return (
    <section className="py-20 md:py-32">
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
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The talented individuals behind Neucon Labs
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={item}>
              <Card className="group overflow-hidden border-border/40 bg-card hover:bg-surface-light transition-all duration-300 h-full">
                {/* Profile Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {member.role}
                  </Badge>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Hiring Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Want to join our team?{" "}
            <a href="/contact" className="text-primary hover:underline font-medium">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
