import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';
import Page1 from '../ServicePage/Page1.tsx'; // Import Page1 component
import Page2 from '../ServicePage/Page2.tsx'; // Import Page1 component
import Page3 from '../ServicePage/Page3.tsx'; // Import Page1 component
import Page4 from '../ServicePage/Page4.tsx'; // Import Page1 component
import Page6 from '../ServicePage/Page6.tsx'; // Import Page1 component
import Page7 from '../ServicePage/Page7.tsx'; // Import Page1 component
import Footer from '../../components/atoms/Footer.tsx';
const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility
  const [page1Visible, setPage1Visible] = useState(false); // State to manage Page1 visibility

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  // Effect to handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      const page1Element = document.getElementById('page1');
      if (page1Element) {
        const page1Offset = page1Element.getBoundingClientRect().top; // Get the top offset of Page1
        if (page1Offset <= window.innerHeight) {
          setPage1Visible(true); // Show Page1 when it is in view
        } else {
          setPage1Visible(false); // Hide Page1 otherwise
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Services Page Section */}
      <section className="relative h-[70vh] bg-white text-black overflow-hidden">
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
            <h1 className="text-2xl mt-7 mb-[30px] leading-[1.2]">OUR SERVICES</h1>
            <h2 className="text-5xl font-bold mb-4">
              We offer multiple services<br />
              & ready solutions
            </h2>
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

      {/* Page Sections */}
      <section
        id="page1"
        className={`transition-opacity duration-1000 ease-in-out ${page1Visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: '100vh' }} // Full height of the viewport
      >
        <Page1  />
        <Page2  />
        <Page3  />
        <Page4  />
        <Page6 />
        <Page7  />
        <Footer /> {/* Add Footer component */}
      </section>

    </div>
  );
};

export default ServicesPage;
