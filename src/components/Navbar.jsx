import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { wishlistItems } = useContext(WishlistContext);
  const { cartItems } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 shadow-lg border-b border-red-200 dark:border-gray-700 transition-all duration-300">

      <nav className="max-w-7xl mx-auto pl-6 pr-10 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide"
        >
          <span className="text-black dark:text-white">
            Electro
          </span>
          <span className="text-red-500">
            X
          </span>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-[17px] font-semibold">

          <Link
            to="/"
            className="text-black dark:text-white hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-black dark:text-white hover:text-red-500 transition"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-black dark:text-white hover:text-red-500 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-black dark:text-white hover:text-red-500 transition"
          >
            Contact
          </Link>

        </ul>

        {/* Right Side */}

        <div className="hidden md:flex items-center gap-5">

          <ThemeToggle />

          {/* Wishlist */}
          <Link to="/wishlist" className="relative">

            <HiOutlineHeart
              size={24}
              className="cursor-pointer text-black dark:text-white hover:text-red-500 transition"
            />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}

          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">

            <HiOutlineShoppingBag
              size={24}
              className="cursor-pointer text-black dark:text-white hover:text-red-500 transition"
            />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </Link>

          <Link to="/login">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition">
              Login
            </button>
          </Link>

        </div>

        {/* Mobile Menu */}

        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <HiOutlineX size={30} />
          ) : (
            <HiOutlineMenu size={30} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-red-200 dark:border-gray-700 mr-4">

          <ul className="flex flex-col text-center py-6 space-y-5 font-semibold">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              Products
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              Wishlist
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              Cart
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="text-black dark:text-white hover:text-red-500 transition"
            >
              Sign Up
            </Link>

          </ul>

        </div>

      )}
    </header>
  );
};

export default Navbar;