import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu.tsx';

const Page3: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

  const handleMenuClick = () => {
    setIsMenuOpen(true); // Open the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex justify-center items-center p-10 overflow-auto"> 
      {/* Flex layout applied to center content */}
      
      {/* Main Content: Two columns */}
      <div className="main-content grid grid-cols-1 md:grid-cols-2 gap-10 items-start"> {/* Changed items-center to items-start for left alignment */}
        
        {/* Left Column: Strategy text */}
        <div className="strategy-text flex flex-col justify-center items-start h-full mt-10"> {/* Changed items-center to items-start */}
          <h2 className="text-2xl  mb-4 ">Strategy</h2>
          <p className="text-3xl font-bold leading-relaxed">
            Our team follows a specific process to reach the client’s vision.
          </p>
        </div>

        {/* Right Column: Process steps */}
        <div className="process-steps space-y-8">
          
          {/* Step 1 */}
          <div>
            <h3 className="text-4xl font-bold mb-2">01</h3>
            <h4 className="text-2xl font-semibold mb-2">Discover</h4>
            <p className="leading-relaxed">
              Our goal is to fully understand each client’s business and vision. We look to completely understand the target audience of the project and reflect the client’s perspective in a friendly user interface design and an easy user experience.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-4xl font-bold mb-2">02</h3>
            <h4 className="text-2xl font-semibold mb-2">Concept Design</h4>
            <p className="leading-relaxed">
              Our design team kicks off the client’s project by conducting visual research based on benchmarks (website examples) that match the client’s perspective on the mood and feel of their project, in order to design the website’s homepage.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-4xl font-bold mb-2">03</h3>
            <h4 className="text-2xl font-semibold mb-2">Full Storyboard</h4>
            <p className="leading-relaxed">
              After receiving approval on the homepage concept design, our design team starts with the full storyboard design (all the pages) before kicking off the development of the website.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-4xl font-bold mb-2">04</h3>
            <h4 className="text-2xl font-semibold mb-2">Development</h4>
            <p className="leading-relaxed">
              The project is sent to the development team after approval on the full storyboard to build the front-end and back-end of the project.
            </p>
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="text-4xl font-bold mb-2">05</h3>
            <h4 className="text-2xl font-semibold mb-2">Testing</h4>
            <p className="leading-relaxed">
              The last step is testing the website before launching it online.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div id="invertedcursor" className="absolute w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"></div>

      {/* Menu Overlay */}
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />} {/* Render Menu when it's open */}
    </section>
  );
};

export default Page3;
