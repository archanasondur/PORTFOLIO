import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <OpenSource />
      <Skills />
      <Experience />
      <Education />
      <Publications />
      <Contact />
    </main>
  );
}
