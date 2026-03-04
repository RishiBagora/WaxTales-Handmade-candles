// import { motion, useScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useRef } from "react";
// import Container from "../common/Container";
// import ProductCard from "../products/ProductCard";
// import { products } from "../../data/products";

// export default function FeaturedProducts() {
//   const featuredProducts = products.slice(0, 4);
//   const targetRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end start"],
//   });

//   const yGlow = useTransform(scrollYProgress, [0, 1], [-80, 80]);
//   const luxeEase = [0.19, 1, 0.22, 1];

//   const containerAnim = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.18, delayChildren: 0.2 },
//     },
//   };

//   const itemAnim = {
//     hidden: { opacity: 0, y: 60 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1.1, ease: luxeEase },
//     },
//   };

//   return (
//     <section
//       ref={targetRef}
//       className="relative py-20 lg:py-28 bg-[#F7F3EE] overflow-hidden"
//     >
//       {/* Softer Parallax Glow */}
//       <motion.div
//         style={{ y: yGlow }}
//         className="absolute -top-40 left-1/2 -translate-x-1/2 
//         w-[900px] h-[650px] bg-[#EFE6DB] rounded-full blur-[120px] 
//         opacity-60 pointer-events-none"
//       />

//       <Container className="relative z-10">

//         {/* HEADER */}
//         <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
//           <motion.span
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-xs tracking-[0.45em] text-[#9C8770] uppercase mb-6"
//           >
//             Curated Collection
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: luxeEase }}
//             viewport={{ once: true }}
//             className="font-serif text-[36px] md:text-[52px] lg:text-[60px] text-[#1A1816]"
//           >
//             Signature Creations
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="mt-5 max-w-xl text-[#6B635B] text-base md:text-lg leading-relaxed"
//           >
//             Designed for warmth, calm and slow rituals.  
//             Hand-poured in small batches using premium soy blends.
//           </motion.p>

//           <div className="mt-7 w-16 h-[1px] bg-[#D8CFC4]" />
//         </div>

//         {/* PRODUCT GRID */}
//         <motion.div
//           variants={containerAnim}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4
//           gap-x-4 gap-y-8
//           md:gap-x-6 md:gap-y-10
//           lg:gap-x-8 lg:gap-y-12"
//         >
//           {featuredProducts.map((product) => (
//             <motion.div
//               key={product.id}
//               variants={itemAnim}
//               className="group"
//             >
//               <div className="transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-3">
//                 <ProductCard product={product} />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-20 flex flex-col items-center"
//         >
//           <Link to="/products" className="group inline-block">
//             <div className="relative overflow-hidden border border-[#1A1816] 
//             px-10 py-4 sm:px-16 sm:py-6 
//             uppercase tracking-[0.28em] text-[11px] sm:text-xs 
//             text-[#1A1816] font-medium transition-all duration-500
//             hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">

//               <span className="absolute inset-0 bg-[#1A1816] 
//               translate-y-full group-hover:translate-y-0 
//               transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

//               <span className="relative z-10 group-hover:text-white transition-colors duration-500">
//                 View Full Collection
//               </span>
//             </div>
//           </Link>

//           <p className="mt-6 text-sm italic text-[#9C8770] font-serif">
//             Crafted slowly. Designed intentionally.
//           </p>
//         </motion.div>

//       </Container>

//       {/* Bottom depth fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F3EE] to-transparent pointer-events-none" />
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import ProductCard from "../products/ProductCard";
import useProducts from "../../hooks/useProducts";

export default function FeaturedProducts() {
   const products = useProducts();
  const featuredProducts = products.slice(0, 4);
  const luxeEase = [0.19, 1, 0.22, 1];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F7F3EE] overflow-hidden">

      {/* Soft static glow (no scroll animation) */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2
        w-[600px] h-[400px] bg-[#EFE6DB] rounded-full
        blur-[70px] opacity-50 pointer-events-none"
      />

      <Container className="relative z-10">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.45em] text-[#9C8770] uppercase mb-6"
          >
            Curated Collection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxeEase }}
            viewport={{ once: true }}
            className="font-serif text-[36px] md:text-[52px] lg:text-[60px] text-[#1A1816]"
          >
            Signature Creations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-5 max-w-xl text-[#6B635B] text-base md:text-lg leading-relaxed"
          >
            Designed for warmth, calm and slow rituals.  
            Hand-poured in small batches using premium soy blends.
          </motion.p>

          <div className="mt-7 w-16 h-[1px] bg-[#D8CFC4]" />
        </div>

        {/* PRODUCT GRID */}
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4
          gap-x-4 gap-y-8
          md:gap-x-6 md:gap-y-10
          lg:gap-x-8 lg:gap-y-12"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: luxeEase,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-3">
                <ProductCard product={product} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <Link to="/products" className="group inline-block">
            <div
              className="relative overflow-hidden border border-[#1A1816] 
              px-10 py-4 sm:px-16 sm:py-6 
              uppercase tracking-[0.28em] text-[11px] sm:text-xs 
              text-[#1A1816] font-medium transition-all duration-500
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              <span
                className="absolute inset-0 bg-[#1A1816] 
                translate-y-full group-hover:translate-y-0 
                transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />

              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                View Full Collection
              </span>
            </div>
          </Link>

          <p className="mt-6 text-sm italic text-[#9C8770] font-serif">
            Crafted slowly. Designed intentionally.
          </p>
        </motion.div>

      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F3EE] to-transparent pointer-events-none" />
    </section>
  );
}