import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  );
}
