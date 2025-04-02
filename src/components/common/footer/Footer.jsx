import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white w-full min-h-[100px] flex justify-center items-center py-5 mt-auto">
      <div className="w-[90%] max-w-[1200px] text-center">
        <p className="text-sm md:text-base leading-relaxed m-0 font-arial">
          Copyright © 2025{" "}
          <Link
            onClick={scrollToTop}
            to="/"
            className="text-[#f14d4d] font-semibold hover:text-[#ff6666] hover:-translate-y-0.5 transition-all duration-300 focus:underline focus:outline-[#f14d4d] focus:outline-offset-2"
          >
            Deli Plus
          </Link>{" "}
          | Designed and Developed by{" "}
          <Link
            target="_blank"
            to="https://timestechsoftwares.com"
            className="text-[#f14d4d] font-semibold hover:text-[#ff6666] hover:-translate-y-0.5 transition-all duration-300 focus:underline focus:outline-[#f14d4d] focus:outline-offset-2"
          >
            Timestech Softwares
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
