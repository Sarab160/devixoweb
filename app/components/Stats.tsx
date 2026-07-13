"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate, motion } from "framer-motion";
import { Award, Briefcase, Smile, Users } from "lucide-react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

function Counter({ from, to, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => controls.stop();
  }, [from, to, isInView, duration]);

  return <span ref={ref}>{count}</span>;
}

const statsData = [
  {
    icon: Briefcase,
    from: 0,
    to: 180,
    suffix: "+",
    label: "Projects Delivered",
    color: "from-blue-100/40 to-blue-200/40",
    textColor: "text-blue-600",
  },
  {
    icon: Users,
    from: 0,
    to: 45,
    suffix: "+",
    label: "Tech Specialists",
    color: "from-sky-100/40 to-sky-200/40",
    textColor: "text-sky-600",
  },
  {
    icon: Smile,
    from: 0,
    to: 99,
    suffix: "%",
    label: "Client Satisfaction",
    color: "from-emerald-100/40 to-emerald-200/40",
    textColor: "text-emerald-600",
  },
  {
    icon: Award,
    from: 0,
    to: 10,
    suffix: "+",
    label: "Years Experience",
    color: "from-amber-100/40 to-amber-200/40",
    textColor: "text-amber-600",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      {/* Soft background blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-white border border-dark-border hover:border-dark-border-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Metric Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${stat.color} ${stat.textColor} mb-4 transition-transform group-hover:scale-110 duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Stat Number */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 font-mono">
                  <Counter from={stat.from} to={stat.to} />
                  <span className={stat.textColor}>{stat.suffix}</span>
                </div>

                {/* Stat Label */}
                <div className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider text-center uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
