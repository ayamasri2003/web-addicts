import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility
  const [selectedButton, setSelectedButton] = useState("ALL Work"); // State to manage the selected button

  // Function to handle button click and navigate to the contact page
  const handleContactNavigation = () => {
    navigate('/contact');
  };

  return (
    <section className="relative h-[80vh] w-full bg-black text-white flex flex-col justify-between overflow-hidden">
  
      {/* Main Content */}
      <div className="main-content flex-grow flex justify-between items-center p-5 transition-filter duration-300 w-full">
        {/* Text Section */}
        <div className="text-section w-1/2"> 
          <h2 style={{ fontSize: '22px', fontFamily: 'Proxima Nova, sans-serif', fontWeight: 'bold', marginBottom: '16px' }}>
            We love working alongside ambitious brands and people.<br />
            Drop us a line and tell us about your project if you’d like us<br />
            to build something great together.
          </h2>

          {/* Get to know us button */}
          <button
            className="relative w-[160px] h-[50px] bg-transparent border-none rounded-full transition duration-300 ease-in-out opacity-80 hover:opacity-100 z-10 group mt-4"
            onClick={handleContactNavigation} // Navigate to contact page on click
          >
            {/* Text span centered vertically and horizontally */}
            <span className="relative flex items-center justify-center h-full text-white transition-all duration-300 ease-in-out group-hover:text-black group-hover:-translate-y-2 z-20">
              Get to know us →
            </span>
            
            {/* Background div that expands on hover */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-[50px] h-[50px] bg-white bg-opacity-40 rounded-full transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full group-hover:bg-white z-10"></div>
          </button>
        </div>

        {/* Image Section (Placeholder for future content) */}
        <div className="image-section w-1/2 flex justify-center items-center">
          {/* Add image content here if needed */}
        </div>
      </div>

      {/* Right Contact Info */}
      <div className="contact-info text-left p-5 absolute bottom-20 right-0 mb-5 mr-5 w-auto">
        <p className="text-lg mb-4  ">
          Email Address
          <br />
          <a href="mailto:info@thewebaddicts.com" className="hover:no-underline  underline font-bold">info@thewebaddicts.com</a>
        </p>
        <p className="text-lg mb-4 ">
          Phone Number
          <br />
          <a href="tel:+96170444309" className="hover:no-underline font-bold underline ">+961 70 444 309</a>
          <br />
          <a href="tel:+9611485075" className="hover:no-underline font-bold underline">+961 1 485 075</a>
        </p>
        <p className="text-lg mb-4 ">
          Location
          <br />
          <a href="https://maps.google.com?q=Aramex Building, Mirna Chalouhi Highway, Lebanon" target="_blank" rel="noopener noreferrer" className="hover:no-underline font-bold underline">
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
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Footer Section */}
      <div className="footer w-full text-center flex justify-center items-center mt-auto pb-4 space-x-8">
        <p className="text-sm">&copy; 2024. Copyrights thewebaddicts. All rights reserved.</p>

        {/* Footer Links */}
        <div className="footer-links flex space-x-8 text-sm">
          <Link to="/privacypolicy" className="hover:underline">Privacy Policy</Link> {/* Use Link component */}
          <Link to="/termsconditions" className="hover:underline">Terms and Conditions</Link>
          <Link to="/cookiespolicies" className="hover:underline">Cookie Policies</Link>
        </div>
      </div>

    </section>
  );
};

export default Footer;
