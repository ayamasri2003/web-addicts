import React from 'react';

const Page2: React.FC = () => {
  // Directly setting the image URL
  const image = 'https://thewebaddicts.com/storage/data/services_images/3.jpg'; // Replace with your actual image link

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
        <h1 className="text-3xl font-bold mb-4">3 . Branding & Corporate Identity</h1> {/* Replace with your actual title */}
        <p className="text-lg text-justify"> {/* Added text-justify class */}
        The web development and design teams at The Web Addicts work hand in hand with all prospective clients to assess the impact of their brands and find creative digital solutions to boost their presence in the target market. Our diverse and experienced in-house team then works on the evolution of old or the creation of new compelling logos, brand guidelines, branded templates or print collateral to enhance the appeal of the brand on the digital landscape and beyond.
        </p>
      </div>
    </section>
  );
};

export default Page2;
