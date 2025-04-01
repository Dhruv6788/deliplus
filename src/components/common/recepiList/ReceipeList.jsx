import React from "react";
// import './receipeList.scss'
import { recipeList } from "../../../constants/dumpData";
import { useNavigate } from "react-router-dom";
const ReceipeList = ({ data }) => {
  const navigateTo = useNavigate();
  const { name, image, items } = data[0];
  const changeCategory = (link) => {
    navigateTo(`/menu/${link}`);
  };
  return (
    <div className="lg:w-screen overflow-x-hidden md:w-[80vw]  bg-white">
      <div className="flex justify-center items-center mt-10 mb-10 lg:hidden">
        <select
          onChange={(e) => changeCategory(e.target.value)}
          className="w-[80%] h-12 px-5 bg-[red] text-black rounded-md"
        >
          {recipeList &&
            recipeList.map((item, index) => {
              return (
                <option key={index} value={item.link}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
      {/* <div className="p-5">
        <h1 className="text-3xl text-[red]">{name}</h1>
      </div> */}

      <div className="w-screen mt-20">
        {items?.map((item, index) => (
          <div className="receipe-item" key={index}>
            {/*  Receipie with price Table  */}
            <table>
              <tr className="w-screen lg:w-[80vw] flex justify-between px-8 border-b border-[#ffffff6c]">
                <td className="w-[60%] lg:w-full text-white py-3 text-left font-bold ">
                  {item.name}
                </td>
                <td className="w-[20%] lg:w-[20%] text-[red] py-3 text-center font-bold">{`$ ${item.price}`}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceipeList;
