import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Footer from "../../common/footer";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black  overflow-x-hidden">
      <div className="w-full h-full home-container">
        <div className="home-foreground relative top-[50px]">
          <div className="content">
            <div className="content-cover">
              <p>#Delicious Cafe</p>
              <h1>Sweet Treats</h1>
              <h1>Perfact Eats</h1>
            </div>
            <div className="content-button mt-10">
              <Link
                to="/menu"
                className="px-10 py-3 rounded-full hover:bg-[red] hover:border hover:text-[white] bg-[wheat]"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="home-content w-full h-[130vh] flex justify-center">
        <div className="home-content-container w-1/2 bg-[wheat] flex justify-center items-center overflow-hidden">
          <img
            src="/food_1.jpg"
            className="w-[70%] h-[70%] object-cover"
            alt="Sandwich Image"
          />
        </div>
        <div className="home-content-container w-1/2 bg-[wheat] flex items-center justify-center">
          <div className="heading overflow-hidden">
            <h1 className="font-extrabold text-[#f36969] text-8xl uppercase">
              Eat
            </h1>
            <h1 className="font-extrabold text-[#f36969] text-8xl uppercase">
              Launch
            </h1>
            <h1 className="font-extrabold text-[#f36969] text-8xl uppercase">
              Dinner
            </h1>
            <h1 className="font-extrabold text-[#f36969] text-8xl uppercase">
              Takeout
            </h1>
          </div>
        </div>
      </div> */}
      <div className="w-screen h-[500px] bg-[wheat] flex">
        {/* Online Delivery Available  */}

        <div className="w-[30%] h-full bg-[wheat] flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold mt-20 text-[black]">
            Welcome
          </h1>
          <p className="text-left mt-5 w-[80%] text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repellat, temporibus debitis molestias rem perspiciatis sunt quo aut
            accusamus consequuntur vel sed recusandae corrupti ipsam non placeat
            deleniti. Cupiditate quaerat dolores perferendis tempore ullam!
          </p>
          <Link
            to={"/menu"}
            className="mt-10 border px-10 py-2 duration-300 hover:bg-[red] hover:border hover:text-[white] bg-[wheat]"
          >
            Menu
          </Link>
        </div>
        <div className="w-[70%] h-full bg-gray-200">
          <img
            src="/food_02.jpg"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
      <div className="w-screen h-[500px] bg-[wheat] flex">
        {/* Online Delivery Available  */}
        <div className="w-[70%] h-full bg-gray-200">
          <img
            src="/food_03.jpg"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>

        <div className="w-[30%] h-full bg-[wheat] flex flex-col items-center">
          <h1 className="text-center text-3xl font-bold mt-20 text-[black]">
            Welcome
          </h1>
          <p className="text-left mt-5 w-[80%] text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repellat, temporibus debitis molestias rem perspiciatis sunt quo aut
            accusamus consequuntur vel sed recusandae corrupti ipsam non placeat
            deleniti. Cupiditate quaerat dolores perferendis tempore ullam!
          </p>
          <Link
            to={"/menu"}
            className="mt-10 border px-10 py-2 duration-300 hover:bg-[red] hover:border hover:text-[white] bg-[wheat]"
          >
            Menu
          </Link>
        </div>
      </div>
      <div className="w-screen bg-[wheat] flex">
        {/* Online Delivery Available  */}
        <div className="w-[20%] h-[300px] bg-gray-200 border-t-4 border-[#ffffff] border-r-4 duration-300 border-b-4">
          <img
            src="/images/IMG_0843.webp"
            className="object-cover w-full h-full hover:brightness-75 duration-100"
            alt=""
          />
        </div>
        <div className="w-[20%] h-[300px] bg-gray-200 border-t-4 border-[#ffffff] border-r-4 duration-300 border-b-4">
          <img
            src="/images/IMG_0848.webp"
            className="object-cover w-full h-full hover:brightness-75 duration-100"
            alt=""
          />
        </div>
        <div className="w-[20%] h-[300px] bg-gray-200 border-t-4 border-[#ffffff] border-r-4 duration-300 border-b-4">
          <img
            src="/images/IMG_0849.webp"
            className="object-cover w-full h-full hover:brightness-75 duration-100"
            alt=""
          />
        </div>
        <div className="w-[20%] h-[300px] bg-gray-200 border-t-4 border-[#ffffff] border-r-4 duration-300 border-b-4">
          <img
            src="/images/IMG_0850.webp"
            className="object-cover w-full h-full hover:brightness-75 duration-100"
            alt=""
          />
        </div>
        <div className="w-[20%] h-[300px] bg-gray-200 border-t-4 border-[#ffffff] border-r-4 duration-300 border-b-4">
          <img
            src="/images/IMG_0856.webp"
            className="object-cover w-full h-full hover:brightness-75 duration-100"
            alt=""
          />
        </div>
      </div>

      <div className="w-screen bg-[wheat] py-10">
        <h1 className="text-center text-6xl font-bold mt-10 text-[black]">
          Visit Us
        </h1>
        {/* Render Google Map */}
        <div className="max-w-5xl mx-auto mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.9213965329761!2d-74.3444107244784!3d40.46009541400247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c93a438a0983%3A0x51406869a4efd22a!2sDeli%20Plus!5e0!3m2!1sen!2sin!4v1742292233701!5m2!1sen!2sin"
            width="1200"
            height="350"
            style={{ transform: "translateX(-5%)" }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/*  Locations  */}

          {/* Deli plus - Sayreville */}
          <div className="location-container mt-20 flex justify-around gap-5">
            <div className="first-location border-b  py-10">
              <h2 className="mt-4 text-2xl font-bold">
                338 Washingtone Road,
                <br /> Sayreville, NJ 08872
              </h2>
              <p className="font-medium text-lg mt-3">{"+1 (732) 387-0817"}</p>
              <p className="font-bold text-xl mt-4">Open 7 Days a Week</p>
              <p className="font-normal text-xl mt-4">
                Monday - Saturday : 6am - 5pm
              </p>
              <p className="font-normal text-xl mt-4">Sunday : 7am - 3pm</p>
            </div>
            <div className="second-location border-b py-10">
              <h2 className="mt-4 text-2xl font-bold">
                354 Main St,
                <br /> Sayreville, NJ 08872
              </h2>
              <p className="font-medium text-lg mt-4">{"+1 (732) 952 3114"}</p>
              <p className="mt-4 font-bold text-xl">Open 7 Days a Week</p>
              <p className="font-normal text-xl mt-4">
                Monday - Friday : 5am - 3pm
              </p>
              <p className="font-normal text-xl mt-4">Saturday : 6am - 3pm</p>
              <p className="font-normal text-xl mt-4"> Sunday : 7am - 2pm</p>
            </div>
          </div>
        </div>
      </div>
          <Footer />
    </div>
  );
};

export default Home;
