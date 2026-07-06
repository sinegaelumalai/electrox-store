import { motion } from "framer-motion";

const AppLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 rounded-full bg-red-500 blur-[140px]"
      />

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="text-6xl md:text-7xl font-extrabold tracking-wide relative z-10"
      >
        <span className="text-white">Electro</span>
        <span className="text-red-500">X</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="mt-5 text-gray-400 text-lg relative z-10"
      >
        Loading Premium Experience...
      </motion.p>

      {/* Progress Bar */}
      <div className="relative w-72 h-2 bg-gray-800 rounded-full overflow-hidden mt-10 z-10">

        <motion.div
          className="absolute left-0 top-0 h-full bg-red-500 rounded-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "40%" }}
        />

      </div>

      {/* Loading Dots */}
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="mt-8 flex gap-2 relative z-10"
      >
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
      </motion.div>

    </div>
  );
};

export default AppLoader;