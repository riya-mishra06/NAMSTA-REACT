import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurant = useRestaurant(id);

  const handleAddItems = () => {
    dispatch(addItems("grapes"));
    console.log("Added item: grapes");
  };

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Loading restaurant details...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Side-by-Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[600px] object-cover"
                  src={
                    restaurant.imageUrl ||
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=880"
                  }
                  alt={restaurant.restaurantName}
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      ⭐ {restaurant.rating || "4.5"}
                    </span>
                  </div>
                </div>

                {/* Parking Badge */}
                {restaurant.parkingLot && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                      🅿 Parking
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col justify-center">
            
            {/* Restaurant Name */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-4">
                {restaurant.restaurantName}
              </h1>
              <div className="h-2 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>

            {/* Details Grid */}
            <div className="space-y-6 mb-10">
              
              {/* Type */}
              <div className="group">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Cuisine
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-gray-300 dark:border-gray-700"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {restaurant.type}
                </p>
              </div>

              {/* Address */}
              <div className="group">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Location
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-gray-300 dark:border-gray-700"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {restaurant.address}
                </p>
              </div>

              {/* Parking */}
              <div className="group">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Parking
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-gray-300 dark:border-gray-700"></div>
                </div>
                <p className={`text-2xl font-bold mt-2 ${
                  restaurant.parkingLot 
                    ? "text-green-600 dark:text-green-400" 
                    : "text-red-600 dark:text-red-400"
                }`}>
                  {restaurant.parkingLot ? "Available" : "Not Available"}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddItems}
                className="flex-1 px-8 py-5 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold text-lg rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-xl"
              >
                Add Item
              </button>
              <button className="px-8 py-5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold text-lg rounded-2xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200">
                View Menu
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-10 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 dark:text-white">30-40</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 dark:text-white">$5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 dark:text-white">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;