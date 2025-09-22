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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/guided-selection" component={GuidedSelection} />
      <Route path="/unguided-selection" component={UnguidedSelection} />
      <Route path="/scenario/:id" component={ScenarioResult} />
      <Route path="/compare/guided-cost" component={GuidedCostComparison} />
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
