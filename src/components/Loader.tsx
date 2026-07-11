import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING NEURAL NET...");

  useEffect(() => {
    const statusSteps = [
      "ESTABLISHING SECURE PROTOCOLS...",
      "LOADING INTERACTIVE HUD...",
      "COMPILING SYSTEM COEFFICIENTS...",
      "SYNCHRONIZING GRAPHICS BUFFER...",
      "SYSTEM DEPLOYED. WELCOME."
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        // Random incremental loading speed
        const increment = Math.floor(Math.random() * 8) + 4;
        const nextProgress = Math.min(prev + increment, 100);
        
        // Update status text based on progress range
        const stepIndex = Math.floor((nextProgress / 100) * statusSteps.length);
        if (stepIndex < statusSteps.length) {
          setStatusText(statusSteps[stepIndex]);
        }
        
        return nextProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303] select-none overflow-hidden"
      >
        {/* Abstract cyber grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
          {/* Animated Cyber Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-16 h-16 rounded-lg border-2 border-cyan-400 flex items-center justify-center relative overflow-hidden bg-black/60 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                TLP
              </span>
              <motion.div
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
                className="absolute inset-x-0 h-0.5 bg-cyan-400/50 shadow-[0_0_8px_#22d3ee]"
              />
            </div>
            
            {/* Corner brackets */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-400" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400" />
          </motion.div>

          {/* Subtext info */}
          <div className="text-center w-full">
            <h2 className="text-sm font-mono tracking-[0.25em] text-cyan-400 mb-2">
              PORTFOLIO CORE v2.6.7
            </h2>
            <p className="text-xs font-mono text-gray-500 min-h-[1.5rem] tracking-wider uppercase mb-6 animate-pulse">
              {statusText}
            </p>

            {/* Bar container */}
            <div className="relative w-full h-1 bg-gray-900 border border-gray-800 rounded-full overflow-hidden mb-3">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_10px_#06b6d4]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage counter */}
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span className="tracking-widest">BOOTING SEQUENCE</span>
              <span className="text-cyan-400 font-bold tracking-widest">{progress}%</span>
            </div>
          </div>
        </div>

        {/* Outer technical brackets */}
        <div className="absolute bottom-8 left-8 text-[10px] font-mono text-gray-600 hidden md:block">
          <div>LOC_LAT: 16.5062° N</div>
          <div>LOC_LONG: 80.6480° E</div>
        </div>
        <div className="absolute bottom-8 right-8 text-[10px] font-mono text-gray-600 hidden md:block text-right">
          <div>ENGINE: VITE + REACT</div>
          <div>STATUS: COMPILING</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
