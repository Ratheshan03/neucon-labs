import type { Metadata } from "next"
import { DashboardOverview } from "@/components/sections/admin/dashboard-overview"

export const metadata: Metadata = {
  title: "Dashboard | Admin | Neucon Labs",
  description: "Neucon Labs admin dashboard overview",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Overview of your Neucon Labs admin panel
        </p>
      </div>

      <DashboardOverview />
    </div>
  )
}
