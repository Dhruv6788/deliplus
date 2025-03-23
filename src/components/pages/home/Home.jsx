import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Footer from "../../common/footer";

const Home = () => {
  return (
    <div className="w-screen reative bg-black overflow-x-hidden">
      <div className="w-full h-screen home-container">
        <div className="home-foreground relative top-[50px]">
          <div className="content translate-[8vw] lg:translate-[7vw]">
            <div className="content-cover">
              <p className="text-[wheat] font-bold italic text-2xl">
                #Delicious Cafe
              </p>
              <h1 className="text-5xl lg:text-8xl lg:font-semibold text-white font-bold italic font-[Poppins] ">
                Sweet Treats
              </h1>
              <h1 className="text-5xl lg:text-8xl lg:font-semibold text-white font-bold italic font-[Poppins] ">
                Perfact Eats
              </h1>
            </div>
            <div className="content-button mt-16">
              <Link
                to="/menu"
                className="px-10 py-3 rounded-full hover:bg-[red] hover:border hover:text-[white] bg-[wheat]"
              >
               Delicious Menu 
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen bg-[wheat] flex lg:h-[600px] flex-wrap">
        <div className="w-full lg:w-[30vw] h-screen p-10 bg-[wheat] flex flex-col justify-center gap-10 items-center">
          <h1 className="text-center text-5xl font-bold mt-20 text-[black]">
            Welcome
          </h1>
          <p className="text-center w-full lg:w-[80%] mt-5 font-light text-lg text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repellat, temporibus debitis molestias rem perspiciatis sunt quo aut
            accusamus consequuntur vel sed recusandae corrupti ipsam non placeat
            deleniti. Cupiditate quaerat dolores perferendis tempore ullam!
          </p>
          <Link
            to={"/menu"}
            className="mt-5 border px-20 py-4 duration-300 hover:bg-[red] hover:border hover:text-[white] bg-[wheat]"
          >
            Menu
          </Link>
        </div>
        <div className="w-full lg:w-[70vw] h-[50%] lg:h-full bg-gray-200">
          <img
            src="/food_02.jpg"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>

      <div className="w-screen overflow-hidden bg-[wheat] flex flex-wrap">
        <div className="w-full lg:w-[30vw] h-screen p-10 bg-[wheat] flex flex-col justify-center gap-10 items-center">
          <h1 className="text-center text-5xl font-bold mt-20 text-[black]">
            Gallery
          </h1>
          <p className="text-center w-full lg:w-[80%] mt-5 font-light text-lg text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repellat, temporibus debitis molestias rem perspiciatis sunt quo aut
            accusamus consequuntur vel sed recusandae corrupti ipsam non placeat
            deleniti. Cupiditate quaerat dolores perferendis tempore ullam!
          </p>

          <Link
            to={"/about"}
            className="mt-5 border px-20 py-4 duration-300 hover:bg-[red] hover:border hover:text-[white] bg-[wheat]"
          >
            View More
          </Link>
        </div>

        <div className="w-full h-[300px] lg:w-[70vw] bg-gray-200 border-t-4 border-[#ffffff] border-r-4 duration-300 border-b-4">
          <img
            src="/images/IMG_0843.webp"
            className="object-cover w-full h-full hover:brightness-75 duration-100"
            alt=""
          />

          <img
            src="/images/IMG_0848.webp"
            className="object-cover mt-2 w-full h-full hover:brightness-75 duration-100"
            alt=""
          />

          <img
            src="/images/IMG_0849.webp"
            className="object-cover mt-2 w-full h-full hover:brightness-75 duration-100"
            alt=""
          />
          <img
            src="/images/IMG_0850.webp"
            className="object-cover mt-2 w-full h-full hover:brightness-75 duration-100"
            alt=""
          />

          <img
            src="/images/IMG_0856.webp"
            className="object-cover mt-2 w-full h-full hover:brightness-75 duration-100"
            alt=""
          />
        </div>
      </div>

      {/* Visit Us  */}
      <div className="w-screen overflow-hidden bg-[wheat] flex flex-wrap">
        <div className="w-full h-screen p-10 bg-[wheat] flex flex-col justify-start gap-10 items-center">
          <h1 className="text-center text-5xl mb-20 font-bold mt-20 text-[black]">
            Visit Us
          </h1>

          {/* Address  */}
          <div className="constainer w-screen flex flex-col gap-3 items-center">
            <div className="box w-full h-[50vh] flex flex-col items-center">
              <h2 className="text-black font-light text-center text-xl w-[80%]">
                388 Washington Rd,
                <br /> Sayreville, NJ 08872,
                <br /> United States
              </h2>
              <div className="divider mt-10 h-[1px] opacity-50 w-[80%] bg-black "></div>
              <h2 className="text-black mt-10 font-light text-center text-xl w-[80%]">
                354 Main St Sayreville,
                <br /> Sayreville, NJ 08872,
                <br /> United States
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
