const fragrances = [
  "Vanilla","Saffron","Chocolate","Mango","Hibiscus","Orange","Lavender","Sandalwood"
];

const waxTypes = ["Soy Wax","Paraffin","Beeswax"];

export default function FilterSidebar({
  selectedFragrance,
  setSelectedFragrance,
  selectedWax,
  setSelectedWax
}) {

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const clearFilters = () => {
    setSelectedFragrance([]);
    setSelectedWax([]);
  };

 const Pill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-9 px-4 flex items-center justify-center 
    rounded-full text-[13px] font-medium whitespace-nowrap
    transition-all duration-300 border

    ${
      active
        ? "bg-[#1A1816] text-white border-[#1A1816] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        : "bg-white border-[#E7DED2] text-[#6B6257] hover:border-[#1A1816] hover:text-[#1A1816]"
    }`}
  >
    {label}
  </button>
);

  return (
    <div className="bg-white/70 backdrop-blur-xl p-7 rounded-3xl border border-[#E7DED2] shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-serif text-2xl text-[#2C2420]">Filters</h2>

        <button
          onClick={clearFilters}
          className="text-xs tracking-widest text-[#9C8770] hover:text-black transition"
        >
          CLEAR
        </button>
      </div>

      {/* FRAGRANCE */}
      <div className="mb-10">
        <h3 className="text-sm tracking-[0.3em] uppercase text-[#9C8770] mb-5">
          Fragrance
        </h3>

        <div className="flex flex-wrap gap-3">
          {fragrances.map(f => (
            <Pill
              key={f}
              label={f}
              active={selectedFragrance.includes(f)}
              onClick={() => toggleItem(f, selectedFragrance, setSelectedFragrance)}
            />
          ))}
        </div>
      </div>

      {/* WAX TYPE */}
      <div>
        <h3 className="text-sm tracking-[0.3em] uppercase text-[#9C8770] mb-5">
          Wax Type
        </h3>

        <div className="flex flex-wrap gap-2">
          {waxTypes.map(w => (
            <Pill
              key={w}
              label={w}
              active={selectedWax.includes(w)}
              onClick={() => toggleItem(w, selectedWax, setSelectedWax)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}