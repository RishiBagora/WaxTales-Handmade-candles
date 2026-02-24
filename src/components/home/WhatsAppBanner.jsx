import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../common/Container";
import Button from "../common/Button";
import { business } from "../../data/business";

export default function WhatsAppBanner() {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hi, I want to place a custom order.`;

  return (
    <section className="bg-[var(--accent)]/30 py-14 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white p-8 lg:p-14 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] text-center"
        >
          {/* SMALL LABEL */}
          <p className="text-sm tracking-[2px] uppercase text-[var(--text-secondary)] mb-4">
            Custom Orders Welcome
          </p>

          {/* HEADING */}
          <h2 className="font-playfair text-2xl lg:text-4xl leading-tight text-[var(--text-primary)]">
            Have a custom gift idea in mind?
          </h2>

          {/* SUBTEXT */}
          <p className="mt-5 text-base lg:text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Share your idea with us and we will craft something truly special just for you.
          </p>

          {/* CTA BUTTON */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mt-8"
          >
            <a
              href={whatsappLink}
              target="_blank"
              aria-label="Start WhatsApp chat"
              className="block sm:inline-block"
            >
              <Button variant="whatsapp" className="w-full sm:w-auto flex items-center gap-3">
                <FaWhatsapp />
                Start Chat on WhatsApp
              </Button>
            </a>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}