import { type ApplicationData } from "@/data/transmission-media";

interface MetricsGaugesProps {
  currentData: ApplicationData | undefined;
}

interface GaugeProps {
  title: string;
  subtitle: string;
  value: number;
  color: string;
  type: string;
}

function Gauge({ title, subtitle, value, color, type }: GaugeProps) {
  const circumference = 2 * Math.PI * 50;
  const progress = (value / 100) * circumference;
  
  let label = 'Low';
  if (value > 30) label = 'Medium';
  if (value > 70) label = 'High';

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
      <div className="text-center mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="gauge-container">
        <svg className="gauge-svg" width="120" height="120" viewBox="0 0 120 120">
          <circle className="gauge-track" cx="60" cy="60" r="50"></circle>
          <circle 
            className="gauge-progress" 
            cx="60" 
            cy="60" 
            r="50"
            stroke={color}
            strokeDasharray={`${progress} ${circumference}`}
            data-testid={`gauge-${type}-progress`}
          />
        </svg>
        <div className="gauge-text">
          <div className="text-2xl font-bold" style={{ color }} data-testid={`text-${type}-value`}>
            {value}%
          </div>
          <div className="text-xs text-muted-foreground" data-testid={`text-${type}-label`}>
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MetricsGauges({ currentData }: MetricsGaugesProps) {
  const speed = currentData?.speed ?? 50;
  const cost = currentData?.cost ?? 30;
  const interference = currentData?.interference ?? 40;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <Gauge
        title="Speed"
        subtitle="Data Transfer Rate"
        value={speed}
        color="hsl(142, 71%, 45%)"
        type="speed"
      />
      <Gauge
        title="Cost"
        subtitle="Implementation Cost"
        value={cost}
        color="hsl(45, 93%, 47%)"
        type="cost"
      />
      <Gauge
        title="Interference"
        subtitle="Signal Interference"
        value={interference}
        color="hsl(0, 72%, 51%)"
        type="interference"
      />
    </div>
  );
}
