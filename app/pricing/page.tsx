"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Pricing | Transparent Digital Marketing Plans",
  description: "Starter, Professional, and Enterprise plans with clear inclusions for web, SEO, and marketing.",
  alternates: { canonical: "/pricing" },
}

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started with digital marketing.",
    price: {
      monthly: 999,
      yearly: 899
    },
    features: [
      { name: "Website audit and basic optimization", included: true },
      { name: "Local SEO setup", included: true },
      { name: "Google Business Profile optimization", included: true },
      { name: "Monthly performance report", included: true },
      { name: "Social media setup (2 platforms)", included: true },
      { name: "Content creation (4 posts/month)", included: true },
      { name: "Email marketing setup", included: false },
      { name: "Paid advertising management", included: false },
      { name: "Conversion rate optimization", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    callToAction: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    description: "Our most popular plan for growing businesses seeking comprehensive digital marketing.",
    price: {
      monthly: 2499,
      yearly: 2199
    },
    features: [
      { name: "Website audit and advanced optimization", included: true },
      { name: "Complete SEO strategy", included: true },
      { name: "Google Business Profile optimization", included: true },
      { name: "Weekly performance reports", included: true },
      { name: "Social media management (4 platforms)", included: true },
      { name: "Content creation (12 posts/month)", included: true },
      { name: "Email marketing campaigns", included: true },
      { name: "Paid advertising management (up to $5k spend)", included: true },
      { name: "Conversion rate optimization", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    callToAction: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for larger businesses with advanced marketing needs.",
    price: {
      monthly: 4999,
      yearly: 4499
    },
    features: [
      { name: "Full website audit and optimization", included: true },
      { name: "Advanced SEO strategy and implementation", included: true },
      { name: "Google Business Profile optimization", included: true },
      { name: "Real-time reporting dashboard", included: true },
      { name: "Full social media management (all platforms)", included: true },
      { name: "Custom content creation (25+ posts/month)", included: true },
      { name: "Advanced email marketing automation", included: true },
      { name: "Paid advertising management (unlimited spend)", included: true },
      { name: "Advanced CRO & A/B testing", included: true },
      { name: "Senior dedicated account manager", included: true },
    ],
    callToAction: "Contact Us",
    popular: false
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Transparent Pricing Plans</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that's right for your business goals and budget. All plans include our core digital marketing expertise.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full border border-border p-1 mb-8">
                <button 
                  type="button"
                  className="relative rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground"
                >
                  Monthly
                </button>
                <button 
                  type="button"
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground"
                >
                  Yearly <span className="text-primary">Save 10%</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col border-border overflow-hidden ${
                    plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="text-xs font-semibold bg-primary text-primary-foreground py-1 px-3 rounded-bl-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">{plan.name}</h2>
                    <p className="text-muted-foreground">{plan.description}</p>
                    
                    <div className="pt-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-foreground">${plan.price.monthly}</span>
                        <span className="ml-1 text-muted-foreground">/month</span>
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full ${plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                    >
                      {plan.callToAction}
                    </Button>
                  </div>
                  
                  <div className="px-6 pt-2 pb-6">
                    <div className="border-t border-border pt-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground shrink-0 mr-2" />
                            )}
                            <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8 text-center mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                We understand that every business is unique. Contact us for a tailored digital marketing strategy
                that perfectly fits your specific requirements and budget.
              </p>
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}