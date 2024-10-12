// DetailPages/Page1.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
 // Create a CSS file for styles if needed
 

const Page4: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  

  // Image URL based on the title
  const imageUrl =
    title === 'Patchi'
      ? 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/0e/05/03/unique-flavours-and-individual.jpg' // Image for Patchi
      : ''; // Add more images for different titles if needed

  return (
    <div className="relative min-h-screen bg-black">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        id="invertedcursor"
        className="absolute w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 ease-in-out mix-blend-difference pointer-events-none"
      ></div>
    </div>
  );
};

export default Page4;
