import React from 'react';
import { useParams } from 'react-router-dom';

const Page5: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  // Example image URL based on title
  const imageUrl =
    title === 'Patchi'
      ? 'https://thewebaddicts.com/storage/data/paragraphs_images/35.opt.jpg?v=174' // Replace with actual image URL
      : ''; // Add more image URLs for different titles if needed

  const text =
    title === 'Patchi'
      ? `A unique experience with our Content Management System
        The Content Management System - CMS has many notable features that make it unique such as:

        • Centralized order fulfillment: Through this section, the Patchi team is able to view the orders organized, manage the fulfillment status of each order and change the payment status of each order.
        • Product & Inventory Management: The Web Addicts' CMS offers the client a simplified way to add products to the website with all data related to media files and galleries, variations (for example size and color), categorization, and collections creation.
        • Customers Management: Patchi team will also be able to view all their customers and manage their subscriptions.`
          .replace(/\n\s+/g, '\n') // Removes extra spaces after newlines
      : ''; // Add more texts for different titles if needed

  return (
    <div
      id="page2"
      className="flex items-center justify-center bg-white text-black min-h-screen"
    >
      <div className="flex flex-row items-center w-full max-w-screen">
        {/* Image on the left */}
        {imageUrl && (
          <div className="rounded-lg overflow-visible shadow-lg w-1/2 flex flex-col items-center"> {/* Ensure overflow-visible */}
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-[400px]" // Ensuring image doesn't collapse
            />
            
            {/* Button below the image */}
            <button className="relative w-[160px] h-[50px] mt-5 bg-transparent border-none rounded-full transition duration-300 ease-in-out opacity-80 hover:opacity-100 z-20 group">
              {/* Text span centered vertically and horizontally */}
              <span className="relative flex items-center justify-center h-full text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-translate-y-2 z-20">
                Get to know us →
              </span>
              
              {/* Background div that expands on hover */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-[50px] h-[50px] bg-black bg-opacity-40 rounded-full transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full group-hover:bg-black z-10"></div>
            </button>
          </div>
        )}

        {/* Text on the right */}
        <div className="w-1/2 text-lg whitespace-pre-wrap italic text-left px-8">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Page5;
