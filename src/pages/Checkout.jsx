
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const { cart, subtotal } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const delivery = cart.length > 0 ? 250 : 0;
  const total = subtotal + delivery;

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your shopping bag is empty.");
      navigate("/cart");
      return;
    }

    const order = {
      customer: form,
      items: cart,
      total,
      orderNumber: "VIL" + Date.now().toString().slice(-7),
    };

    sessionStorage.setItem("vilora-order", JSON.stringify(order));

    navigate("/order-confirmation");
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <h1>Your bag is empty.</h1>
        <Link to="/">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <p className="eyebrow">ALMOST YOURS</p>
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Delivery Information</h2>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Complete Delivery Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <button type="submit" className="premium-button">
            PLACE DEMO ORDER
          </button>
        </form>

        <aside className="order-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <p key={item.id}>
              {item.name} × {item.quantity}
              <span>
                Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
              </span>
            </p>
          ))}

          <hr />
          <p>Subtotal <span>Rs. {subtotal.toLocaleString("en-PK")}</span></p>
          <p>Delivery <span>Rs. {delivery}</span></p>
          <h3>Total <span>Rs. {total.toLocaleString("en-PK")}</span></h3>

          <p className="demo-note">
            This is a demo checkout. No actual payment will be collected.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;