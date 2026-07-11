import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ShieldCheck, Cpu, Users, BarChart3, Calendar, Check, ExternalLink, X } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  icon: any;
  iconColor: string;
  glowColor: string;
  borderColor: string;
  id: string;
  skills: string[];
  description: string;
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: "nptel",
      title: "Introduction to Internet of Things 4.0",
      issuer: "NPTEL / Swayam (IIT Kharagpur)",
      year: "2025",
      icon: Cpu,
      iconColor: "text-cyan-400",
      glowColor: "shadow-[0_0_20px_rgba(34,211,238,0.2)]",
      borderColor: "hover:border-cyan-500/30",
      skills: ["IoT Architecture", "Sensors & Actuators", "Cloud Integration", "Data Transmission Protocols", "Smart Automation Systems"],
      description: "Rigorous academic and practical exploration of Internet of Things (IoT) technologies, covering edge computing nodes, embedded protocols, cloud gateway syncs, and real-time device control interfaces."
    },
    {
      id: "reliance",
      title: "Team Leader & Leadership Training",
      issuer: "Reliance Group",
      year: "2025",
      icon: Users,
      iconColor: "text-purple-400",
      glowColor: "shadow-[0_0_20px_rgba(168,85,247,0.2)]",
      borderColor: "hover:border-purple-500/30",
      skills: ["Agile Team Management", "Active Communication", "Conflict Resolution", "Strategic Sprints", "Client Liaison Workflows"],
      description: "A comprehensive soft skills development program focused on directing development cells, organizing sprint pipelines, handling resource allocation, and delivering structural client requirements."
    },
    {
      id: "deloitte",
      title: "Data Analytics Training Program",
      issuer: "Deloitte / Forage",
      year: "2025",
      icon: BarChart3,
      iconColor: "text-blue-400",
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.2)]",
      borderColor: "hover:border-blue-500/30",
      skills: ["Analytical Data Modeling", "Tableau Visualizations", "SQL Queries", "Strategic Business Case Insights", "Presentations"],
      description: "Virtual experience training replicating key data analyst responsibilities, analyzing extensive metrics, producing visual database reports, and providing strategic performance recommendations."
    }
  ];

  return (
    <section id="certificates" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            06 / QUALIFIED_INDEX
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            My Certificates
          </h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            External and industrial validations of tech proficiency
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group hover:bg-slate-900/50 cursor-pointer relative overflow-hidden ${cert.glowColor} ${cert.borderColor}`}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Tech geometric details */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/5" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 ${cert.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base font-display font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500 uppercase">SYS_VERIFIED</span>
                  <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold tracking-wider uppercase select-none cursor-pointer">
                    <span>View Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Credential viewer popup */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-slate-950/95 border border-white/10 rounded-3xl w-full max-w-lg p-6 md:p-8 flex flex-col overflow-hidden shadow-2xl z-10 backdrop-blur-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-cyan-400/10 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-1.5 border border-white/5 hover:border-red-500 rounded-lg text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Card Header info */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`w-11 h-11 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 ${selectedCert.iconColor}`}>
                  {(() => {
                    const Icon = selectedCert.icon;
                    return <Icon className="w-5.5 h-5.5" />;
                  })()}
                </div>
                <div>
                  <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                    SECURE_CREDENTIAL_VERIFIED
                  </h4>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">
                    ISSUER: SWIFT_SECURE_VAULT
                  </p>
                </div>
              </div>

              {/* Content body */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-extrabold text-white">
                  {selectedCert.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                  <div>
                    <span className="text-gray-600 font-semibold block uppercase text-[9px]">ISSUER:</span>
                    <span className="text-gray-300">{selectedCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-semibold block uppercase text-[9px]">YEAR:</span>
                    <span className="text-gray-300">{selectedCert.year}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-400 font-sans leading-relaxed pt-2 border-t border-white/5">
                  {selectedCert.description}
                </div>

                {/* Skills learned */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-2 font-bold tracking-wider">
                    Core Acquired Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-cyan-500/5 border border-cyan-400/10 text-[10px] font-mono text-cyan-400 rounded-md flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-cyan-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer status button */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                <span className="font-mono text-green-500 flex items-center gap-1 font-semibold uppercase tracking-wider text-[10px]">
                  <ShieldCheck className="w-4 h-4 text-green-500 animate-pulse" />
                  <span>Status: Active</span>
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 border border-white/10 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 font-mono font-medium rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer select-none"
                >
                  Close panel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
