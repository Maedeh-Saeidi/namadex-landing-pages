import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactUs from "./components/contactUs";
import { HeroSection } from "./components/heroSection";
import Projects from "./components/projects";
import { DataProvider } from "./context/DataContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <HeroSection />
        <Projects />
        <ContactUs />
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
