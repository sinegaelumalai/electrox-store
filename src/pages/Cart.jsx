import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaTrash, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price,
        0
    );

    if (cartItems.length === 0) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >

                    <FaShoppingCart className="text-7xl text-red-500 mx-auto mb-6" />

                    <h1 className="text-4xl font-bold text-black dark:text-white">
                        Your Cart is Empty
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                        Looks like you haven't added anything yet.
                    </p>

                    <Link to="/products">
                        <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition">
                            Continue Shopping
                        </button>
                    </Link>

                </motion.div>

            </section>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black py-20 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >

                    <span className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold">
                        SHOPPING CART
                    </span>

                    <h1 className="text-5xl font-extrabold mt-6 text-black dark:text-white">
                        Your
                        <span className="text-red-500"> Cart</span>
                    </h1>

                </motion.div>

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Left */}

                    <div className="lg:col-span-2 space-y-6">

                        {cartItems.map((item, index) => (

                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-40 h-40 object-contain"
                                />

                                <div className="flex-1">

                                    <h2 className="text-2xl font-bold text-black dark:text-white">
                                        {item.name}
                                    </h2>

                                    <p className="text-red-500 text-3xl font-bold mt-3">
                                        ₹ {item.price}
                                    </p>

                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl transition"
                                >
                                    <FaTrash />
                                </button>

                            </motion.div>

                        ))}

                    </div>

                    {/* Summary */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 h-fit sticky top-28"
                    >

                        <h2 className="text-3xl font-bold text-black dark:text-white">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mt-8 text-lg">

                            <span className="text-gray-600 dark:text-gray-300">
                                Items
                            </span>

                            <span className="font-semibold text-black dark:text-white">
                                {cartItems.length}
                            </span>

                        </div>

                        <div className="flex justify-between mt-4 text-lg">

                            <span className="text-gray-600 dark:text-gray-300">
                                Total
                            </span>

                            <span className="text-red-500 text-3xl font-bold">
                                ₹ {total}
                            </span>

                        </div>

                        <button className="w-full mt-10 bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition">
                            Proceed to Checkout
                        </button>

                        <Link
                            to="/products"
                            className="flex items-center justify-center gap-2 mt-6 text-red-500 hover:underline"
                        >
                            <FaArrowLeft />
                            Continue Shopping
                        </Link>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default Cart;