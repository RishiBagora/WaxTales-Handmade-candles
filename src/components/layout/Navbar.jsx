import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaCoffee } from "react-icons/fa"; // Coffee icon added
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";
// import business from "../../data/business";
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
  const whatsappLink = `https://wa.me/9922007656?text=Hi, I want to place a custom candle order`;

  // Coffee Theme Colors
  const colors = {
    espresso: "#3D2B1F",
    chocolate: "#4E342E",
    latte: "#A67B5B",
    cream: "#FFF8F0",
    gold: "#D4AF37",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "py-3 backdrop-blur-md border-b border-[#3D2B1F]/10 shadow-lg" 
            : "py-5 bg-transparent"
        }`}
        style={{
          background: scrolled
            ? "rgba(255, 248, 240, 0.85)" // Soft Cream Glass
            : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          
          {/* LOGO: Chocolatey Vibe */}
          <Link to="/" className="group flex items-center gap-2 outline-none">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="text-[#3D2B1F] text-2xl"
            >
              
              <img width="40px" height="40px" src="/images/logo.jpg" alt="Wax_Tales Logo" />
            </motion.div>
            <div className="font-playfair text-xl lg:text-2xl font-bold tracking-tight">
              <span className="text-[#3D2B1F]">Wax</span>
              <span className="text-[#A67B5B] ml-1">Tales</span>
            </div>
          </Link>

          {/* DESKTOP NAV: Minimalist & Clean */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] uppercase tracking-widest font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group py-1"
                >
                  <span className={`transition-colors duration-300 ${
                    isActive ? "text-[#3D2B1F]" : "text-[#3D2B1F]/70 hover:text-[#3D2B1F]"
                  }`}>
                    {link.name}
                  </span>
                  {/* Underline Animation like steam */}
                  <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#A67B5B] origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}

            {/* Premium Coffee Button */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(78, 52, 46, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              href=""
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-poppins text-sm shadow-md"
              style={{
                background: "linear-gradient(135deg, #4E342E 0%, #3D2B1F 100%)",
              }}
            >
              <FaWhatsapp className="text-lg text-[#e9cba7]" />
              <span className="text-[#e9cba7]">ORDER NOW</span>
            </motion.a>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-2 text-[#3D2B1F]"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={26} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU: Full Screen Coffee Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] text-[#FFF8F0] bg-[#3D2B1F] flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-8 right-8 text-[#FFF8F0]/80 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <FiX size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="font-playfair text-4xl text-[#FFF8F0] hover:text-[#A67B5B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href={whatsappLink}
                className="mt-4 flex items-center gap-3 px-8 py-4 rounded-full bg-[#A67B5B] text-[#FFF8F0] text-lg font-medium"
              >
                <FaWhatsapp /> <span className="text-white">WhatsApp Us </span> 
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}