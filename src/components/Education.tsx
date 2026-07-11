import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, Star, BookOpen } from "lucide-react";

export default function Education() {
  const highlights = [
    "Core Coursework: Data Structures, Algorithms, Database Systems, Computer Networks, and Machine Learning.",
    "Academic Focus: Fusing Web Application architectures with predictive intelligence networks.",
    "Practical Labs: Extensive hands-on experience in Unix, OOP with Java, and Database queries.",
    "Active member of student-led developer study groups and innovation workshops."
  ];

  return (
    <section id="education" className="relative py-20 px-6 overflow-hidden bg-black/10 border-y border-white/5">
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            05 / ACADEMIC_CREDENTIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            My Education
          </h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Establishing the foundational theories and practical techniques
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Education Timeline element */}
        <div className="relative border-l-2 border-dashed border-purple-500/20 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline dot node */}
            <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border border-purple-400 bg-black flex items-center justify-center shadow-[0_0_10px_#c084fc] z-10">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            </div>

            {/* Glassmorphic card */}
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-purple-400/30 transition-all duration-300">
              
              {/* Top info badge */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-white/5 border-b border-l border-white/5 rounded-bl-xl text-[9px] font-mono font-medium text-gray-500 flex items-center gap-1">
                <Star className="w-3 h-3 text-purple-400" />
                <span>B.Tech CSE</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg font-display font-extrabold text-white">
                    Bachelor of Technology
                  </h4>
                  <p className="text-xs text-purple-400 font-mono tracking-wider uppercase font-semibold">
                    Computer Science Engineering
                  </p>
                  <p className="text-sm text-gray-400 mt-1 font-medium">
                    Lingaya's Institute of Management and Technology (LIMAT)
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>2023 - 2027 (EXPECTED)</span>
                </div>
              </div>

              {/* Course details */}
              <div className="mt-6 space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <BookOpen className="w-4 h-4" />
                  <span>COURSE_HIGHLIGHTS.LOG</span>
                </div>
                <ul className="space-y-3 text-xs text-gray-400 leading-relaxed font-sans">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
