import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./components/about";
import TechSkills from "./components/techskills";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import CV from "./components/cv";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="w-screen">
      <main className="flex flex-col">
        <Header />
        <Navigation />
        <About />
        <TechSkills />
        <Experiences />
        <Projects />
        <CV />
        <Contact />
      </main>
    </div>
  );
}
