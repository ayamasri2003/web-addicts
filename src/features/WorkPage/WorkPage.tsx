import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';
import AllWork from '../AllWork/AllWork.tsx'; // Import the AllWork component

const WorkPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility
  const [selectedButton, setSelectedButton] = useState("ALL Work"); // State to manage the selected button
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State to manage the selected category

  const allWorkRef = useRef<HTMLDivElement | null>(null); // Reference to "All Work" section

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  // Function to handle button click
  const handleButtonClick = (button: string) => {
    setSelectedButton(button); // Update the selected button

    if (button === "ALL Work") {
      setSelectedCategory(null); // Show all work
    } else {
      setSelectedCategory(button); // Filter by category
    }

    if (allWorkRef.current) {
      // Scroll to "All Work" section
      allWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white text-black overflow-visible">
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
      <div className="main-content flex justify-between items-center p-5 transition-filter duration-300">
        {/* Text Section */}
        <div className="text-section max-w-1/2">
          <h1 className="text-2xl mt-7 mb-[30px] leading-[1.2]">OUR WORK</h1>
          <h2 className="text-6xl font-bold mb-4">
            Discover some of our<br />
            greatest projects
          </h2>

          {/* Buttons Section */}
          <div className="button-group flex space-x-4 mt-10">
            {["ALL Work", "Corporate", "E-commerce", "Mobile App", "Web App"].map((button) => (
              <button
                key={button}
                className={`px-8 py-3 rounded-full border text-black 
                  ${selectedButton === button ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'} 
                  border-black`}
                style={{ fontFamily: 'Proxima Nova Bold', fontSize: '14px' }}
                onClick={() => handleButtonClick(button)} // Handle button click
              >
                {button}
              </button>
            ))}
          </div>
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

      {/* Conditionally Render All Work Section */}
      <div ref={allWorkRef} className="mt-20">
        <AllWork selectedCategory={selectedCategory} /> {/* Pass selectedCategory to AllWork */}
      </div>
    </section>
  );
};

export default WorkPage;
