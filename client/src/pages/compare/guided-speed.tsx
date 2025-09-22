import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function GuidedSpeedComparison() {
  return (
    <ComparisonChart
      title="Guided Media Speed Comparison"
      subtitle="Compare data transmission speeds across guided transmission media types"
      data={chartData.guidedSpeedComparison}
      dataKey="speed"
      yAxisLabel="Speed Level"
      color="hsl(142, 71%, 45%)"
      description="Analysis of relative data transmission speeds for UTP, STP, Coaxial, and Fiber Optic cables. Higher values indicate faster data transmission capabilities."
    />
  );
}