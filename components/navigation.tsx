"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  
  const isHomePage = pathname === "/"
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close on outside click (now targets overlay specifically)
  useEffect(() => {
    const handleOverlayClick = (event: MouseEvent) => {
      if (event.target === overlayRef.current) {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOverlayClick)
      return () => document.removeEventListener("mousedown", handleOverlayClick)
    }
  }, [isMobileMenuOpen])

  // Focus trap (enhanced for overlay)
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
      
      firstElement?.focus()
      
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault()
            lastElement.focus()
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault()
            firstElement.focus()
          }
        } else if (event.key === 'Escape') {
          setIsMobileMenuOpen(false)
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('#') && !isHomePage) {
      router.push(`${pathname}${href}`)
      setTimeout(() => {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const navItems = [
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    { label: "Services", href: isHomePage ? "#services" : "/#services" },
    { label: "Projects", href: isHomePage ? "#projects" : "/#projects" },
    { label: "Experience", href: isHomePage ? "#experience" : "/#experience" },
    { label: "Blog", href: "/blog" },
    { label: "Tools", href: "/tools" },
    { label: "Design", href: "/design" },
    { label: "Case Studies", href: "/case-studies/boom-audio-visuals" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xl" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-16">
            <Link
              href="/"
              className="font-mono text-xl font-bold text-primary hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Go to home page"
            >
              SM
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="w-10 h-10" // Larger touch target
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
          onClick={(e) => e.target === overlayRef.current && setIsMobileMenuOpen(false)}
        >
          <div 
            ref={mobileMenuRef}
            className="absolute top-0 left-0 right-0 h-full bg-background border-r border-border shadow-2xl flex flex-col overflow-y-auto animate-slide-down"
            role="menu"
            aria-label="Mobile navigation menu"
            aria-modal="true"
          >
            {/* Close Button - Top Right */}
            <div className="flex items-center justify-end p-4 pt-16 border-b border-border"> {/* pt-16 to clear nav height */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-muted/50"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Nav Items - Centered for Landscape */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full max-w-xs text-base font-semibold text-muted-foreground hover:text-primary transition-colors duration-300 py-4 px-6 rounded-lg hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
              {/* Theme Toggle at Bottom for Easy Access */}
              <div className="mt-auto pb-8">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}