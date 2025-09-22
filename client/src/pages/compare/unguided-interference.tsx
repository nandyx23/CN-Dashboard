import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function UnguidedInterferenceComparison() {
  return (
    <ComparisonChart
      title="Unguided Media Interference Comparison"
      subtitle="Compare electromagnetic interference susceptibility across unguided transmission media types"
      data={chartData.unguidedInterferenceComparison}
      dataKey="interference"
      yAxisLabel="Interference Level"
      color="hsl(0, 72%, 51%)"
      description="Analysis of electromagnetic interference susceptibility for Radio Waves, Microwaves, and Infrared communication systems. Lower values indicate better resistance to interference."
    />
  );
}