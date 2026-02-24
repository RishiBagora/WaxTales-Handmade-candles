import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom"; 
// If using Next.js replace this with: import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Customise", path: "/custom-order" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); 
  // For Next.js: const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl border-b shadow-sm" : "bg-transparent"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,240,245,0.7))"
            : "transparent",
          borderColor: "rgba(0,0,0,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[64px] lg:h-[76px]">

          {/* LOGO */}
          <div className="font-playfair text-lg lg:text-2xl font-semibold tracking-[0.6px] text-[var(--text-primary)]">
            Handicraft by <span className="text-[var(--primary)]">Yukti</span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-4 text-[15px] font-poppins relative">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 rounded-full"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBubble"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full backdrop-blur-md"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,240,245,0.8))",
                        boxShadow: "0 4px 15px rgba(232,174,183,0.25)",
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "text-[var(--primary)] font-medium"
                        : "text-[var(--text-primary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}

            {/* WhatsApp CTA */}
            <motion.a
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full text-white shadow-md hover:shadow-xl transition"
              style={{
                background: "linear-gradient(135deg,#25D366,#1ebe5d)",
              }}
            >
              <FaWhatsapp />
              WhatsApp
            </motion.a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FiMenu size={28} color="var(--text-primary)" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{
              background: "linear-gradient(#FFF6F9,#FFEFF4)",
            }}
          >
            <div className="p-6 flex justify-end">
              <FiX
                size={30}
                onClick={() => setMenuOpen(false)}
                color="var(--text-primary)"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-6 text-2xl font-poppins text-[var(--text-primary)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-6">
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full flex justify-center items-center gap-3 py-4 rounded-full text-white text-lg shadow-md"
                style={{
                  background: "linear-gradient(135deg,#25D366,#1ebe5d)",
                }}
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}