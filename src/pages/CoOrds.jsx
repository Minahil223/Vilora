
import { Link } from "react-router-dom";
import products from "../data/products";

function CoOrds() {
  const items = products.filter((product) => {
    const category = product.category.toLowerCase();
    return category.includes("co-ord") || category.includes("coord");
  });

  return (
    <main className="collection-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <p className="eyebrow">EFFORTLESSLY PUT TOGETHER</p>
      <h1>Co-Ord Sets</h1>
      <p>Refined matching sets for modern modest dressing.</p>

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
        <p>No co-ord sets available yet. New pieces coming soon.</p>
      )}
    </main>
  );
}

export default CoOrds;