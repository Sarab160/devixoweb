"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Server, 
  CloudLightning, 
  BrainCircuit,
  type LucideIcon
} from "lucide-react";

interface TechItem {
  name: string;
  level: string; // e.g. "Advanced", "Expert", "Production-grade"
  desc: string;
  glowColor: string;
}

interface TechCategories {
  [key: string]: {
    icon: LucideIcon;
    title: string;
    items: TechItem[];
  };
}

const techCategories: TechCategories = {
  frontend: {
    icon: Laptop,
    title: "Frontend Development",
    items: [
      { name: "Next.js", level: "Expert", desc: "React Framework", glowColor: "group-hover:border-primary/30 shadow-primary/5" },
      { name: "React.js", level: "Expert", desc: "Dynamic UI Library", glowColor: "group-hover:border-cyan-500/30 shadow-cyan-500/5" },
      { name: "TypeScript", level: "Expert", desc: "Type Safe Code", glowColor: "group-hover:border-blue-500/30 shadow-blue-500/5" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Utility-first Styling", glowColor: "group-hover:border-teal-500/30 shadow-teal-500/5" },
      { name: "Framer Motion", level: "Advanced", desc: "Fluid UI Animations", glowColor: "group-hover:border-purple-500/30 shadow-purple-500/5" },
      { name: "Redux / Zustand", level: "Expert", desc: "Global State", glowColor: "group-hover:border-indigo-500/30 shadow-indigo-500/5" },
    ],
  },
  backend: {
    icon: Server,
    title: "Backend & Systems",
    items: [
      { name: "Node.js", level: "Expert", desc: "Server Environment", glowColor: "group-hover:border-green-500/30 shadow-green-500/5" },
      { name: "Go (Golang)", level: "Advanced", desc: "Concurrent Services", glowColor: "group-hover:border-cyan-500/30 shadow-cyan-500/5" },
      { name: "Python", level: "Expert", desc: "Logic & Automation", glowColor: "group-hover:border-yellow-500/30 shadow-yellow-500/5" },
      { name: "GraphQL", level: "Advanced", desc: "Flexible Query APIs", glowColor: "group-hover:border-pink-500/30 shadow-pink-500/5" },
      { name: "gRPC", level: "Advanced", desc: "Microservice Transport", glowColor: "group-hover:border-blue-500/30 shadow-blue-500/5" },
      { name: "NestJS", level: "Expert", desc: "Modular Architecture", glowColor: "group-hover:border-rose-500/30 shadow-rose-500/5" },
    ],
  },
  cloud: {
    icon: CloudLightning,
    title: "Cloud & Platform",
    items: [
      { name: "AWS", level: "Expert", desc: "Web Infrastructure", glowColor: "group-hover:border-orange-500/30 shadow-orange-500/5" },
      { name: "Google Cloud", level: "Advanced", desc: "Serverless & Compute", glowColor: "group-hover:border-blue-500/30 shadow-blue-500/5" },
      { name: "Docker", level: "Expert", desc: "Container Engine", glowColor: "group-hover:border-sky-500/30 shadow-sky-500/5" },
      { name: "Kubernetes", level: "Advanced", desc: "Container Clusters", glowColor: "group-hover:border-blue-600/30 shadow-blue-600/5" },
      { name: "Terraform", level: "Advanced", desc: "Infrastructure as Code", glowColor: "group-hover:border-purple-600/30 shadow-purple-600/5" },
      { name: "CI/CD GitHub", level: "Expert", desc: "Automated Pipelines", glowColor: "group-hover:border-gray-500/30 shadow-gray-500/5" },
    ],
  },
  ai: {
    icon: BrainCircuit,
    title: "AI & Database Eng",
    items: [
      { name: "PyTorch", level: "Advanced", desc: "Deep Learning Model", glowColor: "group-hover:border-orange-500/30 shadow-orange-500/5" },
      { name: "OpenAI / LLMs", level: "Expert", desc: "Agentic Integrations", glowColor: "group-hover:border-emerald-500/30 shadow-emerald-500/5" },
      { name: "PostgreSQL", level: "Expert", desc: "Relational Storage", glowColor: "group-hover:border-blue-500/30 shadow-blue-500/5" },
      { name: "MongoDB", level: "Expert", desc: "NoSQL Database", glowColor: "group-hover:border-green-500/30 shadow-green-500/5" },
      { name: "Redis", level: "Expert", desc: "Caching & Pub-Sub", glowColor: "group-hover:border-rose-500/30 shadow-rose-500/5" },
      { name: "Pinecone / Chroma", level: "Advanced", desc: "Vector Search Databases", glowColor: "group-hover:border-teal-500/30 shadow-teal-500/5" },
    ],
  },
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  return (
    <section id="tech-stack" className="relative py-24 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 rounded-full border border-primary/25 bg-primary/5 text-xs text-primary font-bold tracking-widest uppercase mb-4"
          >
            Technical Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-2xl leading-tight"
          >
            Powering Systems With <br />
            Modern Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-light max-w-xl"
          >
            We deploy secure, enterprise-approved technology pipelines designed for rapid scale.
          </motion.p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-3xl mx-auto">
          {Object.entries(techCategories).map(([key, cat]) => {
            const TabIcon = cat.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isActive 
                    ? "border-primary/25 text-primary shadow-sm" 
                    : "border-slate-200/60 text-slate-500 hover:text-primary hover:border-slate-300 bg-white"
                }`}
              >
                {/* Active Highlight Backdrop */}
                {isActive && (
                  <motion.span
                    layoutId="activeTabBackdrop"
                    className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <TabIcon className={`w-5 h-5 ${isActive ? "text-primary" : "text-slate-400"}`} />
                <span className="relative z-10">{cat.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Showcase of Active Category */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {techCategories[activeTab].items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`group p-6 rounded-xl border border-slate-200/70 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${item.glowColor}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 tracking-wide group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-light mt-1">{item.desc}</p>
                    </div>
                    
                    {/* Level Indicator Badge */}
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/15 transition-colors font-bold">
                      {item.level}
                    </span>
                  </div>

                  {/* Competency Level Bar */}
                  <div className="w-full bg-slate-100 h-[3.5px] rounded-full overflow-hidden mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: item.level === "Expert" ? "95%" : "80%" }}
                      transition={{ duration: 0.8, delay: idx * 0.05 + 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
