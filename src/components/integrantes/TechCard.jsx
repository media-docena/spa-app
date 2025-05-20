import React from 'react';

function TechCard({ image, name }) {
  return (
    <div>
      <div className="flex flex-col items-center p-8">
        <img
          className="w-22 h-22 rounded-full ring-gray-300"
          src={image}
          alt={`${name} logo`}
        />
        <h1 className="w-30 h-7 mx-auto mt-6 rounded-lg text-center bg-blue-100/60 text-blue-400">{name}</h1>
      </div>
    </div>
  );
}

export default TechCard;
