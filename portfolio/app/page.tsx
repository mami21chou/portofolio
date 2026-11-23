import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Journey />
      </main>
      <Contact />
    </>
  );
}
