import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { MetricsGauges } from "@/components/metrics-gauges";
import { ChartsSection } from "@/components/charts-section";
import { DataTables } from "@/components/data-tables";
import { applicationData } from "@/data/transmission-media";
import { Lightbulb } from "lucide-react";

export default function Dashboard() {
  const [selectedApplication, setSelectedApplication] = useState<string>("lan");

  const currentData = applicationData[selectedApplication as keyof typeof applicationData];

  return (
    <div className="min-h-screen bg-background">
      <title>Transmission Media Dashboard</title>
      <meta 
        name="description" 
        content="Interactive educational dashboard comparing guided and unguided transmission media with charts, gauges, and detailed analysis for different applications."
      />
      
      <Sidebar 
        selectedApplication={selectedApplication}
        onApplicationSelect={setSelectedApplication}
        currentData={currentData}
      />

      <div className="main-content">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Guided vs Unguided Media Analysis</h2>
          <p className="text-muted-foreground">Interactive dashboard for comparing transmission media characteristics</p>
        </div>

        {/* Metrics Gauges */}
        <MetricsGauges currentData={currentData} />

        {/* Explanation Card */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <Lightbulb className="text-accent mr-2 h-5 w-5" />
            Medium Suitability Explanation
          </h3>
          <div className="text-muted-foreground leading-relaxed">
            {currentData ? 
              currentData.explanation : 
              "Select an application from the sidebar to see why a specific transmission medium is most suitable for that use case, including analysis of speed, cost, and interference characteristics."
            }
          </div>
        </div>

        {/* Charts */}
        <ChartsSection />

        {/* Data Tables */}
        <DataTables />
      </div>
    </div>
  );
}
