import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function OverallInterferenceComparison() {
  return (
    <ComparisonChart
      title="Overall Interference Comparison: Guided vs Unguided"
      subtitle="Compare average electromagnetic interference susceptibility between guided and unguided transmission media"
      data={chartData.overallInterferenceComparison}
      dataKey="interference"
      yAxisLabel="Average Interference Level"
      color="hsl(0, 72%, 51%)"
      description="Overall comparison of average electromagnetic interference susceptibility between guided media (cables) and unguided media (wireless). Based on average values across all media types in each category."
    />
  );
}