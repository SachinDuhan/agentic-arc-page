import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Activities from "./components/Activities";
import Team from "./components/Team";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Activities />
      <Team />
      <Registration />
      <Footer />
    </>
  );
}
