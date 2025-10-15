import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Haven Furnitures",
      description:
        "Modern e-commerce website with admin dashboard for furniture business. Features product management, image uploads, and streamlined customer experience.",
      image: "/modern-furniture-website-dashboard.jpg",
      tags: ["Next.js", "Dashboard", "E-commerce"],
      link: "https://haven-furnitures.vercel.app/",
    },
    {
      title: "Amani Centre CBO",
      description:
        "Community-based organization website helping communities during flooding and adverse climatic conditions. Built to facilitate aid and community support.",
      image: "/community-organization-website.jpg",
      tags: ["Next.js", "NGO", "Community"],
      link: "https://www.amanicentercbo.org/",
    },
    {
      title: "WOMD Digitech",
      description:
        "Kenyan domain registration platform built during KENIC hackathon. Includes sandbox testing environment and Android APK for mobile access.",
      image: "/domain-registration-website.jpg",
      tags: ["Hackathon", "Domain", "Android"],
      link: "http://womd.co.ke/",
    },
    {
      title: "Cadiet Gym Coach",
      description:
        "Professional website showcasing gym coaching expertise, nutrition guidance, and bodybuilding programs. Clean design focused on fitness and wellness.",
      image: "/fitness-gym-coach-website.jpg",
      tags: ["Next.js", "Fitness", "Portfolio"],
      link: "https://cadiet.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-muted-foreground max-w-2xl">
              A selection of websites and applications I've built for clients and organizations
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex`}
              >
                <div className="md:w-1/2 relative overflow-hidden bg-secondary/50">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
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
