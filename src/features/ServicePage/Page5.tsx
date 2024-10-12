import React, { useEffect, useState } from 'react';

const Page5: React.FC = () => {
  const [scale, setScale] = useState(1); // Initial scale

  // Effect to handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position
      const newScale = 1 + scrollPosition / 300; // Adjust scale based on scroll
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener on unmount
    };
  }, []);

  return (
    <section
      className="flex justify-center items-center min-h-screen bg-black"
      style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease-out' }} // Apply scale transform
    >
      <img src="logo.jpg" alt="Logo" className="h-40 w-auto" /> {/* Adjust the logo size as needed */}
    </section>
  );
};

export default Page5;
