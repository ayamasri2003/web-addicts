import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Project: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility
  const [selectedButton, setSelectedButton] = useState("ALL Work"); // State to manage the selected button

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  // Function to handle button click
  const handleButtonClick = (button: string) => {
    setSelectedButton(button); // Update the selected button
  };

  // Function to navigate back to the contact page
  const handleBackClick = () => {
    navigate('/contact'); // Replace '/contact' with the actual route for your contact page
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
      <div className="main-content flex-grow flex flex-col justify-center items-start p-5 transition-filter duration-300">
        {/* Back Button */}
        <button
          className="self-start text-lg font-bold mb-4 cursor-pointer hover:underline"
          onClick={handleBackClick}
        >
          ← Back
        </button>
        <h2 className="text-6xl font-bold mb-10">
        Tell us about your project
          </h2>

        {/* Input Fields Section */}
        <div className="flex flex-col space-y-4 w-full max-w-2xl">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="border-b border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 italic w-1/2"
            />
            <input
              type="text"
              placeholder="LAST NAME"
              className="border-b border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 italic w-1/2 ml-2"
            />
          </div>

          <div className="flex justify-between">
            <select className="border-b border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 italic w-1/2">
              <option>Select Country</option>
              {/* Add options here */}
            </select>
            <input
              type="text"
              placeholder="COMPANY NAME"
              className="border-b border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 italic w-1/2 ml-2"
            />
          </div>

          <div className="flex justify-between">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="border-b border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 italic w-1/2"
            />
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className="border-b border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 italic w-1/2 ml-2"
            />
          </div>

          <textarea
            placeholder="Your message..."
            className="border-b border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-400 italic w-full h-24 resize-none"
          />
        </div>

        <button className="relative w-[160px] h-[50px] bg-transparent border-none rounded-full transition duration-300 ease-in-out opacity-80 hover:opacity-100 z-10 group mt-10" onClick={() => handleButtonClick("Get to know us")}>
            {/* Text span centered vertically and horizontally */}
            <span className="relative flex items-center justify-center h-full text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-translate-y-2 z-20">
              Submit →
            </span>
            
            {/* Background div that expands on hover */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-[50px] h-[50px] bg-black bg-opacity-40 rounded-full transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full group-hover:bg-black z-10"></div>
          </button>
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

export default Project;
