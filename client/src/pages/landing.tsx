import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EthernetPort, Wifi, BarChart3, RadioTower } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background p-8">
      <title>Transmission Media Selection Guide</title>
      <meta 
        name="description" 
        content="Interactive guide to select the best transmission media for your specific use case. Choose between guided and unguided media options with detailed analysis."
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <RadioTower className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Transmission Media Guide</h1>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-2">
            PLEASE SELECT WHETHER YOU WANT TO USE GUIDED OR UNGUIDED MEDIA
          </h2>
          <p className="text-muted-foreground">
            Choose your transmission media type to get personalized recommendations for your specific use case
          </p>
        </div>

        {/* Main Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Guided Media Card */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8 text-center">
              <EthernetPort className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">GUIDED MEDIA</h3>
              <p className="text-muted-foreground mb-6">
                Physical cables and wires for reliable, high-speed connections. 
                Ideal for permanent installations and secure data transmission.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Includes: UTP, STP, Coaxial, Fiber Optic cables
              </p>
              <Link href="/guided-selection">
                <Button size="lg" className="w-full text-lg" data-testid="button-select-guided">
                  SELECT GUIDED MEDIA
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Unguided Media Card */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8 text-center">
              <Wifi className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">UNGUIDED MEDIA</h3>
              <p className="text-muted-foreground mb-6">
                Wireless transmission through air using electromagnetic waves. 
                Perfect for mobile applications and areas where cables aren't practical.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Includes: Radio Waves, Microwaves, Infrared signals
              </p>
              <Link href="/unguided-selection">
                <Button size="lg" className="w-full text-lg" data-testid="button-select-unguided">
                  SELECT UNGUIDED MEDIA
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-8" />

        {/* Comparison Charts Section */}
        <div className="text-center mb-8">
          <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
          <h3 className="text-xl font-semibold mb-2">Compare Transmission Media</h3>
          <p className="text-muted-foreground">
            Explore detailed comparisons between different transmission media types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Guided Media Comparisons */}
          <div className="space-y-2">
            <h4 className="font-medium text-center text-muted-foreground">Guided Media</h4>
            <Link href="/compare/guided-cost">
              <Button variant="outline" className="w-full" data-testid="link-guided-cost">
                Cost Comparison
              </Button>
            </Link>
            <Link href="/compare/guided-speed">
              <Button variant="outline" className="w-full" data-testid="link-guided-speed">
                Speed Comparison
              </Button>
            </Link>
            <Link href="/compare/guided-interference">
              <Button variant="outline" className="w-full" data-testid="link-guided-interference">
                Interference Comparison
              </Button>
            </Link>
          </div>

          {/* Unguided Media Comparisons */}
          <div className="space-y-2">
            <h4 className="font-medium text-center text-muted-foreground">Unguided Media</h4>
            <Link href="/compare/unguided-cost">
              <Button variant="outline" className="w-full" data-testid="link-unguided-cost">
                Cost Comparison
              </Button>
            </Link>
            <Link href="/compare/unguided-speed">
              <Button variant="outline" className="w-full" data-testid="link-unguided-speed">
                Speed Comparison
              </Button>
            </Link>
            <Link href="/compare/unguided-interference">
              <Button variant="outline" className="w-full" data-testid="link-unguided-interference">
                Interference Comparison
              </Button>
            </Link>
          </div>

          {/* Overall Comparisons */}
          <div className="space-y-2">
            <h4 className="font-medium text-center text-muted-foreground">Overall</h4>
            <Link href="/compare/overall-cost">
              <Button variant="outline" className="w-full" data-testid="link-overall-cost">
                Guided vs Unguided Cost
              </Button>
            </Link>
            <Link href="/compare/overall-speed">
              <Button variant="outline" className="w-full" data-testid="link-overall-speed">
                Guided vs Unguided Speed
              </Button>
            </Link>
            <Link href="/compare/overall-interference">
              <Button variant="outline" className="w-full" data-testid="link-overall-interference">
                Guided vs Unguided Interference
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}