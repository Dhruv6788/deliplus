import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileLinks from "./MobileLinks";

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  return (
    <div className="navbar h-24  z-50 overflow-hidden w-screen fixed top-0 flex items-center justify-between bg-[white] px-4 md:px-8 lg:px-12">
      {/* Logo Container */}
      {isMobileMenuOpen && (
        <MobileLinks
          setisMobileMenuOpen={setisMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      )}
      <div className="navbar-logo-container w-1/3 md:w-1/4 lg:w-1/8 h-full flex items-center justify-start">
        <img
          src="/logo.svg"
          className="navbar-logo h-8  md:h-10 w-auto scale-200 ml-3 opacity-100"
          alt="Deli Plus"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          className="text-[red] cursor-pointer hover:text-[white] duration-200"
          onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex h-full items-center justify-end md:gap-6 lg:gap-10">
        <Link
          to="/"
          className=" text-black hover:text-red-800 font-extralight tracking-wider text-sm md:text-base"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className=" text-black hover:text-red-800 font-extralight tracking-wider text-sm md:text-base"
        >
          Menu
        </Link>
        <Link
          to="/about"
          className=" text-black hover:text-red-800 font-extralight tracking-wider text-sm md:text-base"
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          className=" text-black hover:text-red-800 font-extralight tracking-wider text-sm md:text-base"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
