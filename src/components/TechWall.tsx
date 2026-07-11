import { motion } from "motion/react";
import { Cpu, Globe, Database, Award, ShieldCheck, HardDrive, Terminal } from "lucide-react";

export default function TechWall() {
  const technologies = [
    { name: "React", type: "Frontend" },
    { name: "JavaScript", type: "Frontend" },
    { name: "Python", type: "Programming" },
    { name: "Java", type: "Programming" },
    { name: "HTML", type: "Frontend" },
    { name: "CSS", type: "Frontend" },
    { name: "SQL", type: "Database" },
    { name: "AI", type: "Emerging" },
    { name: "Machine Learning", type: "Emerging" },
    { name: "Computer Vision", type: "Emerging" },
    { name: "Blockchain", type: "Emerging" },
    { name: "Git", type: "Tools" },
    { name: "GitHub", type: "Tools" },
    { name: "Figma", type: "Tools" },
    { name: "Trello", type: "Tools" },
    { name: "Visual Paradigm", type: "Tools" },
  ];

  // Double the list for infinite looping scrolling
  const scrolledTechnologies = [...technologies, ...technologies, ...technologies];

  const getColorClass = (type: string) => {
    switch (type) {
      case "Frontend":
        return "text-cyan-400 border-cyan-400/20 bg-cyan-400/5 hover:border-cyan-400/50 hover:bg-cyan-400/10";
      case "Programming":
        return "text-blue-400 border-blue-400/20 bg-blue-400/5 hover:border-blue-400/50 hover:bg-blue-400/10";
      case "Database":
        return "text-emerald-400 border-emerald-400/20 bg-emerald-400/5 hover:border-emerald-400/50 hover:bg-emerald-400/10";
      case "Emerging":
        return "text-purple-400 border-purple-400/20 bg-purple-400/5 hover:border-purple-400/50 hover:bg-purple-400/10";
      case "Tools":
        return "text-orange-400 border-orange-400/20 bg-orange-400/5 hover:border-orange-400/50 hover:bg-orange-400/10";
      default:
        return "text-gray-400 border-gray-400/20 bg-gray-400/5 hover:border-gray-400/50 hover:bg-gray-400/10";
    }
  };

  return (
    <section className="relative py-12 px-6 overflow-hidden bg-black/40 border-y border-white/5 select-none">
      {/* Absolute side fade overlays for smooth scroll illusion */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-6 text-center">
        <h4 className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold">
          CORE_ENGINE_COMPONENTS.TXT
        </h4>
      </div>

      <div className="w-full flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex gap-4 pr-4 py-2 shrink-0 items-center whitespace-nowrap"
        >
          {scrolledTechnologies.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${getColorClass(
                tech.type
              )}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
