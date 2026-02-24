import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { business } from "../../data/business"; // <-- your business config

/**
 * WhatsAppFloat
 * Persistent floating WhatsApp CTA
 */

const defaultMessage =
  "Hi, I want to know more about your handmade products.";

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[999] group">
      
      {/* Tooltip (desktop only) */}
      <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white text-[var(--text-primary)] text-sm px-3 py-2 rounded-lg shadow-md whitespace-nowrap">
          Chat with us
        </div>
      </div>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex items-center justify-center
          w-[56px] h-[56px] sm:w-[60px] sm:h-[60px]
          rounded-full
          bg-[var(--whatsapp)] text-white
          shadow-xl hover:shadow-2xl
          cursor-pointer
        "
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          hover: { duration: 0.25, ease: "easeOut" },
          tap: { duration: 0.12 },
          scale: {
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        <FaWhatsapp className="text-[26px] sm:text-[28px]" />
      </motion.a>
    </div>
  );
}