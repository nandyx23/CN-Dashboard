import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function GuidedInterferenceComparison() {
  return (
    <ComparisonChart
      title="Guided Media Interference Comparison"
      subtitle="Compare electromagnetic interference susceptibility across guided transmission media types"
      data={chartData.guidedInterferenceComparison}
      dataKey="interference"
      yAxisLabel="Interference Level"
      color="hsl(0, 72%, 51%)"
      description="Analysis of electromagnetic interference susceptibility for UTP, STP, Coaxial, and Fiber Optic cables. Lower values indicate better resistance to interference."
    />
  );
}