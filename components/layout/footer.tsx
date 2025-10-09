import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "AI/ML Development", href: "/services#ai-ml" },
    { name: "Full-stack Development", href: "/services#full-stack" },
    { name: "SaaS Solutions", href: "/services#saas" },
    { name: "Automation", href: "/services#automation" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Email", href: "mailto:hello@neuconlabs.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background/50 backdrop-blur-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="container relative py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-bold gradient-text">Neucon Labs</span>
            </Link>

            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Leading AI/ML and software development agency based in Australia. Building intelligent solutions that drive real business value.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Proudly based in Australia 🇦🇺</span>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Neucon Labs. All rights reserved.
            </p>

            <p className="text-sm text-muted-foreground">
              Made with{" "}
              <span className="text-primary">♥</span>{" "}
              in Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
