import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import GuidedSelection from "@/pages/guided-selection";
import UnguidedSelection from "@/pages/unguided-selection";
import ScenarioResult from "@/pages/scenario-result";
import GuidedCostComparison from "@/pages/compare/guided-cost";
import GuidedSpeedComparison from "@/pages/compare/guided-speed";
import GuidedInterferenceComparison from "@/pages/compare/guided-interference";
import UnguidedCostComparison from "@/pages/compare/unguided-cost";
import UnguidedSpeedComparison from "@/pages/compare/unguided-speed";
import UnguidedInterferenceComparison from "@/pages/compare/unguided-interference";
import OverallCostComparison from "@/pages/compare/overall-cost";
import OverallSpeedComparison from "@/pages/compare/overall-speed";
import OverallInterferenceComparison from "@/pages/compare/overall-interference";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/guided-selection" component={GuidedSelection} />
      <Route path="/unguided-selection" component={UnguidedSelection} />
      <Route path="/scenario/:id" component={ScenarioResult} />
      <Route path="/compare/guided-cost" component={GuidedCostComparison} />
      <Route path="/compare/guided-speed" component={GuidedSpeedComparison} />
      <Route path="/compare/guided-interference" component={GuidedInterferenceComparison} />
      <Route path="/compare/unguided-cost" component={UnguidedCostComparison} />
      <Route path="/compare/unguided-speed" component={UnguidedSpeedComparison} />
      <Route path="/compare/unguided-interference" component={UnguidedInterferenceComparison} />
      <Route path="/compare/overall-cost" component={OverallCostComparison} />
      <Route path="/compare/overall-speed" component={OverallSpeedComparison} />
      <Route path="/compare/overall-interference" component={OverallInterferenceComparison} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
