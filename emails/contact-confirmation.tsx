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

interface ContactConfirmationEmailProps {
  name: string
  message: string
}

export const ContactConfirmationEmail = ({
  name,
  message,
}: ContactConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out to Neucon Labs</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thanks for reaching out!</Heading>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>
            We've received your message and will get back to you within 24 hours.
          </Text>
          <Section style={messageSection}>
            <Text style={messageLabel}>Your message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          <Text style={text}>
            In the meantime, feel free to explore our{" "}
            <Link href="https://neuconlabs.com/projects" style={link}>
              portfolio
            </Link>{" "}
            or learn more about our{" "}
            <Link href="https://neuconlabs.com/services" style={link}>
              services
            </Link>
            .
          </Text>
          <Text style={footer}>
            Best regards,
            <br />
            The Neucon Labs Team
            <br />
            <Link href="https://neuconlabs.com" style={link}>
              neuconlabs.com
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
  color: "#6366f1",
  fontSize: "32px",
  fontWeight: "700",
  margin: "40px 0",
  padding: "0 48px",
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
  padding: "0 48px",
}

const messageSection = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  margin: "24px 48px",
  padding: "20px",
}

const messageLabel = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px 0",
}

const messageText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: 0,
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

export default ContactConfirmationEmail
