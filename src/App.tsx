import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import NeuralNetworkVisualizer from "./pages/tools/NeuralNetworkVisualizer";
import RobotPathPlanner from "./pages/tools/RobotPathPlanner";
import ComputerVisionStudio from "./pages/tools/ComputerVisionStudio";
import MLModelPlayground from "./pages/tools/MLModelPlayground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/tools/neural-network" element={<NeuralNetworkVisualizer />} />
            <Route path="/tools/robot-path" element={<RobotPathPlanner />} />
            <Route path="/tools/computer-vision" element={<ComputerVisionStudio />} />
            <Route path="/tools/ml-playground" element={<MLModelPlayground />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
