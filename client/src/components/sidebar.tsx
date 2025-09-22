import { useState } from "react";
import { ChevronDown, RadioTower, Mountain, Wifi, Bluetooth, Volume2, Smartphone, Tv, Factory, Server } from "lucide-react";
import { applicationData, type ApplicationData } from "@/data/transmission-media";

interface SidebarProps {
  selectedApplication: string;
  onApplicationSelect: (appKey: string) => void;
  currentData: ApplicationData | undefined;
}

const applicationIcons = {
  remote: Mountain,
  lan: Wifi,
  bluetooth: Bluetooth,
  noisy: Volume2,
  mobile: Smartphone,
  tv: Tv,
  industrial: Factory,
  backbone: Server,
};

export function Sidebar({ selectedApplication, onApplicationSelect, currentData }: SidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const applications = Object.entries(applicationData);
  const selectedApp = applications.find(([key]) => key === selectedApplication);

  return (
    <div className="sidebar p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-primary flex items-center">
          <RadioTower className="mr-2 h-6 w-6" />
          Transmission Media
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Dashboard</p>
      </div>

      {/* Application Dropdown */}
      <div className="mb-6">
        <div className="relative">
          <button 
            className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg flex items-center justify-between hover:bg-primary/90 transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            data-testid="button-application-dropdown"
          >
            <span data-testid="text-selected-application">
              {selectedApp ? selectedApp[1].name : "Select Application"}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-20">
              {applications.map(([key, data]) => {
                const Icon = applicationIcons[key as keyof typeof applicationIcons];
                return (
                  <button
                    key={key}
                    className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center border-b border-border/50 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      onApplicationSelect(key);
                      setIsDropdownOpen(false);
                    }}
                    data-testid={`button-select-${key}`}
                  >
                    <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    {data.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Quick Info Card */}
      <div className="bg-muted/50 p-4 rounded-lg">
        <h3 className="font-semibold text-sm mb-2">Current Selection</h3>
        <div className="text-xs text-muted-foreground" data-testid="text-current-medium">
          {currentData ? (
            <>
              <strong>Recommended Medium:</strong> {currentData.medium}
              <br />
              <small>Click to see detailed analysis</small>
            </>
          ) : (
            "Select an application to see the most suitable transmission medium"
          )}
        </div>
      </div>
    </div>
  );
}
