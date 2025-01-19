import "./Home.css";
import Hero from "../../sections/Hero";
import Features from "../../sections/Features";
import Pricing from "../../sections/Pricing";
import Testimonials from "../../sections/Testimonials";
import Download from "../../sections/Download";
import Footer from "../../sections/Footer";
import Navbar from "../../sections/Navbar";

const Home = () => {
  return (
    <main className=" home overflow-hidden">
      <Navbar/>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};
export default Home;
