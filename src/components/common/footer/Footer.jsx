import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black h-[100px] w-screen text-white">
        {/* Footer  */}
        <div className="flex justify-center items-center h-full">
          <h5 className="text-sm text-center">Copyright &copy; 2025 Deli Plus | Design and Developed by <Link target="_blank" to="https://timestechsoftwares.com">Timestech Softwares</Link></h5>
        </div>
    </div>
  );
};

export default Footer;