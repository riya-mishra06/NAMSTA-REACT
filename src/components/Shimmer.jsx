import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {Array(10).fill("").map((_, index) => (
        <div
          key={index}
          className="w-64 h-72 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
          animate-[shimmer_1.5s_infinite] relative overflow-hidden shadow-md"
        >
          <div className="h-40 bg-gray-300 rounded-t-lg"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}

      {/* Shimmer animation style */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -500px 0;
            }
            100% {
              background-position: 500px 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shimmer;
