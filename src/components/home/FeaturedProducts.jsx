import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../products/ProductCard";
import Button from "../common/Button";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

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
    <section className="py-12 lg:py-20 bg-transparent">
      <Container>

        {/* SECTION HEADER */}
        <SectionTitle
          subtitle="Our Collection"
          title="Featured Products"
          description="Explore some of our most loved handmade creations."
        />

        {/* PRODUCT GRID */}
        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={cardAnim}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-10 flex justify-center">
          <Link to="/products" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full">
              View All Products
            </Button>
          </Link>
        </div>

      </Container>
    </section>
  );
}