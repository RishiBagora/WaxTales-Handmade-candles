// import { motion } from "framer-motion";
// import Container from "../common/Container";
// import { FiHeart, FiStar, FiEdit3, FiPackage } from "react-icons/fi";

// const features = [
//   {
//     title: "Handmade with Love",
//     description:
//       "Every candle is hand-poured in small batches, making each piece unique.",
//     icon: FiHeart,
//   },
//   {
//     title: "Premium Wax Blend",
//     description:
//       "We use high quality soy & coconut wax for clean and long lasting burn.",
//     icon: FiStar,
//   },
//   {
//     title: "Luxury Fragrances",
//     description:
//       "Infused with rich scents that transform mood and elevate your space.",
//     icon: FiEdit3,
//   },
//   {
//     title: "Safe Delivery",
//     description:
//       "Carefully packed to ensure your candles arrive safely and beautifully.",
//     icon: FiPackage,
//   },
// ];

// export default function WhyChooseUs() {
//   const luxeEase = [0.19, 1, 0.22, 1];
  

//   return (
//     <section className="relative bg-[#F9F4EE] overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36">

//       {/* TOP WAVE (FIXED) */}
//       <svg
//         viewBox="0 0 1440 120"
//         className="absolute top-0 left-0 w-full h-[90px] sm:h-[110px] lg:h-[130px] -translate-y-[60%] pointer-events-none"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="#F6EDE4"
//           d="M0,60 C240,140 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
//         />
//       </svg>

//       {/* Decorative blobs */}
//       <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F3D9D9] rounded-full blur-3xl opacity-40" />
//       <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#EBDAC6] rounded-full blur-3xl opacity-40" />

//       <Container className="relative z-10">

//         {/* HEADER */}
//         <div className="text-center max-w-xl mx-auto mb-14 lg:mb-20">
//           <p className="text-xs tracking-[0.4em] text-[#B58E8E] uppercase mb-6">
//             Why Us
//           </p>

//           <h2 className="font-serif text-[32px] md:text-[46px] text-[#4B3E3E]">
//             Crafted with Love & Detail
//           </h2>

//           <p className="mt-4 text-[#7A6C6C] text-sm md:text-base leading-relaxed">
//             Every candle is thoughtfully created to bring warmth, calm and joy.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
//           {features.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: i * 0.1, ease: luxeEase }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-white rounded-[40px_20px_40px_20px] shadow-[0_15px_35px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500" />

//                 <div className="relative p-5 sm:p-6 lg:p-8">
//                   <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center 
//                   rounded-[60%_40%_50%_50%] 
//                   bg-gradient-to-br from-[#F6DADA] to-[#EBDAC6] 
//                   mb-4 sm:mb-6 shadow-sm">
//                     <Icon size={24} className="text-[#9C6F6F]" strokeWidth={1.8} />
//                   </div>

//                   <h3 className="font-serif text-[15px] sm:text-lg text-[#4B3E3E] mb-2 sm:mb-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-[12px] sm:text-sm text-[#7A6C6C] leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </Container>

//       {/* BOTTOM WAVE (FIXED) */}
//       <svg
//         viewBox="0 0 1440 120"
//         className="absolute bottom-0 left-0 w-full h-[90px] sm:h-[110px] lg:h-[130px] translate-y-[60%] pointer-events-none"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="#F6EDE4"
//           d="M0,60 C240,140 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
//         />
//       </svg>

//     </section>
//   );
// }

import { motion } from "framer-motion";
import Container from "../common/Container";
import { FiHeart, FiStar, FiEdit3, FiPackage } from "react-icons/fi";

const features = [
  {
    title: "Handmade with Love",
    description:
      "Every candle is hand-poured in small batches, making each piece unique.",
    icon: FiHeart,
  },
  {
    title: "Premium Wax Blend",
    description:
      "We use high quality soy & coconut wax for clean and long lasting burn.",
    icon: FiStar,
  },
  {
    title: "Luxury Fragrances",
    description:
      "Infused with rich scents that transform mood and elevate your space.",
    icon: FiEdit3,
  },
  {
    title: "Safe Delivery",
    description:
      "Carefully packed to ensure your candles arrive safely and beautifully.",
    icon: FiPackage,
  },
];

export default function WhyChooseUs() {
  const luxeEase = [0.19, 1, 0.22, 1];

  return (
    <section className="relative bg-[#F9F4EE] overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36">

      {/* TOP WAVE */}
      <svg
        viewBox="0 0 1440 120"
        className="absolute top-0 left-0 w-full h-[90px] sm:h-[110px] lg:h-[130px] -translate-y-[60%] pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          fill="#F6EDE4"
          d="M0,60 C240,140 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Decorative blobs (lighter blur for performance) */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#F3D9D9] rounded-full blur-2xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-44 h-44 bg-[#EBDAC6] rounded-full blur-2xl opacity-30" />

      <Container className="relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14 lg:mb-20">
          <p className="text-xs tracking-[0.4em] text-[#B58E8E] uppercase mb-6">
            Why Us
          </p>

          <h2 className="font-serif text-[32px] md:text-[46px] text-[#4B3E3E]">
            Crafted with Love & Detail
          </h2>

          <p className="mt-4 text-[#7A6C6C] text-sm md:text-base leading-relaxed">
            Every candle is thoughtfully created to bring warmth, calm and joy.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: luxeEase,
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 bg-white 
                  rounded-[40px_20px_40px_20px]
                  shadow-[0_10px_25px_rgba(0,0,0,0.04)]
                  transition-all duration-500
                  group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                />

                <div
                  className="relative p-5 sm:p-6 lg:p-8
                  transition-transform duration-500
                  group-hover:-translate-y-2 will-change-transform"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center
                    rounded-[60%_40%_50%_50%]
                    bg-gradient-to-br from-[#F6DADA] to-[#EBDAC6]
                    mb-4 sm:mb-6 shadow-sm"
                  >
                    <Icon
                      size={24}
                      className="text-[#9C6F6F]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="font-serif text-[15px] sm:text-lg text-[#4B3E3E] mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[12px] sm:text-sm text-[#7A6C6C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>

      {/* BOTTOM WAVE */}
      <svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 left-0 w-full h-[90px] sm:h-[110px] lg:h-[130px] translate-y-[60%] pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          fill="#F6EDE4"
          d="M0,60 C240,140 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        />
      </svg>

    </section>
  );
}