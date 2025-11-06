import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const res = await fetch("https://fakerestaurantapi.runasp.net/api/Restaurant");
      const json = await res.json();
      console.log("Fetched restaurants:", json);
      setRestaurants(json);
      setAllRestaurants(json);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function filterList(searchText, restaurantList) {
    return restaurantList.filter((restaurant) =>
      (restaurant.restaurantName || "")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }

  const isOnline = useOnline();

  // ✅ Offline UI
  if (!isOnline) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md">
          <div className="text-6xl mb-4">📡</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            You're Offline
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please check your internet connection and try again
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  // ✅ Shimmer while loading
  if (isLoading) return <Shimmer />;

  // ✅ No results UI
  if (!isLoading && restaurants.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center p-8">
          <div className="text-7xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            No Restaurants Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your search or clear the filter
          </p>
          <button
            onClick={() => {
              setSearch("");
              setRestaurants(allRestaurants);
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Clear Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header + Search */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Find your favorite restaurants and order delicious meals
          </p>

          <div className="flex items-center justify-center gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-200 shadow-sm"
                placeholder="Search restaurants..."
                value={search}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearch(value);
                  setRestaurants(filterList(value, allRestaurants));
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    const filtered = filterList(search, allRestaurants);
                    setRestaurants(filtered);
                  }
                }}
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              onClick={() => {
                const filtered = filterList(search, allRestaurants);
                setRestaurants(filtered);
              }}
            >
              Search
            </button>

            {search && (
              <button
                className="px-6 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium text-lg rounded-xl transition-all duration-200"
                onClick={() => {
                  setSearch("");
                  setRestaurants(allRestaurants);
                }}
              >
                Clear
              </button>
            )}
          </div>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            {restaurants.length === allRestaurants.length ? (
              <span>
                Showing all{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  {restaurants.length}
                </strong>{" "}
                restaurants
              </span>
            ) : (
              <span>
                Found{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  {restaurants.length}
                </strong>{" "}
                of {allRestaurants.length} restaurants
              </span>
            )}
          </p>
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((item, index) => (
            <Link
              key={item.restaurantID || index}
              to={`/restaurant/${item.restaurantID}`}
              className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
      </div>
    </div>
  );
};

export default Hero;
