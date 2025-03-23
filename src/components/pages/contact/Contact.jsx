import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import Footer from "../../common/footer";

const Contact = () => {
  return (
    <div className="w-screen bg-[wheat] min-h-screen">
      {/* Hero Section */}
      <div className="hero-contact relative h-[450px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0"></div>
        <div className="relative">
          <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-wide mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            We'd love to hear from you! Visit us or reach out anytime.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Location */}
          <div className="bg-transparent p-6 rounded-xl text-center">
            <h2 className="text-2xl font-semibold text-[#f36969] mb-3 flex items-center justify-center">
              <span className="material-icons mr-2 text-[#f36969]">
                location_on
              </span>
              Our Location
            </h2>
            <p className="text-black leading-relaxed">
              388 Washington Road, <br /> Sayreville, NJ 08872
            </p>
            <p className="text-black mt-5 leading-relaxed">
              354 Main St, <br /> Sayreville, NJ 08872
            </p>
          </div>

          {/* Contact Info */}
          <div className="p-6 rounded-xl text-center">
            <h2 className="text-2xl font-semibold text-[#f36969] mb-3 flex items-center justify-center">
              <span className="material-icons mr-2 text-[#f36969]">
                phone
              </span>
              Contact Us
            </h2>
            <p className="text-gray-600 mb-2">
              Phone:{" "}
              <Link to="tel:+1234567890" className="text-black font-bold">
                +1 (732) 387-0817
              </Link>
            </p>
            <p className="text-gray-600">
              Email:{" "}
              <Link
                to="mailto:deliplus1@yahoo.com"
                className="text-black hover:text-[#f36969] transition-colors"
              >
                deliplus1@yahoo.com
              </Link>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="p-6 rounded-xl text-center">
            <h2 className="text-2xl font-semibold text-[#f36969] mb-3 flex items-center justify-center">
              <span className="material-icons mr-2 text-[#f36969]">
                schedule
              </span>
              Opening Hours
            </h2>
            <p className="text-black font-bold">Open 7 Days a Week</p>
            <p className="text-black font-medium">6am - 5pm</p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
