import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';

const Page5: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  const partnerImages = [
    "https://thewebaddicts.com/storage/data/partners/1.svg",
    "https://thewebaddicts.com/storage/data/partners/2.svg",
    "https://thewebaddicts.com/storage/data/partners/3.jpg",
    "https://thewebaddicts.com/storage/data/partners/4.jpg",
    "https://thewebaddicts.com/storage/data/partners/5.jpg",
    "https://thewebaddicts.com/storage/data/partners/6.svg",
    "https://thewebaddicts.com/storage/data/partners/7.jpg",
    "https://thewebaddicts.com/storage/data/partners/8.jpg",
    "https://thewebaddicts.com/storage/data/partners/9.jpg",
    "https://thewebaddicts.com/storage/data/partners/10.jpg",
    "https://thewebaddicts.com/storage/data/partners/11.jpg",
    "https://thewebaddicts.com/storage/data/partners/12.jpg",
    "https://thewebaddicts.com/storage/data/partners/13.svg",
    "https://thewebaddicts.com/storage/data/partners/14.jpg",
    "https://thewebaddicts.com/storage/data/partners/15.jpg",
    "https://thewebaddicts.com/storage/data/partners/16.jpg",
    "https://thewebaddicts.com/storage/data/partners/17.jpg",
    "https://thewebaddicts.com/storage/data/partners/18.jpg",
    "https://thewebaddicts.com/storage/data/partners/19.svg",
    "https://thewebaddicts.com/storage/data/partners/20.jpg",
    "https://thewebaddicts.com/storage/data/partners/21.svg",
    "https://thewebaddicts.com/storage/data/partners/22.svg",
    "https://thewebaddicts.com/storage/data/partners/23.svg",
    "https://thewebaddicts.com/storage/data/partners/24.svg",
    "https://thewebaddicts.com/storage/data/partners/25.svg",
    "https://thewebaddicts.com/storage/data/partners/26.jpg",
    "https://thewebaddicts.com/storage/data/partners/27.svg",
    "https://thewebaddicts.com/storage/data/partners/28.jpg",
    "https://thewebaddicts.com/storage/data/partners/29.jpg",
    "https://thewebaddicts.com/storage/data/partners/30.svg"
  ];

  return (
    <section className="relative min-h-screen bg-white text-black flex flex-col items-center justify-center p-0 overflow-auto max-w-full">
      <h2 className="text-1xl  font-medium mb-2">THE COMPANIES THAT HAVE CHOSEN US</h2>
      <h3 className="text-3xl font-extrabold mb-6">Our Clients & Partners</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partnerImages.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img 
              src={src} 
              alt={`Client ${index + 1}`} 
              className="h-16 w-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Custom Cursor */}
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-black rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Menu Overlay */}
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />} {/* Render Menu when it's open */}
    </section>
  );
};

export default Page5;
