"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Twitter, Instagram, Facebook, Linkedin, Github } from "lucide-react"
import { ContactForm } from "./contact-form"
import { siteConfig } from "@/lib/site-config"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you need a website, SEO optimization, graphic design, or digital marketing services, let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 bg-card border-border text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:bellarinseth@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  bellarinseth@gmail.com
                </a>
              </Card>

              <Card className="p-6 bg-card border-border text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a
                  href="tel:+254114627400"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  +254 114 627 400
                </a>
                <a
                  href="tel:+254759433906"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  +254 759 433 906
                </a>
              </Card>

              <Card className="p-6 bg-card border-border text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Kenya</p>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold text-foreground mb-4 text-lg">Send Me a Message</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="space-y-6">
          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-4">
            {siteConfig.social.twitter.url && (
              <a
                href={siteConfig.social.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Follow on X (Twitter)"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            )}
            {siteConfig.social.instagram.url && (
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Follow on Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            )}
            {siteConfig.social.facebook.url && (
              <a
                href={siteConfig.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Follow on Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            )}
            {siteConfig.social.linkedin.url && (
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            )}
            {siteConfig.social.github.url && (
              <a
                href={siteConfig.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label="View GitHub profile"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Seth Makori. Built with Next.js & passion.
          </p>
        </div>
      </footer>
    </section>
  )
}
