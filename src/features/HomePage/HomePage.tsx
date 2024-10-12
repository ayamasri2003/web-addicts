import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
    {/* Header Section */}
    <div className="flex justify-between p-5">
        <div className="logo text-2xl">
            <img src="logo.jpg" alt="Company Logo" className="h-20 w-auto" />
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
      <div className="main-content flex justify-between items-center p-5 transition-filter duration-300">
        {/* Text Section */}
        <div className="text-section max-w-1/2">
          <h1 className="text-4xl font-bold mb-[100px] leading-[1.2]">WE ARE</h1>
          <h2 className="text-6xl font-extrabold mb-4">The Web Addicts</h2>
          <p className="text-lg mt-9 mb-6">
            We are a team of creative designers and developers building high-quality websites, mobile apps & e-commerce.
          </p>
          <button className="relative w-[160px] h-[50px] bg-transparent border-none rounded-full transition duration-300 ease-in-out opacity-80 hover:opacity-100 z-10 group">
          {/* Text span centered vertically and horizontally */}
          <span className="relative flex items-center justify-center h-full text-white transition-all duration-300 ease-in-out group-hover:text-black group-hover:-translate-y-2 z-20">
            Get to know us →
          </span>
          
          {/* Background div that expands on hover */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-[50px] h-[50px] bg-white bg-opacity-40 rounded-full transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full group-hover:bg-white z-10"></div>
        </button>



        </div>

        {/* Image Section */}
        <div className="image-section max-w-1/2 flex justify-center items-center">
          <img src="logoo.webp" alt="Background" className="background-image max-w-full h-auto" />
        </div>
      </div>

      {/* Custom Cursor */}
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Menu Overlay */}
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />} {/* Render Menu when it's open */}
    </section>
  );
};

export default HomePage;
