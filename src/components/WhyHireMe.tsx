import { motion } from "motion/react";
import { Zap, BrainCircuit, Users2, Code, Terminal, Sparkles } from "lucide-react";

interface Trait {
  id: string;
  title: string;
  icon: any;
  iconColor: string;
  glowColor: string;
  description: string;
}

export default function WhyHireMe() {
  const traits: Trait[] = [
    {
      id: "TRAIT_01",
      title: "Fast Learner",
      icon: Zap,
      iconColor: "text-cyan-400",
      glowColor: "shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:border-cyan-400/40",
      description: "Proven ability to rapidly master brand-new tech stacks, environments, and languages. Relishes taking on unfamiliar challenges from first principles and applying them in production."
    },
    {
      id: "TRAIT_02",
      title: "Problem Solver",
      icon: BrainCircuit,
      iconColor: "text-purple-400",
      glowColor: "shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:border-purple-400/40",
      description: "Approaches bugs and system architecture logically. Enjoys debugging workflows, analyzing algorithmic runtimes, and building robust, dry code pathways to solve practical bottlenecks."
    },
    {
      id: "TRAIT_03",
      title: "Team Player",
      icon: Users2,
      iconColor: "text-blue-400",
      glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:border-blue-400/40",
      description: "Thrives in active collaborative sprints. Communicates ideas transparently, handles reviews constructively, and coordinates effectively with peers and mentors alike to meet deployment goals."
    },
    {
      id: "TRAIT_04",
      title: "Passionate Developer",
      icon: Code,
      iconColor: "text-orange-400",
      glowColor: "shadow-[0_0_15px_rgba(251,146,60,0.15)] hover:border-orange-400/40",
      description: "Deeply fascinated by emerging computational fields, artificial intelligence, and design systems. Continuously logs learning sessions, builds side projects, and explores modern tech pipelines."
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            07 / INTUITIVE_VECTORS
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Why Hire Me?
          </h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Key professional traits defining my engineering value proposition
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Traits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, idx) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between backdrop-blur-md hover:scale-[1.02] hover:bg-slate-900/40 transition-all duration-300 group cursor-default ${trait.glowColor}`}
              >
                {/* Tech metadata headers */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-mono text-gray-600 font-bold tracking-wider">
                    {trait.id}
                  </span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 ${trait.iconColor}`}>
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-sm font-display font-bold text-white tracking-wide">
                      {trait.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {trait.description}
                  </p>
                </div>

                {/* Cyber terminal line details */}
                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                  <span>VECTORS_LOCK: YES</span>
                  <Terminal className="w-3 h-3 text-cyan-400/50" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
