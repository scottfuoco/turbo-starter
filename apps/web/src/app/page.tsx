import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowRight, GitMerge, Minimize2, Layout, Palette, Database } from "lucide-react";
import Link from "next/link";
import type React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GitMerge className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TurboStarter 🚀</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#get-started" className="hover:text-primary transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="https://github.com/scottfuoco/turbo-starter" className="hover:text-primary transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Minimalist Next.js Turborepo Starter 🚀</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Build scalable applications with a clean, efficient, and powerful stack 🛠️</p>
          <Button asChild size="lg">
            <Link href="#get-started">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features 🌟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Minimize2 className="h-8 w-8 text-primary" />}
              title="Minimalistic Design"
              description="Clean, efficient codebase with a focus on simplicity and performance. 🎯"
            />
            <FeatureCard
              icon={<GitMerge className="h-8 w-8 text-primary" />}
              title="Turborepo Powered"
              description="Leverage Turborepo for lightning-fast builds and efficient monorepo management. ⚡"
            />
            <FeatureCard
              icon={<Layout className="h-8 w-8 text-primary" />}
              title="Next.js + Tailwind CSS"
              description="Combine the power of Next.js with the flexibility of Tailwind CSS for rapid UI development. 🎨"
            />
            <FeatureCard
              icon={<Palette className="h-8 w-8 text-primary" />}
              title="shadcn/ui Components"
              description="Beautiful, accessible, and customizable components ready for your project. 🧩"
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-primary" />}
              title="PostgreSQL Integration"
              description="Built-in PostgreSQL setup with Drizzle ORM. Check out /postgres route for implementation details. 🗄️"
            />
          </div>
        </section>

        <section id="get-started" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started? 🚀</h2>
          <p className="text-xl text-muted-foreground mb-8">Clone the repository and start building your next big project today!</p>
          <div className="bg-muted p-4 rounded-md inline-block">
            <code className="text-sm md:text-base">git clone https://github.com/scottfuoco/turbo-starter.git</code>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
