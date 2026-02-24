import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsPreview() {
  const items = [...testimonials, ...testimonials]; // Double for seamless loop
  const controls = useAnimation();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // The core animation function
  const startInfiniteScroll = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: isHovered ? 120 : 40, // Slow down significantly on hover
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startInfiniteScroll();
  }, [isHovered]);

  return (
    <section className="bg-[var(--bg-main)] py-16 lg:py-24 overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Reviews"
          title="Loved by Our Customers"
          description="Real feedback from happy customers."
        />

        <div 
          className="relative mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={containerRef}
            style={{ x }}
            animate={controls}
            drag="x"
            // dragConstraints should match the container width
            dragConstraints={{ left: -2000, right: 0 }} 
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
            onDragStart={() => controls.stop()} // Stop auto-scroll when user grabs
            onDragEnd={() => startInfiniteScroll()} // Resume when they let go
          >
            {items.map((item, i) => (
              <div key={i} className="w-[320px] sm:w-[380px] shrink-0 select-none">
                <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-amber-400 text-xs mb-4">
                      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-base text-[var(--text-secondary)] italic leading-relaxed mb-6">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm shadow-inner">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{item.name}</p>
                      <p className="text-xs text-[var(--text-secondary)] opacity-70">Verified User</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}