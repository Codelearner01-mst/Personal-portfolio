import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import FloatingSocials from "./components/ui/FloatingSocials";

export default function App() {
  return (
    <div className="bg-paper min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-6 text-center pb-24">
        <p className="font-body text-[14px] text-muted">
          © {new Date().getFullYear()} Ahmed Tokyo. Built with React & Tailwind CSS.
        </p>
      </footer>
      <FloatingSocials />
    </div>
  );
}
