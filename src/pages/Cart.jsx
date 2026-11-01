import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart();

  const delivery = cart.length > 0 ? 250 : 0;
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <p className="eyebrow">YOUR VILORA BAG</p>

        <h1>Your bag is waiting.</h1>

        <p>You haven't added anything to your bag yet.</p>

        <Link to="/" className="premium-button">
          EXPLORE COLLECTION
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <p className="eyebrow">YOUR VILORA BAG</p>

      <h1>Shopping Bag</h1>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (
            <div className="cart-item" key={item.cartKey}>

              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">

                <h3>{item.name}</h3>

                <p>Size: {item.selectedSize || "Not selected"}</p>

                <p>Color: {item.selectedColor || "Standard"}</p>

                <p>
                  Rs. {item.price.toLocaleString("en-PK")}
                </p>

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.cartKey,
                        item.quantity - 1
                      )
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.cartKey,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.cartKey)}
                >
                  Remove
                </button>

              </div>

              <strong>
                Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
              </strong>

            </div>
          ))}

        </div>

        <aside className="order-summary">

          <h2>Order Summary</h2>

          <p>
            Subtotal
            <span>Rs. {subtotal.toLocaleString("en-PK")}</span>
          </p>

          <p>
            Delivery
            <span>Rs. {delivery.toLocaleString("en-PK")}</span>
          </p>

          <hr />

          <h3>
            Total
            <span>Rs. {total.toLocaleString("en-PK")}</span>
          </h3>

          <Link to="/checkout" className="premium-button">
            PROCEED TO CHECKOUT
          </Link>

          <Link to="/" className="continue-link">
            Continue Shopping
          </Link>

        </aside>

      </div>
    </main>
  );
}

export default Cart;