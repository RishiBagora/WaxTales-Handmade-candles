import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";
export default function ProductsGrid() {
  const products = useProducts();
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}