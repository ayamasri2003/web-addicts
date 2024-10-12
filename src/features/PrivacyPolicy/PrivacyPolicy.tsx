import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';
import Footer from '../../components/atoms/Footer.tsx';

const PrivacyPolicy: React.FC = () => {
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
          <h2 className="text-6xl font-bold mb-10">Privacy Policy</h2>
          
          <h3 className="text-1xl font mb-4">Paragraph 1</h3>
          <p className="text-1xl mb-6"> {/* Add margin for spacing */}
            Any information you provide to us will either be emailed directly to us or may be stored on a secure server located near Dublin within the Republic of Ireland. We use a trusted third party website and hosting provider (Cleverbox) to facilitate the running and management of this website. Cleverbox meet high data protection and security standards and are bound by contract to keep any information they process on our behalf confidential. Any data that may be collected through this website that Cleverbox process, is kept secure and only processed in the manner we instruct them to. Cleverbox cannot access, provide, rectify or delete any data that they store on our behalf without permission.
          </p>

          <p className="text-1xl mb-6"> {/* Add margin for spacing */}
            We do not rent, sell or share personal information about you with other people or non-affiliated companies. [Check this statement is in accordance with your internal data processing activities and outline any other storage of information inline with your internal data policy (ie. Do you have a database of personal data stored on third party platforms such as MailChimp?)]
          </p>

          <p className="text-1xl mb-6"> {/* Add margin for spacing */}
            We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities, unless required by law or other regulations.
          </p>

          <p className="text-1xl mb-6"> {/* Add margin for spacing */}
            Users can delete all their data on the app by accessing their account settings and choosing the option to delete their account, which will result in the permanent removal of all stored data.
          </p>

          <p className="text-1xl mb-6"> {/* Add margin for spacing */}
            Regarding the processing of User Data, we process this information solely for the purpose of creating and managing user accounts on our platform. This includes storing addresses and purchase histories of users for ecommerce transactions.
          </p>
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

export default PrivacyPolicy;
