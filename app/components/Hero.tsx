"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    const timer = setTimeout(() => setShowContent(true), 1400);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />

      {/* Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Parallax Code Card */}
      <motion.div
        animate={{ x: mousePosition.x * -25, y: mousePosition.y * -25 }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
        className="absolute top-[18%] right-[6%] hidden xl:block w-68 p-5 rounded-2xl border border-primary/10 bg-white/95 shadow-xl animate-float-slow"
      >
        <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] text-slate-400 font-mono ml-1">pos-system.ts</span>
        </div>
        <pre className="text-[11px] font-mono text-slate-600 leading-relaxed select-none">
          <code>
            <span className="text-primary font-semibold">const</span> order = <span className="text-accent-dark font-semibold">await</span> pos.place(&#123;<br />
            &nbsp;&nbsp;table: <span className="text-amber-600">&apos;T-04&apos;</span>,<br />
            &nbsp;&nbsp;items: <span className="text-emerald-600">[&apos;Pizza&apos;, &apos;Soda&apos;]</span>,<br />
            &nbsp;&nbsp;status: <span className="text-emerald-600">&apos;confirmed&apos;</span><br />
            &#125;);
          </code>
        </pre>
      </motion.div>

      {/* Floating AI Status Card */}
      <motion.div
        animate={{ x: mousePosition.x * 20, y: mousePosition.y * 20 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-[22%] left-[6%] hidden lg:block p-4 rounded-xl border border-primary/10 bg-white/90 shadow-lg animate-float-medium"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">AI</span>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-400 tracking-wider">Model Inference</div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">Response: <span className="text-emerald-600">98ms</span></div>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">

        {/* ── DEVIXO SOLUTIONS — Big, bold, flies in from front ── */}
        <motion.div
          initial={{ scale: 3, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 select-none px-2"
        >
          <h1
            className="font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(2.8rem, 12vw, 7rem)" }}
          >
            <span className="text-slate-900">DEVIXO</span>
            <br />
            <span
              className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              SOLUTIONS
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed mb-4"
        >
          We build <span className="text-slate-800 font-semibold">POS systems</span>,{" "}
          <span className="text-slate-800 font-semibold">web & mobile apps</span>,{" "}
          <span className="text-slate-800 font-semibold">AI agents</span>, and{" "}
          <span className="text-slate-800 font-semibold">cloud solutions</span> that drive real business results.
        </motion.p>

        {/* Sub-tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {["POS Systems", "Web Apps", "Mobile Apps", "AI & ML", "Cloud", "Generative AI"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/15 bg-primary/5 text-primary"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="px-8 py-4 rounded-full font-semibold text-base text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center gap-2"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            onClick={(e) => handleScrollTo(e, "services")}
            className="px-8 py-4 rounded-full font-semibold text-base border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/25 bg-white hover:bg-slate-50 shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            See Our Services
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 0.5 } : {}}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="flex flex-col items-center gap-1">
            <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-slate-400">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-primary" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
