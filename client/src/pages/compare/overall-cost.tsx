import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function OverallCostComparison() {
  return (
    <ComparisonChart
      title="Overall Cost Comparison: Guided vs Unguided"
      subtitle="Compare average implementation costs between guided and unguided transmission media"
      data={chartData.overallCostComparison}
      dataKey="cost"
      yAxisLabel="Average Cost Level"
      color="hsl(45, 93%, 47%)"
      description="Overall comparison of average implementation costs between guided media (cables) and unguided media (wireless). Based on average values across all media types in each category."
    />
  );
}