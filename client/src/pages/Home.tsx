import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import heroBg from "@/assets/hero-bg.png";
import { ArrowRight, BarChart3, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src={heroBg} 
            alt="Strategic Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-6">
            MVP Prototype
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl font-heading text-foreground">
            Master Complexity. <br />
            <span className="text-primary">Optimize Outcomes.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            TaqTiq is a smart simulation and decision-support platform that helps you evaluate strategic moves, quantify risks, and predict outcomes with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/demo">
                Try Simulation Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base backdrop-blur-sm bg-background/50" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-heading">The Strategy Gap</h2>
            <p className="text-lg text-muted-foreground">
              Making complex strategic decisions is often based on intuition rather than data. 
              Traditional tools are static, disconnected, and fail to account for the dynamic nature of modern business risks.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-heading">The TaqTiq Solution</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide structured simulations and actionable insights to bridge the gap between strategy and execution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Smart Simulation Engine",
                desc: "Run thousands of scenario iterations in seconds to uncover hidden probabilities.",
                icon: <Zap className="h-6 w-6 text-primary" />
              },
              {
                title: "Scenario Comparison",
                desc: "Side-by-side analysis of conservative, balanced, and aggressive strategies.",
                icon: <BarChart3 className="h-6 w-6 text-primary" />
              },
              {
                title: "Risk Visualization",
                desc: "Clear visual indicators of potential downsides and volatility metrics.",
                icon: <ShieldCheck className="h-6 w-6 text-primary" />
              },
              {
                title: "Decision Support",
                desc: "AI-driven recommendations to guide you toward the optimal path.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow bg-muted/20">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-16 font-heading">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Input Scenario", desc: "Define your variables, constraints, and success metrics." },
              { step: "02", title: "Simulate Outcomes", desc: "Our engine processes probabilistic models to forecast results." },
              { step: "03", title: "Review Insights", desc: "Get a clear report with actionable recommendations." }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-xl font-bold text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold font-heading">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
