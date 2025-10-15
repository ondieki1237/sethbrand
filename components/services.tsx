"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, high-performance websites and web apps built with Next.js, React, and scalable technologies for codewithseth.co.ke and beyond.",
      features: [
        "Responsive design",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web apps",
        "API integration",
      ],
    },
    {
      title: "SEO Services",
      description:
        "Data-driven SEO strategies to improve online visibility, attract the right audience, and drive growth for businesses worldwide.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO audits",
        "Content strategy",
        "Analytics & reporting",
      ],
    },
    {
      title: "Graphic Design",
      description:
        "Creative visual solutions that communicate your brand story through thoughtful design, balance, and identity.",
      features: [
        "Brand identity design",
        "Marketing materials",
        "Social media graphics",
        "UI/UX design",
        "Print design",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Full-funnel digital marketing strategies that connect brands with audiences, backed by analytics and conversion optimization.",
      features: [
        "Social media management",
        "Email marketing",
        "Content marketing",
        "Campaign analytics",
        "Growth strategies",
      ],
    },
  ]

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-b from-background via-muted/30 to-background 
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        transition-colors duration-500"
      aria-label="Services section for codewithseth.co.ke"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-14">
          {/* Header */}
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              What I Offer
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-sm"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert digital solutions — from web development and SEO optimization to design and marketing — all tailored for impact and performance.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  className="p-8 bg-card/80 dark:bg-gray-900 
                    border border-border/50 hover:border-primary/80 
                    hover:shadow-lg hover:shadow-primary/20
                    transition-all duration-300 rounded-2xl group"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild size="lg" className="shadow-md shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <a href="#contact">Let’s Build Something Great</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
