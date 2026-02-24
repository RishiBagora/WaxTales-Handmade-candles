import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

/**
 * SectionTitle
 * Elegant editorial heading system for all sections.
 */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={clsx(
        "flex flex-col",
        alignment,
        "space-y-2 mb-10 sm:mb-14",
        className
      )}
    >
      {/* Subtitle */}
      {subtitle && (
        <motion.span
          variants={itemVariants}
          className="text-[12px] tracking-[2px] uppercase font-medium text-[var(--text-secondary)]"
        >
          {subtitle}
        </motion.span>
      )}

      {/* Title */}
      <motion.h2
        variants={itemVariants}
        className={clsx(
          "font-medium tracking-[0.5px] text-[var(--text-primary)] leading-[1.25]",
          "font-[Playfair_Display]",
          "max-w-[28rem] sm:max-w-[36rem] lg:max-w-[640px]",
          "text-[28px] sm:text-[34px] lg:text-[40px]"
        )}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={itemVariants}
          className={clsx(
            "text-[var(--text-secondary)] leading-[1.7]",
            "font-[Poppins]",
            "text-[15px] lg:text-[17px]",
            "max-w-[420px] lg:max-w-[520px]"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}