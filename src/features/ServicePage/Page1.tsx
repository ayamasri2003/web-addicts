import React from 'react';

const Page1: React.FC = () => {
  // Directly setting the image URL
  const image = 'https://thewebaddicts.com/storage/data/services_images/1.jpg'; // Replace with your actual image link

  return (
    <section className="flex min-h-screen bg-black">
      {/* Left Side: Image */}
      <div className="flex justify-center items-center flex-grow mr-2"> {/* Adjusted margin-right */}
        <img
          src={image}
          alt="Description of the image"
          className="w-1/2 h-auto object-cover" // Adjust the width of the image
        />
      </div>

      {/* Right Side: Text */}
      <div className="flex flex-col justify-center p-10 text-white max-w-md mr-2"> {/* Added margin-right */}
        <h1 className="text-3xl font-bold mb-4">1. Web Development</h1> {/* Replace with your actual title */}
        <p className="text-lg text-justify"> {/* Added text-justify class */}
          What’s the difference between a nice looking website and a great user experience? More often than not it’s in the subtle ways that a visitor moves about and interacts with a website. Our Front End developers live and breathe the code and development strategies that help make websites engaging and a joy to use. We design a website from the ground up to consider how a site may progressively enhance depending on the size of screen it is being viewed on. This responsive design means that the website can adapt to a variety of screen sizes and shapes.
        </p>
      </div>
    </section>
  );
};

export default Page1;
