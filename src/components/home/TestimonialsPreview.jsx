// import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
// import { useState, useRef, useEffect } from "react";

// function Testimonials() {
//   const [isPaused, setIsPaused] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const x = useMotionValue(0);
//   const containerRef = useRef(null);

//   /* 🕯 Candle testimonials */
//   const testimonials = [
//     {
//       text: "The fragrance fills the entire room within minutes. It feels like a luxury spa at home.",
//       name: "Priya Kapoor",
//       role: "Mumbai",
//       initials: "PK"
//     },
//     {
//       text: "Beautiful packaging, premium scent and long burn time. Totally worth it!",
//       name: "Ritika Sharma",
//       role: "Delhi",
//       initials: "RS"
//     },
//     {
//       text: "Vanilla candle has become part of my nightly routine. So calming and cozy.",
//       name: "Neha Jain",
//       role: "Jaipur",
//       initials: "NJ"
//     },
//     {
//       text: "These candles instantly elevate the vibe of my home. Guests always ask about them.",
//       name: "Aman Verma",
//       role: "Bangalore",
//       initials: "AV"
//     },
//   ];

//   const items = [...testimonials, ...testimonials, ...testimonials];

//   const [cardWidth, setCardWidth] = useState(380);
  
//   useEffect(() => {
//     const updateSize = () => {
//       setCardWidth(window.innerWidth < 768 ? 300 : 380);
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   const gap = 32;
//   const TOTAL_WIDTH = (cardWidth + gap) * testimonials.length;

//   useAnimationFrame(() => {
//     if (isPaused || isDragging) return;
    
//     const current = x.get();
//     const next = current - 0.5;

//     if (Math.abs(next) >= TOTAL_WIDTH) {
//       x.set(0);
//     } else {
//       x.set(next);
//     }
//   });

//   return (
//     <section className="bg-[#F6F1EB] py-20 md:py-32 overflow-hidden relative">

//       {/* warm glow bg */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#E9DFD3_0%,transparent_70%)] opacity-40 pointer-events-none" />

//       <div className="relative z-10">

//         {/* HEADER */}
//         <div className="mx-auto max-w-3xl text-center px-6 mb-12 md:mb-20">
//           <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#9C8770] mb-4 block">
//             Testimonials
//           </span>

//           <h2 className="font-serif text-3xl md:text-5xl text-[#2C2420]">
//             Loved by Candle Lovers
//           </h2>
//         </div>

//         {/* MARQUEE */}
//         <div 
//           className="relative group touch-pan-y"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {/* fade edges */}
//           <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#F6F1EB] to-transparent z-20 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#F6F1EB] to-transparent z-20 pointer-events-none" />

//           <motion.div
//             className="flex gap-8 cursor-grab active:cursor-grabbing"
//             style={{ x }}
//             drag="x"
//             dragConstraints={{ right: 0, left: -TOTAL_WIDTH * 2 }}
//             onDragStart={() => setIsDragging(true)}
//             onDragEnd={() => setIsDragging(false)}
//             ref={containerRef}
//           >
//             {items.map((t, index) => (
//               <div
//                 key={index}
//                 style={{ minWidth: cardWidth }}
//                 className="
//                   rounded-[2rem]
//                   border border-[#E8DFD6]
//                   bg-[#FBF7F2]
//                   p-8 md:p-10
//                   shadow-[0_10px_25px_rgba(0,0,0,0.05)]
//                   hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
//                   transition-all duration-200
//                   flex flex-col justify-between
//                   select-none
//                 "
//               >
//                 <div>
//                   {/* stars */}
//                   <div className="flex gap-1 mb-6 text-[#C9A46C]">
//                     {[1,2,3,4,5].map(star => (
//                       <span key={star}>★</span>
//                     ))}
//                   </div>

//                   <p className="text-base md:text-lg italic text-[#5E5348] leading-relaxed">
//                     "{t.text}"
//                   </p>
//                 </div>

//                 <div className="mt-10 flex items-center gap-4">
//                   <div className="h-12 w-12 rounded-full bg-[#E8DFD6] flex items-center justify-center text-[#7A6C62] font-semibold">
//                     {t.initials}
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#2C2420]">{t.name}</p>
//                     <p className="text-xs text-[#9C8770]">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState, useRef, useMemo } from "react";

function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      text: "The fragrance fills the entire room within minutes. It feels like a luxury spa at home.",
      name: "Priya Kapoor",
      role: "Mumbai",
      initials: "PK"
    },
    {
      text: "Beautiful packaging, premium scent and long burn time. Totally worth it!",
      name: "Ritika Sharma",
      role: "Delhi",
      initials: "RS"
    },
    {
      text: "Vanilla candle has become part of my nightly routine. So calming and cozy.",
      name: "Neha Jain",
      role: "Jaipur",
      initials: "NJ"
    },
    {
      text: "These candles instantly elevate the vibe of my home. Guests always ask about them.",
      name: "Aman Verma",
      role: "Bangalore",
      initials: "AV"
    },
  ];

  // memoized duplicated items (prevents recalculation)
  const items = useMemo(() => {
    return [...testimonials, ...testimonials, ...testimonials];
  }, []);

  const CARD_WIDTH = 380; // fixed logical width
  const GAP = 32;
  const TOTAL_WIDTH = (CARD_WIDTH + GAP) * testimonials.length;

  useAnimationFrame(() => {
    if (isPaused || isDragging) return;

    const current = x.get();
    const next = current - 0.5;

    if (Math.abs(next) >= TOTAL_WIDTH) {
      x.set(0);
    } else {
      x.set(next);
    }
  });

  return (
    <section className="bg-[#F6F1EB] py-20 md:py-32 overflow-hidden relative">

      {/* warm glow bg (lighter repaint) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#E9DFD3_0%,transparent_70%)] opacity-30 pointer-events-none" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center px-6 mb-12 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#9C8770] mb-4 block">
            Testimonials
          </span>

          <h2 className="font-serif text-3xl md:text-5xl text-[#2C2420]">
            Loved by Candle Lovers
          </h2>
        </div>

        {/* MARQUEE */}
        <div
          className="relative group touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#F6F1EB] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#F6F1EB] to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing will-change-transform"
            style={{ x }}
            drag="x"
            dragConstraints={{ right: 0, left: -TOTAL_WIDTH * 2 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            ref={containerRef}
          >
            {items.map((t, index) => (
              <div
                key={index}
                className="
                  min-w-[300px] md:min-w-[380px]
                  rounded-[2rem]
                  border border-[#E8DFD6]
                  bg-[#FBF7F2]
                  p-8 md:p-10
                  shadow-[0_8px_20px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)]
                  transition-shadow duration-200
                  flex flex-col justify-between
                  select-none
                "
              >
                <div>
                  <div className="flex gap-1 mb-6 text-[#C9A46C]">
                    {[1,2,3,4,5].map(star => (
                      <span key={star}>★</span>
                    ))}
                  </div>

                  <p className="text-base md:text-lg italic text-[#5E5348] leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#E8DFD6] flex items-center justify-center text-[#7A6C62] font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2C2420]">{t.name}</p>
                    <p className="text-xs text-[#9C8770]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;