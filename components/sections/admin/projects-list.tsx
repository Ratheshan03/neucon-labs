import { prisma } from "@/lib/db"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Eye, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"

export async function ProjectsList() {
  const projects = await prisma.project.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      category: true,
      technologies: true,
      imageUrl: true,
      featured: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  if (projects.length === 0) {
    return (
      <Card className="glass border-primary/20 p-12 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
            <Eye className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">No projects yet</h3>
          <p className="text-muted-foreground">
            Get started by creating your first project to showcase your work.
          </p>
          <Link href="/admin/projects/new">
            <Button className="rounded-xl">
              Create Your First Project
            </Button>
          </Link>
        </div>
      </Card>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="glass border-primary/20 hover:border-primary/40 transition-colors overflow-hidden group"
        >
          {/* Project Image */}
          <div className="relative h-48 bg-muted overflow-hidden">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Eye className="h-12 w-12 text-muted-foreground" />
              </div>
            )}

            {/* Badges Overlay */}
            <div className="absolute top-3 left-3 flex gap-2">
              {project.featured && (
                <Badge className="bg-primary/90 backdrop-blur-sm">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge
                variant={project.published ? "default" : "secondary"}
                className="backdrop-blur-sm"
              >
                {project.published ? "Published" : "Draft"}
              </Badge>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Categories & Technologies */}
            <div className="space-y-2">
              {project.category.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.category.slice(0, 3).map((cat) => (
                    <Badge key={cat} variant="outline" className="text-xs">
                      {cat}
                    </Badge>
                  ))}
                  {project.category.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.category.length - 3}
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* Metadata */}
            <div className="text-xs text-muted-foreground">
              Updated {formatDistanceToNow(new Date(project.updatedAt), { addSuffix: true })}
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2 border-t border-primary/10">
              <Link href={`/admin/projects/${project.id}/edit`} className="flex-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl"
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="rounded-xl"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
