import { ComparisonChart } from "@/components/comparison-chart";
import { chartData } from "@/data/scenarios";

export default function OverallSpeedComparison() {
  return (
    <ComparisonChart
      title="Overall Speed Comparison: Guided vs Unguided"
      subtitle="Compare average data transmission speeds between guided and unguided transmission media"
      data={chartData.overallSpeedComparison}
      dataKey="speed"
      yAxisLabel="Average Speed Level"
      color="hsl(142, 71%, 45%)"
      description="Overall comparison of average data transmission speeds between guided media (cables) and unguided media (wireless). Based on average values across all media types in each category."
    />
  );
}