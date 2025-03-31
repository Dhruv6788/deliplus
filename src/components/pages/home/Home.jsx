import React from "react";
import Footer from "../../common/footer";
import "./Home.scss";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="w-full h-full relative">
        <div className="absolute hidden md:block w-[300px] h-[300px] bg-white overflow-hidden right-[10%] top-[100px]">
          <img src="/food_03.jpg" className="w-full h-full" alt="Food Image" />
        </div>
        <div className="bg-[#f14d4d] w-full py-20">
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
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;