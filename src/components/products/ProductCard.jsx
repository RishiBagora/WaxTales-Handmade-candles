import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
 if (!product) return null;

  const discountPercent =
    product?.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <Link to={`/products/${product.slug}`} className="block h-full group">

      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
        className="
        relative h-full flex flex-col
        bg-[#F8F5F1]
        border border-[#ECE7E1]
        overflow-hidden
        transition-all duration-500
        group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
        "
      >

        {/* IMAGE AREA */}
        <div className="relative aspect-[4/5] overflow-hidden">

          {/* DISCOUNT BADGE */}
          {discountPercent && (
            <div className="
            absolute top-4 left-4 z-10
            bg-[#1A1816] text-white
            text-[10px] tracking-[0.18em]
            px-3 py-[6px]
            ">
              {discountPercent}% OFF
            </div>
          )}

          {/* IMAGE */}
          <motion.img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          />

          {/* SUBTLE OVERLAY */}
          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/10
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition duration-700
          " />

        </div>


        {/* CONTENT */}
        <div className="flex flex-col flex-1 px-5 pt-5 pb-6">

          {/* CATEGORY */}
          <p className="
          text-[10px]
          tracking-[0.25em]
          text-[#9C8770]
          uppercase
          mb-2
          ">
            Hand Poured Candle
          </p>


          {/* PRODUCT NAME */}
          <h3 className="
          font-serif
          text-[18px]
          text-[#1A1816]
          leading-snug
          line-clamp-2
          min-h-[48px]
          ">
            {product.name}
          </h3>


          {/* PRICE AREA */}
          <div className="mt-auto pt-4 flex items-end justify-between">

            <div className="flex flex-col">

              <span className="
              text-[#1A1816]
              text-[18px]
              font-medium
              ">
                ₹{product.price}
              </span>

              {discountPercent && (
                <span className="
                text-sm
                text-[#9C8770]
                line-through
                ">
                  ₹{product.originalPrice}
                </span>
              )}

            </div>


            {/* HOVER CTA */}
            <span className="
            text-[11px]
            tracking-[0.2em]
            uppercase
            text-[#1A1816]

            translate-y-4
            opacity-0

            group-hover:translate-y-0
            group-hover:opacity-100

            transition-all duration-500
            ">
              View Product
            </span>

          </div>


          {/* LUXURY UNDERLINE */}
          <div className="
          mt-5
          h-[1px]
          w-0
          bg-[#1A1816]
          group-hover:w-full
          transition-all duration-700
          " />

        </div>

      </motion.div>

    </Link>
  );
}