import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Info } from "lucide-react";
import { Speedometer } from "@/components/speedometer";
import { guidedScenarios, unguidedScenarios, type Scenario } from "@/data/scenarios";

export default function ScenarioResult() {
  const params = useParams<{ id: string }>();
  const scenarioId = params.id;

  // Find the scenario from both guided and unguided lists
  const allScenarios = [...guidedScenarios, ...unguidedScenarios];
  const scenario = allScenarios.find(s => s.id === scenarioId);

  if (!scenario) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Scenario Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested scenario could not be found.</p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getBackPath = () => {
    return scenario.type === 'guided' ? '/guided-selection' : '/unguided-selection';
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <title>{scenario.title} - Transmission Media Recommendation</title>
      <meta 
        name="description" 
        content={`Detailed analysis and recommendation for ${scenario.title}. Learn about ${scenario.recommendedMedium} with speed, cost, and interference metrics.`}
      />
      
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href={getBackPath()}>
            <Button variant="outline" className="flex items-center" data-testid="button-back-to-selection">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {scenario.type === 'guided' ? 'Guided' : 'Unguided'} Selection
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">{scenario.title}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
            {scenario.description}
          </p>
        </div>

        {/* Recommendation Card */}
        <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-3 text-primary">
                  Recommended Medium: {scenario.recommendedMedium}
                </h2>
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">
                    <strong>Why:</strong> {scenario.why}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Speedometers Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-6">Performance Characteristics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Speedometer
              title="Speed"
              value={scenario.speed.value}
              level={scenario.speed.level}
              description={scenario.speed.description}
              color="#22c55e"
              type="speed"
            />
            <Speedometer
              title="Cost"
              value={scenario.cost.value}
              level={scenario.cost.level}
              description={scenario.cost.description}
              color="#eab308"
              type="cost"
            />
            <Speedometer
              title="Interference"
              value={scenario.interference.value}
              level={scenario.interference.level}
              description={scenario.interference.description}
              color="#ef4444"
              type="interference"
            />
          </div>
        </div>

        {/* Summary Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-medium text-muted-foreground">Speed</div>
                <div className="text-lg font-bold">{scenario.speed.level}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-medium text-muted-foreground">Cost</div>
                <div className="text-lg font-bold">{scenario.cost.level}</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="font-medium text-muted-foreground">Interference</div>
                <div className="text-lg font-bold">{scenario.interference.level}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={getBackPath()}>
            <Button variant="outline" className="w-full sm:w-auto" data-testid="button-try-another-scenario">
              Try Another Scenario
            </Button>
          </Link>
          <Link href="/">
            <Button className="w-full sm:w-auto" data-testid="button-start-over">
              Start Over
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}