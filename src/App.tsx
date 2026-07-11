import { useState } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import BackgroundParticles from "./components/BackgroundParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import TechWall from "./components/TechWall";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen text-gray-300 antialiased font-sans bg-[#030303] selection:bg-cyan-500/30 selection:text-white">
          {/* Cybernetic Background Engine */}
          <BackgroundParticles />

          {/* Interactive Dual Ring Cursor */}
          <Cursor />

          {/* Fixed Floating Header */}
          <Navbar onResumeOpen={handleOpenResume} />

          {/* Core Visual Structure */}
          <main className="relative z-10">
            <Hero onOpenProjects={handleScrollToProjects} onOpenResume={handleOpenResume} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <TechWall />
            <WhyHireMe />
            <Contact />
          </main>

          {/* Footer controls */}
          <Footer onOpenResume={handleOpenResume} />

          {/* Floating full-page visual CV modal */}
          <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
        </div>
      )}
    </>
  );
}
