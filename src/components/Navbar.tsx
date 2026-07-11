import { useState, useEffect } from "react";
import { Menu, X, FileText, Download, Printer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onResumeOpen: () => void;
}

export default function Navbar({ onResumeOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setScrolled(window.scrollY > 20);

      // Track active section for indicator
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
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
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-slate-950/70 border-b border-white/10 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-wider text-white select-none cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-105 transition-transform duration-300 shrink-0">
              LP
            </div>
            <span className="hidden sm:inline-block font-sans text-lg font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
              Prasanna.dev
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1.5 bg-gray-950/40 border border-white/5 rounded-full px-2 py-1 backdrop-blur-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer ${
                      activeSection === item.id
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/5 border border-cyan-500/10 rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_0_10px_rgba(6,182,212,0.1)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Resume button */}
            <button
              onClick={onResumeOpen}
              className="group relative flex items-center gap-1.5 px-4 py-2 border border-cyan-500/30 hover:border-cyan-400 rounded-full bg-cyan-500/5 hover:bg-cyan-500/10 text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] select-none cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-cyan-400" />
            </button>

            {/* Download Code button */}
            <a
              href="/api/download-zip"
              className="group relative flex items-center gap-1.5 px-4 py-2 border border-purple-500/30 hover:border-purple-400 rounded-full bg-purple-500/5 hover:bg-purple-500/10 text-xs font-mono font-medium text-purple-400 tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] select-none cursor-pointer"
              download
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ZIP</span>
              <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-purple-400" />
            </a>
          </nav>

          {/* Mobile Hamburguer */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={onResumeOpen}
              className="flex items-center gap-1 px-2.5 py-1.5 border border-cyan-500/30 rounded-full bg-cyan-500/5 text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase"
            >
              <FileText className="w-3 h-3" />
              <span className="text-[10px]">Resume</span>
            </button>
            <a
              href="/api/download-zip"
              className="flex items-center gap-1 px-2.5 py-1.5 border border-purple-500/30 rounded-full bg-purple-500/5 text-xs font-mono font-medium text-purple-400 tracking-wider uppercase"
              download
            >
              <Download className="w-3 h-3" />
              <span className="text-[10px]">ZIP</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 border border-white/10 rounded-full bg-gray-950/50 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] inset-x-0 z-35 bg-black/95 border-b border-white/5 backdrop-blur-lg flex flex-col p-6 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left py-2 font-display text-sm tracking-widest uppercase transition-colors duration-200 ${
                        activeSection === item.id ? "text-cyan-400 font-medium" : "text-gray-400"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
