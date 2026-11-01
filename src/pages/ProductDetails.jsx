
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const [size, setSize] = useState("");
  const [color, setColor] = useState("Mocha");

  if (!product) {
    return (
      <main className="collection-page">
        <h1>Product not found</h1>
        <Link to="/">Return to Home</Link>
      </main>
    );
  }

  const handleAddToBag = () => {
    if (!size) {
      alert("Please select your size first.");
      return;
    }

    addToCart({
      ...product,
      selectedSize: size,
      selectedColor: color,
    });

    navigate("/cart");
  };

  return (
    <main className="product-details-page">
      <Link to="/" className="back-link">← Continue Shopping</Link>

      <div className="product-details-layout">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>

          <h2>
            Rs. {product.price.toLocaleString("en-PK")}
          </h2>

          <p>
            Discover effortless elegance with this carefully
            selected Vilora piece. Designed for comfortable,
            modern modest styling.
          </p>

          <label>Select Size</label>
          <div className="size-options">
            {["XS", "S", "M", "L", "XL"].map((item) => (
              <button
                key={item}
                className={size === item ? "selected-option" : ""}
                onClick={() => setSize(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label>Select Color</label>
          <div className="color-options">
            {["Mocha", "Black", "Beige"].map((item) => (
              <button
                key={item}
                className={color === item ? "selected-option" : ""}
                onClick={() => setColor(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="premium-button" onClick={handleAddToBag}>
            ADD TO BAG
          </button>

          <div className="product-extra-info">
            <p>✦ Premium modest fashion</p>
            <p>✦ Carefully curated designs</p>
            <p>✦ Easy demo checkout experience</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;