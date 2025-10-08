import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface AdminNotificationEmailProps {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

export const AdminNotificationEmail = ({
  name,
  email,
  company,
  service,
  message,
}: AdminNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Section style={section}>
            <Text style={label}>From:</Text>
            <Text style={value}>{name}</Text>
          </Section>
          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
          </Section>
          {company && (
            <Section style={section}>
              <Text style={label}>Company:</Text>
              <Text style={value}>{company}</Text>
            </Section>
          )}
          {service && (
            <Section style={section}>
              <Text style={label}>Service Interest:</Text>
              <Text style={value}>{service}</Text>
            </Section>
          )}
          <Section style={messageSection}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          <Text style={footer}>
            <Link href="https://neuconlabs.com/admin/contacts" style={link}>
              View in Admin Dashboard
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "580px",
}

const h1 = {
  color: "#1e293b",
  fontSize: "28px",
  fontWeight: "700",
  margin: "40px 0 30px 0",
  padding: "0 48px",
}

const section = {
  margin: "0",
  padding: "0 48px 16px",
}

const label = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 4px 0",
}

const value = {
  color: "#1e293b",
  fontSize: "16px",
  lineHeight: "24px",
  margin: 0,
}

const messageSection = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  margin: "24px 48px",
  padding: "20px",
}

const messageText = {
  color: "#1e293b",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0 0 0",
  whiteSpace: "pre-wrap" as const,
}

const link = {
  color: "#6366f1",
  textDecoration: "underline",
}

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "32px 0 0 0",
  padding: "0 48px",
}

export default AdminNotificationEmail
