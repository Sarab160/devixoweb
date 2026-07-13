"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            // Re-enable body scroll
            document.body.style.overflow = "";
            setTimeout(() => {
              onComplete();
            }, 800); // Allow fadeout animation to finish
          }, 500);
          return 100;
        }
        // Random progress increments for realism
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Soft light blue ambient glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-pulse-slow" />
          </div>

          <div className="relative z-10 w-full max-w-sm px-8 flex flex-col items-center">
            {/* Logo Reveal */}
            <div className="overflow-hidden mb-6 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="Devixo Solutions"
                  width={120}
                  height={120}
                  className="object-contain w-28 h-28"
                  priority
                />
              </motion.div>
            </div>

            {/* Glowing Progress Number */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-extrabold tracking-widest text-gradient-accent mb-6 font-mono select-none"
            >
              {progress}%
            </motion.div>

            {/* Light progress track and bar */}
            <div className="relative w-full h-[2px] bg-primary/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_8px_rgba(37,99,235,0.2)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-primary/70 mt-4 font-mono select-none"
            >
              Initializing Systems
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
