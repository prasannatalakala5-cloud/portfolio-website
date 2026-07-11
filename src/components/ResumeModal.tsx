import { motion, AnimatePresence } from "motion/react";
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Calendar } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-slate-950/95 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 backdrop-blur-xl"
          >
            {/* Header Control Panel */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/40">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-gray-400 ml-2 tracking-widest uppercase">
                  SYSTEM_RESUME_VIEWER.SH
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 border border-white/5 hover:border-cyan-400 rounded-lg hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 border border-white/5 hover:border-red-400 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all duration-200 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document body */}
            <div id="printable-resume" className="overflow-y-auto p-6 md:p-10 text-gray-300 font-sans leading-relaxed selection:bg-cyan-500/20">
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Side: Contact, Profile info & Education */}
                <div className="space-y-6 md:border-r md:border-white/5 md:pr-8">
                  {/* Name Panel */}
                  <div className="space-y-2">
                    <h1 className="text-2xl font-display font-bold text-white tracking-tight">
                      T. Lakshmi Prasanna
                    </h1>
                    <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-medium">
                      Computer Science Student
                    </p>
                    <p className="text-xs text-gray-400">
                      Aspiring Full Stack & AI Developer
                    </p>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono text-white tracking-widest uppercase font-semibold">
                      CONTACT
                    </h3>
                    <ul className="space-y-2.5 text-xs text-gray-400">
                      <li className="flex items-center gap-2.5">
                        <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <a href="mailto:prasannatalakala5@gmail.com" className="hover:text-cyan-400 transition-colors truncate">
                          prasannatalakala5@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <a href="tel:9390929308" className="hover:text-cyan-400 transition-colors">
                          +91 9390929308
                        </a>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Andhra Pradesh, India</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          LinkedIn Profile
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono text-white tracking-widest uppercase font-semibold">
                      EDUCATION
                    </h3>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-gray-200">
                        Bachelor of Technology
                      </h4>
                      <p className="text-[11px] text-cyan-400 font-mono font-medium">
                        Computer Science Engineering
                      </p>
                      <p className="text-xs text-gray-400 font-medium">
                        Lingaya's Institute of Management & Technology
                      </p>
                      <p className="text-[10px] text-gray-500 font-mono mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        2023 - 2027 (Expected)
                      </p>
                    </div>
                  </div>

                  {/* Skills overview */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono text-white tracking-widest uppercase font-semibold">
                      TECHNICAL SKILLS
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-gray-400 block font-medium mb-1">Languages:</span>
                        <div className="flex flex-wrap gap-1">
                          {["Python", "Java", "SQL"].map((s) => (
                            <span key={s} className="px-1.5 py-0.5 bg-white/5 rounded text-[10px] text-gray-300 border border-white/5">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-medium mb-1">Frontend:</span>
                        <div className="flex flex-wrap gap-1">
                          {["HTML", "CSS", "JavaScript", "React"].map((s) => (
                            <span key={s} className="px-1.5 py-0.5 bg-white/5 rounded text-[10px] text-gray-300 border border-white/5">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-medium mb-1">Backend & AI:</span>
                        <div className="flex flex-wrap gap-1">
                          {["Node.js", "Express", "AI & ML", "Computer Vision"].map((s) => (
                            <span key={s} className="px-1.5 py-0.5 bg-white/5 rounded text-[10px] text-gray-300 border border-white/5">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Professional Summary, Projects, Internships, Certifications */}
                <div className="md:col-span-2 space-y-6">
                  {/* Summary */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
                      PROFESSIONAL SUMMARY
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Passionate Computer Science Engineering student focused on mastering full stack and AI development. A continuous, fast-paced learner who enjoys building real-world projects, solving algorithmic challenges, and exploring emerging technologies. Seeking opportunities to apply strong analytical skills and contribute to innovative engineering teams.
                    </p>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
                      ACADEMIC PROJECTS
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-bold text-white">MoodAI</h4>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">AI / React</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          An AI-powered mood tracker and wellness assistant designed to enhance emotional health. Implemented features include mood journaling, interactive chat sessions with an AI companion, smart playlist recommendations, and wellness micro-games.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-bold text-white">Student Marks Prediction System</h4>
                          <span className="text-[10px] font-mono text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded">ML / Python</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          A predictive engine utilizing Machine Learning (Linear Regression) to estimate student performance based on historical studying parameters. Integrated a rich interactive data visualization dashboard using Streamlit.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-bold text-white">Futuristic Portfolio Website</h4>
                          <span className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded">Vite / Tailwind</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          A custom high-performance portfolio featuring canvas graphics, smooth scroll-reveals, responsive form validation, and highly optimized layouts built to impress engineering recruiters.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
                      EXPERIENCE
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-xs font-bold text-white">Technical Intern (Academic Internship)</h4>
                          <span className="text-[10px] text-gray-500 font-mono">Present</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          Participating in technical development sprints, learning design systems, and building responsive front-end pages. Exploring standard backend routing protocols and version control workflows.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-xs font-bold text-white">Freelance Junior Developer</h4>
                          <span className="text-[10px] text-gray-500 font-mono">2025 - Present</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">
                          Developing modern web interfaces for local businesses. Writing elegant CSS and semantic React layouts. Providing responsive fixes and optimizing static assets for improved loading times.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
                      CERTIFICATIONS
                    </h3>
                    <ul className="space-y-1.5 text-xs text-gray-400">
                      <li className="flex items-center justify-between">
                        <span className="font-medium text-gray-300">NPTEL - Introduction to Internet of Things 4.0</span>
                        <span className="text-[10px] font-mono text-gray-500">2025</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium text-gray-300">Reliance Group - Team Leader & Leadership Training Program</span>
                        <span className="text-[10px] font-mono text-gray-500">2025</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium text-gray-300">Deloitte - Virtual Data Analytics Training</span>
                        <span className="text-[10px] font-mono text-gray-500">2025</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
