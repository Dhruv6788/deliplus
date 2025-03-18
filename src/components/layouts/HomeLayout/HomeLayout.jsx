import React from "react";
import Navbar from "../../common/navbar/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="relative top-[90px]">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
