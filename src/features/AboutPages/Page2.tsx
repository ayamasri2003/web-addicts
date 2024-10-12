import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';

const Page2: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <section className="relative min-h-screen bg-white text-black flex flex-col justify-center overflow-auto"> {/* Use flex and justify-center for vertical centering */}
      
      {/* Main Content */}
      <div className="main-content flex flex-col items-start p-5 transition-filter duration-300">
        {/* Text Section */}
        <div className="text-section max-w-1/2 ml-2 mr-20"> {/* Adjust margins as needed */}
          <h2 className="text-2xl font mb-4">A digital company</h2>

          {/* Text with equal space above and below */}
          <h3 className="text-5xl font-bold mb-10 mt-5 text-gray-700">
            We are The Web Addicts, a digital agency specialized in strategy, design and development. We help brands thrive in the digital world with the best UI & UX
          </h3>
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
    </section>
  );
};

export default Page2;
