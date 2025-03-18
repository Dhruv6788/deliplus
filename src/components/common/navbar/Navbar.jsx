import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar h-24 z-50 overflow-hidden w-screen fixed top-0 flex items-center justify-between bg-black">
        <div className="navbar-logo-container w-1/8 h-full scale-200 flex items-center justify-center">
          <img src="/logo.svg" className="navbar-logo h-10 scale-100 opacity-100" alt="Deli Plus" />
        </div>
        <div className="navbar-link-container w-1/4 h-full flex gap-10 items-center justify-center">
          <Link
            to="/"
            className="navbar-link text-white hover:text-red-800 font-extralight  tracking-wider "
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="navbar-link text-white hover:text-red-800 font-extralight tracking-wider"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="navbar-link text-white hover:text-red-800 font-extralight tracking-wider"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="navbar-link text-white hover:text-red-800 font-extralight tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </div>
  );
};

export default Navbar;
