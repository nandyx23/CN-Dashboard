import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function UnguidedCostComparison() {
  return (
    <ComparisonChart
      title="Unguided Media Cost Comparison"
      subtitle="Compare implementation costs across unguided transmission media types"
      data={chartData.unguidedCostComparison}
      dataKey="cost"
      yAxisLabel="Cost Level"
      color="hsl(45, 93%, 47%)"
      description="Analysis of relative implementation costs for Radio Waves, Microwaves, and Infrared communication systems. Lower values indicate more affordable solutions."
    />
  );
}