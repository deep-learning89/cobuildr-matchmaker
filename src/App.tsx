import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index.tsx";
import HowItWorksPage from "./pages/HowItWorks.tsx";
import ExploreBuilders from "./pages/ExploreBuilders.tsx";
import NotFound from "./pages/NotFound.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/explore" element={<ExploreBuilders />} />
            <Route path="/profile/:username" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
