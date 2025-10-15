"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechNova Solutions",
    quote: "Working with Seth Digital transformed our online presence. The SEO strategy they implemented resulted in a 215% increase in organic traffic within just 4 months, and our lead generation has never been stronger.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chang",
    position: "CEO",
    company: "Greenvest Financial",
    quote: "Seth's team completely redesigned our website with a focus on user experience and conversion optimization. The results were immediate - our conversion rate jumped from 1.8% to 4.6%, and client feedback has been overwhelmingly positive.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "Small Business Owner",
    company: "Bloom Boutique",
    quote: "As a small business owner, I didn't have the budget for expensive marketing campaigns. Seth Digital created a targeted social media strategy that helped my boutique reach the right customers at a fraction of what I thought it would cost.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "James Wilson",
    position: "Operations Manager",
    company: "Urban Construction Group",
    quote: "Seth took the time to understand our industry and target audience. The local SEO campaign they created for our construction business has put us at the top of search results in our service area, bringing in qualified leads every day.",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    position: "E-commerce Director",
    company: "Fashion Forward",
    quote: "The digital marketing campaign Seth designed for our seasonal collection launch exceeded all expectations. We saw a 347% ROI and it was our most successful product launch to date. Their data-driven approach makes all the difference.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(testimonials.length / 2)
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Client Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array(totalSlides).fill(0).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial) => (
                        <Card key={testimonial.id} className="p-6 relative">
                          <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                          <div className="flex flex-col h-full">
                            <blockquote className="text-lg text-muted-foreground italic mb-6 relative z-10">
                              "{testimonial.quote}"
                            </blockquote>
                            
                            <div className="mt-auto flex items-center">
                              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                <img 
                                  src={testimonial.imageUrl} 
                                  alt={testimonial.name} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">
                                  {testimonial.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {testimonial.position}, {testimonial.company}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation controls */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-8 gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous testimonials</span>
                </Button>
                
                <div className="flex items-center gap-2">
                  {Array(totalSlides).fill(0).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2.5 rounded-full transition-all ${
                        i === currentSlide ? "w-6 bg-primary" : "w-2.5 bg-primary/30"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next testimonials</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}