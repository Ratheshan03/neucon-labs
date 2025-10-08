import { Resend } from "resend"
import { ContactConfirmationEmail } from "@/emails/contact-confirmation"
import { AdminNotificationEmail } from "@/emails/admin-notification"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactConfirmation({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Neucon Labs <hello@neuconlabs.com>",
      to: [email],
      subject: "Thanks for reaching out to Neucon Labs",
      react: ContactConfirmationEmail({ name, message }),
    })

    if (error) {
      console.error("Error sending confirmation email:", error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending confirmation email:", error)
    return { success: false, error }
  }
}

export async function sendAdminNotification({
  name,
  email,
  company,
  service,
  message,
}: {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Neucon Labs <hello@neuconlabs.com>",
      to: [process.env.ADMIN_EMAIL || "admin@neuconlabs.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: AdminNotificationEmail({ name, email, company, service, message }),
    })

    if (error) {
      console.error("Error sending admin notification:", error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending admin notification:", error)
    return { success: false, error }
  }
}
