import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="absolute md:relative lg:relative bottom-0 bg-black h-[100px] w-screen text-white">
        <div className="flex justify-center items-center h-full">
          <h5 className="text-md w-[80%] text-center">Copyright &copy; 2025 <Link onClick={scrollToTop} className="text-[red]">Deli Plus</Link> | Designed and Developed by <Link target="_blank" to="https://timestechsoftwares.com" className="text-[red]">Timestech Softwares</Link></h5>
        </div>
    </div>
  );
};

export default Footer;