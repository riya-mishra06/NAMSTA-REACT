import React from 'react';

const Card = ({ img, name, cusines, rating }) => {
  return (
    <div className="border border-gray-300 rounded-md p-3 m-3 w-[22vw] min-w-[250px] bg-white shadow-sm hover:shadow-lg transition">
      <div className="flex flex-col items-start h-full">
        {/* Image Section */}
        <div className="h-[40vh] w-full overflow-hidden rounded-md mb-2">
          <img
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            src={img}
            alt={name}
          />
        </div>

        {/* Details Section */}
        <div className="pl-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </h3>
          <h4 className="text-gray-600 text-sm mb-1">
            {cusines}
          </h4>
          <h4 className="text-yellow-500 font-medium">
            ⭐ {rating}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
