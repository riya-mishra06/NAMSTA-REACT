import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-72 h-[350px] rounded-xl border border-gray-200 shadow-md overflow-hidden bg-white"
          >
            {/* Image shimmer */}
            <div className="h-48 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>

            {/* Text content shimmer */}
            <div className="p-4">
              {/* Title */}
              <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 mb-3 animate-shimmer"></div>

              {/* Cuisine type */}
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2 mb-3 animate-shimmer"></div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-shimmer"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-12 animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}

      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-shimmer {
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Shimmer;
