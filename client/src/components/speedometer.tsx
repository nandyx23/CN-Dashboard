interface SpeedrometerProps {
  title: string;
  value: number; // 0-100
  level: string;
  description: string;
  color: string;
  type: 'speed' | 'cost' | 'interference';
}

export function Speedometer({ title, value, level, description, color, type }: SpeedrometerProps) {
  const circumference = 2 * Math.PI * 60;
  const progress = (value / 100) * circumference;
  
  // Calculate color intensity based on value
  const getColorIntensity = () => {
    if (value <= 30) return '#22c55e'; // Green for low values (good)
    if (value <= 60) return '#eab308'; // Yellow for medium values
    return '#ef4444'; // Red for high values
  };

  // For cost and interference, high values are bad (red), for speed high values are good (green)
  const getMetricColor = () => {
    if (type === 'speed') {
      if (value <= 30) return '#ef4444'; // Red for low speed (bad)
      if (value <= 60) return '#eab308'; // Yellow for medium speed
      return '#22c55e'; // Green for high speed (good)
    } else {
      // For cost and interference, reverse the colors
      if (value <= 30) return '#22c55e'; // Green for low cost/interference (good)
      if (value <= 60) return '#eab308'; // Yellow for medium
      return '#ef4444'; // Red for high cost/interference (bad)
    }
  };

  const finalColor = color || getMetricColor();

  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 144 144">
          {/* Background circle */}
          <circle
            cx="72"
            cy="72"
            r="60"
            fill="none"
            stroke="hsl(220, 14%, 96%)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="72"
            cy="72"
            r="60"
            fill="none"
            stroke={finalColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            style={{
              transition: 'stroke-dasharray 0.5s ease'
            }}
            data-testid={`speedometer-${type}-progress`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold" style={{ color: finalColor }} data-testid={`text-${type}-value`}>
            {value}%
          </div>
          <div className="text-xs text-muted-foreground font-medium" data-testid={`text-${type}-level`}>
            {level}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-${type}-description`}>
        {description}
      </p>
    </div>
  );
}