import "./Home.css";
import Header from "../../sections/Header";
import Hero from "../../sections/Hero";
import Features from "../../sections/Features";
import Pricing from "../../sections/Pricing";

import Testimonials from "../../sections/Testimonials";
import Download from "../../sections/Download";
import Footer from "../../sections/Footer";

const Home = () => {
  return (
    <main className=" home overflow-hidden">
      <Header />
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
