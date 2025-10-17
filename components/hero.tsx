"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 bg-gradient-to-b from-[#e6f3f2] via-[#f8faff] to-[#f0eefc] dark:from-gray-950 dark:to-black">
      {/* Static background pattern - no animation for LCP */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,150,136,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(103,58,183,0.15),transparent_60%)]" />

      {/* Subtle branding watermark - no animation for LCP */}
      <h1 className="absolute text-[10rem] sm:text-[16rem] font-black text-primary/5 select-none z-0 opacity-15">
        SM
      </h1>

      <div className="relative z-10 container mx-auto max-w-6xl text-center space-y-8">
        {/* Remove animations from above-the-fold content for faster LCP */}
        <p className="text-primary font-mono text-sm sm:text-base">
          👋 Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight">
          <span className="bg-gradient-to-r from-[#009688] via-[#673AB7] to-[#2196F3] bg-clip-text text-transparent">
            Seth Makori
          </span>
        </h1>

        <h2 className="text-3xl sm:text-5xl font-semibold text-muted-foreground">
          I build <span className="text-[#009688]">digital experiences.</span>
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A multi-disciplinary digital professional specializing in{" "}
          <span className="text-[#009688]">web development</span>,{" "}
          <span className="text-[#009688]">SEO optimization</span>,{" "}
          <span className="text-[#009688]">graphic design</span>, and{" "}
          <span className="text-[#009688]">digital marketing</span>. Currently
          pursuing a Masters in AI while crafting modern solutions for
          businesses and organizations.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center flex-wrap gap-4 pt-4"
        >
          <Button
            asChild
            size="lg"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#009688] to-[#673AB7] text-white hover:shadow-[0_0_20px_rgba(103,58,183,0.4)] transition-all"
          >
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl hover:bg-[#009688]/10 hover:text-[#009688] transition-all"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="flex justify-center gap-6 pt-8"
        >
          {[
            { icon: Github, href: "https://github.com/ondieki1237" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:bellarinseth@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="text-muted-foreground hover:text-[#009688] transition-colors"
            >
              <Icon className="h-7 w-7" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
