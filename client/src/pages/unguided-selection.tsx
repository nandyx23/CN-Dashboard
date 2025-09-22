import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radio, Zap, Smartphone, Wifi } from "lucide-react";

export default function UnguidedSelection() {
  const scenarios = [
    {
      id: 'broadcasting-wireless',
      title: 'General Broadcasting or Wide-Area Wireless (e.g., radio, Wi-Fi)',
      description: 'Broadcast signals to many receivers over large areas, mobile communication',
      icon: Radio,
      color: 'text-blue-600'
    },
    {
      id: 'point-to-point-link',
      title: 'Point-to-Point, High-Speed Link (e.g., between buildings)',
      description: 'Focused high-speed wireless links with clear line of sight',
      icon: Zap,
      color: 'text-green-600'
    },
    {
      id: 'short-range-control',
      title: 'Short-Range Device Control (e.g., remote control)',
      description: 'Control devices from short distance without passing through walls',
      icon: Smartphone,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <title>Select Unguided Media Use Case</title>
      <meta 
        name="description" 
        content="Choose your specific use case for unguided transmission media to get personalized wireless communication recommendations."
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="flex items-center" data-testid="button-back-to-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Main Selection
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Wifi className="h-10 w-10 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-foreground">Unguided Media</h1>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-2">
            PLEASE SELECT YOUR USE CASE/SCENARIO
          </h2>
          <p className="text-muted-foreground">
            Choose the scenario that best matches your wireless communication requirements
          </p>
        </div>

        {/* Scenario Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon;
            return (
              <Card key={scenario.id} className="border-2 hover:border-primary transition-colors group">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <IconComponent className={`h-6 w-6 mr-2 ${scenario.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-3">
                      {scenario.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {scenario.description}
                    </p>
                    <Link href={`/scenario/${scenario.id}`}>
                      <Button className="w-full" data-testid={`button-select-${scenario.id}`}>
                        Select This Scenario
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Each scenario will provide specific wireless medium recommendations with detailed analysis of speed, cost, and interference characteristics.
          </p>
        </div>
      </div>
    </div>
  );
}