import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      toast("Already in Cart");
      return;
    }

    setCartItems([...cartItems, product]);
    toast.success("Added to Cart");
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success("Removed from Cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;