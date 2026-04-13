import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Credentials />
      <Contact />
    </div>
  );
}
