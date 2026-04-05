import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ScrollReveal>
        <About/>
      </ScrollReveal>
      <ScrollReveal>
        <Education/>
      </ScrollReveal>
      <ScrollReveal>
        <Projects/>
      </ScrollReveal>
      {/* <ScrollReveal>
        <Skills/>
      </ScrollReveal> */}
      <ScrollReveal>
        <Contact/>
      </ScrollReveal>
      <Footer/>
    </main>
  );
}

