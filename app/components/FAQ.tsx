"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can you build a POS system for my restaurant or retail shop?",
    answer: "Yes — this is one of our most in-demand services. We build fully custom POS systems designed around how your business actually operates. This includes table management, order-taking, kitchen display screens, billing, inventory tracking, sales reports, and staff management. The system works offline and syncs to the cloud automatically. We handle everything from design to deployment and staff training.",
  },
  {
    question: "How long does it take to build a website or mobile app?",
    answer: "A professional business website typically takes 2–4 weeks. A feature-rich web application or mobile app (iOS/Android) usually takes 6–12 weeks depending on complexity. We start with a discovery session to understand your requirements, then provide a clear timeline before any work begins. You'll receive regular progress updates throughout the process.",
  },
  {
    question: "What is an AI Agent and how can it help my business?",
    answer: "An AI Agent is a smart software system that can handle tasks automatically — like answering customer questions via chat, processing orders, reading documents, or routing support tickets. For example, we can build a chatbot for your website that answers 80% of common customer questions around the clock without any human involvement. This saves staff time and improves customer response speed dramatically.",
  },
  {
    question: "What does Data Analytics mean for a small or medium business?",
    answer: "Data analytics means turning the numbers your business already generates — sales, orders, customer activity — into useful insights you can act on. We build dashboards that show you your best-selling products, peak business hours, revenue trends, and customer patterns. Instead of guessing, you make decisions based on real data. This is especially useful for restaurants, retail stores, and e-commerce businesses.",
  },
  {
    question: "Do you provide support and maintenance after the project is delivered?",
    answer: "Absolutely. Every project we deliver includes a post-launch support period. We offer ongoing maintenance packages that cover bug fixes, performance monitoring, security updates, and small improvements. You'll never be left to manage a technical system alone after handover. We're a long-term partner, not just a one-time vendor.",
  },
  {
    question: "How do you handle data security and privacy in the systems you build?",
    answer: "Security is built into everything from day one. All data is encrypted in transit and at rest. We use secure authentication systems, role-based access controls (so cashiers can't access owner reports), and regular security audits. For businesses dealing with sensitive customer data, we ensure the system meets relevant compliance standards for your region.",
  },
  {
    question: "Can I get a custom system if my business needs are very specific?",
    answer: "That's exactly what we specialize in. We don't sell off-the-shelf software — every system we build is designed specifically for your business workflow. Whether you have unique ordering processes, special pricing rules, custom reporting needs, or integration requirements with other tools you already use, we build it the way you need it.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 rounded-full border border-primary/25 bg-primary/5 text-xs text-primary font-bold tracking-widest uppercase mb-4 animate-pulse-slow"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-xl leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/30 bg-primary/5 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
                >
                  <span className={`text-base font-bold transition-colors duration-300 ${
                    isOpen ? "text-primary-dark" : "text-slate-800 group-hover:text-primary"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Indicator */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    isOpen 
                      ? "border-primary/20 bg-primary/10 text-primary" 
                      : "border-slate-200 bg-slate-50 text-slate-400 group-hover:text-primary group-hover:border-primary/15"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-light border-t border-slate-200/50 mt-1 bg-white/45">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
