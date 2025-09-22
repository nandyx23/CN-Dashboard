import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, EthernetPort, Wifi } from 'lucide-react';

const costComparisonData = [
  { name: 'Guided', cost: 2500 },
  { name: 'Unguided', cost: 3200 },
];

const guidedMediaData = [
  { name: 'UTP', speed: 75, cost: 30, interference: 25 },
  { name: 'STP', speed: 80, cost: 45, interference: 20 },
  { name: 'Coaxial', speed: 85, cost: 55, interference: 35 },
  { name: 'Fiber', speed: 100, cost: 80, interference: 5 },
];

const unguidedMediaData = [
  { name: 'Radio Waves', speed: 60, cost: 40, interference: 70 },
  { name: 'Microwaves', speed: 90, cost: 60, interference: 45 },
  { name: 'Infrared', speed: 70, cost: 50, interference: 25 },
];

export function ChartsSection() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Cost Comparison Chart */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <BarChart3 className="text-primary mr-2 h-5 w-5" />
            Guided vs Unguided Cost Comparison
          </h3>
          <div className="h-64" data-testid="chart-cost-comparison">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="name" stroke="hsl(220, 9%, 46%)" />
                <YAxis stroke="hsl(220, 9%, 46%)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0, 0%, 100%)', 
                    border: '1px solid hsl(220, 13%, 91%)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="cost" fill="hsl(221, 83%, 53%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Guided Media Chart */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            <EthernetPort className="text-primary mr-2 h-5 w-5" />
            Guided Media Comparison
          </h3>
          <div className="h-64" data-testid="chart-guided-media">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={guidedMediaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="name" stroke="hsl(220, 9%, 46%)" />
                <YAxis stroke="hsl(220, 9%, 46%)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0, 0%, 100%)', 
                    border: '1px solid hsl(220, 13%, 91%)',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="speed" fill="hsl(221, 83%, 53%)" radius={[2, 2, 0, 0]} />
                <Bar dataKey="cost" fill="hsl(142, 71%, 45%)" radius={[2, 2, 0, 0]} />
                <Bar dataKey="interference" fill="hsl(0, 72%, 51%)" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Unguided Media Chart */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Wifi className="text-primary mr-2 h-5 w-5" />
          Unguided Media Comparison
        </h3>
        <div className="h-64" data-testid="chart-unguided-media">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={unguidedMediaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="name" stroke="hsl(220, 9%, 46%)" />
              <YAxis stroke="hsl(220, 9%, 46%)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(0, 0%, 100%)', 
                  border: '1px solid hsl(220, 13%, 91%)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="speed" fill="hsl(221, 83%, 53%)" radius={[2, 2, 0, 0]} />
              <Bar dataKey="cost" fill="hsl(142, 71%, 45%)" radius={[2, 2, 0, 0]} />
              <Bar dataKey="interference" fill="hsl(0, 72%, 51%)" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
