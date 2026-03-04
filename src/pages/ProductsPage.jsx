import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";
import FilterSidebar from "../components/products/FilterSidebar";
import SortBar from "../components/products/SortBar";
import ProductsGrid from "../components/products/ProductsGrid";
import useProducts from "../hooks/useProducts";
export default function ProductsPage() {

  const products = useProducts();
  const [selectedFragrance, setSelectedFragrance] = useState([]);
  const [selectedWax, setSelectedWax] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* FILTER + SORT */
const filteredProducts = useMemo(() => {

  let filtered = [...products];

  // FRAGRANCE FILTER
  if (selectedFragrance.length > 0) {
    filtered = filtered.filter(p =>
      selectedFragrance.includes(p.fragrance)
    );
  }

  // WAX FILTER
  if (selectedWax.length > 0) {
    filtered = filtered.filter(p =>
      selectedWax.includes(p.waxType)
    );
  }

  // SORTING
  if (sortOption === "low") filtered.sort((a,b)=>a.price-b.price);
  if (sortOption === "high") filtered.sort((a,b)=>b.price-a.price);
  if (sortOption === "rating") filtered.sort((a,b)=>b.rating-a.rating);

  return filtered;

}, [products, selectedFragrance, selectedWax, sortOption]);

  console.log("selectedWax:", selectedWax);
console.log("product wax:", products.map(p => p.waxType));

  return (
    <div className="relative bg-[#F6F1EB] min-h-screen overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#E9DFD3] blur-[140px] rounded-full opacity-60"/>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#EFE6DB] blur-[140px] rounded-full opacity-60"/>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 relative z-10">

        {/* HERO HEADER */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.9}}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.4em] text-[#9C8770] uppercase mb-6">
            Collection
          </p>

          <h1 className="font-serif text-4xl md:text-6xl text-[#2C2420]">
            Our Candles
          </h1>

          <div className="w-24 h-[1px] bg-[#D8CFC4] mx-auto mt-8"/>
        </motion.div>

        {/* MOBILE BAR */}
        <div className="flex md:hidden justify-between items-center mb-8 gap-3">

          <button
            onClick={() => setIsFilterOpen(true)}
            className="px-6 py-3 rounded-full bg-white shadow text-sm"
          >
            Filters
          </button>

          <SortBar
            setSortOption={setSortOption}
            count={filteredProducts.length}
          />

        </div>


        {/* DESKTOP LAYOUT */}
        <div className="grid md:grid-cols-[280px_1fr] gap-14">

          {/* SIDEBAR */}
          <div className="hidden md:block">

            <div className="sticky top-32 p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-[#E7DED2]">

             <FilterSidebar
  products={products}
  selectedFragrance={selectedFragrance}
  setSelectedFragrance={setSelectedFragrance}
  selectedWax={selectedWax}
  setSelectedWax={setSelectedWax}
/>

            </div>

          </div>


          {/* PRODUCTS */}
          <div>

            <div className="hidden md:block mb-8">

              <SortBar
                setSortOption={setSortOption}
                count={filteredProducts.length}
              />

            </div>

            <ProductsGrid products={filteredProducts}/>

          </div>

        </div>

      </div>


      {/* MOBILE FILTER DRAWER */}
      <AnimatePresence>

        {isFilterOpen && (

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="fixed inset-0 bg-black/40 z-50"
          >

            <motion.div
              initial={{x:-400}}
              animate={{x:0}}
              exit={{x:-400}}
              transition={{type:"spring", damping:25}}
              className="bg-[#F6F1EB] w-80 h-full p-8 shadow-xl"
            >

              <button
                onClick={() => setIsFilterOpen(false)}
                className="mb-8 text-sm"
              >
                Close ✕
              </button>

              <FilterSidebar
                selectedFragrance={selectedFragrance}
                setSelectedFragrance={setSelectedFragrance}
                selectedWax={selectedWax}
                setSelectedWax={setSelectedWax}
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}