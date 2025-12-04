"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Calendar,
  ExternalLink,
  Building2,
  Users
} from "lucide-react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animations, initSmoothScroll } from "@/lib/animations"

export function ContactInfoSection() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initSmoothScroll()

    // Add scroll-triggered reveals
    const infoElements = document.querySelectorAll('.contact-info-element')
    animations.staggerReveal(infoElements, 'up', 0.1)

    // Add parallax effects to info cards
    const infoCards = document.querySelectorAll('.contact-info-card')
    infoCards.forEach((card) => {
      animations.parallax(card as HTMLElement, 0.02)
    })

    return () => {
      if (lenis) {
        lenis.destroy()
      }
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  const contactInfo = [
    {
      icon: Building2,
      title: "Headquarters",
      details: [
        "Neucon Labs Inc.",
        "123 Innovation Drive",
        "Tech District, San Francisco, CA 94105",
        "United States"
      ],
      action: {
        text: "View on Map",
        url: "https://maps.google.com/?q=123+Innovation+Drive+San+Francisco+CA+94105",
        icon: ExternalLink
      }
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+1 (555) 123-4567",
        "Available Mon-Fri, 9 AM - 6 PM PST"
      ],
      action: {
        text: "Call Now",
        url: "tel:+15551234567",
        icon: Phone
      }
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "hello@neuconlabs.com",
        "Response within 2 hours during business hours"
      ],
      action: {
        text: "Send Email",
        url: "mailto:hello@neuconlabs.com",
        icon: Mail
      }
    },
    {
      icon: Globe,
      title: "Online Presence",
      details: [
        "neuconlabs.com",
        "LinkedIn, GitHub, Twitter"
      ],
      action: {
        text: "Visit Website",
        url: "https://neuconlabs.com",
        icon: ExternalLink
      }
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST", status: "open" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST", status: "limited" },
    { day: "Sunday", hours: "Closed", status: "closed" },
    { day: "Holidays", hours: "Closed", status: "closed" }
  ]

  const teamInfo = [
    {
      role: "Technical Lead",
      name: "Dr. Sarah Chen",
      specialty: "AI/ML Architecture",
      availability: "Available for consultations"
    },
    {
      role: "Project Manager",
      name: "Marcus Rodriguez",
      specialty: "Full-Stack Development",
      availability: "Project planning & execution"
    },
    {
      role: "Solutions Architect",
      name: "Dr. James Wilson",
      specialty: "Cloud & DevOps",
      availability: "System design & scaling"
    }
  ]

  return (
    <section id="contact-info" className="py-32 bg-muted/20">
      <div className="container px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 contact-info-element"
          >
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Contact Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you. Our team is ready to discuss your project
              and explore how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="contact-info-element"
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-colors contact-info-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-4">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-xl"
                            asChild
                          >
                            <a
                              href={info.action.url}
                              target={info.action.url.startsWith('http') ? '_blank' : undefined}
                              rel={info.action.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              <info.action.icon className="h-4 w-4 mr-2" />
                              {info.action.text}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Business Hours & Team */}
            <div className="space-y-8">
              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="contact-info-element"
              >
                <Card className="glass border-primary/20 contact-info-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {businessHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between items-center py-2">
                          <span className="font-medium">{schedule.day}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">{schedule.hours}</span>
                            <Badge
                              variant={schedule.status === 'open' ? 'default' :
                                     schedule.status === 'limited' ? 'secondary' : 'destructive'}
                              className="text-xs"
                            >
                              {schedule.status === 'open' ? 'Open' :
                               schedule.status === 'limited' ? 'Limited' : 'Closed'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">Emergency Support:</span>
                        <span className="text-muted-foreground">Available 24/7 for critical systems</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Team Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="contact-info-element"
              >
                <Card className="glass border-primary/20 contact-info-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Meet Our Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamInfo.map((member) => (
                        <div key={member.name} className="p-4 bg-muted/50 rounded-xl">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">{member.name}</h4>
                              <p className="text-sm text-primary font-medium">{member.role}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {member.specialty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{member.availability}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground mb-3">
                        Prefer to speak with someone specific?
                      </p>
                      <Button variant="outline" size="sm" className="rounded-xl">
                        <Mail className="h-4 w-4 mr-2" />
                        Request Specific Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center contact-info-element"
          >
            <div className="glass rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                For urgent technical issues or time-sensitive projects, our emergency support line
                is available 24/7. We understand that downtime can be costly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Support: +1 (555) 911-HELP
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl">
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}