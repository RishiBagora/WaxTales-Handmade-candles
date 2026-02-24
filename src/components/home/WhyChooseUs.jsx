import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { FiHeart, FiStar, FiEdit3, FiPackage } from "react-icons/fi";

const features = [
  {
    title: "Handmade with Love",
    description:
      "Every product is handcrafted individually, making each piece truly unique.",
    icon: FiHeart,
  },
  {
    title: "Premium Materials",
    description:
      "We use high quality resin and materials for long lasting beauty.",
    icon: FiStar,
  },
  {
    title: "Fully Customizable",
    description:
      "Personalize your gifts exactly the way you want for your loved ones.",
    icon: FiEdit3,
  },
  {
    title: "Safe Delivery",
    description:
      "Carefully packed to ensure your gifts reach safely and beautifully.",
    icon: FiPackage,
  },
];

export default function WhyChooseUs() {
  const containerAnim = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[var(--bg-main)] py-14 lg:py-24">
      <Container>
        <SectionTitle
          subtitle="Why Us"
          title="Why Choose Handicraft by Yukti"
          description="Every gift is crafted with care, passion and attention to detail."
        />

        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10 mt-12"
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.title} variants={cardAnim}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full p-7 rounded-2xl bg-white/60 backdrop-blur-lg 
                  border border-white/40
                  shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]
                  transition-all duration-300"
                >
                  {/* ICON WRAPPER */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--accent)]/60 mb-5 group-hover:bg-[var(--primary)]/15 transition">
                    <Icon
                      size={26}
                      className="text-[var(--primary)]"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-semibold text-lg text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}