import React from 'react';

const Page4: React.FC = () => {
  // Directly setting the image URL
  const image = 'https://thewebaddicts.com/storage/data/services_images/4.jpg'; // Replace with your actual image link

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
        <h1 className="text-3xl font-bold mb-4">4 . Marketing & Seo</h1> {/* Replace with your actual title */}
        <p className="text-lg text-justify"> {/* Added text-justify class */}
        Having the optimal website is ineffective if it isn't getting noticed. Our experienced team dedicates themselves to devising strategies to help companies with search engine optimization to make them stand out on the digital landscape. From professional audits to identify and rectify problems with your site to designing and developing content marketing or PPC advertising campaigns to boost the appeal of your website and brand, we've got you covered.
        </p>
      </div>
    </section>
  );
};

export default Page4;
