import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Github, Linkedin, Send, ShieldCheck, RefreshCw, Terminal, AlertTriangle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = "Identification name required.";
    if (!email.trim()) {
      tempErrors.email = "Communication node/email address required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Format error: address must be a valid email.";
    }
    if (!subject.trim()) tempErrors.subject = "Transmission subject header required.";
    if (!message.trim()) tempErrors.message = "Message payload required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate cybernetic payload injection
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      // Auto close success modal
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-bold">
            08 / DIRECT_COMMUNICATION_LINK
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Contact Me
          </h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Inject your communications directly into the primary terminal
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Quick Contact info */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden flex flex-col gap-6">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/5" />
              
              <div className="space-y-1">
                <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  COMM_RECEPTION_PORTS
                </h4>
                <p className="text-[10px] font-mono text-gray-500 uppercase">
                  STATUS: LISTENING_TO_RECRUITERS
                </p>
              </div>

              {/* Email Card link */}
              <a
                href="mailto:prasannatalakala5@gmail.com"
                className="flex items-center gap-4 p-4 border border-white/5 hover:border-cyan-400/40 rounded-2xl bg-white/5 hover:bg-cyan-500/5 transition-all duration-300 group truncate"
              >
                <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 text-cyan-400 group-hover:bg-cyan-500/10 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="truncate text-left">
                  <span className="text-[10px] font-mono text-gray-500 uppercase font-bold block">
                    Direct Mail Link
                  </span>
                  <span className="text-xs text-white group-hover:text-cyan-400 transition-colors font-medium">
                    prasannatalakala5@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone Card link */}
              <a
                href="tel:9390929308"
                className="flex items-center gap-4 p-4 border border-white/5 hover:border-cyan-400/40 rounded-2xl bg-white/5 hover:bg-cyan-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 text-purple-400 group-hover:bg-purple-500/10 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-gray-500 uppercase font-bold block">
                    Hotline Voice Node
                  </span>
                  <span className="text-xs text-white group-hover:text-purple-400 transition-colors font-medium">
                    +91 9390929308
                  </span>
                </div>
              </a>
            </div>

            {/* Social profiles networking */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden flex flex-col gap-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase font-bold text-left block">
                EXTERNAL_NETWORKS_SYNC
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 border border-white/5 hover:border-cyan-400/40 rounded-xl bg-white/5 hover:bg-cyan-500/5 transition-all duration-300 group justify-center text-xs font-mono font-bold text-gray-300 hover:text-cyan-400"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 border border-white/5 hover:border-cyan-400/40 rounded-xl bg-white/5 hover:bg-cyan-500/5 transition-all duration-300 group justify-center text-xs font-mono font-bold text-gray-300 hover:text-cyan-400"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>

            {/* Micro warning system detail */}
            <div className="p-4 border border-cyan-500/20 rounded-3xl bg-cyan-500/5 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-[10px] font-mono text-cyan-400/80 leading-relaxed text-left">
                SYSTEM MESSAGE: Recruitment and technical inquiries are routed through an encrypted validation check before immediate visual injection. Response turnaround: under 24 hours.
              </p>
            </div>

          </div>

          {/* Contact Form Area */}
          <div className="lg:col-span-7 p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-cyan-400/10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-cyan-400/10 pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-[10px] font-mono text-gray-400 uppercase font-bold tracking-wider">
                    SENDER_IDENTIFIER (Name)
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="Enter your name..."
                    className={`w-full bg-black/60 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 ${
                      errors.name ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.2)]" : "border-white/5 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    }`}
                  />
                  {errors.name && <span className="text-[9px] font-mono text-red-400 block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-[10px] font-mono text-gray-400 uppercase font-bold tracking-wider">
                    RETURN_COMM_NODE (Email)
                  </label>
                  <input
                    id="email-input"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    placeholder="address@example.com"
                    className={`w-full bg-black/60 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 ${
                      errors.email ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.2)]" : "border-white/5 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    }`}
                  />
                  {errors.email && <span className="text-[9px] font-mono text-red-400 block">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject-input" className="text-[10px] font-mono text-gray-400 uppercase font-bold tracking-wider">
                  TRANSMISSION_HEADER (Subject)
                </label>
                <input
                  id="subject-input"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
                  }}
                  placeholder="Subject of your request..."
                  className={`w-full bg-black/60 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 ${
                    errors.subject ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.2)]" : "border-white/5 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                  }`}
                />
                {errors.subject && <span className="text-[9px] font-mono text-red-400 block">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message-input" className="text-[10px] font-mono text-gray-400 uppercase font-bold tracking-wider">
                  MESSAGE_PAYLOAD_BODY
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                  }}
                  placeholder="Write your message detailed specs here..."
                  className={`w-full bg-black/60 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all duration-300 placeholder:text-gray-600 resize-none ${
                    errors.message ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.2)]" : "border-white/5 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                  }`}
                />
                {errors.message && <span className="text-[9px] font-mono text-red-400 block">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-800 disabled:to-gray-900 text-white font-mono text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] disabled:cursor-not-allowed select-none cursor-pointer mt-4"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>INJECTING ENCRYPTED PAYLOAD...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>TRANSMIT PAYLOAD (Send message)</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-950/95 border border-green-500/30 max-w-sm w-full p-6 rounded-3xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(34,197,94,0.15)] relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-green-400/20" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-green-400/20" />

              <div className="w-12 h-12 border border-green-500/25 rounded-full flex items-center justify-center bg-green-500/5 mb-4 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
              </div>

              <h4 className="text-sm font-mono text-green-400 tracking-widest font-bold uppercase mb-2">
                TRANSMISSION_SUCCESS
              </h4>
              <p className="text-xs text-gray-300 font-sans leading-relaxed mb-4">
                Message payload successfully compiled, validated, and injected into T. Lakshmi Prasanna's receiving queue.
              </p>

              <div className="w-full flex items-center gap-1.5 justify-center py-1 bg-green-500/5 border border-green-500/10 rounded-lg text-[9px] text-green-400 font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>SYNC_CODE: SEC_TX_OK_993</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
