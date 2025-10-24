import React, { useEffect, useState } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom"; // ✅ Import Link





const Hero = () => {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ new loading state

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const res = await fetch('https://fakerestaurantapi.runasp.net/api/Restaurant');
      const json = await res.json();
      console.log('Fetched restaurants:', json);
      setRestaurants(json);
      setAllRestaurants(json);
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
    } finally {
      setIsLoading(false); // ✅ stop shimmer after fetching
    }
  }

  function filterList(searchText, restaurantList) {
    return restaurantList.filter((restaurant) =>
      (restaurant.restaurantName || '')
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }

  // ✅ Show shimmer while loading
  if (isLoading) return <Shimmer />;

  // ✅ If data loaded but no matches found
  if (!isLoading && restaurants.length === 0)
    return <h1 className="text-center text-2xl font-semibold mt-10 text-gray-600">
      No Restaurant matches your filter 😔
    </h1>;

  // ✅ Normal UI (data loaded)
  return (
    <>
      {/* Search Bar */}
      <div className="flex items-center justify-center my-4">
        <input
          type="text"
          className="border p-2 rounded w-64 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search Restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 p-2 text-white ml-2 rounded hover:bg-blue-600 transition"
          onClick={() => {
            const filtered = filterList(search, allRestaurants);
            setRestaurants(filtered);
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant Cards */}
    <div className="flex flex-wrap justify-center gap-6 p-4">
  {restaurants.map((item) => (
    <Link
      key={item.restaurantID}
      to={`/restaurant/${item.restaurantID}`} // ✅ Navigate to RestaurantMenu
      className="transition-transform hover:scale-105"
    >
      <Card
        img={
          item.imageUrl ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=880"
        }
        name={item.restaurantName || "Unnamed Restaurant"}
        cusines={item.type || "N/A"}
        rating={item.rating != null ? item.rating.toString() : "N/A"}
      />
    </Link>
  ))}
</div>
    </>
  );
};

export default Hero;


// Expression & statement
// i heard we can run js in react any js but today i learn something new