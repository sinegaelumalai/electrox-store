import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black border-t border-red-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold text-black dark:text-white">
              Electro<span className="text-red-500">X</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mt-5 leading-7">
              Premium Smart Electronics for your everyday lifestyle.
              Discover smart watches, earbuds, speakers and accessories.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">

              <li>
                <Link
                  to="/"
                  className="hover:text-red-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-red-500 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-red-500 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Support */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
              Support
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">

              <li>Help Center</li>

              <li>Shipping</li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <div className="bg-white dark:bg-gray-800 text-red-500 shadow-lg p-3 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition">
                <FaFacebookF />
              </div>

              <div className="bg-white dark:bg-gray-800 text-red-500 shadow-lg p-3 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition">
                <FaInstagram />
              </div>

              <div className="bg-white dark:bg-gray-800 text-red-500 shadow-lg p-3 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition">
                <FaTwitter />
              </div>

              <div className="bg-white dark:bg-gray-800 text-red-500 shadow-lg p-3 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition">
                <FaYoutube />
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-red-200 dark:border-gray-700 mt-12 pt-6 text-center text-gray-600 dark:text-gray-400">
          © 2026 ElectroX. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;