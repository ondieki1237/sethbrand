"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "James Ondiek",
    position: "Founder",
    company: "Boom Audio Visuals",
    quote: "Seth delivered an exceptional website for our event production company. The design perfectly captures our premium brand, and the site has significantly improved our online presence. Client inquiries have increased by over 60% since launch.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "John Green",
    position: "Director",
    company: "Amani Centre CBO",
    quote: "Working with Seth on our community organization website was a game-changer. He understood our mission to help communities during flooding and created a platform that effectively communicates our work. The site has helped us reach more people in need.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Dickson Cadiet",
    position: "Fitness Coach",
    company: "Cadiet Gym Coach",
    quote: "Seth built a professional website that showcases my gym coaching expertise perfectly. The clean design and easy navigation have helped me attract new clients consistently. My online bookings have tripled since the website went live!",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                              <div className="h-12 w-12 rounded-full mr-4 bg-primary/10 flex items-center justify-center">
                                <User className="h-6 w-6 text-primary/70" />
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
                      className={`h-2.5 rounded-full transition-all ${i === currentSlide ? "w-6 bg-primary" : "w-2.5 bg-primary/30"
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