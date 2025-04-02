import React, { useEffect, useState } from "react";
import "./About.scss";

const About = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const newImages = [];
    for (let i = 43; i <= 60; i++) {
      newImages.push(`/images/IMG_08${i}.webp`);
    }
    setImages(newImages);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white">
      <div className="bg-[red] bg-cover bg-center h-[400px] md:h-[500px] lg:h-[500px] flex flex-col lg:flex-row justify-start items-start">
        {/* Menu Description Section */}
        <div className="flex flex-col ml-6 md:ml-16 lg:ml-32 mt-10 md:mt-20 lg:mt-24 w-full max-w-[90%] md:max-w-[60%] lg:max-w-[40%]">
          <h3 className="font-[font1] text-white text-xl md:text-2xl lg:text-3xl tracking-wide">
            Take a Look at
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold font-[font2] mt-2 md:mt-4">
            Gallery
          </h2>
          <p className="text-white text-sm md:text-base lg:text-lg font-medium font-[font2] mt-4 md:mt-6 leading-relaxed">
            The Deli Plus is an ideal place to socialize, impress your friends,
            family, and associates, and enjoy a perfect night out in what is
            undoubtedly the most sumptuous and intimate Indian dining experience
            in Balsall Common.
          </p>
        </div>

    
      </div>

      {/* Gallery Section */}
      <div className="py-12 px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                alt={`Gallery Image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-500 py-12 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Visit Us Today!
        </h2>
        <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Come experience the flavors and ambiance that make our restaurant
          special.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-transparent text-white border border-white py-2 px-6 rounded-md hover:bg-white hover:text-red-500 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
