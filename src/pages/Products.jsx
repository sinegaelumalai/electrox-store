import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || item.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-gradient-to-br from-red-100 via-pink-50 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
            PREMIUM COLLECTION
          </span>

          <h1 className="text-6xl font-extrabold mt-6 text-gray-900 dark:text-white">
            Explore Our
            <span className="text-red-500"> Smart Gadgets</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 dark:text-gray-300 leading-8">
            Upgrade your setup with premium gaming accessories and
            smart electronics designed for performance, style and
            everyday productivity.
          </p>
        </motion.div>

        {/* Search & Filter */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-red-200 p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-6">

            <div className="relative">

              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-red-500 text-xl" />

              <input
                type="text"
                placeholder="Search Products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-2xl bg-red-50 border-2 border-red-200 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-200 transition"
              />

            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl bg-red-50 border-2 border-red-200 px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-200 transition"
            >
              <option value="All">All Categories</option>
              <option value="Watch">Smart Watch</option>
              <option value="Earbuds">Wireless Earbuds</option>
              <option value="Speaker">Bluetooth Speaker</option>
              <option value="Power Bank">Power Bank</option>
              <option value="Keyboard">Gaming Keyboard</option>
              <option value="Mouse">Gaming Mouse</option>
              <option value="Webcam">HD Webcam</option>
              <option value="Smart Ring">Smart Ring</option>
            </select>

          </div>
        </motion.div>

        {/* Product Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={card}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20"
            >
              <h2 className="text-5xl font-extrabold text-red-500">
                No Products Found
              </h2>

              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Try searching with another keyword.
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Products;