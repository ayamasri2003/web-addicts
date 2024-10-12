import React from 'react';
import { useParams } from 'react-router-dom';

const Page3: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  // Example image URL based on title
  const imageUrl =
    title === 'Patchi'
      ? 'https://thewebaddicts.com/storage/data/paragraphs_images/2.jpg?v=173' // Replace with actual image URL
      : ''; // Add more image URLs for different titles if needed

  // Example text based on title
  const text =
    title === 'Patchi'
      ? `Easy-to-use platform with a clear and concise user experience
        Simple yet elegant, the Patchi website is characterized by a set of remarkable features such as:

        • Multi-store / Multi-language / Multi-currency website, with each store having its own product collections and respective currency and language.
        • A typo-tolerant live search that allows users to get results while typing and covers 32 languages.
        • Create your own box tool, which allows the user to design his own unique box filled with his favorite Patchi chocolates.`.replace(/\n\s+/g, '\n') // Removes extra spaces after newlines
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

export default Page3;
