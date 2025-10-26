import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Prevent fetching if no ID
    if (!resId) return;

    const getRestaurantInfo = async () => {
      try {
        const res = await fetch(
          `https://fakerestaurantapi.runasp.net/api/Restaurant/${resId}`
        );
        const json = await res.json();
        setRestaurant(json);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      }
    };

    getRestaurantInfo();
  }, [resId]);

  return restaurant;
};

export default useRestaurant;
