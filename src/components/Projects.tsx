import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Sparkles, Server, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  category: "all" | "web" | "ml";
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  glowColor: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "ml">("all");

  const projects: Project[] = [
    {
      title: "MoodAI",
      category: "web",
      image: "/src/assets/images/moodai_thumbnail_1783748175965.jpg",
      description: "An AI-powered mood enhancement and companion application that helps users improve their emotional well-being through mood tracking, AI companion interactions, music recommendations, memes, and mini-games.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "AI APIs"],
      features: [
        "Real-time sentiment tracker with emotional analytics.",
        "Interactive conversational chatbot companion.",
        "Acoustic and smart musical play-list recommendations.",
        "Dynamic wellness exercises and positive memory log.",
        "Emotional dashboard with micro-stress-relief mini-games."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://ais-pre-lmo5m7klcgs7pgepomggkf-657861945967.asia-southeast1.run.app",
      glowColor: "shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/50"
    },
    {
      title: "Student Marks Prediction",
      category: "ml",
      image: "/src/assets/images/marks_prediction_thumbnail_1783748190377.jpg",
      description: "A machine learning-based application that predicts student academic performance using Linear Regression algorithms and visualizes insights through interactive modern dashboards.",
      technologies: ["Python", "Machine Learning", "Linear Regression", "Streamlit", "Data Visualizations"],
      features: [
        "Predicts semester marks based on daily study hours.",
        "Trained using scikit-learn Linear Regression model.",
        "High-performance interactive Streamlit GUI.",
        "Modular performance-index heatmaps & charts.",
        "Academic warning system suggesting specific improvements."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://ais-pre-lmo5m7klcgs7pgepomggkf-657861945967.asia-southeast1.run.app",
      glowColor: "shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:border-cyan-500/50"
    },
    {
      title: "Personal Portfolio Website",
      category: "web",
      image: "/src/assets/images/portfolio_thumbnail_1783748203641.jpg",
      description: "A world-class futuristic developer portfolio showcasing projects, skills, certifications, and contact information with a modern UI and real-time canvas simulations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Canvas GL"],
      features: [
        "Interactive canvas particle networks and grid lines.",
        "Custom robotic dual-ring cursor tracking.",
        "Modular structural files and strictly typed definitions.",
        "Built-in visual CV viewer with system printing configuration.",
        "Responsive glassmorphism controls with form validation."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://ais-pre-lmo5m7klcgs7pgepomggkf-657861945967.asia-southeast1.run.app",
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-500/50"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotX = (yc - y) / 12; // rotate on X axis
    const rotY = (x - xc) / 12; // rotate on Y axis
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            03 / INNOVATIVE_BUILD_RECORDS
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Academic Projects
          </h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Fusing computer science models with beautiful engineering pipelines
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 select-none">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 border rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === "all"
                ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                : "bg-transparent text-slate-400 border-white/10 hover:text-white hover:bg-white/5"
            }`}
          >
            All Builds
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-5 py-2 border rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === "web"
                ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                : "bg-transparent text-slate-400 border-white/10 hover:text-white hover:bg-white/5"
            }`}
          >
            Web Apps
          </button>
          <button
            onClick={() => setFilter("ml")}
            className={`px-5 py-2 border rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === "ml"
                ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                : "bg-transparent text-slate-400 border-white/10 hover:text-white hover:bg-white/5"
            }`}
          >
            Machine Learning
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                key={project.title}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-300 ease-out p-5 group cursor-default ${project.glowColor}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Glowing tag */}
                  <span className="absolute top-3 left-3 px-2 py-1 bg-black/75 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-cyan-400 rounded">
                    {project.category === "ml" ? "AI / ML Build" : "Full Stack Web"}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-lg font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block mb-2">Key Core Features:</span>
                    <ul className="space-y-1">
                      {project.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-1.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-mono text-gray-400 hover:text-white hover:border-cyan-500/20 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/5 select-none">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-all duration-300 clickable"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500 hover:to-blue-600 border border-cyan-500/30 hover:border-cyan-400 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 clickable"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
