import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function Collection() {
  const { season } = useParams();
  const { addToCart } = useCart();

  const items = products.filter(
    (product) =>
      product.category.toLowerCase() === season.toLowerCase()
  );

  const title = season.charAt(0).toUpperCase() + season.slice(1);

  return (
    <main className="collection-page">

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="section-heading">
        <p>THE VILORA EDIT</p>
        <h2>{title} Collection</h2>
        <span>Discover elegance for every season.</span>
      </div>

      <div className="collection-grid">

        {items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}

      </div>

      {items.length === 0 && (
        <p>No products available in this collection.</p>
      )}

    </main>
  );
}

export default Collection;