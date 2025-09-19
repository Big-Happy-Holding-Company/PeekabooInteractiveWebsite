import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Research from "@/pages/research";
import AppsIndex from "@/pages/apps/index";
import PeekabooCalm from "@/pages/apps/calm";
import PeekabooPlunk from "@/pages/apps/plunk";
import WhyItWorks from "@/pages/why-it-works";
import ForFamilies from "@/pages/for-families";
import About from "@/pages/about";
import Press from "@/pages/press";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apps" component={AppsIndex} />
      <Route path="/apps/calm" component={PeekabooCalm} />
      <Route path="/apps/plunk" component={PeekabooPlunk} />
      <Route path="/why-it-works" component={WhyItWorks} />
      <Route path="/for-families" component={ForFamilies} />
      <Route path="/about" component={About} />
      <Route path="/press" component={Press} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/research" component={Research} />
      {/* Fallback to 404 */}
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
