import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
// import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./pages/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="scroll-smooth">
        <Index />
        <Blog />
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
