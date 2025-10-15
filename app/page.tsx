import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { ProcessFlow } from "@/components/process-flow"
import { GraphicsShowcase } from "@/components/graphics-showcase"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Blog } from "@/components/blog"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ProcessFlow />
      <CaseStudies />
      <GraphicsShowcase />
      <Projects />
      <Testimonials />
      <Experience />
      <Blog />
      <Contact />
    </main>
  )
}
