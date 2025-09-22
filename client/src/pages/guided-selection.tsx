import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Server, Factory, Tv, Globe, EthernetPort } from "lucide-react";

export default function GuidedSelection() {
  const scenarios = [
    {
      id: 'local-network',
      title: 'Local Network for Home or Office',
      description: 'Connect computers, printers and devices within a building',
      icon: Home,
      color: 'text-blue-600'
    },
    {
      id: 'backbone-network',
      title: 'High-Speed Network Backbone (Campus/Data Center)',
      description: 'Connect buildings, data centers, or city infrastructure',
      icon: Server,
      color: 'text-green-600'
    },
    {
      id: 'industrial-environment',
      title: 'Industrial or High-Interference Environment',
      description: 'Network in locations with electrical equipment and machinery',
      icon: Factory,
      color: 'text-orange-600'
    },
    {
      id: 'cable-tv-broadband',
      title: 'Connecting to a Cable TV or Broadband Service',
      description: 'Connect to cable television or broadband internet service',
      icon: Tv,
      color: 'text-purple-600'
    },
    {
      id: 'global-connection',
      title: 'Extremely Long-Distance/Global Connection',
      description: 'Establish connections between continents or countries',
      icon: Globe,
      color: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <title>Select Guided Media Use Case</title>
      <meta 
        name="description" 
        content="Choose your specific use case for guided transmission media to get personalized cable recommendations."
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
            <EthernetPort className="h-10 w-10 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-foreground">Guided Media</h1>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-2">
            PLEASE SELECT YOUR USE CASE/SCENARIO
          </h2>
          <p className="text-muted-foreground">
            Choose the scenario that best matches your networking requirements
          </p>
        </div>

        {/* Scenario Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon;
            return (
              <Card key={scenario.id} className="border-2 hover:border-primary transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-2">
                        <IconComponent className={`h-5 w-5 mr-2 ${scenario.color}`} />
                        <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                          {scenario.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {scenario.description}
                      </p>
                      <Link href={`/scenario/${scenario.id}`}>
                        <Button className="w-full" data-testid={`button-select-${scenario.id}`}>
                          Select This Scenario
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Each scenario will provide specific cable recommendations with detailed analysis of speed, cost, and interference characteristics.
          </p>
        </div>
      </div>
    </div>
  );
}