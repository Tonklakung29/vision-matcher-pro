import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppLayout from "./layouts/AppLayout";
import Cameras from "./pages/Cameras";
import Streams from "./pages/Streams";
import Matching from "./pages/Matching";
import Datasets from "./pages/Datasets";
import Models from "./pages/Models";
import Training from "./pages/Training";
import Storage from "./pages/Storage";
import Settings from "./pages/Settings";
import Alerts from "./pages/Alerts";
import Users from "./pages/Users";
import Monitoring from "./pages/Monitoring";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="cameras" element={<Cameras />} />
            <Route path="streams" element={<Streams />} />
            <Route path="matching" element={<Matching />} />
            <Route path="datasets" element={<Datasets />} />
            <Route path="models" element={<Models />} />
            <Route path="training" element={<Training />} />
            <Route path="storage" element={<Storage />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="users" element={<Users />} />
            <Route path="monitoring" element={<Monitoring />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
