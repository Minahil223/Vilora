
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid({ onAddToCart }) {

  const dresses = products.filter(
    (product) => product.category === "Dresses"
  );

  return (
    <section className="product-section" id="new-arrivals">

      <div className="section-heading">
        <p>THE VILORA EDIT</p>
        <h2>Our Dresses</h2>
        <span>Discover timeless elegance in every detail.</span>
      </div>

      <div className="product-grid">

        {dresses.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductGrid;

