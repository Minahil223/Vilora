
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span>{product.tag}</span>

        <button aria-label="Add to wishlist">
          ♡
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>
          Rs. {product.price.toLocaleString("en-PK")}
        </p>

        <button onClick={handleAddToCart}>
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default ProductCard;