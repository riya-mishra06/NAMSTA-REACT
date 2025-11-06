import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 h-20 w-full flex justify-between items-center bg-white shadow-sm border-b border-gray-200 px-6">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="h-14 w-14 rounded-lg overflow-hidden ring-2 ring-gray-200 group-hover:ring-blue-400 transition-all duration-300">
          <img
            className="h-full w-full object-cover"
            src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
            alt="logo"
          />
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex justify-between items-center gap-2">
        <Link
          to="/"
          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          Contact
        </Link>
        <Link
          to="/instamart"
          className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          Instamart
        </Link>
        
        {/* Cart with Badge */}
        <Link
          to="/cart"
          className="relative px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          Cart
          {cartItems.length > 0 && (
            <span className="ml-1 px-2 py-0.5 text-xs font-bold text-white bg-blue-600 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>

      {/* User Info */}
      {user.name && (
        <div className="flex items-center gap-3 ml-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-sm shadow-md">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm font-medium text-gray-800 hidden sm:block">
            {user.name}
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;