"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Sparkles, Award, Zap } from "lucide-react"

export function ProjectsHeroSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-10" />

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-8"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Portfolio</span>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent glow-sm mb-10"
          >
            <Briefcase className="h-12 w-12 text-white" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Real Results,{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Real Impact</span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Explore how we&apos;ve helped clients achieve their goals with intelligent software solutions across industries. From startups to enterprises.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Award, value: "50+", label: "Projects Delivered", gradient: "from-primary to-secondary" },
              { icon: TrendingUp, value: "98%", label: "Client Satisfaction", gradient: "from-secondary to-accent" },
              { icon: Zap, value: "15+", label: "Industries Served", gradient: "from-accent to-primary" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center gap-3 px-6 py-4 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
