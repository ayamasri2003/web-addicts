import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';
import Footer from '../../components/atoms/Footer.tsx';

const CookiesPolicies: React.FC = () => {
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

  return (
    <section className="relative min-h-screen bg-white text-black overflow-auto"> {/* Change h-screen to min-h-screen */}
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
      <div className="main-content flex flex-col items-start p-5 transition-filter duration-300">
        {/* Text Section */}
        <div className="text-section max-w-1/2 ml-2 mr-20"> {/* Increased right margin */}
          <h1 className="text-2xl mt-7 mb-6">Policy</h1>
          <h2 className="text-6xl font-bold mb-10">Cookie Policies</h2>
          
          <h3 className="text-1xl font mb-4">testing</h3>
         
        </div>

        {/* Image Section */}
        <div className="image-section max-w-1/2 flex justify-center items-center">
          {/* Add image content here if needed */}
        </div>
      </div>

      {/* Custom Cursor */}
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Menu Overlay */}
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />} {/* Render Menu when it's open */}

      <Footer /> {/* Add Footer component */}
    </section>
  );
};

export default CookiesPolicies;
