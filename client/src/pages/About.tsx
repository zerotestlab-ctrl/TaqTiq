import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <Layout>
      <div className="py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 font-heading">About TaqTiq</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are building the future of strategic decision-making. TaqTiq bridges the gap between raw data and actionable strategy through the power of simulation.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-primary">Our Mission</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              TaqTiq’s goal is to help leaders, analysts, and innovators make smarter strategic decisions using accessible, high-fidelity simulations. 
            </p>
            <p>
              We believe that uncertainty shouldn't be a blocker—it should be a variable you can manage. By democratizing access to complex probabilistic modeling, we empower users to navigate the future with confidence.
            </p>
          </div>

          <Separator className="lg:col-span-2" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-primary">Concept Overview</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">What is TaqTiq?</h3>
              <p className="text-muted-foreground">
                TaqTiq is a web-based decision support system designed to model business scenarios. Unlike static spreadsheets, our platform treats every input as a range of possibilities, allowing for true risk assessment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Who is it for?</h3>
              <p className="text-muted-foreground">
                It is built for strategists, product managers, financial analysts, and anyone tasked with making high-stakes decisions under conditions of uncertainty.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Why is it useful?</h3>
              <p className="text-muted-foreground">
                Human intuition is poor at probability. TaqTiq provides the mathematical rigor needed to validate assumptions, ensuring that your "best guess" is backed by data.
              </p>
            </div>
          </div>

          <Separator className="lg:col-span-2" />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-primary">Future Vision</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              We envision a platform that goes beyond simple numeric inputs. In the future, TaqTiq will integrate with real-time data sources, offer collaborative scenario planning for teams, and utilize machine learning to suggest optimal strategies automatically.
            </p>
            <Card className="bg-primary/5 border-primary/20 mt-8">
              <CardContent className="pt-6">
                <p className="font-medium text-primary italic">
                  "The goal isn't just to predict the future, but to create the resilience to handle whatever future arrives."
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </Layout>
  );
}
