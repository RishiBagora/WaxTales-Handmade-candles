import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const options = [
  { label: "Price: Low to High", value: "low" },
  { label: "Price: High to Low", value: "high" },
  { label: "Top Rated", value: "rating" },
];

export default function SortBar({ setSortOption, count }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort");

  const selectOption = (opt) => {
    setSelected(opt.label);
    setSortOption(opt.value);
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between md:justify-end gap-6 w-full">

      {/* Product count */}
      <p className="text-sm text-[#6B6257] hidden md:block">
        {count} candles
      </p>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 px-5 h-10 rounded-full 
          bg-white/70 backdrop-blur-xl border border-[#E7DED2]
          text-sm text-[#2C2420] shadow-sm hover:shadow-md transition"
        >
          {selected}
          <FiChevronDown className={`transition ${open && "rotate-180"}`} />
        </button>

        {/* Dropdown menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity:0, y:-10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-10 }}
              className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-[#E7DED2] overflow-hidden z-20"
            >
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectOption(opt)}
                  className="w-full text-left px-5 py-3 text-sm text-[#4B3E3E] hover:bg-[#F6F1EB] transition"
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}