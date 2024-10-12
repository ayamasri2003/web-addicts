import React from 'react';

const Page2: React.FC = () => {
  // Directly setting the image URL
  const image = 'https://thewebaddicts.com/storage/data/services_images/2.jpg'; // Replace with your actual image link

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
        <h1 className="text-3xl font-bold mb-4">2 . UI / UX Design</h1> {/* Replace with your actual title */}
        <p className="text-lg text-justify"> {/* Added text-justify class */}
        We create new and develop old designs that fascinate the target audience and maintain their interest by enabling the website content to flow in a way that is compatible with the user's specific requirements in order to enhance the company's digital appeal. We provide a number of web design and web development solutions for companies looking to boost their online presence or even enter into the digital realm for the first time.
        </p>
      </div>
    </section>
  );
};

export default Page2;
