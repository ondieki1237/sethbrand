import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, LineChart, Search, Layout, PenTool, Globe, BarChart3, Mail } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

const serviceCategories = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    description: "Custom-designed, high-performance websites tailored to your business goals.",
    icon: Layout,
    services: [
      {
        title: "Website Design & Development",
        description: "Custom, responsive websites built with modern technologies that look great on all devices.",
        features: [
          "Strategic UX/UI design",
          "Mobile-first responsive development",
          "WordPress, Next.js, or custom CMS",
          "E-commerce solutions",
          "Accessibility compliance",
          "Performance optimization"
        ]
      },
      {
        title: "Website Redesign",
        description: "Transform your outdated website into a modern, conversion-focused digital asset.",
        features: [
          "UX audit and analysis",
          "Brand-aligned visual refresh",
          "Conversion funnel optimization",
          "Content restructuring",
          "Technical improvements",
          "Full migration support"
        ]
      },
      {
        title: "Landing Page Design",
        description: "High-converting landing pages designed to turn visitors into customers.",
        features: [
          "Conversion-focused design",
          "A/B testing",
          "Compelling copy",
          "Call-to-action optimization",
          "Mobile optimization",
          "Integration with marketing tools"
        ]
      }
    ]
  },
  {
    id: "seo-optimization",
    title: "SEO & Search Marketing",
    description: "Data-driven strategies to improve visibility and drive qualified organic traffic.",
    icon: Search,
    services: [
      {
        title: "Search Engine Optimization",
        description: "Comprehensive SEO strategies to improve rankings and drive targeted organic traffic.",
        features: [
          "Technical SEO audit",
          "On-page optimization",
          "Content strategy",
          "Link building",
          "Local SEO",
          "Monthly reporting & analysis"
        ]
      },
      {
        title: "Local SEO",
        description: "Dominate local search results and attract more customers from your service area.",
        features: [
          "Google Business Profile optimization",
          "Local citation building",
          "Review management",
          "Local content strategy",
          "Competitor analysis",
          "Local link building"
        ]
      },
      {
        title: "E-commerce SEO",
        description: "Specialized SEO strategies to increase visibility and sales for online stores.",
        features: [
          "Product page optimization",
          "Category structure optimization",
          "Schema markup implementation",
          "Shopping feed optimization",
          "Conversion rate optimization",
          "Ongoing keyword research"
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic campaigns that connect with your audience and drive measurable results.",
    icon: BarChart3,
    services: [
      {
        title: "Paid Advertising (PPC)",
        description: "Strategic paid campaigns that deliver measurable ROI across multiple platforms.",
        features: [
          "Google Ads management",
          "Social media advertising",
          "Display & remarketing",
          "Audience targeting",
          "Ad creative development",
          "Performance analysis & optimization"
        ]
      },
      {
        title: "Social Media Marketing",
        description: "Build brand awareness and engagement through strategic social media presence.",
        features: [
          "Platform strategy & management",
          "Content creation & scheduling",
          "Community management",
          "Paid social campaigns",
          "Influencer partnerships",
          "Performance analytics"
        ]
      },
      {
        title: "Email Marketing",
        description: "Targeted email campaigns that nurture leads and drive conversions.",
        features: [
          "Campaign strategy",
          "Email template design",
          "List segmentation",
          "Automated sequences",
          "A/B testing",
          "Performance reporting"
        ]
      }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Compelling content that resonates with your audience and drives engagement.",
    icon: PenTool,
    services: [
      {
        title: "Content Strategy & Creation",
        description: "Strategic content that builds authority and engages your target audience.",
        features: [
          "Content strategy development",
          "Blog writing & optimization",
          "Long-form content",
          "Keyword research",
          "Editorial calendar",
          "Content performance analysis"
        ]
      },
      {
        title: "Copywriting",
        description: "Persuasive copy that converts visitors into customers across all touchpoints.",
        features: [
          "Website copy",
          "Landing page copy",
          "Email sequences",
          "Product descriptions",
          "Brand messaging",
          "Call-to-action optimization"
        ]
      },
      {
        title: "Graphic Design",
        description: "Visual content that enhances your brand and captures audience attention.",
        features: [
          "Social media graphics",
          "Digital ads",
          "Infographics",
          "Presentation design",
          "Email templates",
          "Brand collateral"
        ]
      }
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Our Digital Marketing Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions designed to help your business grow online. Each service is tailored to meet your specific goals and deliver measurable results.
              </p>
            </div>
            
            <div className="space-y-24 pt-8">
              {serviceCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                      <div className="pt-4">
                        <Button asChild variant="outline">
                          <Link href="/contact">
                            Get a Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="md:col-span-8 space-y-6">
                      {category.services.map((service, index) => (
                        <Card key={index} className="p-6 hover:border-primary transition-colors">
                          <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                          
                          <div className="grid sm:grid-cols-2 gap-2">
                            {service.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8 text-center mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Our team can create a tailored marketing strategy that aligns with your specific business goals,
                target audience, and budget. Let's discuss how we can help you achieve success.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}