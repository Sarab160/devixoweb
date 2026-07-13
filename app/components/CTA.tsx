"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-primary-dark to-accent-dark p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden shadow-xl shadow-primary/20"
        >
          {/* Inner Glowing Accents */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-4 text-center lg:text-left max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-[10px] text-white tracking-wider uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Accelerate Your Innovation
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Architect Your Custom Platform?
            </h3>
            
            <p className="text-sm text-white/80 font-light leading-relaxed">
              Partner with Devixo Solutions to build secure, scalable custom software architectures that elevate operational speed and drive measurable market outcomes.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0 relative z-20">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-3 px-8 py-[18px] rounded-full font-bold uppercase tracking-wider text-xs text-primary bg-white hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer"
            >
              Start Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
