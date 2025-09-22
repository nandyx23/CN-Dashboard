import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface ComparisonChartProps {
  title: string;
  subtitle: string;
  data: Array<{ name: string; [key: string]: string | number }>;
  dataKey: string;
  yAxisLabel: string;
  color?: string;
  description?: string;
}

export function ComparisonChart({ 
  title, 
  subtitle, 
  data, 
  dataKey, 
  yAxisLabel, 
  color = "hsl(221, 83%, 53%)", 
  description 
}: ComparisonChartProps) {
  return (
    <div className="min-h-screen bg-background p-8">
      <title>{title} - Transmission Media Comparison</title>
      <meta 
        name="description" 
        content={`Compare ${subtitle.toLowerCase()} across different transmission media types with detailed bar chart analysis.`}
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="flex items-center" data-testid="button-back-to-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
          {description && (
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Chart Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="h-96" data-testid="comparison-chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(220, 9%, 46%)"
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    stroke="hsl(220, 9%, 46%)"
                    label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(0, 0%, 100%)', 
                      border: '1px solid hsl(220, 13%, 91%)',
                      borderRadius: '8px'
                    }}
                    formatter={(value, name) => [value, yAxisLabel]}
                  />
                  <Bar 
                    dataKey={dataKey} 
                    fill={color} 
                    radius={[4, 4, 0, 0]}
                    data-testid={`bar-${dataKey}`}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Detailed Values</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Medium</th>
                    <th className="text-left p-2 font-medium">{yAxisLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2">{item[dataKey]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline" data-testid="button-return-home">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}