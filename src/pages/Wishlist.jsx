import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    if (wishlistItems.length === 0) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <FaHeart className="text-7xl text-red-500 mx-auto mb-6" />

                    <h1 className="text-4xl font-bold text-black dark:text-white">
                        Your Wishlist is Empty
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                        Save your favourite products here.
                    </p>

                    <Link to="/products">
                        <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition">
                            Explore Products
                        </button>
                    </Link>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black py-20 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold">
                        MY WISHLIST
                    </span>

                    <h1 className="text-5xl font-extrabold mt-6 text-black dark:text-white">
                        Favourite
                        <span className="text-red-500"> Products</span>
                    </h1>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {wishlistItems.map((item, index) => (

                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-contain p-6"
                            />

                            <div className="p-6">

                                <h2 className="text-2xl font-bold text-black dark:text-white">
                                    {item.name}
                                </h2>

                                <p className="text-red-500 text-3xl font-bold mt-3">
                                    ₹ {item.price}
                                </p>

                                <div className="flex gap-3 mt-6">

                                    <button
                                        onClick={() => addToCart(item)}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
                                    >
                                        <FaShoppingCart />
                                        Cart
                                    </button>

                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="bg-white dark:bg-black border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 rounded-xl transition"
                                    >
                                        <FaTrash />
                                    </button>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Wishlist;