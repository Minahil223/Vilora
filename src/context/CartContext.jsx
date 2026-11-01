
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("vilora-cart") || "[]"
      );

      return savedCart.map((item) => ({
        ...item,
        cartKey:
          item.cartKey ||
          `${item.id}-${item.selectedSize || "default"}-${item.selectedColor || "default"}`,
        quantity: item.quantity || 1,
      }));
    } catch {
      return [];
    }
  });

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("vilora-cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    const cartKey = `${product.id}-${product.selectedSize || "default"}-${product.selectedColor || "default"}`;

    const existing = cart.find(
      (item) => item.cartKey === cartKey
    );

    if (existing) {
      const updatedCart = cart.map((item) =>
        item.cartKey === cartKey
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      saveCart(updatedCart);
    } else {
      saveCart([
        ...cart,
        { ...product, cartKey, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (cartKey) => {
    const updatedCart = cart.filter(
      (item) => item.cartKey !== cartKey
    );

    saveCart(updatedCart);
  };

  const updateQuantity = (cartKey, quantity) => {
    if (quantity < 1) {
      removeFromCart(cartKey);
      return;
    }

    const updatedCart = cart.map((item) =>
      item.cartKey === cartKey
        ? { ...item, quantity }
        : item
    );

    saveCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}