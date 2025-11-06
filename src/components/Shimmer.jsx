import React from "react";

const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Shimmer */}
        <div className="mb-12 text-center">
          <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl w-64 mx-auto mb-4 animate-shimmer"></div>
          <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg w-96 mx-auto animate-shimmer"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image shimmer */}
                <div className="relative h-48 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer">
                  {/* Badge shimmer */}
                  <div className="absolute top-3 right-3 h-8 w-16 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full animate-shimmer"></div>
                </div>

                {/* Content shimmer */}
                <div className="p-5">
                  {/* Title */}
                  <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg w-3/4 mb-3 animate-shimmer"></div>

                  {/* Cuisine type */}
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-md w-1/2 mb-4 animate-shimmer"></div>

                  {/* Info row */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full animate-shimmer"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-16 animate-shimmer"></div>
                    </div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Search Bar Shimmer (optional) */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="h-14 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl animate-shimmer"></div>
        </div>
      </div>

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
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Shimmer;
