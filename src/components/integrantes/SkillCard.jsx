import React from 'react';

function SkillCard({ title, description, icon }) {
  return (
    <>
      <div className="space-y-3">
        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
          {icon}
        </span>

        <h1 className="text-xl font-semibold text-gray-700">
          {title}
        </h1>

        <p className="text-gray-500 300">
          {description}
        </p>
      </div>
    </>
  );
}

export default SkillCard;
