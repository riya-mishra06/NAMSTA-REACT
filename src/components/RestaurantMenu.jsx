import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Custom hook that fetches restaurant data
  const restaurant = useRestaurant(id);

const handleAddItems = () => {
  dispatch(addItems("grapes"));
  console.log("Added item: grapes");
};


  if (!restaurant) {
    return <h2 className="text-center mt-10">Loading restaurant details...</h2>;
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{restaurant.restaurantName}</h1>

      <img
        className="w-full max-w-md rounded-lg shadow-md mb-6"
        src={
          restaurant.imageUrl ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=880"
        }
        alt={restaurant.restaurantName}
      />

      <p className="text-gray-700">Type: {restaurant.type}</p>
      <p className="text-gray-700">Address: {restaurant.address}</p>
      <p className="text-gray-700">
        Parking Available: {restaurant.parkingLot ? "Yes" : "No"}
      </p>

      <button onClick={handleAddItems} className="p-2 mt-4 bg-green-300 rounded hover:bg-green-400 transition">
        Add Item
      </button>
    </div>
  );
};

export default RestaurantMenu;
