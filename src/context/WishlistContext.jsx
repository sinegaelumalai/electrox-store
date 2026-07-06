import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    const exist = wishlistItems.find((item) => item.id === product.id);

    if (exist) {
      toast("Already in Wishlist");
      return;
    }

    setWishlistItems([...wishlistItems, product]);
    toast.success("Added to Wishlist");
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(
      wishlistItems.filter((item) => item.id !== id)
    );

    toast.success("Removed from Wishlist");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;