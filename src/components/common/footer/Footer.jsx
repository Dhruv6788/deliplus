import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black h-[400px] w-screen text-white">
      <h4 className="text-center mt-2">Made with <i class="ri-heart-3-line"></i> By <Link to='https://timestechsoftwares.com/' className="text-[red]">Timestech Softwares</Link></h4>
    </div>
  );
};

export default Footer;