import About from "../components/About";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import ContactInfo from "../components/ContactInfo";
import { Dishes } from "../components/Dishes";
import Hero from "../components/Hero";
import Header from "../components/Header";
import AppLayout from "../components/AppLayout";

function Home() {
  return (
    <AppLayout>
      <Hero />
      <About />
      <Testimonials />
      <Dishes />
      <ContactInfo />
    </AppLayout>
  );
}
export default Home;
