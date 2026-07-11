import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, ArrowRight, Download, Terminal, Network } from "lucide-react";

interface HeroProps {
  onOpenProjects: () => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenProjects, onOpenResume }: HeroProps) {
  const typingRoles = [
    "Future Software Engineer",
    "React Developer",
    "AI Enthusiast",
    "Machine Learning Learner",
    "Problem Solver",
    "Technology Explorer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = typingRoles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at full text
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(70);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
          setTypingSpeed(250);
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-16 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/5 border border-cyan-400/20 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
              SYS_BOOT_COMPLETED
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-cyan-400 font-mono tracking-widest text-sm uppercase"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tighter leading-none"
            >
              T. Lakshmi <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Prasanna
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 py-2"
            >
              <span className="h-[1px] w-12 bg-slate-700 hidden sm:inline-block" />
              <p className="text-lg md:text-xl text-slate-400 font-medium">
                Aspiring Full Stack & AI Developer
              </p>
            </motion.div>
          </div>

          {/* Typing dynamic machine */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-10 flex items-center bg-slate-900/50 border border-white/10 rounded-xl px-4 font-mono text-sm md:text-base text-cyan-300 w-full max-w-md shadow-inner backdrop-blur-md"
          >
            <span className="text-cyan-400 font-bold mr-2 select-none">&gt;</span>
            <span>{currentText}</span>
            <span className="w-1.5 h-4 bg-cyan-400 ml-1 animate-pulse" />
          </motion.div>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-400 leading-relaxed max-w-lg text-sm md:text-base"
          >
            Passionate Computer Science Engineering student focused on building intelligent real-world systems. Turning curiosity into code and complexity into simplicity.
          </motion.p>

          {/* Social connections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pt-2 text-slate-500"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 border border-slate-800 rounded-lg bg-slate-900/50 hover:text-cyan-400 cursor-pointer transition-colors hover:border-cyan-400/40 text-slate-400 shadow-sm clickable"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 border border-slate-800 rounded-lg bg-slate-900/50 hover:text-cyan-400 cursor-pointer transition-colors hover:border-cyan-400/40 text-slate-400 shadow-sm clickable"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:prasannatalakala5@gmail.com"
              aria-label="Email Lakshmi"
              className="p-3 border border-slate-800 rounded-lg bg-slate-900/50 hover:text-cyan-400 cursor-pointer transition-colors hover:border-cyan-400/40 text-slate-400 shadow-sm clickable"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenResume}
              aria-label="View Resume"
              className="p-3 border border-slate-800 rounded-lg bg-slate-900/50 hover:text-cyan-400 cursor-pointer transition-colors hover:border-cyan-400/40 text-slate-400 shadow-sm clickable cursor-pointer"
            >
              <FileText className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            <button
              onClick={onOpenProjects}
              className="px-8 py-3.5 bg-white text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer select-none text-sm font-sans shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-slate-100"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenResume}
              className="px-8 py-3.5 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors cursor-pointer select-none text-sm font-sans flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Get Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Visual Avatar Picture */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0 h-full w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-slate-950/40 backdrop-blur-md overflow-hidden p-8 flex flex-col items-center justify-center gap-8 min-h-[420px] shadow-[0_0_50px_rgba(6,182,212,0.05)]"
          >
            {/* Subtle Tech Circuit Lines Background */}
            <svg className="absolute inset-0 w-full h-full text-cyan-500/10 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,100 L 100,100 L 140,140 L 250,140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 400,200 L 300,200 L 260,240 L 150,240" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="3" className="fill-cyan-400/40" />
              <circle cx="300" cy="200" r="3" className="fill-purple-400/40" />
            </svg>

            {/* Glowing Tech Particle Orbs */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-12 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl pointer-events-none z-0"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-12 left-10 w-24 h-24 rounded-full bg-purple-500/10 blur-xl pointer-events-none z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10 pointer-events-none"></div>

            {/* Circle Avatar wrapper with Immersive UI animated borders */}
            <div className="relative w-48 h-48 z-20">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="w-full h-full rounded-full bg-slate-800 border-4 border-slate-900 overflow-hidden relative z-20 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                <img
                  src="/src/assets/images/profile_photo_edited_1783753618659.jpg"
                  alt="T. Lakshmi Prasanna Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500 scale-105 hover:scale-100"
                />
              </div>
            </div>

            {/* Floating micro cyber badges */}
            <div className="absolute top-12 left-6 px-3 py-1.5 bg-gray-900/95 border border-cyan-400/30 rounded-lg flex items-center gap-1.5 shadow-lg backdrop-blur-sm animate-bounce text-left select-none z-30">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] font-mono font-bold text-gray-300">PYTHON_DEV</span>
            </div>
            
            <div className="absolute top-24 right-4 px-3 py-1.5 bg-gray-900/95 border border-purple-400/30 rounded-lg flex items-center gap-1.5 shadow-lg backdrop-blur-sm animate-[bounce_3.5s_infinite] text-left select-none z-30">
              <Network className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] font-mono font-bold text-gray-300">AI_STUDENT</span>
            </div>

            {/* Stats Overlay matching Design mockup */}
            <div className="w-full z-20 grid grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm text-center">
                <p className="text-2xl font-bold text-white font-display">12+</p>
                <p className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">Projects</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm text-center">
                <p className="text-2xl font-bold text-white font-display">8+</p>
                <p className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">Certificates</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
