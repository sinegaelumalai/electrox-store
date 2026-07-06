import { motion } from "framer-motion";

import keyboard from "../assets/keyboard.png";
import mouse from "../assets/mouse.png";
import webcam from "../assets/webcam.png";
import ring from "../assets/ring.png";

const categories = [
  {
    name: "Gaming Keyboard",
    image: keyboard,
  },
  {
    name: "Gaming Mouse",
    image: mouse,
  },
  {
    name: "Webcam",
    image: webcam,
  },
  {
    name: "Smart Ring",
    image: ring,
  },
];

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

const Categories = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-black dark:bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
            SHOP BY CATEGORY
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-black dark:text-white">
            Explore Our
            <span className="text-red-600 dark:text-red-400">
              {" "}Categories
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-700 dark:text-gray-300 leading-8">
            Discover premium gaming accessories and smart electronics
            carefully selected to enhance your everyday digital lifestyle.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-red-300 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white to-red-100 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center h-64 p-6 overflow-hidden">

                <motion.img
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.name}
                  className="max-h-48 object-contain"
                />

              </div>

              <div className="bg-black dark:bg-red-500 text-white text-center py-5">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Categories;