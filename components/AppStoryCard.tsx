import React from 'react';

const AppStoryCard = ({ image, alt, isFirst, userName }:any) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-20 h-20 mx-2">
      <div className="relative">
        <img
          src={image}
          alt={alt}
          className="w-16 h-16 rounded-full border-2 border-red-500 object-cover"
        />
        {isFirst && (
          <div className="absolute left-0 bottom-0 bg-blue-500 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </div>
        )}
      </div>
      <span className="mt-1 text-xs">{userName}</span>
    </div>
  );
};

export default AppStoryCard;
