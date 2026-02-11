import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Loader2, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

type StrategyType = "conservative" | "balanced" | "aggressive";

interface SimulationResult {
  probability: number;
  riskScore: number;
  recommendation: string;
  expectedReturn: number;
}

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SimulationResult | null>(null);
  
  // Inputs
  const [scenarioValue, setScenarioValue] = useState<string>("100000");
  const [strategy, setStrategy] = useState<StrategyType>("balanced");
  const [riskTolerance, setRiskTolerance] = useState<number[]>([50]);

  const runSimulation = () => {
    setLoading(true);
    setResult(null);

    // Artificial delay to simulate processing
    setTimeout(() => {
      const baseValue = parseInt(scenarioValue) || 0;
      const riskFactor = riskTolerance[0] / 100;
      
      let probability = 0;
      let riskScore = 0;
      let recommendation = "";
      let multiplier = 1;

      // Mock Logic
      if (strategy === "conservative") {
        probability = 85 - (riskFactor * 10);
        riskScore = 20 + (riskFactor * 10);
        multiplier = 1.1;
        recommendation = "High certainty of modest returns. Good for capital preservation.";
      } else if (strategy === "aggressive") {
        probability = 45 + (riskFactor * 20);
        riskScore = 80 - (riskFactor * 10);
        multiplier = 1.8;
        recommendation = "High potential upside but significant volatility. Monitor closely.";
      } else {
        // Balanced
        probability = 65 + (riskFactor * 5);
        riskScore = 50;
        multiplier = 1.4;
        recommendation = "Optimal balance of risk and reward for current market conditions.";
      }

      setResult({
        probability: Math.min(Math.max(probability, 0), 100),
        riskScore: Math.min(Math.max(riskScore, 0), 100),
        recommendation,
        expectedReturn: baseValue * multiplier
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="py-12 bg-muted/20 border-b">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold font-heading mb-2">Simulation Demo</h1>
          <p className="text-muted-foreground">Configure your scenario parameters and run the engine to see predictive outcomes.</p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Input Panel */}
          <Card className="lg:col-span-4 h-fit border-t-4 border-t-primary shadow-md">
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Define simulation parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="value">Scenario Value ($)</Label>
                <Input 
                  id="value" 
                  type="number" 
                  value={scenarioValue}
                  onChange={(e) => setScenarioValue(e.target.value)}
                  placeholder="Enter amount..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="strategy">Strategy Type</Label>
                <Select value={strategy} onValueChange={(v) => setStrategy(v as StrategyType)}>
                  <SelectTrigger id="strategy">
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative (Low Risk)</SelectItem>
                    <SelectItem value="balanced">Balanced (Moderate)</SelectItem>
                    <SelectItem value="aggressive">Aggressive (High Growth)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Risk Tolerance</Label>
                  <span className="text-sm text-muted-foreground">{riskTolerance[0]}%</span>
                </div>
                <Slider 
                  value={riskTolerance} 
                  onValueChange={setRiskTolerance} 
                  max={100} 
                  step={1} 
                  className="py-4"
                />
                <p className="text-xs text-muted-foreground">
                  Higher tolerance allows for more volatility in the simulation engine.
                </p>
              </div>

              <Button 
                onClick={runSimulation} 
                className="w-full text-lg h-12 mt-4" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Running Engine...
                  </>
                ) : (
                  "Run Simulation"
                )}
              </Button>

            </CardContent>
          </Card>

          {/* Results Panel */}
          <div className="lg:col-span-8 space-y-6">
            {!result && !loading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed rounded-xl bg-muted/10 text-muted-foreground p-8 text-center">
                <TrendingUp className="h-16 w-16 mb-4 opacity-20" />
                <h3 className="text-xl font-medium mb-2">Ready to Simulate</h3>
                <p className="max-w-md">Enter your parameters on the left and click "Run Simulation" to generate insights.</p>
              </div>
            )}

            {loading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center rounded-xl bg-muted/5 p-8">
                <div className="space-y-4 w-full max-w-md text-center">
                  <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                  <p className="text-lg font-medium animate-pulse">Processing probabilistic models...</p>
                  <div className="space-y-2">
                    <Progress value={33} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Initializing variables</span>
                      <span>Calculating variations</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {result && !loading && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                
                {/* Top Metrics */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Success Probability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">
                        {result.probability.toFixed(1)}%
                      </div>
                      <Progress value={result.probability} className="h-2 mt-3" />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Risk Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`text-3xl font-bold ${result.riskScore > 70 ? 'text-destructive' : 'text-orange-500'}`}>
                        {result.riskScore.toFixed(0)}/100
                      </div>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <AlertTriangle className="h-3 w-3 mr-1" /> Volatility Index
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Projected Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-emerald-600">
                        ${result.expectedReturn.toLocaleString()}
                      </div>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" /> Est. outcome
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Analysis */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                      <CardTitle>Strategy Recommendation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-foreground/80 font-medium">
                      {result.recommendation}
                    </p>
                  </CardContent>
                </Card>

                {/* Visualizations (Simple CSS Bars) */}
                <Card>
                  <CardHeader>
                    <CardTitle>Distribution Analysis</CardTitle>
                    <CardDescription>Outcome spread across 1,000 simulated iterations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Best Case</span>
                          <span className="font-medium text-emerald-600">Top 5%</span>
                        </div>
                        <div className="h-8 bg-muted rounded-md overflow-hidden flex">
                           <div className="bg-emerald-500/20 w-full h-full relative">
                             <div className="absolute top-0 bottom-0 left-0 bg-emerald-500" style={{ width: `${result.probability * 0.9}%` }}></div>
                           </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Base Case</span>
                          <span className="font-medium text-primary">Median</span>
                        </div>
                        <div className="h-8 bg-muted rounded-md overflow-hidden flex">
                           <div className="bg-primary/20 w-full h-full relative">
                             <div className="absolute top-0 bottom-0 left-0 bg-primary" style={{ width: `${result.probability}%` }}></div>
                           </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Worst Case</span>
                          <span className="font-medium text-destructive">Bottom 5%</span>
                        </div>
                        <div className="h-8 bg-muted rounded-md overflow-hidden flex">
                           <div className="bg-destructive/20 w-full h-full relative">
                             <div className="absolute top-0 bottom-0 left-0 bg-destructive" style={{ width: `${result.probability * 0.4}%` }}></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}
