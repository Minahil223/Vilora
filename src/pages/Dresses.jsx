
import { Link } from "react-router-dom";
import products from "../data/products";

function Dresses() {
  const items = products.filter((product) =>
    product.category.toLowerCase().includes("dress")
  );

  return (
    <main className="collection-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <p className="eyebrow">THE VILORA EDIT</p>
      <h1>Modest Dresses</h1>
      <p>Timeless silhouettes for every occasion.</p>

      <div className="collection-grid">
        {items.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="collection-card"
            key={product.id}
          >
            <img src={product.image} alt={product.name} />
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <span>Rs. {product.price.toLocaleString("en-PK")}</span>
          </Link>
        ))}
      </div>

      {items.length === 0 && (
        <p>No dresses available yet. New pieces coming soon.</p>
      )}
    </main>
  );
}

export default Dresses;