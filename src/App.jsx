import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopProducts from "./components/ShopProducts";
import Recovery from "./components/Recovery";
import HowItWorks from "./components/HowItWorks";
import Treatment from "./components/Treatment";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonals";
import BMISection from "./components/BMISection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContentSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ShopProducts />
      <Recovery />
      <HowItWorks />
      <Treatment />
      <Solutions />
      <Testimonials />
      <BMISection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
