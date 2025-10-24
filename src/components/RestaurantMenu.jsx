import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  async function getRestaurantInfo() {
    try {
      const res = await fetch(
        `https://fakerestaurantapi.runasp.net/api/Restaurant/${id}`
      );
      const json = await res.json();
      setRestaurant(json);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  }

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
    </div>
  );
};

export default RestaurantMenu;
