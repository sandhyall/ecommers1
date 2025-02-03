import { Button } from '@nextui-org/react';
import React from 'react';

const Flat = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://i.pinimg.com/736x/c3/02/77/c3027708e1876b39f4c8c2e4b06f2db9.jpg")',
    backgroundSize: 'cover', // Ensure the image covers the left side
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '200px', // Adjust height of the container to display the image well
    width: '30%', // Image takes up half the container (left side)
  };

  return (
    <div className="flex items-center justify-between px-6 bg-orange-200">
      {/* Left side with image */}
      <div style={backgroundStyle} className="flex-shrink-0">
        {/* Left image container */}
      </div>

      {/* Right side with text and button */}
      <div className="flex flex-col justify-center items-start text-center text-orange-400 px-6 w-1/2 bg-orange-200">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-orange-500 ">FLAT 50% OFF</h1>
          <p className="text-lg">12 HOURS 20 MINS</p>
        </div>
        <Button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Explore Collection
        </Button>
      </div>
    </div>
  );
}

export default Flat;
