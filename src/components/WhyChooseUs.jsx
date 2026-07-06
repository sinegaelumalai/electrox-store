import { motion } from "framer-motion";
import {
  FaTruckFast,
  FaShieldHeart,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaTruckFast size={40} />,
    title: "Free Shipping",
    desc: "Enjoy fast and free shipping on all orders across India.",
  },
  {
    icon: <FaShieldHeart size={40} />,
    title: "1 Year Warranty",
    desc: "Premium quality products backed by a 1-year warranty.",
  },
  {
    icon: <FaCreditCard size={40} />,
    title: "Secure Payment",
    desc: "100% safe and secure online payment with trusted gateways.",
  },
  {
    icon: <FaHeadset size={40} />,
    title: "24/7 Support",
    desc: "Our friendly support team is available anytime to help you.",
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

const WhyChooseUs = () => {
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
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-gray-900 dark:text-white">
            Experience the
            <span className="text-red-500"> ElectroX Difference</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 dark:text-gray-300">
            We deliver premium gadgets with exceptional quality,
            fast delivery, secure payments and dedicated customer support.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:bg-red-500"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto rounded-full bg-red-100 dark:bg-gray-700 flex items-center justify-center text-red-500 group-hover:bg-white group-hover:text-red-500 mb-6"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white transition">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-4 leading-7 group-hover:text-white transition">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default WhyChooseUs;