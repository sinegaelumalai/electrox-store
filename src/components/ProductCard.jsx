import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="bg-white dark:bg-gray-500 rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300">

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain p-5"
        />

        <button
          onClick={() => addToWishlist(product)}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow hover:bg-red-500 hover:text-white transition"
        >
          <FaHeart />
        </button>

      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold text-black dark:text-white">
          {product.name}
        </h2>

        <p className="text-red-500 text-2xl font-bold my-3">
          ₹ {product.price}
        </p>

        <div className="flex gap-3">

          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-red-500 transition flex justify-center items-center gap-2"
          >
            <FaShoppingCart />
            Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex-1"
          >
            <button className="w-full border border-black dark:border-white text-black dark:text-white py-3 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
              Details
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;