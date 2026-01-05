import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import GithubMatrix from "@/components/GithubMatrix";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <GithubMatrix />
      <Experience />
      <Contact />
    </div>
  );
}
