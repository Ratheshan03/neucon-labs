import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
          Build Intelligent Software That{" "}
          <span className="gradient-text">Drives Results</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Australia's AI/ML and full-stack development experts. We transform
          complex challenges into scalable solutions that deliver real business
          value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View Our Work</Link>
          </Button>
        </div>

        {/* Temporary status message */}
        <div className="mt-16 p-6 border border-border/40 rounded-lg bg-surface/50">
          <p className="text-sm text-muted-foreground">
            🚧 Website under construction - Phase 2 Complete: Core Infrastructure Setup ✅
          </p>
        </div>
      </div>
    </div>
  )
}
