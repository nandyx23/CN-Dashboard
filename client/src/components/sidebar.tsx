import { useState } from "react";
import { ChevronDown, RadioTower, Mountain, Wifi, Bluetooth, Volume2, Smartphone, Tv, Factory, Server, EthernetPort } from "lucide-react";
import { applicationData, guidedApplications, unguidedApplications, type ApplicationData } from "@/data/transmission-media";

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
  const [isGuidedDropdownOpen, setIsGuidedDropdownOpen] = useState(false);
  const [isUnguidedDropdownOpen, setIsUnguidedDropdownOpen] = useState(false);

  const selectedApp = Object.entries(applicationData).find(([key]) => key === selectedApplication);

  return (
    <div className="sidebar p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-primary flex items-center">
          <RadioTower className="mr-2 h-6 w-6" />
          Transmission Media
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Dashboard</p>
      </div>

      {/* Guided Media Dropdown */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
          <EthernetPort className="mr-2 h-4 w-4" />
          Guided Media Applications
        </h3>
        <div className="relative">
          <button 
            className="w-full bg-card border border-border text-foreground px-4 py-3 rounded-lg flex items-center justify-between hover:bg-muted transition-colors"
            onClick={() => setIsGuidedDropdownOpen(!isGuidedDropdownOpen)}
            data-testid="button-guided-dropdown"
          >
            <span data-testid="text-selected-application">
              {selectedApp && selectedApp[1].type === 'guided' ? selectedApp[1].name : "Select Guided Application"}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isGuidedDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isGuidedDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-20">
              {guidedApplications.map(([key, data]) => {
                const Icon = applicationIcons[key as keyof typeof applicationIcons];
                return (
                  <button
                    key={key}
                    className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center border-b border-border/50 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      onApplicationSelect(key);
                      setIsGuidedDropdownOpen(false);
                    }}
                    data-testid={`button-select-guided-${key}`}
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

      {/* Unguided Media Dropdown */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
          <Wifi className="mr-2 h-4 w-4" />
          Unguided Media Applications
        </h3>
        <div className="relative">
          <button 
            className="w-full bg-card border border-border text-foreground px-4 py-3 rounded-lg flex items-center justify-between hover:bg-muted transition-colors"
            onClick={() => setIsUnguidedDropdownOpen(!isUnguidedDropdownOpen)}
            data-testid="button-unguided-dropdown"
          >
            <span>
              {selectedApp && selectedApp[1].type === 'unguided' ? selectedApp[1].name : "Select Unguided Application"}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isUnguidedDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isUnguidedDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-20">
              {unguidedApplications.map(([key, data]) => {
                const Icon = applicationIcons[key as keyof typeof applicationIcons];
                return (
                  <button
                    key={key}
                    className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center border-b border-border/50 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      onApplicationSelect(key);
                      setIsUnguidedDropdownOpen(false);
                    }}
                    data-testid={`button-select-unguided-${key}`}
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
              <strong>Type:</strong> {currentData.type.charAt(0).toUpperCase() + currentData.type.slice(1)}
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
