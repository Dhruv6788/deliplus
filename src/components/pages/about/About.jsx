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
    <div className="w-screen bg-[white]">
      <div className="menu-heading h-[400px] flex flex-col justify-center items-center">
        <h1 className="text-white menu-header-text text-7xl lg:text-8xl font-light">
          Gallery
        </h1>
        <p className="text-gray-300 w-[90%] mt-3 text-center text-lg md:text-xl max-w-2xl">
          Explore our collection of stunning dishes and memorable moments
          captured at our restaurant.
        </p>
      </div>
      {/* Rendering Images Gallery */}
      <div className="images-container flex flex-wrap">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-[30%] h-[30%] object-cover"
            alt={`Gallery Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
