
import { Link, Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function OrderConfirmation() {
  const { cart, removeFromCart } = useCart();

  const savedOrder = sessionStorage.getItem("vilora-order");
  const order = savedOrder ? JSON.parse(savedOrder) : null;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  const handleFinish = () => {
    cart.forEach((item) => removeFromCart(item.id));
    sessionStorage.removeItem("vilora-order");
  };

  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>

        <p className="eyebrow">THANK YOU FOR CHOOSING VILORA</p>

        <h1>Your order is confirmed!</h1>

        <p>
          Thank you, {order.customer.name}.
          Your demo order has been created successfully.
        </p>

        <div className="confirmation-details">
          <p>
            Order Number <strong>{order.orderNumber}</strong>
          </p>
          <p>
            Order Total <strong>Rs. {order.total.toLocaleString("en-PK")}</strong>
          </p>
          <p>
            Delivery City <strong>{order.customer.city}</strong>
          </p>
        </div>

        <button
          className="premium-button"
          onClick={handleFinish}
        >
          FINISH
        </button>

        <Link to="/" className="continue-link">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default OrderConfirmation;