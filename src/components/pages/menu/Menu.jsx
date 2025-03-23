import { NavLink, Outlet } from "react-router-dom";
import { recipeList } from "../../../constants/dumpData";
import Footer from "../../common/footer";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="w-screen bg-[white] menu-content">
      <div className="menu-heading h-[400px] flex justify-center items-center">
        <h1 className="text-white menu-header-text text-7xl lg:text-8xl font-[light]">
          MENU
        </h1>
      </div>
      <div className="flex bg-black">
        <div className="w-[25%] sidebar hidden lg:block py-7">
          <h1 className="menu-subheading ml-3 text-2xl text-white font-extrabold">
            Categories
          </h1>
          <ul className="list-container flex items-center flex-col">
            {recipeList.map((item, index) => (
              <NavLink
                to={`/menu/${item?.link}`}
                key={index}
                className={({ isActive }) =>
                  `text-white w-[80%] mt-5 block ml-2 font-bold text-xl p-2 ${
                    isActive ? "bg-red-500" : ""
                  }`
                }
              >
                {item?.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="lg:w-[80%] w-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
