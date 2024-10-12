import React from 'react';

const Page7: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-white text-black min-h-screen">
      <div className="flex flex-row items-center w-full max-w-screen">
        {/* Video/Image on the left */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://thewebaddicts.com/storage/data/paragraphs_images/3.opt.png"
            alt="Loyalty Program"
            className="object-cover w-full h-auto max-h-[500px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text on the right */}
        <div className="w-1/2 text-lg text-left px-8">
          <h2 className="text-2xl font-bold mb-4">Our Loyalty Program Solution</h2>
          <p className="text-gray-700 mb-2">
            A customer loyalty program is a marketing strategy that rewards loyal customers who frequently engage with a brand.
          </p>
          <p className="text-gray-700 mb-2">
            Customer loyalty programs are designed to incentivize repeat purchases by providing its members discounts, unique offers, VIP events, and more.
          </p>
          <p className="text-gray-700">
            Loyalty programs come in many forms, ranging from simple stamp cards to sophisticated, point-based reward systems, but all are geared toward bringing customers back to engage with a brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page7;
