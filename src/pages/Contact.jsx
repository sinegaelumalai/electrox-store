import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

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

          <span className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold">
            CONTACT US
          </span>

          <h1 className="text-6xl font-extrabold mt-6 text-black dark:text-white">
            Get In
            <span className="text-red-500"> Touch</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Send us your questions,
            feedback or business inquiries.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10"
          >

            <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="bg-red-500 text-white p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold dark:text-white">
                    Email
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    support@electrox.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-red-500 text-white p-4 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold dark:text-white">
                    Phone
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-red-500 text-white p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold dark:text-white">
                    Address
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl p-4 mb-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition"
            />

            {errors.name && (
              <p className="text-red-500 mb-4">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl p-4 mb-2 outline-no  ne focus:border-red-500 focus:ring-2 focus:ring-red-500 transition"
            />

            {errors.email && (
              <p className="text-red-500 mb-4">{errors.email}</p>
            )}

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl p-4 mb-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition resize-none"
            />

            {errors.message && (
              <p className="text-red-500 mb-4">{errors.message}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>

      </div>
    </motion.section>
  );
};

export default Contact;