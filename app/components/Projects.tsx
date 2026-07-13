"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Monitor, Wifi, ShoppingCart, Plus, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 rounded-full border border-primary/25 bg-primary/5 text-xs text-primary font-bold tracking-widest uppercase mb-4"
          >
            Delivered Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 max-w-3xl leading-tight"
          >
            Delivered Case Studies
          </motion.h2>
          
          {/* Mandatory Client Permission line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold text-slate-500 max-w-2xl"
          >
            * Note: Projects are displayed here with the permission of our clients.
          </motion.p>
        </div>

        {/* Projects Grid Block layout for future expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Delivered Restaurant POS System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl border border-slate-200 bg-white hover:border-primary/25 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            {/* Visual POS Mockup */}
            <div className="h-[180px] relative border-b border-slate-100 bg-slate-50 overflow-hidden">
              {/* POS UI mockup */}
              <div className="absolute inset-0 p-4 font-mono text-[8px] flex flex-col gap-1.5 select-none">
                <div className="flex justify-between border-b border-slate-200 pb-1.5 font-bold text-slate-500">
                  <span>🍕 Table 03</span>
                  <span className="text-emerald-500">● Active</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center bg-white border border-slate-100 rounded p-1 shadow-sm">
                    <span className="text-slate-600">Chicken Karahi</span>
                    <span className="text-primary font-bold">$18.00</span>
                  </div>
                  <div className="flex justify-between items-center bg-white border border-slate-100 rounded p-1 shadow-sm">
                    <span className="text-slate-600">Garlic Naan x4</span>
                    <span className="text-primary font-bold">$8.00</span>
                  </div>
                </div>
                <div className="mt-auto border-t border-slate-200 pt-1.5 flex justify-between font-bold text-slate-800">
                  <span>Total Bill</span>
                  <span className="text-primary">$26.00</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Delivered
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["React", "PostgreSQL", "Offline Sync"].map((t) => (
                    <span key={t} className="text-[8px] font-mono uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  Restaurant POS &amp; Management System
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light mb-4">
                  A custom order-taking, billing, and offline-sync system delivered to our restaurant client.
                </p>
              </div>
              
              <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">Food &amp; Hospitality</span>
                <span className="text-[10px] font-semibold text-slate-600 group-hover:text-primary transition-colors flex items-center gap-0.5">
                  Delivered Case Study <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Placeholder Slot for Future Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border-2 border-dashed border-slate-200/80 bg-slate-50/20 p-8 flex flex-col items-center justify-center text-center min-h-[360px] group hover:border-slate-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-105 transition-transform duration-300">
              <Plus className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-700 mb-1">New Case Study</h4>
            <p className="text-xs text-slate-400 font-light max-w-[200px]">
              More enterprise custom systems and mobile apps currently being reviewed for permission parameters.
            </p>
          </motion.div>

          {/* Card 3: Placeholder Slot for Future Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border-2 border-dashed border-slate-200/80 bg-slate-50/20 p-8 flex flex-col items-center justify-center text-center min-h-[360px] group hover:border-slate-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-105 transition-transform duration-300">
              <Plus className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-700 mb-1">New Case Study</h4>
            <p className="text-xs text-slate-400 font-light max-w-[200px]">
              Additional project details will be added as client authorizations are signed.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
