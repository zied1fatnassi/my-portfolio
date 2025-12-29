import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
