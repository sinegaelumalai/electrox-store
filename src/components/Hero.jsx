import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <p className="text-red-500 uppercase tracking-widest font-semibold mb-3">
            New Collection 2026
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white">
            Premium Smart <br />
            <span className="text-red-500">Electronics</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mt-6 text-lg">
            Discover premium smartwatches, wireless earbuds, speakers, and
            accessories designed for your lifestyle.
          </p>

          <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition duration-300">
            Shop Now
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6">
            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700"
              alt="Smart Watch"
              className="w-full max-w-md rounded-3xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;