import React from 'react';
import { useParams } from 'react-router-dom';

const Page6: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  // Example image URL based on title
  const imageUrl =
    title === 'Patchi'
      ? 'https://thewebaddicts.com/storage/data/paragraphs_images/37.jpg?v=175' // Replace with actual image URL
      : ''; // Add more image URLs for different titles if needed

  // Example text based on title
  const text =
    title === 'Patchi'
    ? `Administrators, Analytics and Sales Boosters
    In parallel, the Content Management System - CMS allows the client to create multiple back-end administrators and grants them permission to manage all stores or specific stores.

    In addition, it offers a sales boosters feature like coupon codes that can be created with time, validity, and usage mode for each, and deals which is a tool that allows the Patchi team to propose bundles to purchase (for example: but X and get Y for free).

    Lastly, the CMS gives the client's team access to important Analytics through reports such as Sales over time, Sales by product, Sales by category, Returning customers, and Voucher usage with the ability to add any custom report that your business might require.`.replace(/\n\s+/g, '\n') // Removes extra spaces after newlines
      : ''; // Add more texts for different titles if needed

  return (
    <div
      id="page3"
      className="flex items-center justify-center bg-white text-black min-h-screen"
    >
      <div className="flex flex-row items-center w-full max-w-screen">
        {/* Text on the left */}
        <div className="w-1/2 text-lg whitespace-pre-wrap italic text-left px-8">
          {text}
        </div>

        {/* Image on the right */}
        {imageUrl && (
          <div className="rounded-lg overflow-hidden shadow-lg w-1/2">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-56 md:h-96" // Adjusted to match video dimensions
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page6;
