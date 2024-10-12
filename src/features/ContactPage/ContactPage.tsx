import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <section className="relative h-screen bg-white text-black flex flex-col justify-between overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between p-5">
        <div className="logo text-2xl">
          <img src="logooo.jpg" alt="Company Logo" className="h-20 w-auto" />
        </div>
        <button
          className="menu-icon text-3xl cursor-pointer focus:outline-none mb-1"
          onClick={handleMenuClick}
          aria-label="Menu" // Accessibility improvement
        >
          ☰
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow flex justify-between items-center p-5 transition-filter duration-300">
        {/* Text Section (Move upwards) */}
        <div className="text-section max-w-1/2 -mt-80"> {/* Reduced the top margin */}
          <h1 className="text-2xl mt-20 mb-[30px] leading-[1.2]">CONTACT US</h1> {/* Adjusted the margin */}
          <h2 className="text-6xl font-bold mb-4">
            Hello, Welcome to twa!<br />
            a project or a job application?
          </h2>

          {/* Button to navigate to Project page */}
          <button
            className="relative w-[160px] h-[50px] bg-transparent border-none rounded-full transition duration-300 ease-in-out opacity-80 hover:opacity-100 z-10 group mt-10"
            onClick={() => navigate('/project')} // Navigate to the project page
          >
            {/* Text span centered vertically and horizontally */}
            <span className="relative flex items-center justify-center h-full text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-translate-y-2 z-20">
              Start A project →
            </span>

            {/* Background div that expands on hover */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-[50px] h-[50px] bg-black bg-opacity-40 rounded-full transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full group-hover:bg-black z-10"></div>
          </button>
          <h1></h1>
          {/* Button to navigate to Apply page */}
          <button
            className="relative w-[160px] h-[50px] bg-transparent border-none rounded-full transition duration-300 ease-in-out opacity-80 hover:opacity-100 z-10 group mt-10"
            onClick={() => navigate('/apply')} // Navigate to the apply page
          >
            {/* Text span centered vertically and horizontally */}
            <span className="relative flex items-center justify-center h-full text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-translate-y-2 z-20">
              Join the Team →
            </span>
            
            {/* Background div that expands on hover */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-[50px] h-[50px] bg-black bg-opacity-40 rounded-full transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full group-hover:bg-black z-10"></div>
          </button>
        </div>

        {/* Image Section */}
        <div className="image-section max-w-1/2 flex justify-center items-center">
          {/* Add image content here if needed */}
        </div>
      </div>

      {/* Right Contact Info (Moved to the bottom-right corner) */}
      <div className="contact-info text-left p-5 absolute bottom-0 right-0 mb-10 mr-10">
        <p className="text-lg mb-4 font-bold border-t-8 border-gray-500 pt-4 w-60">
          <a href="mailto:info@thewebaddicts.com" className="hover:underline">info@thewebaddicts.com</a>
        </p>
        <p className="text-lg mb-4 font-bold border-t-8 border-gray-500 pt-4 w-60">
          <a href="tel:+96170444309" className="hover:underline">+961 70 444 309</a>
          <br />
          <a href="tel:+9611485075" className="hover:underline">+961 1 485 075</a>
        </p>
        <p className="text-lg mb-4 font-bold border-t-8 border-gray-500 pt-4 w-60">
          <a href="https://maps.google.com?q=Aramex Building, Mirna Chalouhi Highway, Lebanon" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Aramex Building, 1st Floor, Mirna Chalouhi Highway<br /> – Lebanon
          </a>
        </p>

        {/* Social Media Icons */}
        <div className="social-icons flex justify-start space-x-4 text-3xl mt-8">
          <a href="#" className="hover:text-gray-600"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-600"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Custom Cursor */}
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-black rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Menu Overlay */}
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />} {/* Render Menu when it's open */}
    </section>
  );
};

export default ContactPage;
