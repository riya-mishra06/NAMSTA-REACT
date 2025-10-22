import React, { useEffect, useState } from 'react';
import Card from './Card';

const Hero = () => {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

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
      console.error("Failed to fetch restaurants:", error);
    }
  }

  function filterList(searchText, restaurantList) {
    return restaurantList.filter((restaurant) =>
      (restaurant.restaurantName || '')
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }

  return (
    <>
      <div className='flex items-center m-2'>
        <div className='search-container'>
          <input
            type="text"
            className='search-input border p-2 rounded'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          className='bg-blue-500 p-2 text-white ml-2 rounded'
          onClick={() => {
            const filtered = filterList(search, allRestaurants);
            setRestaurants(filtered);
          }}
        >
          Search
        </button>
      </div>

      <div className='flex flex-wrap'>
        {restaurants.length > 0 ? (
          restaurants.map((item, index) => (
            <Card
              key={index}
              // Use the correct image field if available, else placeholder
              img={item.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"}
              name={item.restaurantName || 'Unnamed Restaurant'}
              cusines={item.type || 'N/A'}
              rating={item.rating != null ? item.rating.toString() : 'N/A'}
            />
          ))
        ) : (
          <p className='text-center text-gray-500 w-full'>No restaurants found.</p>
        )}
      </div>
    </>
  );
};

export default Hero;
