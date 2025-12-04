import type { Metadata } from "next"
import { ProjectsList } from "@/components/sections/admin/projects-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projects Management | Admin | Neucon Labs",
  description: "Manage Neucon Labs portfolio projects",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-2">
            Manage your portfolio projects and case studies
          </p>
        </div>
        <Link href="/admin/projects/new">
          <Button className="rounded-xl">
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </Link>
      </div>

      <ProjectsList />
    </div>
  )
}
