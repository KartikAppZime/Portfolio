import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Services from "@/app/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contributions from "@/components/Contributions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contributions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}