import { recipeList } from "../../../constants/dumpData";
import Footer from "../../common/footer";
import { Link } from "react-router-dom";
import { openingHours } from "../home/Home";

const Menu = () => {
  const row1 = recipeList.slice(0, 3);
  const row2 = recipeList.slice(3, 6);
  const row3 = recipeList.slice(6, 10);
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  
  return (
    <div className="w-screen bg-white">
      <div className="bg-[red] bg-cover bg-center h-[400px] md:h-[500px] lg:h-[500px] flex flex-col lg:flex-row justify-start items-start">
        {/* Menu Description Section */}
        <div className="flex flex-col ml-6 md:ml-16 lg:ml-32 mt-10 md:mt-20 lg:mt-24 w-full max-w-[90%] md:max-w-[60%] lg:max-w-[40%]">
          <h3 className="font-[font1] text-white text-xl md:text-2xl lg:text-3xl tracking-wide">
            Take a Look at
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold font-[font2] mt-2 md:mt-4">
            Our Menu
          </h2>
          <p className="text-white text-sm md:text-base lg:text-lg font-medium font-[font2] mt-4 md:mt-6 leading-relaxed">
            The Deli Plus is an ideal place to socialize, impress your friends,
            family, and associates, and enjoy a perfect night out in what is
            undoubtedly the most sumptuous and intimate Indian dining experience
            in Balsall Common.
          </p>
        </div>

        {/* Takeout Section */}
        <div className="w-full lg:w-[40%] h-auto lg:h-[400px] mt-6 lg:mt-10 lg:ml-10 xl:ml-20 bg-white flex flex-col items-center justify-start p-4 md:p-6 lg:p-8">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-bold font-[font2] text-black">
            For Takeout
          </h1>
          <div className="w-[90%] h-[2px] bg-[red] my-4"></div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="menu w-[100%] flex justify-center flex-wrap gap-10">
          <div className="lg:w-[30%] w-[80%]">
            {row1.map((category, index) => {
              return (
                <div
                  key={index}
                  className="mt-5 w-[100%] border border-[red] pb-5"
                >
                  <h1 className="bg-[red] p-4 text-white font-[font2] font-medium">
                    {category.name}
                  </h1>
                  {category.items.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-3 mt-3 flex justify-between items-end h-[50px]"
                      >
                        <div className="flex items-end h-full">
                          <p className="font-[font2]">{item.name}</p>
                        </div>
                        <div className="flex-1 h-full border-b-2 border-red-500 border-dotted mx-2"></div>
                        <div className="items-end flex justify-start align-bottom h-full">
                          <p>${item.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="lg:w-[30%] w-[80%]">
            {row3.map((category, index) => {
              return (
                <div
                  key={index}
                  className="mt-5 w-[100%] border border-[red] pb-5 mb-3"
                >
                  <h1 className="bg-[red] p-4 text-white font-medium">
                    {category.name}
                  </h1>
                  {category.items.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-3 mt-3 flex justify-between items-end h-[50px]"
                      >
                        <div className="flex items-end h-full">
                          <p className="font-[font2]">{item.name}</p>
                        </div>
                        <div className="flex-1 h-full border-b-2 border-red-500 border-dotted mx-2"></div>
                        <div className="items-end flex justify-start align-bottom h-full">
                          <p>${item.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="lg:w-[30%] w-[80%] mb-30">
            {row2.map((category, index) => {
              return (
                <div
                  key={index}
                  className="mt-5 w-[100%] border border-[red] pb-5"
                >
                  <h1 className="bg-[red] p-4 text-white font-medium ">
                    {category.name}
                  </h1>
                  {category.items.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-3 mt-3 flex justify-between items-end h-[50px]"
                      >
                        <div className="flex items-end h-full">
                          <p className="font-[font2] text-sm font-bold">
                            {item.name}
                          </p>
                        </div>
                        <div className="flex-1 h-full border-b-2 border-red-500 border-dotted mx-2"></div>
                        <div className="items-end flex justify-start align-bottom h-full">
                          <p>${item.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-[45vw] py-10">
        <div className="w-full h-full flex justify-between gap-10 px-10">
          <div className="sections w-[100%] py-4">
            <div className="logo w-full flex justify-start">
              <img src="/logo.svg" className="w-[30%]" alt="" />
            </div>
            <div className="heading p-3">
              <h1 className="font-[font2] font-bold text-2xl text-[red]">
                Our Locations
              </h1>
              <div className="w-full flex flex-col mt-4 gap-3">
                <Link className="hover:text-[red] duration-300 flex gap-3">
                  <i className="ri-map-pin-fill"></i>
                  <p className="">354 Main St, Sayreville, NJ 08872</p>
                </Link>
                <Link className="hover:text-[red] duration-300 flex gap-3">
                  <i className="ri-map-pin-fill"></i>
                  <p className="">388 Washington Rd, Sayreville, NJ 08872</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="sections w-[100%] py-4">
            <div className="heading p-3">
              <h1 className="font-[font2] font-bold text-2xl text-[red]">
                Quick Links
              </h1>
            </div>
            <div className="w-full flex flex-col p-5 gap-3">
              <Link to="/home" className="hover:text-[red] duration-300">
                Home
              </Link>
              <Link to="/menu" className="hover:text-[red] duration-300">
                Menu
              </Link>
              <Link to="/about" className="hover:text-[red] duration-300">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-[red] duration-300">
                Contact
              </Link>
            </div>
          </div>

          <div className="sections w-[100%] py-4">
            <div className="heading p-3">
              <h1 className="font-[font2] font-bold text-2xl text-[red]">
                Opening Hours
              </h1>
            </div>

            <div className="w-[80%] flex flex-col justify-center items-between p-5 gap-2">
              {openingHours.map((item) => (
                <p
                  key={item.day}
                  className={`hover:text-[red] duration-300 ml-4 p-2 ${
                    item.day === today
                      ? "bg-[url(/red_bg.jpg)] bg-cover bg-center bg-no-repeat text-white hover:text-white"
                      : ""
                  }`}
                >
                  {item.day} {item.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
