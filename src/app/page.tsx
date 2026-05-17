import Navbar from "@/components/layout/Navbar";

import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Experience from "@/sections/experience/Experience";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";
import ScrollProgress from "@/components/shared/ScrollProgress";

export default function HomePage() {
  return (
    <main>
  <ScrollProgress />
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}