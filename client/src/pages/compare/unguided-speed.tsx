import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function UnguidedSpeedComparison() {
  return (
    <ComparisonChart
      title="Unguided Media Speed Comparison"
      subtitle="Compare data transmission speeds across unguided transmission media types"
      data={chartData.unguidedSpeedComparison}
      dataKey="speed"
      yAxisLabel="Speed Level"
      color="hsl(142, 71%, 45%)"
      description="Analysis of relative data transmission speeds for Radio Waves, Microwaves, and Infrared communication systems. Higher values indicate faster data transmission capabilities."
    />
  );
}