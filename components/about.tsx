"use client"

import { Card } from "@/components/ui/card"
import { Code2, Palette, Search, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Full-stack web development using Next.js, React, and modern frameworks to deliver fast, secure, and scalable solutions.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Advanced SEO strategies to boost Google rankings and enhance visibility for codewithseth.co.ke.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Creative and functional design using Figma, Canva, and Adobe Suite to craft visually appealing user experiences.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing campaigns focused on engagement, analytics, and sustainable growth.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-b from-background via-muted/30 to-background 
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        transition-colors duration-500"
      aria-label="About section for codewithseth.co.ke"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 text-center md:text-left">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              About <span className="text-primary">CodeWithSeth.co.ke</span>
            </h2>
            <div className="w-24 h-1 mx-auto md:mx-0 bg-primary rounded-full shadow-sm"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Description */}
            <motion.div
              className="space-y-5 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Welcome to <span className="text-foreground font-medium">codewithseth.co.ke</span> — your hub for
                innovation, web development, and design excellence. I’m a passionate full-stack developer with a
                foundation in <span className="text-foreground">Electronics and Instrumentation</span>, currently
                pursuing a <span className="text-foreground">Master’s in Artificial Intelligence</span>.
              </p>

              <p>
                My journey—from cyber services to professional design—has shaped me into a versatile digital creator.
                I’ve worked with organizations like{" "}
                <span className="text-foreground">Amani Centre CBO</span> and{" "}
                <span className="text-foreground">Accord Medical Supplies</span>, as well as international clients
                seeking impactful online experiences.
              </p>

              <p>
                Every line of code and every design I build focuses on{" "}
                <strong className="text-foreground">performance, aesthetics, and usability</strong>. At{" "}
                <span className="text-primary font-semibold">codewithseth.co.ke</span>, innovation meets functionality.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card
                    className="p-6 bg-card/80 dark:bg-gray-900 border border-border/50 
                      hover:border-primary hover:shadow-lg hover:shadow-primary/20 
                      transition-all duration-300 rounded-2xl"
                  >
                    <skill.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
