import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

/**
 * EmptyState — friendly no-data UI
 */

export default function EmptyState({
  title = "No products found",
  description = "We're working on adding beautiful handmade products. Please check back soon 💕",
  showCTA = false,
  ctaText = "Chat on WhatsApp",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-[50vh] flex flex-col items-center justify-center text-center gap-5 px-6 sm:px-0"
    >
      {/* Icon */}
      <div className="text-[40px] sm:text-[48px]">🎁</div>

      {/* Content */}
      <div className="max-w-[320px] sm:max-w-[420px] space-y-2">
        <h3 className="font-[Playfair_Display] text-[22px] sm:text-[26px] text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="font-[Poppins] text-[15px] sm:text-[16px] text-[var(--text-secondary)]">
          {description}
        </p>
      </div>

      {/* Optional CTA */}
      {showCTA && (
        <Button
          variant="whatsapp"
          href="https://wa.me/919999999999"
        >
          {ctaText}
        </Button>
      )}
    </motion.div>
  );
}