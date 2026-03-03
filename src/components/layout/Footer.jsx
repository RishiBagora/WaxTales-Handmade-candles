import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import Container from "../common/Container";
import { business } from "../../data/business";
import { navLinks } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F6F1EB] overflow-hidden">

      {/* Soft glow background */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EDE4D9] rounded-full blur-[160px] opacity-60 pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 py-20 lg:py-28"
        >
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-center lg:text-left">

            {/* BRAND */}
            <div>
              <h3 className="font-serif text-3xl tracking-wide text-[#2C2420]">
                {business.name}
              </h3>

              <p className="mt-5 text-[#6B6257] leading-relaxed max-w-sm mx-auto lg:mx-0">
                {business.tagline}
              </p>

              <div className="mt-6 flex justify-center lg:justify-start gap-4 text-[#2C2420]">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>

            {/* LINKS */}
            <div>
              <h4 className="uppercase tracking-[0.3em] text-xs text-[#9C8770] mb-6">
                Explore
              </h4>

              <div className="space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block text-[#4B3E3E] hover:text-black transition-all duration-300 hover:translate-x-1"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="uppercase tracking-[0.3em] text-xs text-[#9C8770] mb-6">
                Contact
              </h4>

              <div className="space-y-4 text-[#6B6257]">

                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <FiMail size={16} /> {business.email}
                </div>

                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <FiMapPin size={16} /> {business.city}
                </div>

                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <FiClock size={16} /> {business.workingHours}
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                className="inline-block mt-8"
              >
                <button className="group relative overflow-hidden px-8 py-4 border border-[#2C2420] text-[#2C2420] uppercase tracking-[0.25em] text-xs">

                  <span className="absolute inset-0 bg-[#2C2420] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                    <FaWhatsapp size={16} />
                    WhatsApp Us
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 border-t border-[#E4DCD2]" />

          {/* BOTTOM BAR */}
          <div className="mt-6 flex flex-col lg:flex-row justify-between items-center text-sm text-[#8B7D6B] gap-4 text-center lg:text-left">
            <p>© {year} {business.name}. All rights reserved.</p>
            <p className="italic">Crafted slowly. Designed intentionally.</p>
          </div>

        </motion.div>
      </Container>
    </footer>
  );
}