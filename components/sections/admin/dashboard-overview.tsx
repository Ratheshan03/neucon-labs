import { prisma } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FolderKanban,
  Users,
  MessageSquare,
  TrendingUp,
  Clock,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

export async function DashboardOverview() {
  // Fetch statistics
  const [projectsCount, teamCount, contactsCount, recentContacts] = await Promise.all([
    prisma.project.count({ where: { published: true } }),
    prisma.teamMember.count({ where: { published: true } }),
    prisma.contactSubmission.count(),
    prisma.contactSubmission.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        service: true,
        status: true,
        createdAt: true,
      },
    }),
  ])

  const newContactsCount = await prisma.contactSubmission.count({
    where: { status: "NEW" },
  })

  const stats = [
    {
      title: "Total Projects",
      value: projectsCount,
      icon: FolderKanban,
      href: "/admin/projects",
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      title: "Team Members",
      value: teamCount,
      icon: Users,
      href: "/admin/team",
      change: "+2",
      changeType: "positive" as const,
    },
    {
      title: "Contact Submissions",
      value: contactsCount,
      icon: MessageSquare,
      href: "/admin/contacts",
      change: `${newContactsCount} new`,
      changeType: "neutral" as const,
    },
    {
      title: "This Month",
      value: newContactsCount,
      icon: TrendingUp,
      href: "/admin/contacts",
      change: "+24%",
      changeType: "positive" as const,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="glass border-primary/20 hover:border-primary/40 transition-colors h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span
                      className={
                        stat.changeType === "positive"
                          ? "text-green-500"
                          : "text-muted-foreground"
                      }
                    >
                      {stat.change}
                    </span>
                    {" from last month"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Contact Submissions */}
        <Card className="glass border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Recent Contact Submissions
              </CardTitle>
              <Link href="/admin/contacts">
                <Button variant="ghost" size="sm" className="rounded-xl">
                  View All
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {recentContacts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No contact submissions yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentContacts.map((contact) => (
                  <Link key={contact.id} href={`/admin/contacts/${contact.id}`}>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium truncate">{contact.name}</p>
                          <Badge
                            variant={contact.status === "NEW" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {contact.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {contact.email}
                        </p>
                        {contact.company && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {contact.company}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                        <Clock className="h-3 w-3" />
                        {formatDistanceToNow(new Date(contact.createdAt), {
                          addSuffix: true,
                        })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass border-primary/20">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/projects/new">
              <Button variant="outline" className="w-full justify-start rounded-xl">
                <FolderKanban className="mr-2 h-4 w-4" />
                Add New Project
              </Button>
            </Link>
            <Link href="/admin/team/new">
              <Button variant="outline" className="w-full justify-start rounded-xl">
                <Users className="mr-2 h-4 w-4" />
                Add Team Member
              </Button>
            </Link>
            <Link href="/admin/contacts">
              <Button variant="outline" className="w-full justify-start rounded-xl">
                <MessageSquare className="mr-2 h-4 w-4" />
                View Contact Submissions
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
