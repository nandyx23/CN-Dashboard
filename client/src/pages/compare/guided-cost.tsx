import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function GuidedCostComparison() {
  return (
    <ComparisonChart
      title="Guided Media Cost Comparison"
      subtitle="Compare implementation costs across guided transmission media types"
      data={chartData.guidedCostComparison}
      dataKey="cost"
      yAxisLabel="Cost Level"
      color="hsl(45, 93%, 47%)"
      description="Analysis of relative implementation costs for UTP, STP, Coaxial, and Fiber Optic cables. Lower values indicate more affordable solutions."
    />
  );
}