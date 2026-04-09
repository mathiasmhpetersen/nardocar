import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AestheticLP from "./pages/AestheticLP";
import BuildJourneyLP from "./pages/BuildJourneyLP";
import ConfidenceLP from "./pages/ConfidenceLP";
import FirstBuildLP from "./pages/FirstBuildLP";
import Golf7BestLP from "./pages/Golf7BestLP";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/aesthetic" component={AestheticLP} />
      <Route path="/build-journey" component={BuildJourneyLP} />
      <Route path="/confidence" component={ConfidenceLP} />
      <Route path="/first-build" component={FirstBuildLP} />
      <Route path="/golf7best" component={Golf7BestLP} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
