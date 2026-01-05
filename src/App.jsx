import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import HowItWorks from "./Components/HowItWorks";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import FinalCTA from "./Components/finalCTA";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
