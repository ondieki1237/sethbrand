"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const graphicsItems = [
  {
    type: "Branding",
    title: "Modern Brand Identity",
    image: "/modern-brand-identity-design-with-geometric-shapes.jpg",
  },
  {
    type: "Logo",
    title: "Tech Startup Logo",
    image: "/minimalist-tech-startup-logo-design.jpg",
  },
  {
    type: "Graphics",
    title: "Social Media Graphics",
    image: "/vibrant-social-media-post-design.jpg",
  },
  {
    type: "Branding",
    title: "Corporate Branding",
    image: "/professional-corporate-branding-materials.jpg",
  },
  {
    type: "Logo",
    title: "Restaurant Logo",
    image: "/elegant-restaurant-logo-design.jpg",
  },
  {
    type: "Graphics",
    title: "Marketing Materials",
    image: "/creative-marketing-poster-design.jpg",
  },
]

export function GraphicsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % graphicsItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % graphicsItems.length
      items.push({ ...graphicsItems[index], position: i })
    }
    return items
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Creative Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Branding, logos, and graphics that make an impact
          </p>
          <a
            href="https://ondieki1237.github.io/sethbellarin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary hover:underline"
          >
            View Full Portfolio →
          </a>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          {getVisibleItems().map((item, idx) => {
            const position = item.position
            const isCenter = position === 1

            return (
              <div
                key={`${item.title}-${idx}`}
                className={`
                  absolute transition-all duration-1000 ease-out
                  ${position === 0 ? "left-0 scale-75 opacity-40 -rotate-6" : ""}
                  ${position === 1 ? "left-1/2 -translate-x-1/2 scale-100 opacity-100 z-10" : ""}
                  ${position === 2 ? "right-0 scale-75 opacity-40 rotate-6" : ""}
                `}
              >
                <div
                  className={`
                    neumorphic-card rounded-2xl overflow-hidden
                    transition-all duration-1000
                    ${isCenter ? "w-80 h-96 neumorphic-card-active" : "w-64 h-80"}
                  `}
                >
                  <div className="relative w-full h-3/4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-mono text-primary mb-2 block">{item.type}</span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {graphicsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-500
                ${index === currentIndex ? "bg-primary w-8" : "bg-primary/30"}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
