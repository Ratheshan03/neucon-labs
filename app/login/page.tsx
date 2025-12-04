import type { Metadata } from "next"
import { LoginForm } from "@/components/forms/login-form"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Admin Login | Neucon Labs",
  description: "Sign in to access the Neucon Labs admin dashboard",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function LoginPage() {
  const session = await auth()

  // Redirect if already logged in
  if (session?.user) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}
