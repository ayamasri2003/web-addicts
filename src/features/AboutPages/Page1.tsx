import React from 'react';

interface Page1Props {
  title: string;
}

const Page1: React.FC<Page1Props> = () => {
  return (
    <div id="page1" className="w-screen h-screen flex items-center justify-center">
      <img
        src="webaddicts.png"
        alt="Web Addicts"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Page1;
