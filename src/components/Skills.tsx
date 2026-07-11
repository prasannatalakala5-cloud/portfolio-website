import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Layout, Code2, Globe, Database, Settings } from "lucide-react";

interface SkillItem {
  name: string;
  level: "Basic" | "Intermediate" | "Learning";
  percentage: number;
}

interface SkillCategory {
  title: string;
  id: string;
  icon: any;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      id: "frontend",
      icon: Layout,
      skills: [
        { name: "HTML", level: "Intermediate", percentage: 80 },
        { name: "CSS", level: "Intermediate", percentage: 75 },
        { name: "JavaScript", level: "Intermediate", percentage: 70 },
        { name: "React", level: "Intermediate", percentage: 65 },
      ],
    },
    {
      title: "Backend & Systems",
      id: "backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: "Learning", percentage: 40 },
        { name: "Express", level: "Learning", percentage: 45 },
      ],
    },
    {
      title: "Programming Languages",
      id: "programming",
      icon: Code2,
      skills: [
        { name: "Python", level: "Intermediate", percentage: 75 },
        { name: "Java", level: "Intermediate", percentage: 70 },
        { name: "SQL", level: "Intermediate", percentage: 75 },
      ],
    },
    {
      title: "AI & Emerging Tech",
      id: "ai",
      icon: Cpu,
      skills: [
        { name: "Artificial Intelligence", level: "Learning", percentage: 50 },
        { name: "Machine Learning", level: "Learning", percentage: 55 },
        { name: "Computer Vision", level: "Learning", percentage: 45 },
        { name: "Blockchain", level: "Learning", percentage: 40 },
      ],
    },
    {
      title: "Developer Tools",
      id: "tools",
      icon: Settings,
      skills: [
        { name: "Git", level: "Intermediate", percentage: 80 },
        { name: "GitHub", level: "Intermediate", percentage: 85 },
        { name: "Figma", level: "Intermediate", percentage: 75 },
        { name: "Trello", level: "Intermediate", percentage: 70 },
        { name: "Visual Paradigm", level: "Basic", percentage: 40 },
        { name: "Teachable Machine", level: "Intermediate", percentage: 80 },
        { name: "VS Code", level: "Intermediate", percentage: 90 },
      ],
    },
  ];

  const getBadgeStyle = (level: "Basic" | "Intermediate" | "Learning") => {
    switch (level) {
      case "Basic":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Intermediate":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "Learning":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    }
  };

  const getMeterColor = (level: "Basic" | "Intermediate" | "Learning") => {
    switch (level) {
      case "Basic":
        return "from-yellow-500 to-amber-600 shadow-[0_0_8px_rgba(234,179,8,0.3)]";
      case "Intermediate":
        return "from-cyan-500 to-blue-600 shadow-[0_0_8px_rgba(6,182,212,0.3)]";
      case "Learning":
        return "from-purple-500 to-fuchsia-600 shadow-[0_0_8px_rgba(168,85,247,0.3)]";
    }
  };

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            02 / TECH_CAPABILITIES
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            My Skills
          </h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Honest and verified tech competence index
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
              activeTab === "all"
                ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                : "bg-transparent text-slate-400 border-white/10 hover:text-white hover:bg-white/5"
            }`}
          >
            All Sectors
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                activeTab === cat.id
                  ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  : "bg-transparent text-slate-400 border-white/10 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.id}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={category.id}
                  className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col h-full"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 text-cyan-400">
                      <CategoryIcon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-sm font-display font-bold text-white tracking-wide">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5 flex-1">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-baseline text-xs font-mono">
                          <span className="text-gray-300 font-bold">{skill.name}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-wider uppercase border ${getBadgeStyle(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        {/* Progress slider bar */}
                        <div className="relative w-full h-1.5 bg-gray-900 border border-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r rounded-full ${getMeterColor(skill.level)}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
