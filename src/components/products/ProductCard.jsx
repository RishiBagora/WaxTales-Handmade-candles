import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="block h-full group">

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="h-full flex flex-col bg-[#F8F5F1] overflow-hidden 
        border border-[#ECE7E1] transition-all duration-500"
      >
        {/* IMAGE */}
        <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden">

          {/* Discount Badge */}
          {product.discountPercent && (
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 
            bg-[#1A1816] text-white text-[9px] sm:text-[10px] 
            tracking-[0.15em] px-2 py-1 sm:px-3 z-10">
              {product.discountPercent}% OFF
            </div>
          )}

          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          />

          <div className="absolute inset-0 bg-[#1A1816]/0 group-hover:bg-[#1A1816]/5 transition-all duration-700" />
        </div>

       {/* CONTENT */}
<div className="flex flex-col flex-1 px-3 pt-3 pb-4 sm:px-4 sm:pt-5 sm:pb-6">

  {/* CATEGORY */}
  <p className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#9C8770] uppercase mb-2">
    Hand Poured Candle
  </p>

  {/* TITLE AREA — FIXED HEIGHT */}
  <div className="min-h-[38px] sm:min-h-[48px]">
    <h3 className="font-serif text-[15px] sm:text-lg text-[#1A1816] leading-snug line-clamp-2">
      {product.name}
    </h3>
  </div>

  {/* PRICE AREA — FIXED HEIGHT */}
  <div className="mt-auto pt-3 flex items-end justify-between min-h-[46px]">

    <div className="flex flex-col justify-end">
      <span className="text-[#1A1816] text-[15px] sm:text-lg font-medium leading-none">
        ₹{product.price}
      </span>

      {/* reserve space even if no discount */}
      <span className="text-[11px] sm:text-sm text-[#9C8770] line-through h-[16px]">
        {product.discountPercent ? `₹${product.originalPrice}` : ""}
      </span>
    </div>

    {/* Desktop hover CTA (fixed space reserved) */}
    <div className="hidden sm:block w-[110px] text-right">
      <span className="text-[11px] tracking-[0.2em] uppercase text-[#1A1816]
      translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
      transition-all duration-500">
        View Product
      </span>
    </div>

  </div>

  {/* UNDERLINE */}
  <div className="mt-3 sm:mt-5 h-[1px] w-0 bg-[#1A1816] group-hover:w-full transition-all duration-700" />

</div>
      </motion.div>
    </Link>
  );
}