import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/useContext"
import  {useSelector }  from "react-redux";


const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector(store =>store.cart.items )


  return (
    <header className="h-20 w-full flex justify-between items-center bg-gray-100 shadow-md shadow-gray-400 px-6">
      <div className="h-full w-24">
        <img
          className="h-full w-full object-cover p-3"
          src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
          alt="logo"
        />
      </div>
      <nav className="flex justify-between items-center gap-6">
        <Link to="/" className="text-lg font-medium hover:text-blue-500 transition">
          Home
        </Link>
        <Link to="/about" className="text-lg font-medium hover:text-blue-500 transition">
          About
        </Link>
       
        <Link to="/contact" className="text-lg font-medium hover:text-blue-500 transition">
          Contact
        </Link>
        <Link to="/instamart" className="text-lg font-medium hover:text-blue-500 transition">
          Instamart
        </Link>
        <Link to="/cart" className="text-lg font-medium hover:text-blue-500 transition">
  Cart-{cartItems.length} items
</Link>



      </nav>
      {user.name}
    </header>
  );
};

export default Header;
