import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";

import ThemeProvider from "./context/ThemeContext"; // ✅ Import this

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <ThemeProvider>
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <App />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  </ThemeProvider>
</StrictMode>
);