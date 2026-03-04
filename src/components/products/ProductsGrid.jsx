import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {

  if (!products || products.length === 0) {
    return (
      <div className="col-span-full text-center py-20 text-[#9C8770]">
        No products found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">

      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
}