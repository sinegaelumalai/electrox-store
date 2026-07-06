import {
  FaBullseye,
  FaEye,
  FaGem,
  FaUsers,
  FaAward,
  FaHeadphones,
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true }}
            className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg"
          >
            ABOUT ELECTROX
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-6xl font-extrabold mt-6 text-gray-900 dark:text-white"
          >
            Smart Technology
            <span className="text-red-500"> Meets Style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8"
          >
            ElectroX delivers premium electronics designed for modern lifestyles.
            Inspired by brands like Noise, boAt, Boult and Fire-Boltt,
            we combine innovation, quality and affordability.
          </motion.p>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >

          {/* Mission */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 hover:shadow-red-300 transition"
          >

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.15,
              }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl mb-6"
            >
              <FaBullseye />
            </motion.div>

            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Our Mission
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Deliver innovative gadgets with premium quality,
              affordable pricing and an outstanding shopping experience.
            </p>

          </motion.div>

          {/* Vision */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 hover:shadow-blue-300 transition"
          >

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.15,
              }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl mb-6"
            >
              <FaEye />
            </motion.div>

            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Our Vision
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Become one of the world's most trusted consumer electronics
              brands with smart and stylish products.
            </p>

          </motion.div>

          {/* Values */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 hover:shadow-green-300 transition"
          >

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.15,
              }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl mb-6"
            >
              <FaGem />
            </motion.div>

            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Our Values
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Innovation, customer satisfaction, premium quality and
              continuous improvement are our core values.
            </p>

          </motion.div>

        </motion.div>

        {/* Stats */}
        {/* Stats */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >

          {/* Customers */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.05,
            }}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-3xl p-8 text-center shadow-xl cursor-pointer"
          >

            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaUsers className="text-5xl mx-auto mb-5" />
            </motion.div>

            <h2 className="text-4xl font-bold">
              50K+
            </h2>

            <p className="mt-2">
              Happy Customers
            </p>

          </motion.div>

          {/* Products */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.05,
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-3xl p-8 text-center shadow-xl cursor-pointer"
          >

            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaAward className="text-5xl mx-auto mb-5" />
            </motion.div>

            <h2 className="text-4xl font-bold">
              150+
            </h2>

            <p className="mt-2">
              Premium Products
            </p>

          </motion.div>

          {/* Support */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.05,
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-3xl p-8 text-center shadow-xl cursor-pointer"
          >

            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaHeadphones className="text-5xl mx-auto mb-5" />
            </motion.div>

            <h2 className="text-4xl font-bold">
              24/7
            </h2>

            <p className="mt-2">
              Customer Support
            </p>

          </motion.div>

          {/* Rating */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.05,
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-8 text-center shadow-xl cursor-pointer"
          >

            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <FaGem className="text-5xl mx-auto mb-5" />
            </motion.div>

            <h2 className="text-4xl font-bold">
              4.9★
            </h2>

            <p className="mt-2">
              Customer Rating
            </p>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;