import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "./ProductCard";

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

const FeaturedProducts = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-red-100 via-pink-50 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
            FEATURED COLLECTION
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-gray-900 dark:text-white">
            Featured
            <span className="text-red-500"> Products</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 dark:text-gray-300 leading-8">
            Discover our best-selling gadgets designed with premium quality,
            cutting-edge technology, and modern style for everyday life.
          </p>
        </motion.div>

        {/* Products */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {products.map((product) => (
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
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FeaturedProducts;