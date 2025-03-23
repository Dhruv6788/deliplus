import React from "react";
import { Link } from "react-router-dom";

const MobileLinks = ({setisMobileMenuOpen, isMobileMenuOpen}) => {
  return (
    <div className="w-full fixed inset-0 z-[1000] h-screen bg-black">
      {/* Logo */}
      <div className="navbar-logo-container w-1/3 md:w-1/4 lg:w-1/8">
        <div>
          <img
            src="/logo.svg"
            className="navbar-logo ml-10 mt-10 h-8 md:h-10 w-auto scale-200 opacity-100"
            alt="Deli Plus"
          />

          {/* Close Button  */}
          <div className="absolute top-10 right-10">
            <button
              className= "text-white cursor-pointer"
              onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="ri-close-large-fill text-2xl hover:text-[white] duration-200 text-[red]"></i>
            </button>
          </div>
        </div>        
      </div>

      {/* Mobile Links  */}
      <div className="mobile-links-container w-full flex flex-col items-center justify-center mt-32">
        <Link onClick={()=> setisMobileMenuOpen(false)} to="/" className="text-[red] text-2xl font-semibold hover:text-[white] duration-200 mb-5">Home</Link>
        <Link onClick={()=> setisMobileMenuOpen(false)} to="/menu" className="text-[red] text-2xl font-semibold hover:text-[white] duration-200 mb-5">Menu</Link>   
        <Link onClick={()=> setisMobileMenuOpen(false)} to="/about" className="text-[red] text-2xl font-semibold hover:text-[white] duration-200 mb-5">About</Link>   
        <Link onClick={()=> setisMobileMenuOpen(false)} to="/contact" className="text-[red] text-2xl font-semibold hover:text-[white] duration-200 mb-5">Contact</Link>
      </div>
    </div>
  );
};

export default MobileLinks;
