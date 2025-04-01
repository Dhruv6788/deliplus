import React from "react";
import Footer from "../../common/footer";
import { Link } from "react-router-dom";
import { memo } from "react";
import "./Home.scss";
const openingHours = [
  { day: "Monday", hours: "09:00am - 06:00pm" },
  { day: "Tuesday", hours: "09:00am - 06:00pm" },
  { day: "Wednesday", hours: "09:00am - 06:00pm" },
  { day: "Thursday", hours: "09:00am - 06:00pm" },
  { day: "Friday", hours: "09:00am - 06:00pm" },
  { day: "Saturday", hours: "09:00am - 06:00pm" },
  { day: "Sunday", hours: "09:00am - 06:00pm" },
];
const Home = () => {
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="w-full h-full">
        <div className="absolute hidden md:block w-[300px] h-[300px] bg-white overflow-hidden right-[10%] top-[100px]">
          <img src="/food_07.jpg" className="w-full h-full" alt="Food Image" />
        </div>
        <div className="bg-[url(/red_bg.jpg)] w-full py-20">
          <div className="tagline  relative top-[20%] left-[10%]">
            <h1 className="text-white text-xl md:text-3xl font-light italic font-[font1]">
              #Delicious Cafe
            </h1>
            <h1 className="tegline-subtext tracking-wider  text-white text-5xl md:text-7xl font-extrabold  font-[font2]">
              Sweet Treats
            </h1>
            <h1 className="tegline-subtext tracking-wider  text-white text-5xl md:text-7xl font-extrabold font-[font2]">
              Perfact Eats
            </h1>
          </div>
        </div>

        <div className="about px-20 w-full mt-40">
          <p className="text-[#f14d4d] text-center text-2xl md:text-4xl font-light font-[font1]">
            We are a family-owned business that has been serving delicious food
            for over 20 years. Our mission is to provide our customers with a
            warm and welcoming atmosphere where they can enjoy a variety of
            delicious dishes made with the freshest ingredients.
          </p>
        </div>

        {/* Gallery  */}
        <div className="heading py-10 px-20 w-full mt-10">
          <h1 className="text-[#f14d4d] text-center text-5xl md:text-[12vw] font-extrabold font-[font2]">
            Delicious Dishes
          </h1>
        </div>

        <div className="gallery px-10 w-full mt-10 ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="col-span-2 md:col-span-1 gallery-images">
              <img
                src="/food_01.jpg"
                className="w-full h-full"
                alt="Food Image"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img
                src="/food_02.jpg"
                className="w-full h-full"
                alt="Food Image"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img
                src="/food_03.jpg"
                className="w-full h-full"
                alt="Food Image"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img
                src="/food_04.jpg"
                className="w-full h-full"
                alt="Food Image"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img
                src="/food_05.webp"
                className="w-full h-full"
                alt="Food Image"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img
                src="/food_06.jpg"
                className="w-full h-full"
                alt="Food Image"
              />
            </div>
          </div>
        </div>

        <div className="gallery bg-[url('/food_08.jpg')] bg-cover bg-center bg-no-repeat mt-20 top-[100px] w-full h-[100vh] md:h-[70vh] flex justify-center items-center">
          <div className="w-[70%] h-[70%] bg-[#ffffffee] flex flex-col justify-between py-20 items-center">
            <h1 className="text-[#f14d4d] text-center text-2xl md:text-[2vw] font-extrabold font-[font2]">
              Your Perfact Food Destination
            </h1>
            <p className="w-[60%] text-[#f14d4d] mt-3 text-center text-xl md:text-[1.5vw] font-light font-[font1]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore sit tempora sapiente eaque facere dignissimos
              consectetur minus iusto veniam possimus.
            </p>
            <Link
              className="bg-[transparent] text-[red] border border-[red] py-2 px-6 mt-10 text-center text-lg md:text-[1vw] font-light font-[font2]"
              to="/menu"
            >
              View Menu
            </Link>
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
                    <i class="ri-map-pin-fill"></i>
                    <p className="">354 Main St, Sayreville, NJ 08872</p>
                  </Link>
                  <Link className="hover:text-[red] duration-300 flex gap-3">
                    <i class="ri-map-pin-fill"></i>
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
                <Link to='/home' className="hover:text-[red] duration-300">Home</Link>
                <Link to='/menu' className="hover:text-[red] duration-300">Menu</Link>
                <Link to='/about' className="hover:text-[red] duration-300">Gallery</Link>
                <Link to='/contact' className="hover:text-[red] duration-300">Contact</Link>
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
                      item.day === today ? "bg-[url(/red_bg.jpg)] bg-cover bg-center bg-no-repeat text-white hover:text-white" : ""
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
    </div>
  );
};

export default memo(Home);
