import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import Container from "../common/Container";
import Button from "../common/Button";
import { business } from "../../data/business";
import { navLinks } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--beige)] border-t border-black/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 lg:py-16"
        >
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 text-center lg:text-left">

            {/* BRAND COLUMN */}
            <div>
              <h3 className="font-serif text-xl lg:text-2xl font-semibold tracking-wide text-[var(--text-primary)]">
                {business.name}
              </h3>

              <p className="text-[var(--text-secondary)] mt-3 max-w-sm mx-auto lg:mx-0">
                {business.tagline}
              </p>

              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-xl text-[var(--text-primary)] hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">
                Quick Links
              </h4>

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="block py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition hover:translate-x-1"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold mb-4 text-[var(--text-primary)]">
                Contact
              </h4>

              <div className="space-y-3 text-[var(--text-secondary)]">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <FiMail /> {business.email}
                </div>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <FiMapPin /> {business.city}
                </div>

                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <FiClock /> {business.workingHours}
                </div>
              </div>
            </div>
          </div>

          {/* WHATSAPP CTA */}
          <div className="mt-10 lg:mt-14 text-center">
            <Button
              variant="whatsapp"
              href={`https://wa.me/${business.whatsappNumber}`}
            >
              <FaWhatsapp /> Chat on WhatsApp
            </Button>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-black/5 pt-6 mt-10 text-sm text-[var(--text-secondary)] text-center">
            © {year} {business.name}. All rights reserved.
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}