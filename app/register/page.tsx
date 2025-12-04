import type { Metadata } from "next"
import { RegisterForm } from "@/components/forms/register-form"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Create Admin Account | Neucon Labs",
  description: "Create a new Neucon Labs admin account",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function RegisterPage() {
  const session = await auth()

  // Redirect if already logged in
  if (session?.user) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}
