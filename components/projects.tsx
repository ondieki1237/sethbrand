import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const publicProjects = [
    {
      title: "Boom Audio Visuals",
      description:
        "Premium event production company website showcasing audiovisual services across Africa. Features elegant design, service galleries, and event portfolio with 500+ events produced and 15+ years of experience.",
      image: "/boom-audio-visuals-website.webp",
      tags: ["Next.js", "Events", "Production"],
      link: "https://boomevents.co.ke/",
    },
    {
      title: "Haven Furnitures",
      description:
        "Modern e-commerce website with admin dashboard for furniture business. Features product management, image uploads, and streamlined customer experience.",
      image: "/modern-furniture-website.webp",
      tags: ["Next.js", "Dashboard", "E-commerce"],
      link: "https://www.havenlivingfurniture.co.ke/",
    },
    {
      title: "Amani Centre CBO",
      description:
        "Community-based organization website helping communities during flooding and adverse climatic conditions. Built to facilitate aid and community support.",
      image: "/community-organization-website.webp",
      tags: ["Next.js", "NGO", "Community"],
      link: "https://www.amanicentercbo.org/",
    },
    {
      title: "WOMD Digitech",
      description:
        "Kenyan domain registration platform built during KENIC hackathon. Includes sandbox testing environment and Android APK for mobile access.",
      image: "/domain-registration-website.webp",
      tags: ["Hackathon", "Domain", "Android"],
      link: "http://womd.co.ke/",
    },
    {
      title: "Cadiet Gym Coach",
      description:
        "Professional website showcasing gym coaching expertise, nutrition guidance, and bodybuilding programs. Clean design focused on fitness and wellness.",
      image: "/fitness-gym-coach-website.webp",
      tags: ["Next.js", "Fitness", "Portfolio"],
      link: "https://cadiet.vercel.app/",
    },
  ]

  const privateProjects = [
    {
      title: "HR Management System",
      description:
        "Comprehensive human resource management system for Accord Medicals. Features employee management, attendance tracking, payroll processing, and performance evaluation.",
      tags: ["Enterprise", "HR", "Dashboard"],
      client: "Accord Medicals",
    },
    {
      title: "Sales Management System",
      description:
        "Advanced sales management platform for Accord Medical Supplies. Includes inventory tracking, order processing, customer relationship management, and sales analytics.",
      tags: ["Enterprise", "Sales", "CRM"],
      client: "Accord Medical Supplies",
    },
    {
      title: "Machine Servicing System",
      description:
        "Comprehensive servicing system managing 600+ medical equipment installations countrywide. Features CRM integration, engineer mobile application, maintenance scheduling, and real-time tracking.",
      tags: ["Enterprise", "IoT", "Mobile App"],
      client: "Accord Medical",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Public Projects */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground max-w-2xl">
                A selection of websites and applications I've built for clients and organizations
              </p>
            </div>

            <div className="grid gap-8">
              {publicProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className={`overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex flex-col md:flex`}
                >
                  <div className="md:w-1/2 relative overflow-hidden bg-secondary/50 h-64 md:h-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild variant="default" size="sm">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Site
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Private Enterprise Projects */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Enterprise Solutions</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground max-w-2xl">
                Custom enterprise systems built for private clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {privateProjects.map((project) => (
                <Card key={project.title} className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Design Portfolio Link */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Want to see my graphic design work?</p>
            <Button asChild variant="outline" size="lg">
              <a href="https://ondieki1237.github.io/sethbellarin/" target="_blank" rel="noopener noreferrer">
                View Design Portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
