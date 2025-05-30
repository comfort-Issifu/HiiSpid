import About from "./components/About";
import Footer from "./components/footer";
import { Textarea } from "./components/Textarea";
import Testimonials from "./components/Testimonials";
import ContactInfo from "./components/ContactInfo";
import { Dishes } from "./components/Dishes";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Dishes />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default App;
