import React, { useEffect, useRef } from "react";
import Footer from "../../common/footer";
import { Link } from "react-router-dom";
import { memo } from "react";
import "./Home.scss";


export const openingHours = [
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
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="relative w-full h-full">
        {/* Hero Image */}
        <div className="absolute hidden md:block w-[300px] h-[300px] bg-white overflow-hidden right-[10%] top-[100px] z-10">
          <img src="/food_07.jpg" className="w-full h-full object-cover" alt="Food Image" />
        </div>

        {/* Hero Section */}
        <div className="bg-[red] w-full py-20 bg-cover bg-center">
          <div className="tagline relative top-[20%] left-[10%] max-w-[80%]">
            <h1 className="text-white text-xl md:text-3xl font-light italic font-[font1]">
              #Delicious Cafe
            </h1>
            <h1 className="tracking-wider text-white text-5xl md:text-7xl font-extrabold font-[font2]">
              Sweet Treats
            </h1>
            <h1 className="tracking-wider text-white text-5xl md:text-7xl font-extrabold font-[font2]">
              Perfect Eats
            </h1>
          </div>
        </div>

        {/* About Section */}
        <div  className="about px-4 md:px-20 w-full mt-40">
          <p className="text-[#f14d4d] text-center text-2xl md:text-4xl font-light font-[font1] max-w-4xl mx-auto">
            We are a family-owned business that has been serving delicious food
            for over 20 years. Our mission is to provide our customers with a
            warm and welcoming atmosphere where they can enjoy a variety of
            delicious dishes made with the freshest ingredients.
          </p>
        </div>

        {/* Gallery Heading */}
        <div className="heading py-10 px-4 md:px-20 w-full mt-10">
          <h1
            
            className="text-[#f14d4d] bg-[url(/red_bg.jpg)] bg-clip-text text-center text-6xl md:text-[12vw] font-extrabold font-[font2]"
          >
            Delicious <br /> Dishes
          </h1>
        </div>

        {/* Gallery */}
        <div className="gallery px-4 md:px-10 w-full mt-10">
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="col-span-1 group">
                <img
                  src={`/food_0${num}.${num === 5 ? "webp" : "jpg"}`}
                  className="w-full h-[40vh] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  alt="Food Image"
                />
              </div>
            ))}
          </div>
        </div>


        <div className="heading py-10 px-4 md:px-20 w-full mt-10">
          <h1
          
            className="text-[#f14d4d] bg-[url(/red_bg.jpg)] bg-clip-text text-center text-6xl md:text-[12vw] font-extrabold font-[font2]"
          >
            Our Gallery
          </h1>

          <p className="text-[#f14d4d] mt-20 text-center text-2xl md:text-4xl font-light font-[font1] max-w-4xl mx-auto">
            We are a family-owned business that has been serving delicious food
            for over 20 years. Our mission is to provide our customers with a
            warm and welcoming atmosphere where they can enjoy a variety of
            delicious dishes made with the freshest ingredients.
          </p>
        </div>

        <div className="new-gallery px-4 md:px-10 w-full mt-10">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
    <div className="col-span-1 group">
      <img
        src="/images/IMG_0842.webp"
        className="w-full h-[40vh] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        alt="Ambiance Image"
      />
    </div>
    <div className="col-span-1 group">
      <img
        src="/images/IMG_0861.webp"
        className="w-full h-[40vh] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        alt="Ambiance Image"
      />
    </div>
    <div className="col-span-1 group">
      <img
        src="/images/IMG_0844.webp"
        className="w-full h-[40vh] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        alt="Ambiance Image"
      />
    </div>
    <div className="col-span-1 group">
      <img
        src="/images/IMG_0845.webp"
        className="w-full h-[40vh] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        alt="Ambiance Image"
      />
    </div>
    <div className="col-span-1 group">
      <img
        src="/images/IMG_0850.webp"
        className="w-full h-[40vh] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        alt="Ambiance Image"
      />
    </div>
    <div className="col-span-1 group">
      <img
        src="/images/IMG_0856.webp"
        className="w-full h-[40vh] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        alt="Ambiance Image"
      />
    </div>
  </div>
</div>


        {/* Call to Action */}
        <div className="gallery bg-[url('/food_08.jpg')] bg-cover bg-center bg-no-repeat mt-20 w-full min-h-[70vh] flex justify-center items-center">
          <div
            className="w-[90%] md:w-[70%] bg-[#ffffffee] flex flex-col justify-between py-10 md:py-20 items-center"
          >
            <h1 className="text-[#f14d4d] text-center text-2xl md:text-[2vw] font-extrabold font-[font2]">
              Your Perfect Food Destination
            </h1>
            <p className="w-[90%] md:w-[60%] text-[#f14d4d] mt-3 text-center text-lg md:text-[1.5vw] font-light font-[font1]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore sit tempora sapiente eaque facere dignissimos
              consectetur minus iusto veniam possimus.
            </p>
            <Link
              className="bg-transparent text-[red] border border-[red] py-2 px-6 mt-10 text-center text-lg md:text-[1vw] font-light font-[font2] hover:bg-[red] hover:text-white transition-all duration-300"
              to="/menu"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Footer Info */}
        <div className="w-full py-10">
          <div className="w-full flex flex-col md:flex-row justify-between gap-10 px-4 md:px-10 max-w-[1200px] mx-auto">
            {/* Locations */}
            <div className="sections w-full md:w-1/3 py-4">
              <div className="logo w-full flex justify-start">
                <img src="/logo.svg" className="w-[30%] max-w-[150px]" alt="Logo" />
              </div>
              <div className="heading p-3">
                <h1 className="font-[font2] font-bold text-2xl text-[red]">
                  Our Locations
                </h1>
                <div className="w-full flex flex-col mt-4 gap-3">
                  <Link className="hover:text-[red] hover:-translate-y-1 transition-all duration-300 flex gap-3">
                    <i className="ri-map-pin-fill"></i>
                    <p>354 Main St, Sayreville, NJ 08872</p>
                  </Link>
                  <Link className="hover:text-[red] hover:-translate-y-1 transition-all duration-300 flex gap-3">
                    <i className="ri-map-pin-fill"></i>
                    <p>388 Washington Rd, Sayreville, NJ 08872</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sections w-full md:w-1/3 py-4">
              <div className="heading p-3">
                <h1 className="font-[font2] font-bold text-2xl text-[red]">
                  Quick Links
                </h1>
              </div>
              <div className="w-full flex flex-col p-5 gap-3">
                <Link to="/home" className="hover:text-[red] hover:-translate-y-1 transition-all duration-300">
                  Home
                </Link>
                <Link to="/menu" className="hover:text-[red] hover:-translate-y-1 transition-all duration-300">
                  Menu
                </Link>
                <Link to="/about" className="hover:text-[red] hover:-translate-y-1 transition-all duration-300">
                  Gallery
                </Link>
                <Link to="/contact" className="hover:text-[red] hover:-translate-y-1 transition-all duration-300">
                  Contact
                </Link>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="sections w-full md:w-1/3 py-4">
              <div className="heading p-3">
                <h1 className="font-[font2] font-bold text-2xl text-[red]">
                  Opening Hours
                </h1>
              </div>
              <div className="w-full flex flex-col p-5 gap-2">
                {openingHours.map((item) => (
                  <p
                    key={item.day}
                    className={`p-2 transition-all duration-300 ${
                      item.day === today
                        ? "bg-[url(/red_bg.jpg)] bg-cover bg-center bg-no-repeat text-white hover:scale-105"
                        : "hover:text-[red] hover:scale-105"
                    }`}
                  >
                    {item.day} {item.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default memo(Home);