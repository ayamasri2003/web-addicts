import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  image: string;
  title: string;
  description: string;
  categories: string[];
}

const Card: React.FC<CardProps> = ({ image, title, description, categories }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the WorkDetails page with the title as a route parameter
    navigate(`/work-details/${encodeURIComponent(title)}`);
  };

  return (
    <div
      className="card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
      onClick={handleCardClick} // Added click handler
    >
      <div className="flex-grow">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">
          {categories.join('/ ')}
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mt-2 text-gray-700">{description}</p>
        <button className="mt-4 text-blue-500 hover:underline">Learn More</button>
      </div>
    </div>
  );
};

export default Card;
