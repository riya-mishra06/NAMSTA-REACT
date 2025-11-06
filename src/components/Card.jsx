import React from 'react';

const Card = ({ img, name, cusines, rating }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      
      {/* Image Section with Overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={img}
          alt={name}
          loading="lazy"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
          <span className="text-yellow-500 text-sm">⭐</span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {rating}
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        {/* Restaurant Name */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {name}
        </h3>

        {/* Cuisine Type */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            🍽 {cusines}
          </span>
        </div>

        {/* Additional Info Row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            30-40 min
          </span>
          
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Free delivery
          </span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-blue-500 dark:ring-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default Card;