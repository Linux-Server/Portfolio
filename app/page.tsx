import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
