"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  quote: string;
  stars: number;
  avatarColor: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Restaurant",
    quote: "Devixo Solutions built a custom POS system that completely transformed our restaurant operations. The kitchen display system and offline capabilities are life-saving.",
    stars: 5,
    avatarColor: "from-rose-500 to-orange-500",
    initials: "R",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const selectSlide = (targetIndex: number) => {
    setDirection(targetIndex > index ? 1 : -1);
    setIndex(targetIndex);
  };

  // Autoplay setup
  useEffect(() => {
    if (isHovered) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    } else {
      autoplayTimer.current = setInterval(slideNext, 6000);
    }

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isHovered, index]);

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 rounded-full border border-primary/25 bg-primary/5 text-xs text-primary font-bold tracking-widest uppercase mb-4"
          >
            Client Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-xl leading-tight"
          >
            What Our Partners Say
          </motion.h2>
        </div>

        {/* Carousel Content Container */}
        <div
          className="relative min-h-[380px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-4xl p-8 md:p-12 rounded-3xl border border-slate-200 bg-[#f8fafc]/60 backdrop-blur-md relative flex flex-col justify-between shadow-md"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/5 -scale-x-100 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: (testimonials[index] || testimonials[0]).stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed font-light mb-8 italic">
                  &ldquo;{(testimonials[index] || testimonials[0]).quote}&rdquo;
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 mt-4">
                {/* Avatar with gradient */}
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-tr ${(testimonials[index] || testimonials[0]).avatarColor} flex items-center justify-center font-bold text-white shadow-md text-lg select-none`}
                >
                  {(testimonials[index] || testimonials[0]).initials}
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    {(testimonials[index] || testimonials[0]).name}
                  </h4>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={slidePrev}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-primary/20 text-slate-600 hover:text-primary flex items-center justify-center cursor-pointer shadow-md z-20 hover:scale-105 active:scale-95 transition-all"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={slideNext}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-primary/20 text-slate-600 hover:text-primary flex items-center justify-center cursor-pointer shadow-md z-20 hover:scale-105 active:scale-95 transition-all"
            aria-label="Next Review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Control Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, dotIdx) => {
            const isActive = index === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => selectSlide(dotIdx)}
                className={`relative h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "w-8 bg-primary" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
