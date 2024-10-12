import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

interface MenuProps {
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ toggleMenu }) => {
  
  const handleCloseMenu = () => {
    toggleMenu(); // Close the menu
  };

  return (
    <div className="menu-overlay flex flex-col justify-between bg-white text-black fixed top-0 left-0 w-full h-full z-50">
      {/* Header Section */}
      <div className="flex justify-between p-5">
        <div className="logo text-2xl">
          <img src="logooo.jpg" alt="Company Logo" className="h-20 w-auto" />
        </div>
        <div className="close-menu p-4 text-4xl absolute top-4 right-4 cursor-pointer" onClick={handleCloseMenu}>
          &#10005; {/* Close icon */}
        </div>
      </div>

      {/* Menu Content */}
      <div className="flex justify-between w-full p-10 mt-0 mb-15">
        {/* Left Menu Links */}
        <ul className="list-none p-0 -mt-80 ml-40">
          {['Work', 'Services', 'About Us', 'Careers', 'Contact Us'].map((item, index) => (
            <li key={index} className="my-12">
              <Link
                to={item === 'Contact Us' ? '/contact' : item === 'Work' ? '/work': item === 'Services' ? '/services' : item === 'About Us' ? '/about' :item === 'Contact Us' ? '/contact' :item === 'Careers' ? '/careers' :'/'}
                onClick={toggleMenu} // Just close the menu, don't manually navigate
                className="text-7xl font-bold text-gray-700 transition-transform duration-300 ease-in-out transform hover:text-black hover:scale-110 hover:translate-x-2"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Contact Info */}
        <div className="contact-info text-left -mt-50 mr-10">
          <p className="text-lg mb-4 mr-7 font-bold border-t-8 border-gray-500 pt-4 w-60">
            <a href="mailto:info@thewebaddicts.com" className="hover:underline">info@thewebaddicts.com</a>
          </p>
          <p className="text-lg mb-4 mr-7 font-bold border-t-8 border-gray-500 pt-4 w-60">
            <a href="tel:+96170444309" className="hover:underline">+961 70 444 309</a>
            <br />
            <a href="tel:+9611485075" className="hover:underline">+961 1 485 075</a>
          </p>
          <p className="text-lg mb-4 mr-7 font-bold border-t-8 border-gray-500 pt-4 w-60">
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
      </div>
    </div>
  );
};

export default Menu;
