import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  fullWidthMobile = true,
  href,
  onClick,
  className = "",
  leftIcon,
  rightIcon,
}) {
  // ---------- Variant Styles ----------

  // Inside Button.jsx

const variants = {
  primary:
    "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-md hover:shadow-lg transition-all duration-300",

  secondary:
    "bg-white text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-300",
   whatsapp:
  "bg-[var(--whatsapp)] text-white hover:brightness-110 shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-6 py-3",
  };
  
  // ---------- Base Styles ----------
  const baseStyles = clsx(
    "inline-flex items-center justify-center gap-2",
    "font-medium tracking-[0.3px] text-center",
    "rounded-xl cursor-pointer",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "min-h-[44px]",

    // Mobile first sizing
    "px-5 py-3 text-[15px]",

    // Desktop sizing
    "sm:px-7 sm:py-[14px] sm:text-[16px]",

    // Width behaviour
    fullWidthMobile ? "w-full sm:w-auto" : "w-auto",

    variants[variant],
    className
  );

  // ---------- Motion Animations ----------
  const motionProps = {
    whileHover: { y: -2, scale: 1.01 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.3, ease: "easeOut" },
  };

  // ---------- Content ----------
  const content = (
    <>
      {leftIcon && <span className="text-[18px] sm:text-[20px]">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="text-[18px] sm:text-[20px]">{rightIcon}</span>}
    </>
  );

  // ---------- Render as Link or Button ----------
  if (href) {
    return (
      <motion.a
        href={href}
        className={baseStyles}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseStyles}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}