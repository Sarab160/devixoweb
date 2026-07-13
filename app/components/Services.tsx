"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MonitorSmartphone,
  Brain,
  Cloud,
  Database,
  Bot,
  Smartphone,
  Globe,
  Cpu,
  BarChart2,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  slug: string;
  icon: any;
  title: string;
  shortDesc: string;
  badge: string | null;
  color: string;
  glow: string;
  badgeColor: string;
}

const services: ServiceItem[] = [
  {
    slug: "pos",
    icon: MonitorSmartphone,
    title: "POS & Business Management Systems",
    shortDesc: "Complete order, table, billing, and staff tracking custom engineered for physical store operations.",
    badge: "Most Popular",
    color: "group-hover:text-primary",
    glow: "rgba(37, 99, 235, 0.08)",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    slug: "web",
    icon: Globe,
    title: "Website Development",
    shortDesc: "Highly interactive, fast corporate web apps and high-performance e-commerce portals.",
    badge: null,
    color: "group-hover:text-accent-dark",
    glow: "rgba(14, 165, 233, 0.08)",
    badgeColor: "",
  },
  {
    slug: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDesc: "Cross-platform mobile apps for iOS and Android built for high-performance scale.",
    badge: null,
    color: "group-hover:text-emerald-600",
    glow: "rgba(16, 185, 129, 0.08)",
    badgeColor: "",
  },
  {
    slug: "ml",
    icon: Brain,
    title: "Data Science & Machine Learning",
    shortDesc: "Unlock raw business metrics with forecasting, optimization, and custom ML pipelines.",
    badge: null,
    color: "group-hover:text-violet-600",
    glow: "rgba(139, 92, 246, 0.08)",
    badgeColor: "",
  },
  {
    slug: "ai",
    icon: Bot,
    title: "AI Agents & Generative AI",
    shortDesc: "LLM integration, autonomous workflows, and custom GPT assistants to optimize operations.",
    badge: "Trending",
    color: "group-hover:text-rose-600",
    glow: "rgba(244, 63, 94, 0.08)",
    badgeColor: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    slug: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    shortDesc: "AWS and GCP microservices orchestration with custom automated CI/CD build scripts.",
    badge: null,
    color: "group-hover:text-amber-600",
    glow: "rgba(245, 158, 11, 0.08)",
    badgeColor: "",
  },
  {
    slug: "analytics",
    icon: BarChart2,
    title: "Data Analytics & Business Intelligence",
    shortDesc: "Real-time dashboard renderers tracking operational statistics and sales KPIs.",
    badge: null,
    color: "group-hover:text-orange-600",
    glow: "rgba(234, 88, 12, 0.08)",
    badgeColor: "",
  },
  {
    slug: "database",
    icon: Database,
    title: "Database Design & Management",
    shortDesc: "Secure, optimized transactional data architectures for high user concurrency constraints.",
    badge: null,
    color: "group-hover:text-teal-600",
    glow: "rgba(20, 184, 166, 0.08)",
    badgeColor: "",
  },
  {
    slug: "api",
    icon: Cpu,
    title: "API Integration & Automation",
    shortDesc: "Synchronize payment gateways, CRMs, and custom endpoints safely and securely.",
    badge: null,
    color: "group-hover:text-indigo-600",
    glow: "rgba(99, 102, 241, 0.08)",
    badgeColor: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("#services a > div");
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];

    cards.forEach((card) => {
      const fn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", e.clientX - rect.left + "px");
        card.style.setProperty("--y", e.clientY - rect.top + "px");
      };
      card.addEventListener("mousemove", fn);
      handlers.push({ el: card, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, []);

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 rounded-full border border-primary/25 bg-primary/5 text-xs text-primary font-bold tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-3xl leading-tight"
          >
            Bespoke Engineering Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-light max-w-2xl"
          >
            We build performant digital architectures tailored to help your organization scale cleanly.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <motion.div
                  variants={cardVariants}
                  className="group relative h-full rounded-2xl border border-slate-100 bg-white p-7 flex flex-col justify-between transition-all duration-300 hover:border-primary/20 overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 cursor-pointer"
                >
                  {/* Radial Glow on Hover */}
                  <div
                    className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), ${service.glow}, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon + Badge Row */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/5 ${service.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-light group-hover:text-slate-600 transition-colors">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Learn More */}
                  <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-primary transition-colors duration-300 mt-6">
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
