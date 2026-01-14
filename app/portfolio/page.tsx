"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    src: "/pro_samples/heroesforher_campaign.webp",
    title: "Heroes For Her Campaign",
    category: "Social Campaign",
    description: "Empowerment campaign design for women's rights and equality"
  },
  {
    id: 2,
    src: "/pro_samples/wedding_card.webp",
    title: "Wedding Invitation Card",
    category: "Event Design",
    description: "Elegant wedding invitation with modern typography"
  },
  {
    id: 3,
    src: "/pro_samples/wedding_poster.webp",
    title: "Wedding Poster",
    category: "Event Design",
    description: "Beautiful wedding announcement poster design"
  },
  {
    id: 4,
    src: "/pro_samples/agosti.webp",
    title: "Agosti Design",
    category: "Brand Identity",
    description: "Creative brand identity and visual design"
  },
  {
    id: 5,
    src: "/pro_samples/thankyou.webp",
    title: "Thank You Card",
    category: "Greeting Card",
    description: "Appreciation card with heartfelt design elements"
  },
  {
    id: 6,
    src: "/pro_samples/mm.webp",
    title: "MM Design",
    category: "Graphics",
    description: "Creative graphic design showcase"
  },
  {
    id: 7,
    src: "/pro_samples/36.webp",
    title: "Design Sample 36",
    category: "Creative Work",
    description: "Professional design work showcase"
  },
  {
    id: 8,
    src: "/pro_samples/38.webp",
    title: "Design Sample 38",
    category: "Creative Work",
    description: "Innovative design solution"
  },
  {
    id: 9,
    src: "/pro_samples/39.webp",
    title: "Design Sample 39",
    category: "Creative Work",
    description: "Modern design approach"
  },
]

const categories = ["All", ...new Set(portfolioItems.map(item => item.category))]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Design <span className="bg-gradient-to-r from-[#009688] via-[#673AB7] to-[#2196F3] bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my creative work in graphic design, branding, and visual communication
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category
                  ? "bg-gradient-to-r from-[#009688] to-[#673AB7] text-white shadow-lg shadow-primary/30"
                  : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground border border-border"
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/80 text-white rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No designs found in this category</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl mx-auto">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/80 text-white rounded-full mb-3">
                {lightboxImage.category}
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                {lightboxImage.title}
              </h2>
              <p className="text-gray-300">
                {lightboxImage.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
