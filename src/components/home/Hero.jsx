import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";
import { business } from "../../data/business";

export default function Hero() {

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut", delay },
  });

  return (
    <section className="bg-[var(--bg-main)] py-14 lg:py-24 lg:min-h-[90vh] flex items-center">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* LABEL */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-sm tracking-[2px] uppercase text-[var(--text-secondary)] mb-4"
            >
              Handmade Gifts & Resin Art
            </motion.p>

            {/* HEADLINE */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-playfair text-3xl lg:text-5xl leading-tight text-[var(--text-primary)]"
            >
              Handmade gifts crafted with love
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 text-base lg:text-lg text-[var(--text-secondary)] max-w-md mx-auto lg:mx-0"
            >
              Beautiful personalized gifts and resin creations made specially
              for your loved ones.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="w-full"
                >
                  Explore Products
                </Button>
              </Link>

              <Link to="/custom-order" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="w-full"
                >
                  Custom Order
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              src="/images/HomeHero.png"
              alt="Handmade Gifts"
              className="rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.06)] w-full max-w-md lg:max-w-lg"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}