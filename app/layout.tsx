import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Seth Makori - Digital Solutions Expert",
  description:
    "Web Developer, SEO Specialist, Graphic Designer & Digital Marketer. Building modern digital experiences.",
  generator: "v0.app",
  metadataBase: new URL("https://codewithseth.co.ke"),
  keywords: ["Web Development", "SEO", "Graphic Design", "Digital Marketing", "Seth Makori", "Kenya"],
  authors: [{ name: "Seth Makori" }],
  creator: "Seth Makori",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codewithseth.co.ke",
    title: "Seth Makori - Digital Solutions Expert",
    description: "Web Developer, SEO Specialist, Graphic Designer & Digital Marketer. Building modern digital experiences.",
    siteName: "Seth Makori Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seth Makori - Digital Solutions Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seth Makori - Digital Solutions Expert",
    description: "Web Developer, SEO Specialist, Graphic Designer & Digital Marketer.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance / SEO hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="canonical" href="https://codewithseth.co.ke/" />
        {/* Favicon and app icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Web Developer, SEO Specialist, Graphic Designer & Digital Marketer. Building modern digital experiences." />
        {/* Optimize rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
