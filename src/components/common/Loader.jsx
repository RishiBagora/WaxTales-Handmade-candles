import React from "react";
import { motion } from "framer-motion";

/**
 * Loader — Elegant bouncing dots loader
 */

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const dotVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Loader() {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6 sm:px-0"
    >
      {/* Dots */}
      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex gap-3"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            variants={dotVariants}
            className="
              w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]
              rounded-full bg-[var(--blush)]
            "
          />
        ))}
      </motion.div>

      {/* Text */}
      <p className="text-[14px] sm:text-[15px] tracking-[0.5px] text-[var(--text-secondary)] font-[Poppins]">
        Loading beautiful things...
      </p>
    </div>
  );
}