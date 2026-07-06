import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";


const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 1200);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-5 py-10 transition-colors"
    >
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* Left Side */}

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-black dark:to-gray-900 p-12 flex flex-col justify-center transition-colors duration-300 rounded-l-3xl"
        >

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold mb-5 text-black dark:text-white"
          >
            Electro<span className="text-red-500">X</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-700 dark:text-gray-300 text-lg leading-8 mb-8"
          >
            Experience Premium Smart Electronics with
            stylish design, immersive sound and
            cutting-edge technology.
          </motion.p>

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-5"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700"
              alt="Electronics"
              className="w-96 mx-auto rounded-xl"
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-10 lg:p-14 flex items-center"
        >

          <form
            onSubmit={handleSubmit}
            className="w-full"
          >

            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-center text-black dark:text-white"
            >
              Welcome Back
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center dark:text-white text-gray-500 mt-3 mb-10"
            >
              Login to continue shopping
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-5"
            >

              <label className="text-black dark:text-white font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-xl p-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-300 transition"
              />

              {errors.email && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.email}
                </p>
              )}

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >

              <label className="text-black dark:text-white font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-xl p-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-300 transition"
              />

              {errors.password && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.password}
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
              className="w-full bg-red-500 hover:bg-red-600 transition text-white py-4 rounded-xl mt-8 font-semibold text-lg shadow-lg"
            >
              Login
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center mt-8 text-gray-600 dark:text-gray-300"
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-500 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </motion.p>

          </form>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default Login;