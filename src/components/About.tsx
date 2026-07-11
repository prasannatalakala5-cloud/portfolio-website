import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, MapPin, Target, Flame, Cpu, Award, Zap, BookOpen } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Custom CountUp Component logic within state
  const [projectsCount, setProjectsCount] = useState(0);
  const [certsCount, setCertsCount] = useState(0);
  const [techsCount, setTechsCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animateCount = (target: number, setter: (val: number) => void, duration = 1200) => {
        let startTime: number | null = null;
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setter(Math.floor(progress * target));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setter(target);
          }
        };
        requestAnimationFrame(step);
      };

      animateCount(3, setProjectsCount);
      animateCount(3, setCertsCount);
      animateCount(15, setTechsCount);
      animateCount(1200, setHoursCount, 1800);
    }
  }, [isInView]);

  const infoCards = [
    {
      title: "Education",
      value: "B.Tech in CSE",
      description: "Lingaya's Institute of Management & Technology",
      icon: GraduationCap,
      color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    },
    {
      title: "Location",
      value: "Andhra Pradesh",
      description: "Available for on-site & remote roles in India",
      icon: MapPin,
      color: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    },
    {
      title: "Career Goal",
      value: "Full Stack & AI",
      description: "Building production software and smart solutions",
      icon: Target,
      color: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    },
    {
      title: "Learning Mindset",
      value: "Continuous Growth",
      description: "Mastering complex technologies from first principles",
      icon: Flame,
      color: "text-orange-400 border-orange-400/20 bg-orange-400/5",
    },
  ];

  const counterCards = [
    { label: "Projects Completed", value: projectsCount, suffix: "+", icon: Cpu, color: "from-cyan-400 to-blue-500" },
    { label: "Certificates Earned", value: certsCount, suffix: "", icon: Award, color: "from-blue-500 to-purple-500" },
    { label: "Technologies Learned", value: techsCount, suffix: "+", icon: Zap, color: "from-purple-500 to-pink-500" },
    { label: "Hours of Learning", value: hoursCount, suffix: "+", icon: BookOpen, color: "from-cyan-400 to-purple-500" },
  ];

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden bg-black/20 border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            01 / DETAILED_DOSSIER
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            About Me
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio introduction Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden"
          >
            {/* Tech scanner bars */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-cyan-400/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-cyan-400/20" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5">
                  <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    L. Prasanna Profile
                  </h4>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">
                    SYS_LEVEL: ENTERING_ENGINEER
                  </p>
                </div>
              </div>

              <div className="text-slate-300 font-sans leading-relaxed text-sm md:text-base space-y-4">
                <p>
                  "I am T. Lakshmi Prasanna, currently pursuing a Bachelor of Technology in Computer Science Engineering. I am passionate about software development, artificial intelligence, and modern web technologies. As a fresher, I believe continuous learning is the key to becoming a successful developer."
                </p>
                <p>
                  "Whenever I don't know something, I make it my goal to learn it. I enjoy building projects that solve real-world problems while improving my technical skills every day. My ultimate aim is to synthesize elegant interfaces with intelligent background systems."
                </p>
              </div>
            </div>

            {/* Quick terminal footer info */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-3 text-[10px] font-mono text-gray-500">
              <div>CLASS_OF_27_LIMAT</div>
              <div>LOC: AP, INDIA</div>
              <div>STATUS: ACTIVELY_LEARNING</div>
            </div>
          </motion.div>

          {/* Core Info Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 rounded-3xl border flex flex-col justify-between backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 bg-white/5 border-white/10 text-cyan-400 hover:border-cyan-400/40`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/90">
                      {card.title}
                    </span>
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">
                      {card.value}
                    </h5>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Counters Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {counterCards.map((counter, idx) => {
            const Icon = counter.icon;
            return (
              <motion.div
                key={counter.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-4 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 text-gray-400 shrink-0">
                  <Icon className="w-5 h-5 text-gray-300" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-2xl md:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${counter.color}`}>
                      {counter.value}
                    </span>
                    <span className="text-lg font-bold text-gray-400">{counter.suffix}</span>
                  </div>
                  <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase leading-tight">
                    {counter.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
