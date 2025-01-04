import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactUs from "./components/contactUs";
import { HeroSection } from "./components/heroSection";
import Projects from "./components/projects";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroSection />
      <Projects />
      <ContactUs />
    </QueryClientProvider>
  );
}

export default App;
