
import { Link } from "react-router-dom";
import products from "../data/products";

function Abayas() {
  const items = products.filter((product) =>
    product.category.toLowerCase().includes("abaya")
  );

  return (
    <main className="collection-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <p className="eyebrow">TIMELESS MODESTY</p>
      <h1>Elegant Abayas</h1>
      <p>Graceful pieces made for understated elegance.</p>

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
        <p>Our abaya collection is coming soon.</p>
      )}
    </main>
  );
}

export default Abayas;