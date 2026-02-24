import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className="group h-full flex flex-col bg-white rounded-2xl 
        overflow-hidden border border-black/5
        shadow-[0_4px_18px_rgba(0,0,0,0.06)]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
        transition-all duration-300"
      >
        {/* IMAGE — FIXED RATIO */}
        <div className="relative aspect-[1/1] overflow-hidden bg-gray-100">
        {/* DISCOUNT BADGE */}
{product.discountPercent && (
  <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-2.5 py-1 rounded-full shadow-md">
    {product.discountPercent}% OFF
  </div>
)}
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 p-3 sm:p-4">

          {/* TITLE — MAX 2 LINES */}
          <h3 className="text-[var(--text-primary)] font-medium text-sm sm:text-base line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>

          {/* PRICE — PUSH TO BOTTOM */}
          {/* PRICE AREA */}
<div className="mt-auto pt-3 flex items-end justify-between">
  <div className="flex flex-col">

    {/* DISCOUNTED PRICE */}
    <span className="text-[var(--primary)] font-semibold text-base sm:text-lg">
      ₹{product.price}
    </span>

    {/* ORIGINAL PRICE (IF DISCOUNT EXISTS) */}
    {product.discountPercent && (
      <span className="text-xs text-[var(--text-secondary)] line-through">
        ₹{product.originalPrice}
      </span>
    )}
  </div>

  {/* QUICK VIEW BUTTON */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="text-xs px-3 py-1.5 rounded-full 
    bg-[var(--accent)] text-[var(--text-primary)] 
    opacity-0 group-hover:opacity-100 transition"
  >
    View
  </motion.div>
</div>
        </div>
      </motion.div>
    </Link>
  );
}