import { Link, Outlet } from "react-router-dom";
import { recipeList } from "../../../constants/dumpData";
import "./Menu.scss";
const Menu = () => {
  return (
    <div className="w-screen bg-[white] menu-content">
      <div className="menu-heading h-[400px] flex justify-center items-center">
        <h1 className="text-white menu-header-text text-8xl font-[light]">
          MENU
        </h1>
      </div>
      <div className="flex">
        <div className="w-[25%] sidebar">
          <h1 className="menu-subheading font-extrabold">Categories</h1>
          <ul className="list-container">
            {recipeList.map((item) => (
              <Link to={`/menu/${item.link}`} className="menu-item w-full h-10" key={item.id}>
                <Link to={`/menu/${item.link}`} className="menu-item-link">{item?.name}</Link>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-[80%] ">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Menu;
