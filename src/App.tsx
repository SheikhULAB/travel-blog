
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { AdminLayout } from "./layouts/AdminLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import Posts from "./pages/admin/Posts";
import AdminGallery from "./pages/admin/AdminGallery";
import Analytics from "./pages/admin/Analytics";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* <Sonner /> */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin/posts" element={<AdminLayout><Posts /></AdminLayout>} />
          <Route path="/admin/gallery" element={<AdminLayout><AdminGallery /></AdminLayout>} />
          <Route path="/admin/analytics" element={<AdminLayout><Analytics /></AdminLayout>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
