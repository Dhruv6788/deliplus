import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="w-screen bg-[wheat] min-h-screen">
      {/* Hero Section */}
      <div className="hero-contact relative h-[450px] overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-[white] text-5xl md:text-7xl font-[600] tracking-wide mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            We'd love to hear from you! Visit us or reach out anytime.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 md:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {/* Left Column - Contact Details */}
          <div className="flex justify-between">
            {/* Location */}
            <div className="bg-transparent p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#f36969] mb-3 flex items-center">
                <span className="material-icons mr-2 text-[#f36969]">
                  location_on
                </span>
                Our Location
              </h2>
              <p className="text-black leading-relaxed">
                388 Washingtone Road,
                <br /> Sayreville, NJ 08872
              </p>
              <p className="text-black mt-10 leading-relaxed">
                354 Main St, <br />
                Sayreville, NJ 08872
              </p>
            </div>

            {/* Contact Info */}
            <div className=" p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#f36969] mb-3 flex items-center">
                <span className="material-icons mr-2 text-[#f36969]">
                  phone
                </span>
                Contact Us
              </h2>
              <p className="text-gray-600 mb-2">
                Phone:{" "}
                <a href="tel:+1234567890" className="text-b">
                  +1 (732) 387-0817
                </a>
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:deliplus1@yahoo.com"
                  className="text-black hover:text-[#f36969] transition-colors"
                >
                  deliplus1@yahoo.com
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className=" p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#f36969] mb-3 flex items-center">
                <span className="material-icons mr-2 text-[#f36969]">
                  schedule
                </span>
                Opening Hours
              </h2>
              <p className="text-black font-bold text-center">
                Open 7 Days a week
              </p>
              <p className="text-black font-medium text-center">
                  6am - 5pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
