import { motion } from "motion/react";
import { Briefcase, Calendar, Terminal, ShieldAlert } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  status: string;
  points: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Technical Intern",
      company: "Academic Technical Internship",
      period: "2025 - PRESENT",
      status: "ACTIVE",
      points: [
        "Participated in agile development sprints, modeling, and mock designing layouts using Figma.",
        "Created responsive semantic web layouts using modern frontend development frameworks.",
        "Collaborated with project mentors to integrate mock controllers with client UI systems.",
        "Utilized Git for standard code tracking, merge routines, and branch configurations."
      ]
    },
    {
      role: "Freelance Junior Developer",
      company: "Web Development Contracts",
      period: "2024 - PRESENT",
      status: "COMPLETED",
      points: [
        "Constructed custom web interfaces and modern layouts for local business operations.",
        "Refined legacy CSS rules and assets, accelerating mobile loading speed metrics.",
        "Ensured rigorous testing of responsive boundaries across multi-screen devices.",
        "Delivered technical support for domain configuration, SEO tags, and hosting setups."
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            04 / CAREER_MILESTONES
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            My Experience
          </h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            A history of practical execution and learning initiatives
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline body */}
        <div className="relative border-l-2 border-dashed border-cyan-500/20 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12 py-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline dot node */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border border-cyan-400 bg-black flex items-center justify-center shadow-[0_0_10px_#22d3ee] z-10">
                <Briefcase className="w-3 h-3 text-cyan-400" />
              </div>

              {/* Glassmorphic body */}
              <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300">
                {/* Tech scanner lines */}
                <div className="absolute top-0 right-0 px-3 py-1 bg-white/5 border-b border-l border-white/5 rounded-bl-xl text-[9px] font-mono font-medium text-gray-500 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>{exp.status}</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-display font-extrabold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono tracking-wider uppercase font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Points list */}
                <ul className="space-y-2.5 text-xs text-gray-400 leading-relaxed font-sans">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
