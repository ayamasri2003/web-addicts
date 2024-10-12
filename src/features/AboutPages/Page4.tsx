import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';

const Page4: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <section className="relative min-h-screen bg-white text-black flex items-center justify-between p-10 overflow-auto">
      {/* Text Container - Aligned Left */}
      <div className="flex-1 text-left pr-10 mb-10 mt-0"> {/* Removed margin from top, added margin-bottom */}
        <h2 className="text-1xl mb-2">Our Workplace</h2> {/* Decreased bottom margin */}
        <p className="text-3xl font-bold">Have a look at where all the miracles are happening</p>
      </div>

      {/* Image Container - Moved Further to the Right */}
      <div className="flex items-center justify-end flex-1 ml-40"> {/* Increased `ml-40` to push images more to the right */}
        {/* First Image */}
        <div className="image-container flex-shrink-0 mr-6 mt-10"> {/* Margin separates the images */}
          <img
            src="https://thewebaddicts.com/storage/data/workspace_gallery/1.jpg"
            alt="Workspace 1"
            className="h-[500px] w-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Second Image */}
        <div className="image-container flex-shrink-0 mt-10"> {/* Align images next to each other */}
          <img
            src="https://thewebaddicts.com/storage/data/workspace_gallery/2.jpg"
            alt="Workspace 2"
            className="h-[500px] w-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Arrow */}
        <button className="absolute right-10 transform translate-x-1/2 text-2xl cursor-pointer focus:outline-none">
          &#8594; {/* Right Arrow */}
        </button>
      </div>

      {/* Custom Cursor */}
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-black rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Menu Overlay */}
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />} {/* Render Menu when it's open */}
    </section>
  );
};

export default Page4;
