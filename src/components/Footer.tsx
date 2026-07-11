import { Github, Linkedin, Mail, FileText } from "lucide-react";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  return (
    <footer className="relative py-8 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Left Credit */}
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-sans">
            Designed and Developed with precision by
          </p>
          <h5 className="text-sm font-display font-extrabold tracking-wide text-white">
            T. Lakshmi Prasanna
          </h5>
        </div>

        {/* Center Copyright */}
        <div className="text-xs font-mono text-gray-600">
          <span>&copy; 2026 T. L. Prasanna. All Rights Reserved.</span>
        </div>

        {/* Right social connectors */}
        <div className="flex items-center gap-4 text-gray-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-cyan-400 transition-colors duration-250 clickable"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-cyan-400 transition-colors duration-250 clickable"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:prasannatalakala5@gmail.com"
            aria-label="Email Lakshmi"
            className="hover:text-cyan-400 transition-colors duration-250 clickable"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            aria-label="View Resume"
            className="hover:text-cyan-400 transition-colors duration-250 clickable cursor-pointer"
          >
            <FileText className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
