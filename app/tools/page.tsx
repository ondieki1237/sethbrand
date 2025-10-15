import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, BarChart4, PieChart, TrendingUp, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Marketing Tools | Seth Makori - Digital Marketing Professional",
  description: "Free marketing tools to help you analyze and optimize your digital marketing efforts. ROI calculators, analytics tools, and more.",
};

export default function ToolsPage() {
  const tools = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      name: "Marketing ROI Calculator",
      description: "Calculate the potential return on investment for your digital marketing campaigns across different channels.",
      path: "/tools/marketing-calculator",
      available: true,
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary/60" />,
      name: "SEO Performance Analyzer",
      description: "Analyze your website's SEO performance and get recommendations for improvement.",
      path: "#",
      available: false,
    },
    {
      icon: <PieChart className="h-8 w-8 text-primary/60" />,
      name: "Ad Budget Optimizer",
      description: "Optimize your advertising budget allocation across different platforms and campaigns.",
      path: "#",
      available: false,
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary/60" />,
      name: "Conversion Rate Optimizer",
      description: "Identify opportunities to improve your website's conversion rates and user experience.",
      path: "#",
      available: false,
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Free Marketing Tools</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Optimize your marketing efforts with our suite of free digital marketing tools
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {tools.map((tool, i) => (
                <Card key={i} className={`overflow-hidden ${!tool.available ? 'opacity-70' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="mb-3">{tool.icon}</div>
                    <CardTitle>{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-3">
                    {tool.available ? (
                      <Link href={tool.path} className="w-full">
                        <Button className="w-full">
                          Try Tool <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button disabled className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="bg-muted/30 rounded-lg p-8 text-center space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Need a Custom Marketing Solution?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team can develop tailored marketing strategies and custom tools designed specifically for your business needs.
              </p>
              <Button size="lg" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}