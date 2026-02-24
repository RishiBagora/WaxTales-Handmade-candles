import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { categories } from "../../data/categories";

export default function CategoriesPreview() {
  const filteredCategories = categories.filter((cat) => cat.name !== "All");

  const containerAnim = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[var(--accent)] py-12 lg:py-20">
      <Container>

        <SectionTitle
          subtitle="Browse"
          title="Shop by Category"
          description="Find the perfect handmade gift for every occasion."
        />

        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10"
        >
          {filteredCategories.map((cat) => (
            <motion.div key={cat.name} variants={cardAnim}>
              <Link
                to={`/products?category=${cat.name}`}
                className="block h-full"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300"
                >
                  {/* EMOJI / ICON */}
                  <motion.div
  whileHover={{ y: -5, scale: 1.02 }}
  className="bg-white rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300"
>
  {/* IMAGE */}
  <div className="h-[180px] overflow-hidden">
    <img
      src={cat.image}
      alt={cat.name}
      className="w-full h-full object-cover transition duration-500 hover:scale-110"
    />
  </div>

 
</motion.div>

                  {/* TITLE */}
                  <h3 className="font-medium text-lg text-[var(--text-primary)]">
                    {cat.name}
                  </h3>

                  {/* SUBTEXT */}
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    View Products →
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}