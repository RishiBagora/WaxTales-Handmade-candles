// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Container from "../common/Container";
// import { categories } from "../../data/categories";

// export default function CategoriesPreview() {
//   const filteredCategories = categories.filter((cat) => cat.name !== "All");
//   const luxeEase = [0.19, 1, 0.22, 1];

//   return (
//     <section className="relative py-20 lg:py-28 bg-[#F6F1EB] overflow-hidden">
//       <Container>

//         {/* HEADER */}
//         <div className="text-center max-w-xl mx-auto mb-14 lg:mb-20">
//           <p className="text-xs tracking-[0.45em] text-[#9C8770] uppercase mb-6">
//             Browse
//           </p>

//           <h2 className="font-serif text-[34px] md:text-[48px] lg:text-[56px] text-[#1A1816]">
//             Shop by Category
//           </h2>

//           <p className="mt-5 text-[#6B635B] text-base md:text-lg leading-relaxed">
//             Discover scents crafted for every mood and every moment.
//           </p>

//           <div className="mt-7 w-16 h-[1px] bg-[#D8CFC4] mx-auto" />
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
//           {filteredCategories.map((cat) => (
//             <Link
//               key={cat.name}
//               to={`/products?category=${cat.name}`}
//               className="group block"
//             >
//               <motion.div
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.6, ease: luxeEase }}
//                 className="relative overflow-hidden aspect-[4/5] border border-[#705944] "
//               >
//                 {/* IMAGE */}
//                 <motion.img
//                   src={cat.image}
//                   alt={cat.name}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 1.4, ease: luxeEase }}
//                 />

//                 {/* Boutique Wavy Label */}
//                 <div className="absolute bottom-0 left-0 w-full">

//                   {/* Wavy SVG Shape */}
//                   <svg
//                     viewBox="0 0 500 120"
//                     preserveAspectRatio="none"
//                     className="w-full h-[90px] block"
//                   >
//                     <path
//                       d="M0,60 C120,120 380,0 500,60 L500,120 L0,120 Z"
//                       fill="rgba(246,241,235,0.92)"
//                     />
//                   </svg>

//                   {/* TEXT AREA */}
//                   <div className="bg-[#F6F1EB]/90 backdrop-blur-md px-4 pb-4 pt-2 sm:px-6 sm:pb-6">

//                     <h3 className="font-serif text-[#1A1816] text-lg sm:text-2xl leading-tight">
//                       {cat.name}
//                     </h3>

//                   </div>

//                 </div>

//               </motion.div>
//             </Link>
//           ))}
//         </div>

//       </Container>
//     </section>
//   );
// }


import { Link } from "react-router-dom";
import Container from "../common/Container";
import { categories } from "../../data/categories";

export default function CategoriesPreview() {
  const filteredCategories = categories.filter(
    (cat) => cat.name !== "All"
  );

  return (
    <section className="relative py-20 lg:py-28 bg-[#F6F1EB] overflow-hidden">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14 lg:mb-20">
          <p className="text-xs tracking-[0.45em] text-[#9C8770] uppercase mb-6">
            Browse
          </p>

          <h2 className="font-serif text-[34px] md:text-[48px] lg:text-[56px] text-[#1A1816]">
            Shop by Category
          </h2>

          <p className="mt-5 text-[#6B635B] text-base md:text-lg leading-relaxed">
            Discover scents crafted for every mood and every moment.
          </p>

          <div className="mt-7 w-16 h-[1px] bg-[#D8CFC4] mx-auto" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredCategories.map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${cat.name}`}
              className="group block"
            >
              <div
                className="relative overflow-hidden aspect-[4/5] border border-[#705944]
                transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                hover:-translate-y-2 will-change-transform"
              >

                {/* IMAGE */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover
                  transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                  group-hover:scale-[1.06] will-change-transform"
                />

                {/* Boutique Wavy Label */}
                <div className="absolute bottom-0 left-0 w-full">

                  {/* Wavy SVG Shape */}
                  <svg
                    viewBox="0 0 500 120"
                    preserveAspectRatio="none"
                    className="w-full h-[90px] block"
                  >
                    <path
                      d="M0,60 C120,120 380,0 500,60 L500,120 L0,120 Z"
                      fill="rgba(246,241,235,0.92)"
                    />
                  </svg>

                  {/* TEXT AREA */}
                  <div className="bg-[#F6F1EB]/95 px-4 pb-4 pt-2 sm:px-6 sm:pb-6">
                    <h3 className="font-serif text-[#1A1816] text-lg sm:text-2xl leading-tight">
                      {cat.name}
                    </h3>
                  </div>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}