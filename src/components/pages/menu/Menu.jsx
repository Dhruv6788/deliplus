import { recipeList } from "../../../constants/dumpData";
import Footer from "../../common/footer";

const Menu = () => {
  const row1 = recipeList.slice(0, 3);
  const row2 = recipeList.slice(3, 6);
  const row3 = recipeList.slice(6, 10);

  return (
    <div className="w-screen bg-white">
      <div className="bg-[url(/red_bg.jpg)] h-[400px] flex justify-start items-start">
        <div className="flex flex-col ml-32 mt-20">
          <h3 className="font-[font1] text-white text-3xl">Take a Look at</h3>
          <h2 className="text-7xl text-white font-bold">Our Menu</h2>
          <h3 className="text-white w-[60%] font-bold font-[font2] mt-4">
            The Deli Plus is an ideal place to socialize, impress your friends,
            family, and associates, and enjoy a perfect night out in what is
            undoubtedly the most sumptuous and intimate Indian dining experience
            in Balsall Common.
          </h3>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="menu w-[100%] flex justify-center gap-10">
          <div className="w-[30%]">
            {row1.map((category, index) => {
              return (
                <div key={index} className="mt-5 w-[100%] border border-black">
                  <h1 className="bg-[red] p-4 text-white font-medium">
                    {category.name}
                  </h1>
                  {category.items.map((item, index) => {
                    return (
                      <div key={index} className="">
                        <div className="flex items-center">{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="w-[30%]">
            {row2.map((category, index) => {
              return (
                <div key={index} className="mt-10 w-[100%] border border-black">
                  <h1 className="bg-[red] p-4 text-white font-medium">
                    {category.name}
                  </h1>
                  {category.items.map((item, index) => {
                    return (
                      <div key={index} className="">
                        <div className="flex items-center">{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="w-[30%]">
            {row3.map((category, index) => {
              return (
                <div key={index} className="mt-10 w-[100%] border border-black">
                  <h1 className="bg-[red] p-4 text-white font-medium">
                    {category.name}
                  </h1>
                  {category.items.map((item, index) => {
                    return (
                      <div key={index} className="">
                        <div className="flex items-center">{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
