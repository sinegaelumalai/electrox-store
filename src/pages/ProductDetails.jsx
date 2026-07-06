import { Link, useParams } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-20 font-bold">
        Product Not Found
      </h1>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black min-h-screen py-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Back Button */}

        <Link
          to="/products"
          className="inline-block mb-8 text-red-500 font-semibold hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">

          {/* Left */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >

            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold text-black dark:text-white mt-5">
              {product.name}
            </h1>

            <div className="flex items-center gap-1 text-yellow-500 mt-5">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span className="text-gray-500 dark:text-gray-300 ml-2">
                (4.9)
              </span>

            </div>

            <h2 className="text-red-500 text-4xl font-bold mt-6">
              ₹ {product.price}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-6 leading-8">
              {product.description}
            </p>

            {/* Stock */}

            <div className="mt-6">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                ✓ In Stock
              </span>
            </div>

            {/* Features */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <FaTruck className="text-red-500 text-xl" />
                <span>Free Delivery Across India</span>
              </div>

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <FaShieldAlt className="text-red-500 text-xl" />
                <span>1 Year Brand Warranty</span>
              </div>

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <FaLock className="text-red-500 text-xl" />
                <span>100% Secure Payments</span>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(product)}
                className="bg-red-500 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-red-600 shadow-lg transition"
              >
                <FaShoppingCart />
                Add To Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToWishlist(product)}
                className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                <FaHeart />
                Wishlist
              </motion.button>

            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default ProductDetails;