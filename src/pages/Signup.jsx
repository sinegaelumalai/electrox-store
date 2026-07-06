import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Account Created Successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    }
  };

  return (
  <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-5 py-10"
>

  <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

    {/* Left */}

    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex bg-black text-white p-10 flex-col justify-center"
    >

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold"
      >
        Electro<span className="text-red-500">X</span>
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-300 leading-8"
      >
        Join ElectroX and discover premium smart electronics,
        exciting offers and the latest gadgets.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-10 flex justify-center"
      >

        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="w-72 h-72 rounded-full bg-red-500/20 flex items-center justify-center"
        >
          <span className="text-8xl">
            🎧
          </span>
        </motion.div>

      </motion.div>

    </motion.div>

    {/* Right */}

    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-10"
    >

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold text-center text-black dark:text-white"
      >
        Create Account
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-500 dark:text-gray-300 mt-3 mb-8"
      >
        Register to continue shopping
      </motion.p>

      <form onSubmit={handleSubmit}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl p-4 mb-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mb-3">
              {errors.name}
            </p>
          )}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
           className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl p-4 mb-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mb-3">
              {errors.email}
            </p>
          )}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl p-4 mb-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mb-3">
              {errors.password}
            </p>
          )}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl p-4 mb-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-3">
              {errors.confirmPassword}
            </p>
          )}

        </motion.div>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition mt-4 shadow-lg"
        >
          Create Account
        </motion.button>

      </form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-8 text-gray-600 dark:text-gray-300"
      >
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-red-500 font-semibold hover:underline"
        >
          Login
        </Link>
      </motion.p>

    </motion.div>

  </div>

</motion.section>
  );
};

export default Signup;