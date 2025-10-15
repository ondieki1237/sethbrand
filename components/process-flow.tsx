"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Calendar, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Contact Me",
    description: "Reach out and let's discuss your vision",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "We'll set up a time that works for you",
  },
  {
    icon: Lightbulb,
    title: "Plan Together",
    description: "Collaborate on strategy and design",
  },
  {
    icon: Rocket,
    title: "Build Your Presence",
    description: "Launch your digital brand to the world",
  },
]

export function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">How We Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A smooth, collaborative process to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeStep

            return (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div
                  className={`
                    neumorphic-card p-6 sm:p-8 rounded-2xl transition-all duration-700 ease-out h-full
                    ${isActive ? "scale-105 neumorphic-card-active" : "scale-100"}
                  `}
                >
                  <div
                    className={`
                      w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-4 sm:mb-6 flex items-center justify-center
                      transition-all duration-700 ease-out
                      ${isActive ? "bg-primary/20 neumorphic-icon-active" : "bg-primary/10"}
                    `}
                  >
                    <Icon
                      className={`
                        transition-all duration-700 ease-out
                        ${isActive ? "w-7 h-7 sm:w-8 sm:h-8 text-primary scale-110" : "w-6 h-6 sm:w-7 sm:h-7 text-primary/70"}
                      `}
                    />
                  </div>

                  <h3
                    className={`
                      text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-700
                      ${isActive ? "text-primary" : "text-foreground"}
                    `}
                  >
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>

                  <div
                    className={`
                      absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full
                      transition-all duration-700 ease-out
                      ${isActive ? "bg-primary scale-x-100 opacity-100" : "bg-primary/30 scale-x-0 opacity-0"}
                    `}
                  />
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 -translate-y-1/2 z-10" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
