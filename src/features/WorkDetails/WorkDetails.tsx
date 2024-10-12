// WorkDetails.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx'; // Import Menu
import Footer from '../../components/atoms/Footer.tsx'; // Import Footer
import Page1 from '../DetailPages/Page1.tsx'; // Import the Page1 component
import Page2 from '../DetailPages/Page2.tsx'; // Import the Page2 component
import Page3 from '../DetailPages/Page3.tsx'; // Import the Page2 component
import Page4 from '../DetailPages/Page4.tsx'; // Import the Page2 component
import Page5 from '../DetailPages/Page5.tsx'; // Import the Page2 component
import Page6 from '../DetailPages/Page6.tsx'; // Import the Page2 component
import './WorkDetails.css'; // Import the CSS file for styles
import AllWork from '../AllWork/AllWork.tsx';

const WorkDetails: React.FC = () => {
  const title = useParams<{ title: string }>().title || 'DefaultTitle';
  const navigate = useNavigate();

  
  // Sample data for Patchi
  const workDetails = {
    Patchi: {
      title: 'Patchi',
      date: '2021',
      category1: 'Corporate / E-commerce / Mobile App',
      category: 'Luxury chocolate',
      website: 'https://patchi.com',
      logo: 'https://thewebaddicts.com/storage/data/projects_logos/1.png',
      services: [
        'UI / UX',
        'E-Commerce',
        'Loyalty program',
        'Online Payment',
        'Front-end Development',
        'Back-end Development',
        'Blog',
        'Multi-store',
        'Multi-language',
      ],
      image: 'https://thewebaddicts.com/storage/data/projects_banners/1.jpg',
    },

  };

  const details = workDetails[title] || {};

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToPage1 = () => {
    const page1Element = document.getElementById('page1');
    if (page1Element) {
      page1Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPage2 = () => {
    const page2Element = document.getElementById('page2');
    if (page2Element) {
      page2Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Automatically scroll to Page1 when the component mounts
  useEffect(() => {
    if (title === 'Patchi') {
      scrollToPage1();
    }
  }, [title]);

  return (
    <section className="relative min-h-screen bg-white text-black overflow-auto project-details">
      <div className="flex justify-between p-5">
        <div className="logo text-2xl">
          <img src="logooo.jpg" alt="Company Logo" className="h-20 w-auto" />
        </div>
        <button
          className="menu-icon text-3xl cursor-pointer focus:outline-none mb-1"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/2 pr-6 mt-4">
          {details.logo && (
            <div className="mb-2">
              <img
                src={details.logo}
                alt={`${details.title} Logo`}
                className="h-40 w-auto"
              />
            </div>
          )}
          <p className="text-lg mb-1">{details.category1}</p>
          <h1 className="text-4xl font-bold mb-2">{details.title}</h1>
          <p className="text-lg mb-1"><strong>Date:</strong> {details.date}</p>
          <p className="text-lg mb-1"><strong>Category:</strong> {details.category}</p>
          <p className="text-lg mb-1">
            <strong>Website URL:</strong>{' '}
            <a href={details.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {details.website}
            </a>
          </p>
          <p className="text-lg mb-1"><strong>Services:</strong></p>
          <ul className="list-disc pl-5">
            {details.services?.map((service, index) => (
              <li key={index} className="mb-1">{service}</li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-end relative mt-4 asp">
          <div className="mask">
            <img
              src={details.image}
              alt={details.title}
              className="object-cover"
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Page Components */}
      <Page1 title={title} />
      <Page2 title={title} />
      <Page3 title={title} />
      <Page4 title={title} />
      <Page5 title={title} />
      <Page6 title={title} />
      {/* Custom Cursor */}
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Menu Overlay */}
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
      <h1 className="text-4xl font-bold mb-2">Our Work</h1>
      <AllWork selectedCategory={''} />
      
      
    </section>
    
  );
};

export default WorkDetails;
